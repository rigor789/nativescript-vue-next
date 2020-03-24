import {
  Component,
  resolveComponent as _resolveComponent
} from '@vue/runtime-core'
import { isKnownView } from '.'

export function resolveComponent(name: string): Component | string | undefined {
  // in the standalone compiler, everything is treated as a component because we don't
  // know if certain tags are elements or not at runtime
  // (they are only registered at runtime with registerElement)
  // if we return a string here, vue will render them as normal elements
  // with the default slot as children
  if (isKnownView(name)) {
    return name
  }

  return _resolveComponent(name)
}
