import {
  App,
  Component,
  ComponentInternalInstance,
  ComponentPublicInstance,
  h,
  Ref,
  warn,
} from '@vue/runtime-core'
import { ShowModalOptions, View, Application } from '@nativescript/core'
import { nodeOps, NSVElement, render } from '@nativescript-vue/runtime'
import { isObject } from '@vue/shared'
import { isDefined } from '@nativescript/core/utils/types'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    /**
     * todo: update docblock
     */
    $showModal: <T = any>(
      component: Component,
      options: ModalOptions
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
  // Object.defineProperty(app.config.globalProperties, '$modal', {
  //   get() {
  //   }
  // })
}

function resolveModalTarget(target: ModalOptions['target']): View | false {
  if (isObject(target) && isDefined(target.$el)) {
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
  options: ModalOptions
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
    const root = nodeOps.createRoot()

    let isResolved = false
    const closeCallback = (data?: T) => {
      if (isResolved) return
      isResolved = true

      try {
        modalContent.closeModal()
      } catch (e) {
        // ignore?
      }

      // unmount modal by rendering null
      render(null, root)

      resolve(data)
    }

    // render modal contents
    render(h(component, options.props), root)

    const modalContent = root.el!.nativeView

    modalTarget.showModal(modalContent, {
      ...options,
      closeCallback,
    })
  })
}
