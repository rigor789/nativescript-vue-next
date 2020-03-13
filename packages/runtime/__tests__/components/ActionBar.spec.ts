import { registerTestElement } from 'tests/registry'
import { registerCoreMock } from 'tests/jest.setup'

class TestPage {
  private _ab: any = undefined

  get actionBar(): any {
    return this._ab
  }

  set actionBar(actionBar: any) {
    this._ab = actionBar
  }
}

registerCoreMock('Page', TestPage)
registerTestElement('Frame')
registerTestElement('InternalActionBar')
registerTestElement('Label')
registerTestElement('Page', () => TestPage)

import { h, ActionBar, render } from '@nativescript-vue/runtime'
import { NSVElement } from '../../src/nodes'
import { mockWarn } from '@vue/shared'

describe('ActionBar', () => {
  mockWarn()
  let root: NSVElement
  beforeEach(() => {
    root = new NSVElement('Frame')
  })

  it('sets the actionBar property of the parent Page', () => {
    const actionBar = h(ActionBar)
    const vnode = h('Page', [actionBar])
    render(vnode, root)

    expect(vnode.el.tagName).toBe('page')
    expect(actionBar.el.tagName).toBe('internalactionbar')
    expect(vnode.el.nativeView.actionBar).toBe(actionBar.el.nativeView)
  })
  it('warns if the parent is not a Page', () => {
    const actionBar = h(ActionBar)
    const vnode = h('Label', [actionBar])
    render(vnode, root)

    expect(
      `<ActionBar> must be a direct child of a <Page> element`
    ).toHaveBeenWarned()
  })
  it('accepts children in the default slot', () => {
    const titleView = h('Label')
    const actionBar = h(ActionBar, null, {
      default: () => titleView
    })
    const vnode = h('Page', [actionBar])
    render(vnode, root)

    expect((actionBar.el as NSVElement).childNodes.length).toBe(1)
  })

  it.todo('nodeOps: insert NavigationButton')
  it.todo('nodeOps: insert ActionItem')
  it.todo('nodeOps: insert titleView')
  it.todo('nodeOps: remove NavigationButton')
  it.todo('nodeOps: remove ActionItem')
  it.todo('nodeOps: remove titleView')
})
