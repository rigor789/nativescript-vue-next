import {
  Renderer,
  createRenderer,
  RootRenderFunction,
  CreateAppFunction,
  ComponentPublicInstance,
  VNode
} from '@vue/runtime-core'
import { Application } from '@nativescript/core'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'
import { INSVElement } from './nodes'
import './registry'

const rendererOptions = {
  patchProp,
  ...nodeOps
}

let renderer: Renderer

function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions))
}

function runApp(root: ComponentPublicInstance): ComponentPublicInstance {
  Application.run({
    create: () => {
      console.log({
        id: root.$el.nodeId,
        type: root.$el.nodeType,
        tag: root.$el.tagName
      })
      return root.$el.nativeView
    }
  })

  return root
}

export const render = ((vnode: VNode | null, container: INSVElement) => {
  ensureRenderer().render(vnode, container)
}) as RootRenderFunction<INSVElement>

export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  const { mount } = app

  app.mount = (): any => {
    return runApp(mount(nodeOps.createRoot()))
  }

  return app
}) as CreateAppFunction<INSVElement>

export * from './nodeOps'
export * from './nodes'
export * from './runtimeHelpers'
export * from './registry'
export { resolveComponent } from './resolveAssets'

// Runtime components
export { ActionBar } from './components/ActionBar'

export * from '@vue/runtime-core'
