import { isAndroid, isIOS } from '@nativescript/core/platform'
import { INSVElement } from './nodes'
import { isOn } from '@vue/shared'
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
      // todo
      console.log('->patchProp+Class')
      break
    case 'style':
      // todo
      console.log('->patchProp+Style')
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
