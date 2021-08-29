import { registerTestLayout } from '@nativescript-vue/test-utils'

import { NSVElement, NSVRoot, NSVViewFlags } from '../src/nodes'
import { NSVViewMeta } from '../src/registry'

registerTestLayout('StackLayout')
registerTestLayout('Label')

describe('NSVElement', () => {
  it('normalizes tagName when set', () => {
    const elem = new NSVElement('StackLayout')

    expect(elem.tagName).toBe('stacklayout')
  })

  it('caches meta', () => {
    // mock getViewMeta
    const getViewMeta = jest.fn((): NSVViewMeta => {
      return { viewFlags: NSVViewFlags.SKIP_ADD_TO_DOM }
    })
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

  it('returns firstChild/lastChild', () => {
    const elem = new NSVElement('StackLayout')
    const child = new NSVElement('Label')
    const child2 = new NSVElement('Label')

    expect(elem.firstChild).toBe(null)
    expect(elem.lastChild).toBe(null)

    elem.appendChild(child)

    expect(elem.firstChild).toBe(child)
    expect(elem.lastChild).toBe(child)

    elem.appendChild(child2)

    expect(elem.firstChild).toBe(child)
    expect(elem.lastChild).toBe(child2)
  })

  it('returns prevSibling/nextSibling', () => {
    const elem = new NSVElement('StackLayout')
    const child1 = new NSVElement('Label')
    const child2 = new NSVElement('Label')
    const child3 = new NSVElement('Label')

    expect(child1.prevSibling).toBe(null)
    expect(child1.nextSibling).toBe(null)

    expect(child2.prevSibling).toBe(null)
    expect(child2.nextSibling).toBe(null)

    expect(child3.prevSibling).toBe(null)
    expect(child3.nextSibling).toBe(null)

    elem.appendChild(child1)
    elem.appendChild(child2)
    elem.appendChild(child3)

    expect(child1.prevSibling).toBe(null)
    expect(child1.nextSibling).toBe(child2)

    expect(child2.prevSibling).toBe(child1)
    expect(child2.nextSibling).toBe(child3)

    expect(child3.prevSibling).toBe(child2)
    expect(child3.nextSibling).toBe(null)

    elem.removeChild(child2)

    expect(child1.prevSibling).toBe(null)
    expect(child1.nextSibling).toBe(child3)

    expect(child2.prevSibling).toBe(null)
    expect(child2.nextSibling).toBe(null)

    expect(child3.prevSibling).toBe(child1)
    expect(child3.nextSibling).toBe(null)
  })

  it('insertBefore falls back to appendChild if anchor not found', () => {
    const elem = new NSVElement('StackLayout')
    const child = new NSVElement('Label')
    const anchor = new NSVElement('Label')

    elem.appendChild = jest.fn()

    elem.insertBefore(child, anchor)
    expect(elem.appendChild).toHaveBeenCalled()
  })

  it('insertBefore removes child from previous parent', () => {
    const parent = new NSVElement('StackLayout')
    const child = new NSVElement('Label')
    const anchor = new NSVElement('Label')
    const newParent = new NSVElement('StackLayout')

    // mock removeChild of parent
    parent.removeChild = jest.fn()

    // setup
    child.parentNode = parent

    newParent.appendChild(anchor)
    newParent.insertBefore(child, anchor)

    expect(newParent.childNodes.length).toBe(2)
    expect(newParent.childNodes[0]).toBe(child)
    expect(parent.removeChild).toHaveBeenCalledTimes(1)
  })

  it('removeChild removes child', () => {
    const parent = new NSVElement('StackLayout')
    const child = new NSVElement('Label')

    parent.removeChild(child)
    expect(child.parentNode).toBe(null)
    expect(parent.childNodes.length).toBe(0)

    parent.appendChild(child)
    expect(child.parentNode).toBe(parent)
    expect(parent.childNodes.length).toBe(1)

    parent.removeChild(child)
    expect(child.parentNode).toBe(null)
    expect(parent.childNodes.length).toBe(0)
  })
})

describe('NSVRoot', () => {
  it('appendChild sets el', () => {
    const root = new NSVRoot()
    const child = new NSVElement('Label')

    expect(root.childNodes.length).toBe(0)
    root.appendChild(child)
    expect(root.el).toBe(child)
  })
})
