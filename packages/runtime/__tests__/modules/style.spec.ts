import { unsetValue } from '@nativescript/core/ui/core/properties'
import { registerTestLayout } from 'tests/registry'

import { NSVElement } from '../../src/nodes'
import { patchStyle } from '../../src/modules/style'

registerTestLayout('StackLayout')

describe('module style', () => {
  it('string', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color: red')
    expect(el.style).toBe('color: red')
    expect(el.nativeView._resetCSSProps).toEqual([])
  })

  it('!important', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color: red !important')
    expect(el.style).toBe('color: red !important')
    expect(el.nativeView._resetCSSProps).toEqual([])
  })

  it('object with multiple entries', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color: red, margin-right: 10px')
    expect(el.style).toBe('color: red, margin-right: 10px')
    expect(el.nativeView._resetCSSProps).toEqual([])
  })

  it('object had a previous style', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, 'color: yellow', 'color: red')
    expect(el.style).toBe('color: red')
    expect(el.nativeView._resetCSSProps).toEqual(['color'])
  })

  it('object had multiple previous styles', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, 'color: yellow; margin-top: 10px', 'color: red')
    expect(el.style).toBe('color: red')
    expect(el.nativeView._resetCSSProps).toEqual(['color', 'margin-top'])
  })

  it('object style is resetted', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, 'color: yellow', '')
    expect(el.style).toBe(unsetValue)
    expect(el.nativeView._resetCSSProps).toEqual(['color'])
  })
})
