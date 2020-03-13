import { unsetValue } from '@nativescript/core/ui/core/properties'

type Style = any | string

export class NSView {
  public resettedCSSProps: Array<string> = []
  public style: Style

  private eventListener: Record<string, Function>

  constructor() {
    this.eventListener = {}

    let self = this // self reference
    // Proxy that tracks the resetted CSS props for testing purposes
    this.style = new Proxy(new Map(), {
      set(target, prop: string, value: string): boolean {
        if (value === unsetValue) {
          self.resettedCSSProps.push(prop)
        }
        return true
      }
    })
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
