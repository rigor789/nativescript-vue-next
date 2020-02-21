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
import { NSVElement, NSVViewNode } from './nodes'
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
      // component.$el
      return root.$el._nativeView
      // console.log(root.$el)
      //
      // const label = new Label()
      // label.text = 'Hello World'
      // label.verticalAlignment = 'middle'
      // label.textAlignment = 'center'
      // return label
    }
  })

  return root
}

export const render = ((...args) => {
  ensureRenderer().render(...args)
}) as RootRenderFunction<NSVViewNode, NSVElement>

export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  const { mount } = app

  app.mount = (): any => {
    return runApp(mount(nodeOps.createElement('ContentView')))
  }

  return app
}) as CreateAppFunction<NSVElement>

export * from './nodeOps'
export * from './runtimeHelpers'
export * from '@vue/runtime-core'
