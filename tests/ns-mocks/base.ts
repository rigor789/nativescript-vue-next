import { unsetValue } from '@nativescript/core/ui/core/properties'
import { debug } from '@nativescript-vue/shared'

type Style = any | string

export class TNSViewBase {
  public resetCSSProps: Array<string> = []
  public style: Style

  private eventListener: Record<string, Function>

  constructor() {
    this.eventListener = {}

    let self = this // self reference
    // Proxy that tracks the resetted CSS props for testing purposes
    this.style = new Proxy(new Map(), {
      set(target, prop: string, value: string): boolean {
        if (value === unsetValue) {
          self.resetCSSProps.push(prop)
        }
        return true
      }
    })
  }

  public addChild() {}

  public removeChild() {}

  public _removeView(view: TNSViewBase) {}

  public addEventListener(
    eventNames: string,
    callback: Function,
    thisArg?: any
  ) {
    debug(`addEventListeners: ${JSON.stringify(eventNames)}`)
    this.eventListener[eventNames] = callback
  }

  public removeEventListener(
    eventNames: string,
    callback: Function,
    thisArg?: any
  ) {
    delete this.eventListener[eventNames]
  }

  public notify(event: any) {
    const callback = this.eventListener[event.eventName]
    callback && this.eventListener[event.eventName](event.object)
  }

  public set(name: string, value: any) {
    ;(this as any)[name] = value
  }
}
