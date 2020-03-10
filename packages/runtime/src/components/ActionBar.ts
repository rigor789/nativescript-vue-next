import { FunctionalComponent, h } from '@vue/runtime-core'
import { NSVElement } from '../nodes'
import { ActionBar as TNSActionBar, Page as TNSPage } from '@nativescript/core'

export const ActionBar: FunctionalComponent = (props, ctx) => {
  return h(
    'InternalActionBar',
    {
      ...ctx.attrs,
      onVnodeMounted(vnode) {
        const actionBar = vnode.el.nativeView as TNSActionBar
        const parent = vnode.el.parentNode as NSVElement

        if (parent.nativeView instanceof TNSPage) {
          parent.nativeView.actionBar = actionBar
        } else {
          // todo: warn ActionBar must be a direct child of <Page>
        }
      }
    },
    ctx.slots.default ? ctx.slots.default() : undefined
  )
}
