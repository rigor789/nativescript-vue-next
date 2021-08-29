import { Trace } from '@nativescript/core'

import {
  $showModal,
  createApp,
  defineComponent,
  h,
  onMounted,
  onUnmounted,
  ref,
  vModel,
  withDirectives,
  getCurrentInstance,
} from 'nativescript-vue'

import Comp from './Comp'
import Tabs from './Tabs'
import BottomNavigation from './BottomNavigation'
import ListViewComp from './ListViewComp'
import Test from './Test'

// todo: figure out why isOn is undefined in Vue - causes a crash...
// global.isOn = (name) => name.startsWith('on')

const withVModel = (node, arg, mods) =>
  withDirectives(node, [[vModel, arg, '', mods]])

const testComp = defineComponent({
  data() {
    return {
      toggle: true,
      msg: 'Hello World!',
    }
  },
  template: `<StackLayout v-bind="$attrs">
    <Button text="Hello Button" @tap="tapHandler(true)"/>
    <Label text="Compiled label from template" v-show="toggle" />
    <TextField v-model="msg"/>
    <Label :text="msg" />
    <Label v-text="'Label with v-text...!?!?!?'" v-on:tap="tapHandler(false)" />
</StackLayout>`,
  methods: {
    tapHandler(isButton = false) {
      this.toggle = !this.toggle
      if (isButton) {
        console.log('tap handler has fired for button!')
      } else {
        console.log('tap handler has fired!')
      }
    },
  },
})

// trace.setCategories(trace.categories.Debug)
Trace.setCategories('ListView')
Trace.enable()

function useInterval(cb, ms) {
  const interval = setInterval(cb, ms)
  onUnmounted(() => clearInterval(interval))
}

