import { FunctionalComponent, h, warn } from '@vue/runtime-core'
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
        const el = vnode.el as NSVElement // TODO: vue-next should export ElementRender
        const actionBar = el.nativeView as TNSActionBar
        const parent = el.parentNode as NSVElement

        if (parent.nativeView instanceof TNSPage) {
          parent.nativeView.actionBar = actionBar
        } else {
          if (__DEV__) {
            warn(
              `<ActionBar> must be a direct child of a <Page> element - ` +
                `got <${parent.nativeView.constructor.name}> instead.`
            )
          }
        }
      }
    },
    ctx.slots.default ? ctx.slots.default() : undefined
  )
}
