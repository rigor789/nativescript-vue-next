export class NSView {
  private eventListener: Record<string, Function>

  constructor() {
    this.eventListener = {}
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
