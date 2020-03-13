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
          console.log(`getting ${String(p)}...`)
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
