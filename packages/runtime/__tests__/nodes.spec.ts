import { NSVElement, NSVViewFlags } from '../src/nodes'
import { NSVViewMeta } from '../src/registry'

describe('NSVElement', () => {
  it('normalizes tagName when set', () => {
    const elem = new NSVElement('StackLayout')

    expect(elem.tagName).toBe('stacklayout')
  })

  it('caches meta', () => {
    // mock getViewMeta
    const getViewMeta = jest.fn(
      (): NSVViewMeta => {
        return { viewFlags: NSVViewFlags.SKIP_ADD_TO_DOM }
      }
    )
    const orig = require('../src/registry').getViewMeta
    require('../src/registry').getViewMeta = getViewMeta

    //
    const elem = new NSVElement('StackLayout')

    expect(getViewMeta).toHaveBeenCalledTimes(0)
    // @ts-ignore
    expect(elem._meta).toBe(undefined)
    expect(elem.meta.viewFlags).toBe(NSVViewFlags.SKIP_ADD_TO_DOM)
    expect(getViewMeta).toHaveBeenCalledTimes(1)
    expect(elem.meta.viewFlags).toBe(NSVViewFlags.SKIP_ADD_TO_DOM)
    expect(getViewMeta).toHaveBeenCalledTimes(1)

    // reset mock
    require('../src/registry').getViewMeta = orig
  })
})