const app = createApp({
  render() {
    return h('StackLayout', h(Test))
    return h('Button', {
      text: 'Open Modal',
      onTap() {
        $showModal({
          render() {
            return h('Label', {
              text: 'Im a modal!',
              onTap: () => this.$modal.close('yay'),
            })
          },
        }).then((data) => {
          console.log('closed modal with data', data)
        })
      },
    })

    return h('frame', h('page', h(BottomNavigation)))
    return h(
      'label',
      h('formattedString', [
        h('span', { text: 'Hello' }),
        h('span', { text: 'World' }),
        this.toggler ? h('Span', { text: 'Yay' }) : null,
      ])
    )
    return h('frame', h('page', h(Tabs)))
    return h('frame', h('page', h(Comp)))
    return h({
      template: `<Label verticalAlignment="middle" textAlignment="center"><FormattedString>
<Span text="Cool" />
<Span text="is" color="red" fontWeight="bold"/>
<Span text="Cool" color="blue" textDecoration="underline"/>
</FormattedString></Label>`,
    })
    return h('GridLayout', h(ListViewComp))

    const labelAt = (row, col) =>
      h('Label', {
        text: 'Hello World: ' + this.counter,
        textAlignment: 'center',
        verticalAlignment: 'middle',
        class: this.labelClass,
        style: this.inlineStyle,
        row,
        col,
      })

    const labelsTest = () =>
      h(
        'GridLayout',
        {
          rows: '*, *',
          columns: '*, *',
        },
        [
          // label(0, 0),
          this.p === 0 ? null : labelAt(0, 0),
          //'text node?',
          this.p === 1 ? null : labelAt(0, 1),
          this.p === 2 ? null : labelAt(1, 0),
          this.p === 3 ? null : labelAt(1, 1),
        ]
      )

    const textNodesTest = (attrs) =>
      h(
        'Label',
        {
          ...attrs,
          style: 'font-size: 14;',
          textWrap: true,
        },
        [
          'Text nodes: ',
          this.counter,
          this.toggler ? ' ON' : ' OFF',
          ' | ',
          this.toggler.toString(),
          ' | ',
          this.toggler ? null : '\nFALSE',
        ]
      )

    const toggleAttrTest = (attrs, condition) =>
      h('Label', {
        text: 'Hello World',
        ref: 'test',
        ...attrs,
        ...(condition
          ? {
              textWrap: true,
              fontSize: 40,
              padding: 30,
              borderWidth: 2,
              customProperty: 'TESTING',
              'android:borderColor': 'red',
              'ios:borderColor': 'blue',
            }
          : {}),
      })

    const buttonsTest = (attrs) =>
      h(
        'StackLayout',
        {
          orientation: 'horizontal',
          ...attrs,
        },
        [
          h(
            'Button',
            {
              ...attrs,
              onTap() {
                alert('Tapped')
              },
            },
            ['Tap me']
          ),
          h(
            'Button',
            {
              ...attrs,
              onTap: {
                handler: () => {
                  alert('Tapped. In next tap this dialog will not appear')
                },
                options: {
                  once: true,
                },
              },
            },
            ['Tap me once']
          ),
        ]
      )

    const vModelTest = (attrs) =>
      h(
        'StackLayout',
        {
          ...attrs,
        },
        [
          h('Label', { text: this.inputText }),
          withVModel(
            h('TextField', {
              'onUpdate:modelValue': (v) => {
                this.inputText = v
              },
            }),
            this.inputText
          ),
        ]
      )

    return h('Frame', [
      h(
        'Page',
        {
          css: '.red { color: #E53E3E; }, .green { color: #38A169; }',
        },
        [
          // h(
          //     ActionBar,
          //     { title: 'Custom' },
          //     {
          //         default: () => [
          //             this.toggler
          //                 ? h('NavigationButton', {
          //                       text: 'NB1',
          //                       'android.systemIcon': 'ic_menu_back'
          //                   })
          //                 : h('NavigationButton', {
          //                       text: 'NB2',
          //                       'android.systemIcon':
          //                           'ic_media_previous'
          //                   }),
          //
          //             h('ActionItem', { text: 'test1' }),
          //             this.toggler &&
          //                 h('ActionItem', { text: 'test2' }),
          //             h('ActionItem', { text: 'test3' }),
          //             this.toggler
          //                 ? h('ActionItem', { text: 'ON' })
          //                 : h('ActionItem', { text: 'OFF' }),
          //
          //             !this.toggler && h('Label', { text: 'Custom' })
          //         ]
          //     }
          // ),

          h(
            'GridLayout',
            {
              rows: '*, auto, *, auto, auto, auto',
            },
            [
              h('ContentView', { row: 0 }, [labelsTest()]),
              textNodesTest({ row: 1 }),
              toggleAttrTest({ row: 2 }, this.toggler),
              buttonsTest({ row: 3 }),
              vModelTest({ row: 4 }),
              h(testComp, { row: 5 }),
            ]
          ),
        ]
      ),
    ])
  },
  setup() {
    // reactive data
    const counter = ref(0)
    const p = ref(0)
    const labelClass = ref('red')
    const style1 = 'font-size: 16; transform: rotate(45deg);'
    const style2 = 'font-size: 20; text-decoration: underline;'
    const inlineStyle = ref(style1)
    const toggler = ref(true)

    // polling task that changes the reactive data to
    // test how the app respond to these changes
    useInterval(() => {
      counter.value++
      p.value++
      labelClass.value = labelClass.value === 'red' ? 'green' : 'red'
      inlineStyle.value = inlineStyle.value === style1 ? style2 : style1
      if (p.value > 3) {
        p.value = 0
      }
      toggler.value = !toggler.value
    }, 2000)

    onMounted(() => {
      // dump the Node tree
      // setTimeout(() => {
      //   console.log(JSON.stringify(dumpViewTree(app.$el), null, 2))
      // }, 1000)
    })

    let inputText = ref('Text to change')

    return {
      counter,
      p,
      labelClass,
      inlineStyle,
      toggler,
      inputText,
    }
  },
}).start()
