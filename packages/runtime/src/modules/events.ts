import { EMPTY_OBJ } from '@vue/shared'
import { INSVElement } from '../nodes'

export function patchEvent(
  el: INSVElement,
  name: string,
  prevValue: any,
  nextValue: any
) {
  const prevOptions = prevValue && 'options' in prevValue && prevValue.options
  const nextOptions = nextValue && 'options' in nextValue && nextValue.options
  const invoker = prevValue && prevValue.invoker
  const value =
    nextValue && 'handler' in nextValue ? nextValue.handler : nextValue

  if (prevOptions || nextOptions) {
    const prev = prevOptions || EMPTY_OBJ
    const next = nextOptions || EMPTY_OBJ
    if (
      prev.capture !== next.capture ||
      prev.passive !== next.passive ||
      prev.once !== next.once
    ) {
      if (invoker) {
        el.removeEventListener(name, invoker)
      }
      if (nextValue && value) {
        const invoker = value
        nextValue.invoker = invoker
        // TODO: use nextOptions here for supporting event options
        el.addEventListener(name, invoker)
      }
      return
    }
  }

  if (nextValue && value) {
    if (invoker) {
      ;(prevValue as any).invoker = null
      invoker.value = value
      nextValue.invoker = invoker
    } else {
      el.addEventListener(name, value)
    }
  } else if (invoker) {
    el.removeEventListener(name, invoker)
  }
}
