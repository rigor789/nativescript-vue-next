import { App, Component, h, isRef, nextTick, Ref } from '@vue/runtime-core'
import { Frame, NavigationEntry, Page } from '@nativescript/core'
import { nodeOps, NSVElement, render } from '@nativescript-vue/runtime'

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
    $navigateTo: (target: Component, options: any) => Promise<any>
  }
}

export interface NavigateToOptions extends NavigationEntry {
  props?: Record<string, any>
  frame?: string | Ref | NSVElement | Frame
}

/**
 * @internal
 */
export function install(app: App) {
  app.config.globalProperties.$navigateTo = $navigateTo
}

function resolveFrame(frame: NavigateToOptions['frame']): Frame {
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
  frame: NavigateToOptions['frame'],
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
  options: NavigateToOptions
): Promise<Page> {
  options = Object.assign({}, options)
  console.log('$navigateTo')

  try {
    const frame = await waitForFrame(options.frame)

    if (!frame) {
      throw new Error('Failed to resolve frame. Make sure your frame exists.')
    }

    const root = nodeOps.createRoot()
    render(h(target, options.props), root)

    frame.navigate({
      ...options,
      create() {
        return (root.el!.nativeView as unknown) as Page
      },
    })
    return (root.el!.nativeView as unknown) as Page
  } catch (e) {
    console.log('[$navigateTo] Failed to navigate:\n\n')
    console.log(e)
    throw e
  }
}
