import { NSVElement } from '../../src/nodes'
import { registerCoreMock } from '../../../../tests/jest.setup'
import {
  ActionBar,
  h,
  nodeOps,
  registerTestElement,
  render
} from '@nativescript-vue/runtime'

class TestPage {
  private hasSetActionBar = false

  get actionBar(): any {
    return this.hasSetActionBar
  }

  set actionBar(actionBar: any) {
    this.hasSetActionBar = true
  }
}

registerCoreMock('Page', TestPage)

describe('ActionBar', () => {
  it('works', async () => {
    registerTestElement('Page', () => TestPage)
    const root = nodeOps.createElement('Frame')

    render(h('Page', [h(ActionBar)]), root)

    // expect(root.childNodes.length).toBe(1)
    // expect((root.firstChild!.firstChild as NSVElement).tagName).toBe('internalactionbar')
    // // @ts-ignore
    // expect((root.firstChild!.nativeView as unknown as TestPage).actionBar).toBe(true)
  })
})
