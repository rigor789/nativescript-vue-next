import { RendererOptions } from '@vue/runtime-core'
import {
  INSVNode,
  NSVComment,
  NSVElement,
  NSVNode,
  NSVRoot,
  NSVText
} from './nodes'

declare interface NSVNodeOps
  extends Omit<RendererOptions<INSVNode, NSVElement>, 'patchProp'> {
  createRoot(): NSVNode
}

export const nodeOps: NSVNodeOps = {
  createRoot(): NSVNode {
    return new NSVRoot()
  },
  createComment(text: string): INSVNode {
    return new NSVComment(text)
  },
  createElement(type: string, isSVG?: boolean): NSVElement {
    return new NSVElement(type)
  },
  createText(text: string): INSVNode {
    return new NSVText(text)
  },
  nextSibling(node: INSVNode): INSVNode | null {
    return node.nextSibling
  },
  parentNode(node: INSVNode): NSVElement | null {
    return node.parentNode
  },
  insert(el: INSVNode, parent: NSVElement, anchor?: INSVNode | null): void {
    parent.insert(el, anchor)
  },
  remove(el: INSVNode): void {
    if (el.parentNode != null) {
      el.parentNode.removeChild(el)
    }
  },
  setElementText(node: NSVElement, text: string): void {
    node.text = text
  },
  setText(node: INSVNode, text: string): void {
    node.text = text
  },
  setScopeId(el: NSVElement, id: string): void {
    el.nativeView.set(id, '')
  }
}
