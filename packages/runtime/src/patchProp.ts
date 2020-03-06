import { isAndroid, isIOS } from '@nativescript/core/platform'
import { INSVElement } from './nodes'
import { isOn } from '@vue/shared'
import { patchClass } from './modules/class'
import { patchStyle } from './modules/style'
import { patchEvent } from './modules/events'
import { isAndroidKey, isIOSKey } from './runtimeHelpers'

// import * as set from 'set-value'
// const XML_ATTRIBUTES = Object.freeze([
//     'style',
//     'rows',
//     'columns',
//     'fontAttributes'
// ])

export function patchProp(
  el: INSVElement,
  key: string,
  nextValue: any,
  prevValue: any
) {
  // console.log('->patchProp')

  switch (key) {
    // special
    case 'class':
      console.log('->patchProp+Class')
      patchClass(el, nextValue)
      break
    case 'style':
      console.log('->patchProp+Style')
      patchStyle(el, prevValue, nextValue)
      break
    case 'modelValue':
    case 'onUpdate:modelValue':
      // handled by v-model directive
      break
    default:
      if (isOn(key)) {
        patchEvent(el, key.substr(2).toLowerCase(), prevValue, nextValue)
      } else if (isAndroidKey(key) && isAndroid) {
        el.setAttribute(key.substr(8), nextValue)
      } else if (isIOSKey(key) && isIOS) {
        el.setAttribute(key.substr(4), nextValue)
      } else {
        el.setAttribute(key, nextValue)
      }
  }
}
