import {
  getViewClass,
  getViewMeta,
  normalizeElementName,
  NSVViewMeta
} from '../registry'
import { ELEMENT_REF } from '@nativescript-vue/runtime'
import { ViewBase } from '@nativescript/core'

// import {isContentView, isLayout} from "./index";

export const enum NSVNodeTypes {
  TEXT = 'text',
  ELEMENT = 'element',
  COMMENT = 'comment',
  ROOT = 'root'
}

export interface INSVNode {
  nodeType: NSVNodeTypes
  text: string
  parentNode: NSVElement | null
  childNodes: INSVNode[]
  prevSibling: INSVNode | null
  nextSibling: INSVNode | null
  firstChild: INSVNode | null
  lastChild: INSVNode | null
  insertBefore: Function
  appendChild: Function
  removeChild: Function
}

export interface INSVElement {
  tagName: string
  meta: NSVViewMeta
  addEventListener(event: string, handler: any): void
  removeEventListener(event: string, handler?: any): void
  nativeView: ViewBase & { [ELEMENT_REF]: INSVElement }
}

export abstract class NSVNode implements INSVNode {
  protected constructor(nodeType: NSVNodeTypes) {
    this.nodeType = nodeType
  }

  nodeType: NSVNodeTypes
  text: string

  parentNode: NSVElement | null
  childNodes: INSVNode[] = []

  // todo: specify proper types
  insertBefore: Function
  appendChild: Function
  removeChild: Function

  nextSibling: INSVNode | null
  prevSibling: INSVNode | null

  get firstChild() {
    return this.childNodes.length ? this.childNodes[0] : null
  }

  get lastChild() {
    return this.childNodes.length
      ? this.childNodes[this.childNodes.length - 1]
      : null
  }
}

export class NSVElement extends NSVNode implements INSVElement {
  private _tagName: string
  private _nativeView: any
  private _meta: NSVViewMeta

  constructor(tagName: string) {
    super(NSVNodeTypes.ELEMENT)

    this._tagName = tagName
    const viewClass = getViewClass(tagName)
    this._nativeView = new viewClass()
    this._nativeView[ELEMENT_REF] = this
  }

  set tagName(name) {
    this._tagName = normalizeElementName(name)
  }

  get tagName(): string {
    return this._tagName
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

  addEventListener(event: string, handler: any) {
    this.nativeView.on(event, handler)
  }

  removeEventListener(event: string) {
    this.nativeView.off(event)
  }

  insert(el: INSVNode, anchor?: INSVNode | null) {
    // if (isLayout(this.nativeView)) {
    //   ;(this.nativeView as LayoutBase).addChild(el.nativeView as View)
    // } else if (isContentView(this.nativeView)) {
    //   this.nativeView.content = el.nativeView
    // } else if (this.nativeView._addChildFromBuilder) {
    //   this.nativeView._addChildFromBuilder(
    //       el.nativeView.constructor.name,
    //       el.nativeView
    //   )
    // }
  }
}

export class NSVComment extends NSVNode {
  constructor(text: string) {
    super(NSVNodeTypes.COMMENT)

    this.text = text
  }
}

export class NSVText extends NSVNode {
  constructor(text: string) {
    super(NSVNodeTypes.TEXT)

    this.text = text
  }
}

export class NSVRoot extends NSVNode {
  constructor() {
    super(NSVNodeTypes.ROOT)
  }
}
