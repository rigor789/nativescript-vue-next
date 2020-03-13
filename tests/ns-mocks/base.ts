import { ViewBase } from '@nativescript/core/ui/core/view-base'
import { Style } from '@nativescript/core/ui/styling/style'
import * as ssm from '@nativescript/core/ui/styling/style-scope'

let styleScopeModule: typeof ssm

function ensureStyleScopeModule() {
  if (!styleScopeModule) {
    styleScopeModule = require('@nativescript/core/ui/styling/style-scope')
  }
}

export class NSView {
  private _style: Style

  private eventListener: Record<string, Function>

  constructor() {
    this.eventListener = {}
    this._style = new Style((this as unknown) as ViewBase)
  }

  get style(): Style {
    return this._style
  }
  set style(inlineStyle: Style /* | string */) {
    if (typeof inlineStyle === 'string') {
      this.setInlineStyle(inlineStyle)
    } else {
      throw new Error('View.style property is read-only.')
    }
  }

  public setInlineStyle(style: string): void {
    if (typeof style !== 'string') {
      throw new Error('Parameter should be valid CSS string!')
    }

    ensureStyleScopeModule()
    styleScopeModule.applyInlineStyle((this as unknown) as ViewBase, style)
  }

  public addChild() {}

  public removeChild() {}

  public _removeView(view: NSView) {}

  public addEventListener(
    eventNames: string,
    callback: Function,
    thisArg?: any
  ) {
    this.eventListener[eventNames] = callback
  }

  public removeEventListener(
    eventNames: string,
    callback: Function,
    thisArg?: any
  ) {
    delete this.eventListener[eventNames]
  }

  public set(name: string, value: any) {
    ;(this as any)[name] = value
  }
}
