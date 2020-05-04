import {
  Renderer,
  createRenderer,
  RootRenderFunction,
  CreateAppFunction,
  ComponentPublicInstance,
  VNode,
} from '@vue/runtime-core'
import { Application } from '@nativescript/core'
import { debug } from '@nativescript-vue/shared'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'
import { INSVElement, NSVRoot } from './nodes'
import { install as NavigationPlugin } from './plugins/navigation'
import './registry'

const rendererOptions = {
  patchProp,
  ...nodeOps,
}

let renderer: Renderer

function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions))
}

function runApp(root: ComponentPublicInstance): ComponentPublicInstance {
  Application.run({
    create: () => {
      debug(
        `Root Node: ${JSON.stringify({
          id: root.$el.nodeId,
          type: root.$el.nodeType,
          tag: root.$el.tagName,
        })}`
      )
      return root.$el.nativeView
    },
  })

  return root
}

export const render = ((
  vnode: VNode | null,
  container: INSVElement | NSVRoot
) => {
  ensureRenderer().render(vnode, container)
}) as RootRenderFunction<INSVElement | NSVRoot>

export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  const { mount } = app

  app.mount = (): any => {
    return runApp(mount(nodeOps.createRoot()))
  }

  // Built-in plugins
  app.use(NavigationPlugin)

  return app
}) as CreateAppFunction<INSVElement>

export * from './nodeOps'
export * from './nodes'
export * from './runtimeHelpers'
export * from './registry'
export { resolveComponent } from './resolveAssets'

// Plugins
export { $navigateTo } from './plugins/navigation'

// runtime directive helpers
export { vModel } from './directives/vModel'
export { vShow } from './directives/vShow'
export { ListView } from './components/ListView'

// Runtime components
export { ActionBar } from './components/ActionBar'

export * from '@vue/runtime-core'

// TODO: remove the following export sentence when
// https://github.com/vuejs/vue-next/issues/1109 was fixed
export {
  // @ts-ignore
  registerRuntimeCompiler,
} from '@vue/runtime-core'
