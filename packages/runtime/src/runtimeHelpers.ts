export const ELEMENT_REF = Symbol(__DEV__ ? `elementRef` : ``)

export const isAndroidKey = (key: string) => key.startsWith('android:')

export const isIOSKey = (key: string) => key.startsWith('ios:')

export const isBoolean = (value: unknown): boolean => {
  return typeof value === 'boolean' || value instanceof Boolean
}
