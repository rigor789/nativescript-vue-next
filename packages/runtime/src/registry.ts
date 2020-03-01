import { Component } from '@nativescript-vue/runtime'
import { ViewBase } from '@nativescript/core'
import { NSVViewFlags } from './nodes'

export type NSVElementResolver = () => ViewBase

export interface NSVViewMeta {
  component?: Component
  viewFlags: NSVViewFlags
}

export interface NSVElementDescriptor {
  meta: NSVViewMeta
  resolver?: NSVElementResolver
}

let defaultViewMeta: NSVViewMeta = {
  viewFlags: NSVViewFlags.NONE
}

let elementMap: Record<string, NSVElementDescriptor> = {}

export function getViewMeta(elementName: string): NSVViewMeta {
  console.log(`->getViewMeta(${elementName})`)

  const normalizedName = normalizeElementName(elementName)

  const entry = elementMap[normalizedName]

  if (!entry) {
    throw new Error(`No known component for element ${elementName}.`)
  }

  return entry.meta
}

export function getViewClass(elementName: string): any {
  console.log(`->getViewClass(${elementName})`)
  const normalizedName = normalizeElementName(elementName)
  const entry = elementMap[normalizedName]

  if (!entry) {
    throw new Error(`No known component for element ${elementName}.`)
  }

  try {
    if (__TEST__) {
      // todo: perhaps return a mock here?
    }
    return entry.resolver!()
  } catch (e) {
    throw new Error(`Could not load view for: ${elementName}. ${e}`)
  }
}

export function normalizeElementName(elementName: string): string {
  return elementName.replace(/-/g, '').toLowerCase()
}

export function registerElement(
  elementName: string,
  resolver?: NSVElementResolver,
  meta?: NSVViewMeta
) {
  const normalizedName = normalizeElementName(elementName)
  meta = Object.assign({}, defaultViewMeta, meta)

  if (elementMap[normalizedName]) {
    throw new Error(`Element for ${elementName} already registered.`)
  }

  elementMap[normalizedName] = {
    meta,
    resolver
  }
  console.log(`->registerElement(${elementName})`)
}

// export function isKnownView(elementName: string) {
//     return elementMap.hasOwnProperty(normalizeElementName(elementName))
// }

// register built in elements
// prettier-ignore
{
  // layouts
  registerElement(
    'AbsoluteLayout',
    () => require('@nativescript/core/ui/layouts/absolute-layout').AbsoluteLayout,
    { viewFlags: NSVViewFlags.LAYOUT_VIEW }
  )
  registerElement(
    'DockLayout',
    () => require('@nativescript/core/ui/layouts/dock-layout').DockLayout,
    { viewFlags: NSVViewFlags.LAYOUT_VIEW }
  )
  registerElement(
    'FlexboxLayout',
    () => require('@nativescript/core/ui/layouts/flexbox-layout').FlexboxLayout,
    { viewFlags: NSVViewFlags.LAYOUT_VIEW }
  )
  registerElement(
    'GridLayout',
    () => require('@nativescript/core/ui/layouts/grid-layout').GridLayout,
    { viewFlags: NSVViewFlags.LAYOUT_VIEW }
  )
  registerElement(
    'StackLayout',
    () => require('@nativescript/core/ui/layouts/stack-layout').StackLayout,
    { viewFlags: NSVViewFlags.LAYOUT_VIEW }
  )
  registerElement(
    'WrapLayout',
    () => require('@nativescript/core/ui/layouts/wrap-layout').WrapLayout,
    { viewFlags: NSVViewFlags.LAYOUT_VIEW }
  )

  // ContentViews
  registerElement(
    'ContentView',
    () => require('@nativescript/core/ui/content-view').ContentView,
    { viewFlags: NSVViewFlags.CONTENT_VIEW }
  )
  registerElement(
    'ScrollView',
    () => require('@nativescript/core/ui/scroll-view').ScrollView,
    { viewFlags: NSVViewFlags.CONTENT_VIEW }
  )

  // ActionBar
  registerElement(
    'ActionBar',
    () => require('@nativescript/core/ui/action-bar').ActionBar
  )
  registerElement(
    'ActionItem',
    () => require('@nativescript/core/ui/action-bar').ActionItem
  )
  registerElement(
    'NavigationButton',
    () => require('@nativescript/core/ui/action-bar').NavigationButton
  )

  // navigation
  registerElement(
    'Frame',
    () => require('@nativescript/core/ui/frame').Frame,
    { viewFlags: NSVViewFlags.NO_CHILDREN }
  )
  registerElement(
    'Page',
    () => require('@nativescript/core/ui/page').Page,
    { viewFlags: NSVViewFlags.CONTENT_VIEW }
  )

  // html
  registerElement(
    'HtmlView',
    () => require('@nativescript/core/ui/html-view').HtmlView
  )
  registerElement(
    'WebView',
    () => require('@nativescript/core/ui/web-view').WebView
  )

  // components
  registerElement(
    'ActivityIndicator',
    () => require('@nativescript/core/ui/activity-indicator').ActivityIndicator
  )
  registerElement(
    'Button',
    () => require('@nativescript/core/ui/button').Button
  )
  registerElement(
    'DatePicker',
    () => require('@nativescript/core/ui/date-picker').DatePicker
  )
  registerElement(
    'Image',
    () => require('@nativescript/core/ui/image').Image
  )
  registerElement(
    'Label',
    () => require('@nativescript/core/ui/label').Label
  )
}
// todo: more
