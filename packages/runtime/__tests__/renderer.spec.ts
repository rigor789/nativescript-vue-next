import { h, render, nodeOps } from '@nativescript-vue/runtime'
import { NSVElement, NSVNodeTypes } from '../src/nodes'
import { serializeInner } from './serialize'
import {
  registerTestElement,
  registerTestLayout,
} from '@nativescript-vue/test-utils'

registerTestElement('Frame')
registerTestElement('Label')
registerTestLayout('StackLayout')

const EMPTY_TEXT_NODE = {
  nodeType: NSVNodeTypes.TEXT,
  text: '',
}

const LABEL_ELEMENT_NODE = {
  nodeType: NSVNodeTypes.ELEMENT,
  tagName: 'label',
}

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

  it('should merge multiple text children', () => {
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
        return [h('Label', 'one'), h('Label', 'two')]
      },
    }

    const root = nodeOps.createElement('Frame') as NSVElement
    render(h(App), root)

    expect(serializeInner(root)).toBe(
      `<label text="one"></label><label text="two"></label>`
    )
    expect(root.childNodes.length).toBe(4)
    expect(root.childNodes[0]).toMatchObject(EMPTY_TEXT_NODE)
    expect(root.childNodes[1]).toMatchObject(LABEL_ELEMENT_NODE)
    expect(root.childNodes[2]).toMatchObject(LABEL_ELEMENT_NODE)
    expect(root.childNodes[3]).toMatchObject(EMPTY_TEXT_NODE)
  })
})
