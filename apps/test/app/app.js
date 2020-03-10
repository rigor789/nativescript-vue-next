import {
    createApp,
    h,
    ref,
    onUnmounted,
    onMounted,
    ActionBar
} from '@nativescript-vue/runtime'

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
        const label = (row, col) =>
            h(
                'Label',
                {
                    text: 'Hello World: ' + this.counter,
                    textAlignment: 'center',
                    verticalAlignment: 'middle',
                    class: this.labelClass,
                    style: this.inlineStyle,
                    row,
                    col
                }
                // ['Hello World: ' + this.counter]
            )

        const content = () =>
            h(
                'GridLayout',
                {
                    rows: '*, *',
                    columns: '*, *'
                },
                [
                    // label(0, 0),
                    this.p === 0 ? null : label(0, 0),
                    //'text node?',
                    this.p === 1 ? null : label(0, 1),
                    this.p === 2 ? null : label(1, 0),
                    this.p === 3 ? null : label(1, 1)
                ]
            )

        return h('Frame', [
            h(
                'Page',
                {
                    css: '.red { color: #E53E3E; }, .green { color: #38A169; }'
                },
                [
                    h(
                        ActionBar,
                        { title: 'Custom' },
                        {
                            default: () => [
                                this.toggler
                                    ? h('NavigationButton', {
                                          text: 'NB1',
                                          'android.systemIcon': 'ic_menu_back'
                                      })
                                    : h('NavigationButton', {
                                          text: 'NB2',
                                          'android.systemIcon':
                                              'ic_media_previous'
                                      }),

                                h('ActionItem', { text: 'test1' }),
                                this.toggler &&
                                    h('ActionItem', { text: 'test2' }),
                                h('ActionItem', { text: 'test3' }),
                                this.toggler
                                    ? h('ActionItem', { text: 'ON' })
                                    : h('ActionItem', { text: 'OFF' }),

                                !this.toggler && h('Label', { text: 'Custom' })
                            ]
                        }
                    ),

                    h(
                        'GridLayout',
                        {
                            rows: '*, *, auto'
                        },
                        [
                            h('ContentView', [content()]),
                            h('ContentView', { row: 1 }, [content()]),
                            h(
                                'Label',
                                {
                                    row: 2,
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
                        ]
                    )
                ]
            )
        ])
    },
    setup() {
        const counter = ref(0)
        const p = ref(0)
        const labelClass = ref('red')
        const style1 = 'font-size: 16; transform: rotate(45deg);'
        const style2 = 'font-size: 20; text-decoration: underline;'
        const inlineStyle = ref(style1)
        const toggler = ref(true)
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
