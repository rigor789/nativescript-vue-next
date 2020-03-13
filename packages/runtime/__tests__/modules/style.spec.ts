import { NSVElement } from '../../src/nodes'
import { patchStyle } from '../../src/modules/style'

describe('module style', () => {
  it('string', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color: red')
    expect(el.style).toBe('color: red')
  })

  it('!important', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color: red !important')
    expect(el.style).toBe('color: red !important')
  })

  it('object with multiple entries', () => {
    const el = new NSVElement('StackLayout')
    patchStyle(el, '', 'color: red, margin-right: 10px')
    expect(el.style).toBe('color: red, margin-right: 10px')
  })
})
