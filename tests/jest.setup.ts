type Platform = 'Android' | 'iOS'
let currentPlatform: Platform = 'Android'
export const setPlatform = (platform: Platform) => (currentPlatform = platform)
export const resetPlatform = () => (currentPlatform = 'Android')

jest.mock(
  '@nativescript/core',
  () => {
    return new Proxy(
      {},
      {
        get(target, p) {
          switch (p) {
            case 'isAndroid':
              return currentPlatform === 'Android'
            case 'isIOS':
              return currentPlatform === 'iOS'
          }
        }
      }
    )
  },
  { virtual: true }
)

jest.mock(
  '@nativescript/core/ui/styling/css-selector',
  () => {
    return {}
  },
  { virtual: true }
)

export const unsetValue = Symbol('unsetValue')
jest.mock(
  '@nativescript/core/ui/core/properties',
  () => {
    return {
      unsetValue
    }
  },
  { virtual: true }
)

// For fixing `__extends is not defined` error in
// @nativescript/core/data/observable/observable.js
global.__extends = (d: any, b: any): void => {}

// For fixing `__decorate is not defined` error in
// @nativescript/core/ui/styling/css-selector/css-selector.js
;(global as any).__decorate = (f: any): any => {
  return f
}

class WeakRef<T> {
  private ref: T

  constructor(obj: T) {
    this.ref = obj
  }

  public get(): T {
    return this.ref
  }

  public clear(): void {}
}

// For fixing `WeakRef is not defined` error in
// @nativescript/core/ui/styling/style/style.js
;(global as any).WeakRef = WeakRef
