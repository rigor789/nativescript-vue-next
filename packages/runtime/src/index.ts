import {
    Renderer,
    createRenderer,
    RootRenderFunction,
    CreateAppFunction
} from '@vue/runtime-core'
import {nodeOps, TestNode, TestElement} from './nodeOps'
import {patchProp} from './patchProp'

const rendererOptions = {
    patchProp,
    ...nodeOps
}

let renderer: Renderer

function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions))
}

export const render = ((...args) => {
    ensureRenderer().render(...args)
}) as RootRenderFunction<TestNode, TestElement>

export const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args)
    const {mount} = app

    app.mount = (): any => {
        const root = nodeOps.createElement('nativescript-vue-root')
        // todo: app.run from ns
        return mount(root)
    }

    return app;
}) as CreateAppFunction<TestElement>

export * from './nodeOps'
export * from '@vue/runtime-core'
