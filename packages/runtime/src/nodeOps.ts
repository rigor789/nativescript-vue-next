import { RendererOptions } from '@vue/runtime-core'
import {
  isContentView,
  isLayout,
  NSVElement,
  NSVNodeTypes,
  NSVViewNode
} from './nodes'
import { LayoutBase, View } from '@nativescript/core'

declare type HostElement = NSVElement
declare type HostNode = NSVViewNode

declare interface NSVNodeOps
  extends Omit<RendererOptions<HostNode, HostElement>, 'patchProp'> {
  createRoot(): HostNode
}

export const nodeOps: NSVNodeOps = {
  createRoot(): HostNode {
    return new NSVElement('root', NSVNodeTypes.ROOT)
  },
  createComment(text: string): HostNode {
    return new NSVElement(text, NSVNodeTypes.COMMENT)
  },
  createElement(type: string, isSVG?: boolean): HostElement {
    return new NSVElement(type, NSVNodeTypes.ELEMENT)
  },
  createText(text: string): HostNode {
    return new NSVElement(text, NSVNodeTypes.TEXT)
  },
  nextSibling(node: HostNode): HostNode | null {
    return node.nextSibling
  },
  parentNode(node: HostNode): HostElement | null {
    return node.parentNode
  },
  insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void {
    if (el.meta.skipAddToDom) return

    if (parent.nativeView == null) return

    if (anchor != null) {
      // todo
    }

    console.log('insert!')
    if (isLayout(parent.nativeView)) {
      ;(parent.nativeView as LayoutBase).addChild(el.nativeView as View)
    } else if (isContentView(parent.nativeView)) {
      parent.nativeView.content = el.nativeView
    } else if (parent.nativeView._addChildFromBuilder) {
      parent.nativeView._addChildFromBuilder(
        el.nativeView.constructor.name,
        el.nativeView
      )
    }
  },
  remove(el: HostNode): void {
    if (el.parentNode != null) {
      el.parentNode.removeChild(el)
    }
  },
  setElementText(node: HostElement, text: string): void {
    node.text = text
  },
  setText(node: HostNode, text: string): void {
    node.text = text
  },
  setScopeId(el: HostElement, id: string): void {
    el.nativeView[id] = ''
  }
}
