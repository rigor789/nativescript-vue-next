import {
  baseParse as parse,
  transform,
  PlainElementNode,
  CompilerOptions,
  transformElement
} from '@vue/compiler-core'
import { transformVText } from '../../src/transforms/vText'
import { createObjectMatcher, genFlagText } from '../testUtils'
import { PatchFlags } from '@vue/shared'
import { DOMErrorCodes } from '../../src/errors'

function transformWithVText(template: string, options: CompilerOptions = {}) {
  const ast = parse(template)
  transform(ast, {
    nodeTransforms: [transformElement],
    directiveTransforms: {
      text: transformVText
    },
    ...options
  })
  return ast
}

describe('compiler: v-text transform', () => {
  it('should convert v-text to text', () => {
    const ast = transformWithVText(`<Label v-text="test"/>`)
    expect((ast.children[0] as PlainElementNode).codegenNode).toMatchObject({
      tag: `_component_Label`,
      props: createObjectMatcher({
        text: `[test]`
      }),
      children: undefined,
      patchFlag: genFlagText(PatchFlags.PROPS),
      dynamicProps: `["text"]`
    })
  })

  it('should raise error and ignore children when v-text is present', () => {
    const onError = jest.fn()
    const ast = transformWithVText(`<Label v-text="test">hello</Label>`, {
      onError
    })
    expect(onError.mock.calls).toMatchObject([
      [{ code: DOMErrorCodes.X_V_TEXT_WITH_CHILDREN }]
    ])
    expect((ast.children[0] as PlainElementNode).codegenNode).toMatchObject({
      tag: `_component_Label`,
      props: createObjectMatcher({
        text: `[test]`
      }),
      children: undefined, // <-- children should have been removed
      patchFlag: genFlagText(PatchFlags.PROPS),
      dynamicProps: `["text"]`
    })
  })

  it('should raise error if has no expression', () => {
    const onError = jest.fn()
    transformWithVText(`<Label v-text></Label>`, {
      onError
    })
    expect(onError.mock.calls).toMatchObject([
      [{ code: DOMErrorCodes.X_V_TEXT_NO_EXPRESSION }]
    ])
  })
})
