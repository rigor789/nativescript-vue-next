let currentPlatform: 'Android' | 'iOS' = 'Android'
export const setPlatform = (platform: 'Android' | 'iOS') =>
  (currentPlatform = platform)
export const resetPlatform = () => (currentPlatform = 'Android')

jest.mock(
  '@nativescript/core/application',
  () => {
    return {
      Application() {}
    }
  },
  { virtual: true }
)

jest.mock(
  '@nativescript/core',
  () => {
    return {
      ContentView: require('./ns-mocks/contentview').ContentView
    }
  },
  { virtual: true }
)

jest.mock(
  '@nativescript/core/platform',
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
    // return {
    //   isAndroid: currentPlatform === 'Android',
    //   isIOS: currentPlatform === 'iOS'
    // }
  },
  { virtual: true }
)

jest.mock(
  '@nativescript/core/utils/utils',
  () => {
    return {
      ios: {}
    }
  },
  { virtual: true }
)

jest.mock(
  '@nativescript/core/ui/core/view-base',
  () => require('./ns-mocks/view'),
  {
    virtual: true
  }
)

jest.mock('@nativescript/core/ui/core/view', () => require('./ns-mocks/view'), {
  virtual: true
})

jest.mock(
  '@nativescript/core/ui/content-view',
  () => require('./ns-mocks/contentview'),
  { virtual: true }
)

jest.mock(
  '@nativescript/core/ui/layouts/layout-base',
  () => require('./ns-mocks/layoutbase'),
  { virtual: true }
)

jest.mock('@nativescript/core/ui/button', () => require('./ns-mocks/button'), {
  virtual: true
})

jest.mock('@nativescript/core/ui/label', () => require('./ns-mocks/label'), {
  virtual: true
})

jest.mock('@nativescript/core/ui/frame', () => require('./ns-mocks/frame'), {
  virtual: true
})

jest.mock('@nativescript/core/ui/page', () => require('./ns-mocks/page'), {
  virtual: true
})

jest.mock(
  '@nativescript/core/ui/proxyviewcontainer',
  () => require('./ns-mocks/proxyviewcontainer'),
  { virtual: true }
)

jest.mock(
  '@nativescript/core/ui/layouts/stack-layout',
  () => require('./ns-mocks/stacklayout'),
  { virtual: true }
)

jest.mock(
  '@nativescript/core/ui/styling/css-selector',
  () => {
    return {}
  },
  { virtual: true }
)

jest.mock(
  '@nativescript/core/ui/core/properties',
  () => {
    return {
      Style: {},
      unsetValue: Symbol('unset')
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
