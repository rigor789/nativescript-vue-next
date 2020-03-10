import { FunctionalComponent, h } from '@vue/runtime-core'
import { NSVElement } from '../nodes'
import {
  ActionBar as TNSActionBar,
  ActionItem as TNSActionItem,
  NavigationButton as TNSNavigationButton,
  Page as TNSPage
} from '@nativescript/core'
import { NSVViewMeta } from '../registry'

export const actionBarNodeOps: NSVViewMeta['nodeOps'] = {
  insert(child, parent, atIndex) {
    const actionBar = parent.nativeView as TNSActionBar
    const childView = child.nativeView

    if (childView instanceof TNSNavigationButton) {
      actionBar.navigationButton = childView
    } else if (childView instanceof TNSActionItem) {
      if (atIndex) {
        const ai: TNSActionItem[] = actionBar.actionItems.getItems()
        ai.splice(atIndex, 0, childView)
        ;(<any>actionBar.actionItems).setItems(ai)
      } else {
        actionBar.actionItems.addItem(childView)
      }
    } else {
      actionBar.titleView = childView
    }
  },
  remove(child, parent) {
    const actionBar = parent.nativeView as TNSActionBar
    const childView = child.nativeView

    if (childView instanceof TNSNavigationButton) {
      if (actionBar.navigationButton === childView) {
        // @ts-ignore
        actionBar.navigationButton = null
      }
    } else if (childView instanceof TNSActionItem) {
      actionBar.actionItems.removeItem(childView)
    } else {
      if (actionBar.titleView === childView) {
        // @ts-ignore
        actionBar.titleView = null
      }
    }
  }
}

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
