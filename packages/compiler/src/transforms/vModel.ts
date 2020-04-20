import {
  DirectiveTransform,
  NodeTypes,
  transformModel as baseTransform,
} from '@vue/compiler-core'
import { V_MODEL } from '@nativescript-vue/compiler'

export const transformModel: DirectiveTransform = (dir, node, context) => {
  const baseResult = baseTransform(dir, node, context)
  baseResult.needRuntime = context.helper(V_MODEL)
  baseResult.props = baseResult.props.filter((p) => {
    if (
      p.key.type === NodeTypes.SIMPLE_EXPRESSION &&
      p.key.content === 'modelValue'
    ) {
      return false
    }
    return true
  })
  return baseResult
}
