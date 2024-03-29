import { patchEvent } from '../../src/modules/events'
import { nextTick } from '@vue/runtime-core'
import { registerTestElement } from '@nativescript-vue/test-utils'
import { NSVElement } from '../../src/nodes'

registerTestElement('Button')

describe(`events`, () => {
  it('should assign event handler', async () => {
    const el = new NSVElement('Button')
    const event = 'tap'
    const fn = jest.fn()
    patchEvent(el, 'onTap', null, fn)
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
    const event = 'tap'
    const prevFn = jest.fn()
    const nextFn = jest.fn()
    patchEvent(el, 'onTap', null, prevFn)
    el.dispatchEvent(event)
    patchEvent(el, 'onTap', prevFn, nextFn)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    expect(prevFn).toHaveBeenCalledTimes(1)
    expect(nextFn).toHaveBeenCalledTimes(2)
  })

  it('should support multiple event handlers', async () => {
    const el = new NSVElement('Button')
    const event = 'tap'
    const fn1 = jest.fn()
    const fn2 = jest.fn()
    patchEvent(el, 'onTap', null, [fn1, fn2])
    el.dispatchEvent(event)
    await nextTick()
    expect(fn1).toHaveBeenCalledTimes(1)
    expect(fn2).toHaveBeenCalledTimes(1)
  })

  it('should unassign event handler', async () => {
    const el = new NSVElement('Button')
    const event = 'tap'
    const fn = jest.fn()
    patchEvent(el, 'onTap', null, fn)
    patchEvent(el, 'onTap', fn, null)
    el.dispatchEvent(event)
    await nextTick()
    expect(fn).not.toHaveBeenCalled()
  })

  it('should support event options', async () => {
    const el = new NSVElement('Button')
    const event = 'tap'
    const fn = jest.fn()
    const nextValue = fn
    patchEvent(el, 'onTapOnce', null, nextValue)
    el.dispatchEvent(event)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should support varying event options', async () => {
    const el = new NSVElement('Button')
    const event = 'tap'
    const prevFn = jest.fn()
    const nextFn = jest.fn()
    const nextValue = nextFn
    patchEvent(el, 'onTapOnce', null, prevFn)
    patchEvent(el, 'onTapOnce', prevFn, nextValue)
    el.dispatchEvent(event)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    expect(prevFn).not.toHaveBeenCalled()
    expect(nextFn).toHaveBeenCalledTimes(1)
  })

  it('should unassign event handler with options', async () => {
    const el = new NSVElement('Button')
    const event = 'tap'
    const fn = jest.fn()
    const nextValue = fn
    patchEvent(el, 'onTapOnce', null, nextValue)
    patchEvent(el, 'onTapOnce', nextValue, null)
    el.dispatchEvent(event)
    await nextTick()
    el.dispatchEvent(event)
    await nextTick()
    expect(fn).not.toHaveBeenCalled()
  })
})
