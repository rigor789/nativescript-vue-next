import { isOn } from '@vue/shared'
import { patchEvent } from './modules/events'
import { INSVElement } from './nodes'
import { patchClass } from './modules/class'
import { patchStyle } from './modules/style'
import { patchAttr } from './modules/attrs'

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
  prevValue: any,
  nextValue: any
) {
  // console.log('->patchProp')

  switch (key) {
    // special
    case 'class':
      // console.log('->patchProp+Class')
      patchClass(el, nextValue)
      break
    case 'style':
      // console.log('->patchProp+Style')
      patchStyle(el, prevValue, nextValue)
      break
    case 'modelValue':
    case 'onUpdate:modelValue':
      // handled by v-model directive
      break
    default:
      if (isOn(key)) {
        // console.log('->patchProp+Event')
        patchEvent(el, key.slice(2).toLowerCase(), prevValue, nextValue)
      } else {
        patchAttr(el, key, prevValue, nextValue)
      }
  }
}
