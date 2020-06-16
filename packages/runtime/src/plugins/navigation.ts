import { App, Component, isRef, nextTick, Ref } from '@vue/runtime-core'
import { Frame, NavigationEntry, Page } from '@nativescript/core'
import { createApp, NSVElement } from '@nativescript-vue/runtime'
import { NavigatedData } from '@nativescript/core/ui/page'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    /**
     * todo: update docblock
     * Navigate to {target} component.
     *
     * The frame to navigate defaults to the topmost frame
     * @param target
     * @param options
     */
    $navigateTo: (
      target: Component,
      options?: NavigationOptions
    ) => Promise<any>
    $navigateBack: (options?: NavigationOptions) => void
  }
}

export interface NavigationOptions extends NavigationEntry {
  props?: Record<string, any>
  frame?: string | Ref | NSVElement | Frame
}

/**
 * @internal
 */
export function install(app: App) {
  app.config.globalProperties.$navigateTo = $navigateTo
  app.config.globalProperties.$navigateBack = $navigateBack
}

function resolveFrame(frame: NavigationOptions['frame']): Frame {
  if (!frame) {
    return Frame.topmost()
  }

  if (frame instanceof Frame) {
    return frame
  }

  // todo: check if refs work this way or not
  if (isRef(frame)) {
    return frame.value
  }

  if (frame instanceof NSVElement) {
    return frame.nativeView
  }

  // todo: either change core Frame to add frames to the stack when they are created
  // or do as we did in 2.x - handle a Map of frames.
  // right now, empty frames can't be navigated as they are not recognized by `getFrameById`
  return Frame.getFrameById(frame)
}

async function waitForFrame(
  frame: NavigationOptions['frame'],
  retries: number = 5
) {
  let _frame = resolveFrame(frame)
  while (!_frame && --retries > 0) {
    await nextTick()
    _frame = resolveFrame(frame)
  }
  return _frame
}

export async function $navigateTo(
  target: Component,
  options?: NavigationOptions
): Promise<Page> {
  options = Object.assign({}, options)
  console.log('$navigateTo')

  try {
    const frame = await waitForFrame(options.frame)

    if (!frame) {
      throw new Error('Failed to resolve frame. Make sure your frame exists.')
    }

    const navigationApp = createApp(target, options.props)
    const targetPage = (navigationApp.mount().$el.nativeView as unknown) as Page

    const handler = (args: NavigatedData) => {
      if (args.isBackNavigation) {
        targetPage.off('navigatedFrom', handler as any)
        navigationApp.unmount()
      }
    }
    targetPage.on('navigatedFrom', handler)

    const dispose = targetPage.disposeNativeView
    targetPage.disposeNativeView = () => {
      navigationApp.unmount()
      dispose.call(targetPage)
    }

    frame.navigate({
      ...options,
      create: () => targetPage,
    })
    return targetPage
  } catch (e) {
    console.log('[$navigateTo] Failed to navigate:\n\n')
    console.log(e)
    throw e
  }
}

export async function $navigateBack(options?: NavigationOptions) {
  const frame = await waitForFrame(options ? options.frame : undefined)

  if (!frame) {
    throw new Error('Failed to resolve frame. Make sure your frame exists.')
  }

  if (!frame.canGoBack()) {
    return
  }

  frame.goBack()
}
