import {
  Renderer,
  createRenderer,
  RootRenderFunction,
  CreateAppFunction,
  ComponentPublicInstance
} from '@vue/runtime-core'
import { run } from '@nativescript/core/application'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'
import { INSVElement, INSVNode } from './nodes'
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
  console.log('->runApp')
  run({
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

export const render = ((...args) => {
  ensureRenderer().render(...args)
}) as RootRenderFunction<INSVNode, INSVElement>

export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  const { mount } = app

  app.mount = (): any => {
    return runApp(mount(nodeOps.createRoot()))
  }

  return app
}) as CreateAppFunction<INSVElement>

export * from './nodeOps'
export * from './runtimeHelpers'

// Runtime components
export { ActionBar } from './components/ActionBar'

export * from '@vue/runtime-core'
