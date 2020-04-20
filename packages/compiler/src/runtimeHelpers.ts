import { registerRuntimeHelpers } from '@vue/compiler-core'

export const V_MODEL = Symbol(__DEV__ ? `vModel` : ``)

export const V_ON_WITH_MODIFIERS = Symbol(__DEV__ ? `vOnModifiersGuard` : ``)
export const V_ON_WITH_KEYS = Symbol(__DEV__ ? `vOnKeysGuard` : ``)

export const V_SHOW = Symbol(__DEV__ ? `vShow` : ``)

export const TRANSITION = Symbol(__DEV__ ? `Transition` : ``)
export const TRANSITION_GROUP = Symbol(__DEV__ ? `TransitionGroup` : ``)

// todo: we might want to move built-in components into 'resolveAssets'
// as we are already treating all elements as "components" and resolving them
// to components/actual elements at runtime
export const ACTION_BAR = Symbol(__DEV__ ? `ActionBar` : ``)

registerRuntimeHelpers({
  [V_MODEL]: `vModel`,
  [V_ON_WITH_MODIFIERS]: `withModifiers`,
  [V_ON_WITH_KEYS]: `withKeys`,
  [V_SHOW]: `vShow`,
  [TRANSITION]: `Transition`,
  [TRANSITION_GROUP]: `TransitionGroup`,
  [ACTION_BAR]: `ActionBar`,
})
