import {
    createApp,
    h,
    ref,
    onUnmounted,
    onMounted
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
                        'GridLayout',
                        {
                            rows: '*, *'
                        },
                        [
                            h('ContentView', [content()]),
                            h('ContentView', { row: 1 }, [content()])
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
        const style1 = 'font-size: 14'
        const style2 = 'font-size: 20; text-decoration: underline'
        const inlineStyle = ref(style1)
        useInterval(() => {
            counter.value++
            p.value++
            labelClass.value = labelClass.value === 'red' ? 'green' : 'red'
            inlineStyle.value = inlineStyle.value == style1 ? style2 : style1
            if (p.value > 3) {
                p.value = 0
            }
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
            inlineStyle
        }
    }
}).mount()
