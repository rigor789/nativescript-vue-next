import {
  NSVViewMeta,
  registerElement,
  defaultViewMeta,
  NSVViewFlags
} from '@nativescript-vue/runtime'
import { TNSViewBase } from 'tests/ns-mocks/base'

export function registerTestElement(
  elementName: string,
  resolver?: () => any,
  meta?: Partial<NSVViewMeta>
) {
  if (resolver === undefined) {
    resolver = () => TNSViewBase
  }
  registerElement(elementName, resolver, meta)
}

export function registerTestLayout(
  elementName: string,
  resolver?: () => any,
  meta?: Partial<NSVViewMeta>
) {
  const mergedMeta = Object.assign({}, defaultViewMeta, meta)
  mergedMeta.viewFlags |= NSVViewFlags.LAYOUT_VIEW
  registerTestElement(elementName, resolver, mergedMeta)
}
