import { patchEvent } from '../../src/modules/events'
import { nextTick } from '@vue/runtime-core'
import { registerTestElement } from 'tests/registry'
import { NSVElement } from '../../src/nodes'

registerTestElement('Button')

describe(`events`, () => {
  it('should assign event handler', async () => {
    const el = new NSVElement('Button')
    const event = 'click'
    const fn = jest.fn()
    patchEvent(el, 'click', null, fn)
    el.dispatchEvent(event)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it('should update event handler', async () => {
    const el = new NSVElement('Button')
    const event = 'click'
    const prevFn = jest.fn()
    const nextFn = jest.fn()
    patchEvent(el, 'click', null, prevFn)
    el.dispatchEvent(event)
    patchEvent(el, 'click', prevFn, nextFn)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    expect(prevFn).toHaveBeenCalledTimes(1)
    expect(nextFn).toHaveBeenCalledTimes(2)
  })
})
