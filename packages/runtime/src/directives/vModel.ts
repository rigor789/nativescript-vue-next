import { ObjectDirective, VNode } from '@vue/runtime-core'
import { getViewMeta, NSVModelDescriptor } from '../registry'
import { addEventListener } from '../modules/events'
import { INSVElement } from '../nodes'
import { isArray, invokeArrayFns } from '@vue/shared'

type AssignerFn = (value: any) => void

const getModelAssigner = (vnode: VNode): AssignerFn => {
  const fn = vnode.props!['onUpdate:modelValue']
  return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn
}

function toNumber(val: string): number | string {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

type ModelDirective<T> = ObjectDirective<T & { _assign: AssignerFn }>

export const vModel: ModelDirective<INSVElement> = {
  beforeMount(el, { value, modifiers: { trim, number } }, vnode) {
    el._assign = getModelAssigner(vnode)
    const castToNumber = number
    const { prop, event } = getViewMeta(el.tagName).model as NSVModelDescriptor
    el._assign(value)
    el.setAttribute(prop, value)

    addEventListener(el, event, () => {
      let propValue: unknown = el.getAttribute(prop)
      if (trim && typeof propValue === 'string') {
        propValue = propValue.trim()
      } else if (castToNumber && typeof propValue === 'string') {
        propValue = toNumber(propValue)
      }
      el._assign(propValue)
    })
  },

  beforeUpdate(el, { value, oldValue }, vnode) {
    const { prop } = getViewMeta(el.tagName).model as NSVModelDescriptor
    el._assign = getModelAssigner(vnode)
    if (value === oldValue) {
      return
    }
    el.setAttribute(prop, value)
  },
}
