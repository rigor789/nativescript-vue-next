declare global {
  namespace jest {
    interface Matchers<R, T> {
      toHaveBeenWarned(): R

      toHaveBeenWarnedLast(): R

      toHaveBeenWarnedTimes(n: number): R
    }
  }
}

import { getCurrentPlatform } from '@nativescript-vue/test-utils'

const coreMocks = new Map<string, any>()

export const registerCoreMock = (name: string, mock: any) => {
  coreMocks.set(name, mock)
}

export const unsetValue = Symbol('unsetValue')

jest.mock(
  '@nativescript/core',
  () =>
    new Proxy(
      {},
      {
        get(target, p) {
          // todo: refactor to be able to use registerCoreMock for everything
          // by checking the type and if it's a factory function, call it
          switch (p) {
            case 'isAndroid':
              return getCurrentPlatform() === 'Android'
            case 'isIOS':
              return getCurrentPlatform() === 'iOS'
            default:
              if (coreMocks.has(p as string)) {
                return coreMocks.get(p as string)
              }
              throw new Error(
                `Requested mock has not been specified ${p.toString()}`
              )
          }
        },
      }
    ),
  { virtual: true }
)

registerCoreMock('unsetValue', unsetValue)
registerCoreMock('Trace', {
  write() {},
  categories: {
    Debug: 'debug',
  },
  messageType: {
    log: 'log',
  },
})
