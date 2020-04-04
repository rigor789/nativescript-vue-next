import {
  baseParse as parse,
  transform,
  CompilerOptions,
  ElementNode,
  ObjectExpression,
  VNodeCall,
  transformElement,
  transformExpression
} from '@vue/compiler-core'
import { transformOn } from '../../src/transforms/vOn'

function parseWithVOn(template: string, options: CompilerOptions = {}) {
  const ast = parse(template)
  transform(ast, {
    nodeTransforms: [transformExpression, transformElement],
    directiveTransforms: {
      on: transformOn
    },
    ...options
  })
  return {
    root: ast,
    props: (((ast.children[0] as ElementNode).codegenNode as VNodeCall)
      .props as ObjectExpression).properties
  }
}

describe('compiler: transform v-on', () => {
  it('should work w/ prefixIdentifiers: true', () => {
    const {
      props: [prop]
    } = parseWithVOn(`<Label @tap.once="test"/>`, {
      prefixIdentifiers: true
    })
    expect(prop).toMatchSnapshot()
  })
})
