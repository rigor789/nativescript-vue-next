import {
  baseParse as parse,
  transform,
  generate,
  ElementNode,
  ObjectExpression,
  CompilerOptions,
  VNodeCall,
  transformElement
} from '../../src'
import { transformModel } from '../../src/transforms/vModel'

function parseWithVModel(template: string, options: CompilerOptions = {}) {
  const ast = parse(template)

  transform(ast, {
    nodeTransforms: [transformElement],
    directiveTransforms: {
      ...options.directiveTransforms,
      model: transformModel
    },
    ...options
  })

  return ast
}

describe('compiler: transform v-model', () => {
  test('simple expression', () => {
    const root = parseWithVModel('<TextField v-model="model" />')
    const node = root.children[0] as ElementNode
    const props = ((node.codegenNode as VNodeCall).props as ObjectExpression)
      .properties

    expect(props[0]).toMatchObject({
      key: {
        content: 'modelValue',
        isStatic: true
      },
      value: {
        content: 'model',
        isStatic: false
      }
    })

    expect(props[1]).toMatchObject({
      key: {
        content: 'onUpdate:modelValue',
        isStatic: true
      },
      value: {
        children: [
          '$event => (',
          {
            content: 'model',
            isStatic: false
          },
          ' = $event)'
        ]
      }
    })

    expect(generate(root).code).toMatchSnapshot()
  })
})
