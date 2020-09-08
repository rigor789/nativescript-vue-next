import { unsetValue } from '@nativescript/core'
import { debug } from '@nativescript-vue/shared'

type Style = any | string

export class TNSViewBase {
  private _resetCSSProps: Array<string> = []
  public _style: Style

  private _eventListener: Record<string, Function>

  constructor() {
    this._eventListener = {}

    let self = this // self reference

    // Proxy that tracks the resetted CSS props for testing purposes
    this._style = new Proxy(new Map(), {
      set(target, prop: string, value: string): boolean {
        if (value === unsetValue) {
          self._resetCSSProps.push(prop)
        }
        return true
      },
    })
  }

  get style(): any {
    return this._style
  }

  set style(s: any) {
    this._style = s
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
    this._eventListener[eventNames] = callback
  }

  public removeEventListener(
    eventNames: string,
    callback: Function,
    thisArg?: any
  ) {
    delete this._eventListener[eventNames]
  }

  public notify(event: any) {
    const callback = this._eventListener[event.eventName]
    callback && callback(event.object)
  }

  public set(name: string, value: any) {
    if (name === 'style') {
      name = '_style'
    }
    ;(this as any)[name] = value
  }
}
