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
    return {
      isAndroid: true,
      isIOS: false
    }
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
