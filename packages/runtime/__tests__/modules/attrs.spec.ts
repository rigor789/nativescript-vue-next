import { patchAttr } from '../../src/modules/attrs'
import { NSVElement } from '../../src/nodes'
import { resetPlatform, setPlatform } from '../../../../tests/jest.setup'
import { isAndroid } from '@nativescript/core'

const testElement = () => {
  const el = new NSVElement('Label')
  const attrs = new Map()
  el.setAttribute = jest.fn((key, value) => attrs.set(key, value))
  el.removeAttribute = jest.fn(key => attrs.delete(key))
  el.getAttribute = jest.fn(key => attrs.get(key))

  return { el, attrs }
}

describe('attrs', () => {
  test('set attribute', () => {
    const { el } = testElement()
    patchAttr(el, 'test', null, 'new value')

    expect(el.setAttribute).toHaveBeenCalledWith('test', 'new value')
  })

  test('remove attribute', () => {
    const { el } = testElement()
    patchAttr(el, 'test', 'new value', null)

    expect(el.setAttribute).toHaveBeenCalledTimes(0)
    expect(el.removeAttribute).toHaveBeenCalledTimes(1)
    expect(el.removeAttribute).toHaveBeenCalledWith('test')
  })

  test('set android: attribute (isAndroid=true)', () => {
    const { el } = testElement()
    setPlatform('Android')
    patchAttr(el, 'android:test', null, 'new value')

    expect(el.setAttribute).toHaveBeenCalledTimes(1)
    expect(el.setAttribute).toHaveBeenCalledWith('test', 'new value')
    resetPlatform()
  })

  test('set ios: attribute (isAndroid=true)', () => {
    const { el } = testElement()
    setPlatform('Android')
    patchAttr(el, 'ios:test', null, 'new value')

    expect(el.setAttribute).toHaveBeenCalledTimes(0)
    resetPlatform()
  })

  test('set android: attribute (isAndroid=false)', () => {
    const { el } = testElement()
    setPlatform('iOS')
    patchAttr(el, 'android:test', null, 'new value')

    expect(el.setAttribute).toHaveBeenCalledTimes(0)
    resetPlatform()
  })

  test('set ios: attribute (isAndroid=false)', () => {
    const { el } = testElement()
    setPlatform('iOS')
    expect(isAndroid).toBe(false)
    patchAttr(el, 'ios:test', null, 'new value')

    expect(el.setAttribute).toHaveBeenCalledTimes(1)
    expect(el.setAttribute).toHaveBeenCalledWith('test', 'new value')
    resetPlatform()
  })

  test('set boolean attribute', () => {
    const { el } = testElement()
    el.setAttribute('test', false)
    patchAttr(el, 'test', null, '')

    expect(el.setAttribute).toHaveBeenCalledTimes(2) // once in setup above
    expect(el.setAttribute).toHaveBeenCalledWith('test', true)
  })
})
