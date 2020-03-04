import { h, render, nodeOps } from '../src'
import { ELEMENT_REF } from '@nativescript-vue/runtime'
import { Frame } from '@nativescript/core/ui/frame'
import { NSVNodeTypes } from '../src/nodes'

describe('createElement', () => {
  test('NSVElement node has the right data', () => {
    const root = nodeOps.createElement('frame')
    expect(root.tagName).toBe('frame')
    expect(root.nativeView instanceof Frame).toBe(true)
    expect(root.nativeView[ELEMENT_REF]).toBe(root)
    expect(root.childNodes.length).toBe(0)
    // TODO: Complete
  })
  test('NSVText text has the right data', () => {
    const root = nodeOps.createText('hello world')
    // expect(root.tagName).toBe(undefined)
    // expect(root.nativeView).toBe(undefined)
    expect(root.childNodes.length).toBe(0)
    expect(root.text).toBe('hello world')
  })
  test('NSVComment comment has the right data', () => {
    const root = nodeOps.createComment('hello world')
    // expect(root.tagName).toBe(undefined)
    // expect(root.nativeView).toBe(undefined)
    expect(root.childNodes.length).toBe(0)
    expect(root.text).toBe('hello world')
  })
  test('NSVRoot has the right data', () => {
    const root = nodeOps.createRoot()
    expect(root.nodeType).toBe(NSVNodeTypes.ROOT)
  })
  test('NSVElement is rendered correctly', () => {
    const root = nodeOps.createElement('frame')
    const wrapper = () => h('label')
    render(wrapper(), root)
    // TODO: Complete
  })
  test('NSVElement - appendChild', () => {
    const root = nodeOps.createElement('StackLayout')
    const child = nodeOps.createElement('Label')
    expect(root.childNodes.length).toBe(0)
    root.appendChild(child)
    expect(root.childNodes.length).toBe(1)
    expect(child.parentNode).toBe(root)
    expect(root.firstChild).toBe(child)
    expect(root.lastChild).toBe(child)
  })
  test('NSVElement - insertBefore', () => {
    const root = nodeOps.createElement('StackLayout')
    const child = nodeOps.createElement('Label')
    const child2 = nodeOps.createElement('Label')

    expect(root.childNodes.length).toBe(0)

    // insert without anchor
    root.insertBefore(child, null)

    expect(root.childNodes.length).toBe(1)
    expect(child.parentNode).toBe(root)
    expect(root.firstChild).toBe(child)
    expect(root.lastChild).toBe(child)

    // insert with anchor
    root.insertBefore(child2, child)

    expect(root.childNodes.length).toBe(2)
    expect(child2.parentNode).toBe(root)
    expect(root.firstChild).toBe(child2)
    expect(root.lastChild).toBe(child)
  })
  // TODO: Complete
})
