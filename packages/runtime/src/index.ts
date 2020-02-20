import {
  createRenderer,
  RootRenderFunction,
  CreateAppFunction,
  Renderer,
  App,
} from '@vue/runtime-core'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'

const rendererOptions = {
  patchProp,
  ...nodeOps
}

// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer: Renderer

function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions))
}

// use explicit type casts here to avoid import() calls in rolled-up d.ts
export const render = ((...args) => {
  ensureRenderer().render(...args)
}) as RootRenderFunction<Node, Element>

export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)

  if (__DEV__) {
    injectNativeTagCheck(app)
  }

  const { mount } = app
  app.mount = (): any => {
    return mount(app._component)
  }

  return app
}) as CreateAppFunction<Element>

function injectNativeTagCheck(app: App) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    // todo: makeMap of built-in native tags?
    value: (tag: string) => true,
    writable: false
  })
}

// todo: runtime directive helpers
// export {
//   vModelText,
//   vModelCheckbox,
//   vModelRadio,
//   vModelSelect,
//   vModelDynamic
// } from './directives/vModel'
// export { withModifiers, withKeys } from './directives/vOn'
// export { vShow } from './directives/vShow'

// DOM-only components
// export { Transition, TransitionProps } from './components/Transition'
// export {
//   TransitionGroup,
//   TransitionGroupProps
// } from './components/TransitionGroup'

// re-export everything from core
// h, Component, reactivity API, nextTick, flags & types
export * from '@vue/runtime-core'
