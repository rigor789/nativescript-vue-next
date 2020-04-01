import {
  transformModel as baseTransform,
  DirectiveTransform
} from '@vue/compiler-core'

export const transformModel: DirectiveTransform = (dir, node, context) => {
  // todo: remove if we don't need to alter vModel from compilerCore
  return baseTransform(dir, node, context)
}
