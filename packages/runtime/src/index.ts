import {
  App,
  ComponentPublicInstance,
  CreateAppFunction,
  createRenderer,
  Renderer,
  RootRenderFunction,
  VNode,
} from '@vue/runtime-core'
import { Application } from '@nativescript/core'
import { debug } from '@nativescript-vue/shared'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'
import { INSVElement, NSVRoot } from './nodes'
import { install as NavigationPlugin } from './plugins/navigation'
import { install as ModalPlugin } from './plugins/modals'
import './registry'

export declare type NSVApp = App & {
  mount: () => ComponentPublicInstance
  unmount: () => void
  start: () => ComponentPublicInstance
}

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
  const app = ensureRenderer().createApp(...args) as NSVApp
  const { mount, unmount } = app
  const root = nodeOps.createRoot()

  app.mount = () => {
    return mount(root)
  }

  app.unmount = () => {
    return unmount(root)
  }

  app.start = () => {
    return runApp(app.mount())
  }

  // Built-in plugins
  app.use(NavigationPlugin)
  app.use(ModalPlugin)

  return app
}) as (...params: Parameters<CreateAppFunction<INSVElement>>) => NSVApp

export * from './nodeOps'
export * from './nodes'
export * from './runtimeHelpers'
export * from './registry'
export { resolveComponent } from './resolveAssets'

// Plugins
export { $navigateTo } from './plugins/navigation'
export { $showModal } from './plugins/modals'

// runtime directive helpers
export { vModel } from './directives/vModel'
export { vShow } from './directives/vShow'

// Runtime components
export { ActionBar } from './components/ActionBar'
export { ListView } from './components/ListView'
export { Tabs } from './components/Tabs'
export { BottomNavigation } from './components/BottomNavigation'

export * from '@vue/runtime-core'
