import {
  ActionBar,
  h,
  nodeOps,
  render,
  registerTestElement
} from '@nativescript-vue/runtime'
import { NSVElement } from '../../src/nodes'

const elementInstances: TestView[] = []
// todo: figure out the things we need on TestElements
// todo: extract to a helper module
class TestView {
  constructor() {
    elementInstances.push(this)
  }
}
class TestActionBar extends TestView {}

registerTestElement('TestPage', () => {
  return TestView
})
registerTestElement('InternalActionBar', () => {
  return TestActionBar
})

describe('ActionBar', () => {
  it('works', () => {
    const root = nodeOps.createElement('TestPage')
    render(h(ActionBar), root)

    expect(root.childNodes.length).toBe(1)
    expect((root.firstChild as NSVElement).tagName).toBe('internalactionbar')
  })
})
