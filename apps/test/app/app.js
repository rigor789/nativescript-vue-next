import {
    createApp,
    h,
    ref,
    onUnmounted,
    onMounted,
    ActionBar,
    defineComponent,
    compile
} from 'nativescript-vue'

const testComp = defineComponent({
    template: `<StackLayout v-bind="$attrs">
    <Button text="Hello Button" />
    <Label text="Compiled label from template" />
    <Label text="Another Compiled label from template" />
</StackLayout>`
})

console.log(compile('<StackLayout/>').toString())

function dumpViewTree(root) {
    const mapNode = node => {
        return {
            id: node.nodeId,
            type: node.tagName ? node.tagName : node.nodeType,
            text: node.text,
            children: node.childNodes.map(mapNode)
        }
    }
    return root.childNodes.map(mapNode)
}

function useInterval(cb, ms) {
    const interval = setInterval(cb, ms)
    onUnmounted(() => clearInterval(interval))
}

const app = createApp({
    render() {
        const labelAt = (row, col) =>
            h('Label', {
                text: 'Hello World: ' + this.counter,
                textAlignment: 'center',
                verticalAlignment: 'middle',
                class: this.labelClass,
                style: this.inlineStyle,
                row,
                col
            })

        const labelsTest = () =>
            h(
                'GridLayout',
                {
                    rows: '*, *',
                    columns: '*, *'
                },
                [
                    // label(0, 0),
                    this.p === 0 ? null : labelAt(0, 0),
                    //'text node?',
                    this.p === 1 ? null : labelAt(0, 1),
                    this.p === 2 ? null : labelAt(1, 0),
                    this.p === 3 ? null : labelAt(1, 1)
                ]
            )

        const textNodesTest = attrs =>
            h(
                'Label',
                {
                    ...attrs,
                    style: 'font-size: 14;',
                    textWrap: true
                },
                [
                    'Text nodes: ',
                    this.counter,
                    this.toggler ? ' ON' : ' OFF',
                    ' | ',
                    this.toggler.toString(),
                    ' | ',
                    this.toggler ? null : '\nFALSE'
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
                          fontSize: 60,
                          padding: 60,
                          borderWidth: 2,
                          customProperty: 'TESTING',
                          'android:borderColor': 'red',
                          'ios:borderColor': 'blue'
                      }
                    : {})
            })

        const buttonsTest = attrs =>
            h(
                'Button',
                {
                    ...attrs,
                    onTap() {
                        alert('Tapped')
                    }
                },
                ['Click me']
            )

        return h('Frame', [
            h(
                'Page',
                {
                    css: '.red { color: #E53E3E; }, .green { color: #38A169; }'
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
                            rows: '*, auto, *, auto, auto, auto'
                        },
                        [
                            h('ContentView', { row: 0 }, [labelsTest()]),
                            textNodesTest({ row: 1 }),
                            toggleAttrTest({ row: 2 }, this.toggler),
                            buttonsTest({ row: 3 }),
                            h(
                                'Button',
                                {
                                    row: 4,
                                    onTap() {
                                        console.log('TAPPED')
                                    }
                                },
                                ['Click me']
                            ),
                            h(testComp, { row: 5 })
                        ]
                    )
                ]
            )
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
            setTimeout(() => {
                console.log(JSON.stringify(dumpViewTree(app.$el), null, 2))
            }, 1000)
        })

        return {
            counter,
            p,
            labelClass,
            inlineStyle,
            toggler
        }
    }
}).mount()
