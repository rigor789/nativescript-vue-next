import {
  getViewClass,
  getViewMeta,
  normalizeElementName,
  NSVViewMeta
} from '../registry'
import { ELEMENT_REF } from '@nativescript-vue/runtime'
import { ViewBase } from '@nativescript/core'

// import {ELEMENT_REF} from "@nativescript-vue/runtime";

export const enum NSVNodeTypes {
  TEXT = 'text',
  ELEMENT = 'element',
  COMMENT = 'comment',
  ROOT = 'root'
}

export interface NSVViewNode {
  nodeType: NSVNodeTypes
  tagName: string
  meta: NSVViewMeta
  parentNode: NSVElement | null
  childNodes: NSVViewNode[]
  prevSibling: NSVViewNode | null
  nextSibling: NSVViewNode | null
  firstChild: NSVViewNode | null
  lastChild: NSVViewNode | null
  nativeView: ViewBase
  getAttribute: Function
  insertBefore: Function
  appendChild: Function
  removeChild: Function
  text: string
}

export class NSVElement implements NSVViewNode {
  text: string
  nodeType: NSVNodeTypes
  parentNode: NSVElement
  childNodes: NSVViewNode[] = []
  prevSibling: NSVViewNode
  nextSibling: NSVViewNode
  private _tagName: string
  private _nativeView: any
  private _meta: NSVViewMeta

  set tagName(name) {
    this._tagName = normalizeElementName(name)
  }

  get tagName() {
    return this._tagName
  }

  get firstChild() {
    return this.childNodes.length ? this.childNodes[0] : null
  }

  get lastChild() {
    return this.childNodes.length
      ? this.childNodes[this.childNodes.length - 1]
      : null
  }

  get nativeView() {
    return this._nativeView
  }

  set nativeView(view) {
    if (this._nativeView) {
      throw new Error(`Can't override native view.`)
    }

    this._nativeView = view
  }

  get meta() {
    if (this._meta) {
      return this._meta
    }

    return (this._meta = getViewMeta(this.tagName))
  }

  constructor(elementName: string, nodeType: NSVNodeTypes) {
    this.nodeType = nodeType

    switch (nodeType) {
      case NSVNodeTypes.ELEMENT:
        this._tagName = elementName
        const viewClass = getViewClass(elementName)
        this._nativeView = new viewClass()
        this._nativeView[ELEMENT_REF] = this
        break
      case NSVNodeTypes.COMMENT:
      case NSVNodeTypes.TEXT:
        this.text = elementName
    }
  }

  getAttribute(key: string) {
    return this.nativeView[key]
  }

  addEventListener(event: string, handler: any) {
    this.nativeView.on(event, handler)
  }

  removeEventListener(event: string) {
    this.nativeView.off(event)
  }

  insertBefore(childNode: NSVViewNode, referenceNode: NSVViewNode) {
    // if (!childNode) {
    //     throw new Error(`Can't insert child.`)
    // }
    //
    // // in some rare cases insertBefore is called with a null referenceNode
    // // this makes sure that it get's appended as the last child
    // if (!referenceNode) {
    //     return this.appendChild(childNode)
    // }
    //
    // if (referenceNode.parentNode && referenceNode.parentNode !== this) {
    //     throw new Error(
    //         `Can't insert child, because the reference node has a different parent.`
    //     )
    // }
    //
    // if (childNode.parentNode && childNode.parentNode !== this) {
    //     throw new Error(
    //         `Can't insert child, because it already has a different parent.`
    //     )
    // }
    //
    // if (childNode.parentNode === this) {
    //     // we don't need to throw an error here, because it is a valid case
    //     // for example when switching the order of elements in the tree
    //     // fixes #127 - see for more details
    //     // fixes #240
    //     // throw new Error(`Can't insert child, because it is already a child.`)
    // }
    //
    // let index = this.childNodes.indexOf(referenceNode)
    //
    // childNode.parentNode = this
    // childNode.nextSibling = referenceNode
    // childNode.prevSibling = this.childNodes[index - 1]
    //
    // referenceNode.prevSibling = childNode
    // this.childNodes.splice(index, 0, childNode)
    //
    // insertChild(this, childNode, index)
  }

  appendChild(childNode: NSVViewNode) {
    // if (!childNode) {
    //     throw new Error(`Can't append child.`)
    // }
    //
    // if (childNode.parentNode && childNode.parentNode !== this) {
    //     throw new Error(
    //         `Can't append child, because it already has a different parent.`
    //     )
    // }
    //
    // if (childNode.parentNode === this) {
    //     // we don't need to throw an error here, because it is a valid case
    //     // for example when switching the order of elements in the tree
    //     // fixes #127 - see for more details
    //     // fixes #240
    //     // throw new Error(`Can't append child, because it is already a child.`)
    // }
    //
    // childNode.parentNode = this
    //
    // if (this.lastChild) {
    //     childNode.prevSibling = this.lastChild
    //     this.lastChild.nextSibling = childNode
    // }
    //
    // this.childNodes.push(childNode)
    //
    // insertChild(this, childNode, this.childNodes.length - 1)
  }

  removeChild(childNode: NSVViewNode) {
    // if (!childNode) {
    //     throw new Error(`Can't remove child.`)
    // }
    //
    // if (!childNode.parentNode) {
    //     throw new Error(`Can't remove child, because it has no parent.`)
    // }
    //
    // if (childNode.parentNode !== this) {
    //     throw new Error(`Can't remove child, because it has a different parent.`)
    // }
    //
    // childNode.parentNode = null
    //
    // if (childNode.prevSibling) {
    //     childNode.prevSibling.nextSibling = childNode.nextSibling
    // }
    //
    // if (childNode.nextSibling) {
    //     childNode.nextSibling.prevSibling = childNode.prevSibling
    // }
    //
    // // reset the prevSibling and nextSibling. If not, a keep-alived component will
    // // still have a filled nextSibling attribute so vue will not
    // // insert the node again to the parent. See #220
    // childNode.prevSibling = null
    // childNode.nextSibling = null
    //
    // this.childNodes = this.childNodes.filter(node => node !== childNode)
    //
    // removeChild(this, childNode)
  }
}
