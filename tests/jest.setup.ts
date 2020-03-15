type Platform = 'Android' | 'iOS'
let currentPlatform: Platform = 'Android'
export const setPlatform = (platform: Platform) => (currentPlatform = platform)
export const resetPlatform = () => (currentPlatform = 'Android')

const coreMocks = new Map<string, any>()
export const registerCoreMock = (name: string, mock: any) => {
  coreMocks.set(name, mock)
}
jest.mock(
  '@nativescript/core',
  () =>
    new Proxy(
      {},
      {
        get(target, p) {
          switch (p) {
            case 'isAndroid':
              return currentPlatform === 'Android'
            case 'isIOS':
              return currentPlatform === 'iOS'
            default:
              if (coreMocks.has(p as string)) {
                return coreMocks.get(p as string)
              }
              throw new Error(
                `Requested mock has not been specified ${p.toString()}`
              )
          }
        }
      }
    ),
  { virtual: true }
)

export const unsetValue = Symbol('unsetValue')

jest.mock(
  '@nativescript/core/ui/core/properties',
  () => ({
    unsetValue
  }),
  { virtual: true }
)
