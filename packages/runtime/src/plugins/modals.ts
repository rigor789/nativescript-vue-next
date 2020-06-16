import {
  App,
  Component,
  ComponentInternalInstance,
  ComponentPublicInstance,
  Ref,
  warn,
} from '@vue/runtime-core'
import { Application, ShowModalOptions, View } from '@nativescript/core'
import { createApp, NSVElement } from '@nativescript-vue/runtime'
import { isObject } from '@vue/shared'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    /**
     * todo: update docblock
     */
    $showModal: <T = any>(
      component: Component,
      options?: ModalOptions
    ) => Promise<T | false | undefined>
  }
}

export interface ModalOptions extends ShowModalOptions {
  props?: Record<string, any>
  target?:
    | Ref
    | ComponentInternalInstance
    | ComponentPublicInstance
    | NSVElement
    | View
    | any
}

/**
 * @internal
 */
export function install(app: App) {
  app.config.globalProperties.$showModal = $showModal
}

function resolveModalTarget(target: ModalOptions['target']): View | false {
  if (isObject(target) && isObject(target.$el)) {
    return target.$el.nativeView
  } else if (target instanceof NSVElement) {
    return target.nativeView
  } else if (target instanceof View) {
    return target
  }

  return false
}

export async function $showModal<T = any>(
  component: Component,
  options?: ModalOptions
): Promise<T | false | undefined> {
  options = Object.assign(
    {
      target: Application.getRootView(),
    },
    options
  )

  const modalTarget = resolveModalTarget(options.target)

  if (!modalTarget) {
    if (__DEV__) {
      warn(`could not open modal because the target does not exist`)
    }
    return false
  }

  return new Promise((resolve) => {
    const modalApp = createApp(component, options?.props)
    let isResolved = false
    const closeCallback = (data?: T) => {
      if (isResolved) return
      isResolved = true

      try {
        modalContent.closeModal()
      } catch (e) {
        // ignore?
      }

      modalApp.unmount()
      resolve(data)
    }

    modalApp.config.globalProperties.$modal = {
      close: closeCallback,
    }

    const modalContent = modalApp.mount().$el.nativeView

    modalTarget.showModal(modalContent, {
      ...options,
      closeCallback,
    })
  })
}
