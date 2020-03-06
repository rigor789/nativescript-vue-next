import { isString } from '@vue/shared'

import { INSVElement } from '../nodes'

// TODO: Check if we can get rid of the CSSStyleDeclaration part
type Style = string | Partial<CSSStyleDeclaration> | null

export function patchStyle(el: INSVElement, prev: Style, next: Style) {
  if (!next) {
    el.removeAttribute('style')
  } else if (isString(next)) {
    el.style = next
  } else {
    for (const key in next) {
      el.setStyle(key, next[key] as string)
    }
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (!next[key]) {
          el.setStyle(key, '')
        }
      }
    }
  }
}
