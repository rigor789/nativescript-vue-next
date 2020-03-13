import { Style } from '@nativescript/core/ui/core/properties'
import { NSVElement } from '../../src/nodes'
import { patchStyle } from '../../src/modules/style'

describe('module style', () => {
  it('string', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color:red')
    expect((el.style as Style).color.name).toBe('red')
  })

  it('!important', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color: red !important')
    expect((el.style as Style).toString()).toBe('color: red !important')
  })

  it('object with multiple entries', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color: red, margin-right: 10px')
    expect((el.style as Style).color.name).toBe('red')
    expect((el.style as Style).marginRight).toBe('10px')
  })
})
