export const ELEMENT_REF = Symbol(__DEV__ ? `elementRef` : ``)

if (__DEV__) {
  console.log('IT IS DEV')
} else {
  console.log('IT IS NOT DEV')
}
