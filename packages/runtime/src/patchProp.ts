import { isAndroid, isIOS } from '@nativescript/core/platform'
import { logNodeOp, NodeOpTypes } from './nodeOps'
// import { isOn } from '@vue/shared'
import { NSVViewNode } from './nodes/NSVElement'
import { isOn } from '@vue/shared'
import set = Reflect.set
import { patchEvent } from './modules/events'
import { isAndroidKey, isIOSKey } from './runtimeHelpers'
// import set from 'set-value'

// const XML_ATTRIBUTES = Object.freeze([
//     'style',
//     'rows',
//     'columns',
//     'fontAttributes'
// ])

export function patchProp(
  el: NSVViewNode,
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
        set(el.nativeView, key.substr(8), nextValue)
      } else if (isIOSKey(key) && isIOS) {
        set(el.nativeView, key.substr(4), nextValue)
      } else {
        set(el.nativeView, key, nextValue)
      }
  }

  logNodeOp({
    type: NodeOpTypes.PATCH,
    targetNode: el,
    propKey: key,
    propPrevValue: prevValue,
    propNextValue: nextValue
  })
}
