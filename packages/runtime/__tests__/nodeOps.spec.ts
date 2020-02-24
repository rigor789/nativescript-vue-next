import { h, render, nodeOps } from '../src'

describe('createElement', () => {
  test('NSVElement has the right tag name', () => {
    const root = nodeOps.createElement('frame')
    expect(root.tagName).toBe('frame')
    const wrapper = () => h('label')
    render(wrapper(), root)
    // TODO: Complete
  })
})
