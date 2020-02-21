// import { isAndroid, isIOS } from '@nativescript/core/platform'
import { logNodeOp, NodeOpTypes } from './nodeOps'
// import { isOn } from '@vue/shared'
import { NSVViewNode } from './nodes/NSVElement'
// import set from 'set-value'

// const XML_ATTRIBUTES = Object.freeze([
//   'style',
//   'rows',
//   'columns',
//   'fontAttributes'
// ])

export function patchProp(
  el: NSVViewNode,
  key: string,
  nextValue: any,
  prevValue: any
) {
  console.log('->patchProp')

  // @ts-ignore
  el._nativeView[key] = nextValue
  // try {
  //   if (XML_ATTRIBUTES.includes(key)) {
  //     //nv[key] = value
  //   } else {
  //     // // detect expandable attrs for boolean values
  //     // // See https://vuejs.org/v2/guide/components-props.html#Passing-a-Boolean
  //     // if (
  //     //     typeof nv[key] === 'boolean' &&
  //     //     value === ''
  //     // ) {
  //     //   value = true
  //     // }
  //
  //     if (isAndroid && key.startsWith('android:')) {
  //       // set(nv, key.substr(8), value)
  //     } else if (isIOS && key.startsWith('ios:')) {
  //       // set(nv, key.substr(4), value)
  //     } else if (key.endsWith('.decode')) {
  //       // set(
  //       //     nv,
  //       //     key.slice(0, -7),
  //       //     require('@nativescript/core/xml').XmlParser._dereferenceEntities(
  //       //         value
  //       //     )
  //       // )
  //     } else {
  //       // set(nv, key, value)
  //     }
  //   }
  // } catch (e) {
  //   // ignore
  // }

  logNodeOp({
    type: NodeOpTypes.PATCH,
    targetNode: el,
    propKey: key,
    propPrevValue: prevValue,
    propNextValue: nextValue
  })
  // el.props[key] = nextValue
  // if (isOn(key)) {
  //   const event = key.slice(2).toLowerCase()
  //   ;(el.eventListeners || (el.eventListeners = {}))[event] = nextValue
  // }
}
