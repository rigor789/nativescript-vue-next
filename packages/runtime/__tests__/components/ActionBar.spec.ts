import { ActionBar, h, nodeOps, render } from '@nativescript-vue/runtime'
import { NSVElement } from '../../src/nodes'

describe('ActionBar', () => {
  it('works', () => {
    const root = nodeOps.createElement('Page')
    render(h(ActionBar), root)

    expect(root.childNodes.length).toBe(1)
    expect((root.firstChild as NSVElement).tagName).toBe('internalactionbar')
  })
})
