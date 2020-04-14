import { h, render, nodeOps } from '@nativescript-vue/runtime'
import { NSVElement, NSVNodeTypes } from '../src/nodes'
import { serializeInner } from './serialize'
import { registerTestElement, registerTestLayout } from 'tests/registry'

registerTestElement('Frame')
registerTestElement('Label')
registerTestLayout('StackLayout')

describe('renderer: fragment', () => {
  it('should create an element', () => {
    const root = nodeOps.createElement('Frame') as NSVElement
    render(h('StackLayout'), root)
    expect(serializeInner(root)).toBe('<stacklayout></stacklayout>')
  })

  it('should create an element with props', () => {
    const root = nodeOps.createElement('Frame') as NSVElement
    render(h('StackLayout', { id: 'foo', class: 'bar' }), root)
    expect(serializeInner(root)).toBe(
      '<stacklayout id="foo" class="bar"></stacklayout>'
    )
  })

  it('should create an element with text', () => {
    const root = nodeOps.createElement('Frame') as NSVElement
    render(h('StackLayout', ['foo', ' ', 'bar']), root)
    expect(serializeInner(root)).toBe(
      '<stacklayout text="foo bar">foo bar</stacklayout>'
    )
  })

  it('should create an element with text and props', () => {
    const root = nodeOps.createElement('Frame') as NSVElement
    render(h('StackLayout', { id: 'foo' }, ['bar']), root)
    expect(serializeInner(root)).toBe(
      '<stacklayout id="foo" text="bar">bar</stacklayout>'
    )
  })

  it('should allow returning multiple component root nodes', () => {
    const App = {
      render() {
        return [h('Label', 'one'), 'two']
      }
    }

    const root = nodeOps.createElement('Frame') as NSVElement
    render(h(App), root)

    expect(serializeInner(root)).toBe(`<label text="one"></label>two`)
    expect(root.childNodes.length).toBe(4)
    expect(root.childNodes[0]).toMatchObject({
      nodeType: NSVNodeTypes.TEXT,
      text: ''
    })
    debugger
    expect(root.childNodes[1]).toMatchObject({
      nodeType: NSVNodeTypes.ELEMENT,
      _tagName: 'label'
    })
    expect(root.childNodes[2]).toMatchObject({
      nodeType: NSVNodeTypes.TEXT,
      text: 'two'
    })
    expect(root.childNodes[3]).toMatchObject({
      nodeType: NSVNodeTypes.TEXT,
      text: ''
    })
  })
})
