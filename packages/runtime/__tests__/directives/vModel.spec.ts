import {
  h,
  render,
  nextTick,
  nodeOps,
  defineComponent,
  vModel,
  withDirectives,
  VNode,
  ref,
} from '../../src/index'

import { NSVElement } from '../../src/nodes'
import { registerTestElement, registerTestLayout } from 'tests/registry'
import { TNSViewBase } from 'tests/ns-mocks/base'

registerTestElement('Frame')
registerTestElement('TextField', () => TNSViewBase, {
  model: {
    prop: 'text',
    event: 'textChange',
  },
})
registerTestLayout('StackLayout')

const triggerEvent = (event: string, el: NSVElement) => {
  el.dispatchEvent(event)
}

const withVModel = (node: VNode, arg: any, mods?: any) => {
  debugger
  return withDirectives(node, [[vModel, arg, '', mods]])
}

const setValue = function (this: any, value: any) {
  this.value = value
}

let root: any

beforeEach(() => {
  root = nodeOps.createElement('Frame') as NSVElement
})

describe('vModel', () => {
  it('should work with TextField', async () => {
    const component = defineComponent({
      data() {
        return { value: 'initial' }
      },
      render() {
        return [
          withVModel(
            h('TextField', {
              'onUpdate:modelValue': setValue.bind(this),
            }),
            this.value
          ),
        ]
      },
    })
    render(h(component), root)
    const textFieldNode = root.childNodes[1]
    const textField = textFieldNode.nativeView as TNSViewBase
    const data = root._vnode.component.data

    textField.set('text', 'foo')
    expect(data.value).toEqual('initial')
    triggerEvent('textChange', textFieldNode)
    await nextTick()
    expect(data.value).toEqual('foo')

    data.value = 'bar'
    await nextTick()
    expect((textField as any)['text']).toEqual('bar')
  })

  it('should work with multiple listeners', async () => {
    const spy = jest.fn()
    const component = defineComponent({
      data() {
        return { value: null }
      },
      render() {
        return [
          withVModel(
            h('TextField', {
              'onUpdate:modelValue': [setValue.bind(this), spy],
            }),
            this.value
          ),
        ]
      },
    })
    render(h(component), root)

    const textFieldNode = root.childNodes[1]
    const textField = textFieldNode.nativeView as TNSViewBase
    const data = root._vnode.component.data

    textField.set('text', 'foo')
    triggerEvent('textChange', textFieldNode)
    await nextTick()
    expect(data.value).toEqual('foo')
    expect(spy).toHaveBeenCalledWith('foo')
  })

  it('should work with updated listeners', async () => {
    const spy1 = jest.fn()
    const spy2 = jest.fn()
    const toggle = ref(true)

    const component = defineComponent({
      render() {
        return [
          withVModel(
            h('TextField', {
              'onUpdate:modelValue': toggle.value ? spy1 : spy2,
            }),
            'foo'
          ),
        ]
      },
    })
    render(h(component), root)

    const textFieldNode = root.childNodes[1]
    const textField = textFieldNode.nativeView as TNSViewBase

    textField.set('text', 'foo')
    triggerEvent('textChange', textFieldNode)
    await nextTick()
    expect(spy1).toHaveBeenCalledWith('foo')

    // udpate listener
    toggle.value = false
    await nextTick()

    textField.set('text', 'bar')
    triggerEvent('textChange', textFieldNode)
    await nextTick()
    expect(spy1).not.toHaveBeenCalledWith('bar')
    expect(spy2).toHaveBeenCalledWith('bar')
  })
  it('should support modifiers', async () => {
    const component = defineComponent({
      data() {
        return { number: null, trim: null, lazy: null }
      },
      render() {
        return [
          withVModel(
            h('TextField', {
              'onUpdate:modelValue': (val: any) => {
                this.number = val
              },
            }),
            this.number,
            {
              number: true,
            }
          ),
          withVModel(
            h('TextField', {
              class: 'trim',
              'onUpdate:modelValue': (val: any) => {
                this.trim = val
              },
            }),
            this.trim,
            {
              trim: true,
            }
          ),
        ]
      },
    })
    render(h(component), root)

    const numberTextFieldNode = root.childNodes[1]
    const trimTextFieldNode = root.childNodes[2]

    const number = numberTextFieldNode.nativeView
    const trim = trimTextFieldNode.nativeView
    const data = root._vnode.component.data

    number.set('text', '+01.2')
    triggerEvent('textChange', numberTextFieldNode)
    await nextTick()
    expect(data.number).toEqual(1.2)

    trim.set('text', '    hello, world    ')
    triggerEvent('textChange', trimTextFieldNode)
    await nextTick()
    expect(data.trim).toEqual('hello, world')
  })
})
