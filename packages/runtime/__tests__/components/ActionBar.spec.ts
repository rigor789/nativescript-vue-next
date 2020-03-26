import { VNode } from '@vue/runtime-core'
import { INSVElement } from '@nativescript-vue/runtime'
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
    const vnode = h('Page', [actionBar]) as VNode
    const el = vnode.el as INSVElement
    const actionBarEl = actionBar.el as INSVElement
    render(vnode, root)

    expect(el.tagName).toBe('page')
    expect(actionBarEl.tagName).toBe('internalactionbar')
    expect((el.nativeView as any).actionBar).toBe(actionBarEl.nativeView)
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
