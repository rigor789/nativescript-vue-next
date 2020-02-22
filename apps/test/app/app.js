import { createApp, h, ref, onUnmounted } from '@nativescript-vue/runtime'

function useInterval(cb, ms) {
    const interval = setInterval(cb, ms)
    onUnmounted(() => clearInterval(interval))
}

createApp({
    render() {
        const label = (row, col) =>
            h('Label', {
                text: 'Hello World: ' + this.counter,
                textAlignment: 'center',
                verticalAlignment: 'middle',
                row,
                col
            })

        return h('Page', [
            h(
                'GridLayout',
                {
                    rows: '*, *',
                    columns: '*, *'
                },
                [label(0, 0), label(0, 1), label(1, 0), label(1, 1)]
            )
        ])
    },
    setup() {
        const counter = ref(0)
        useInterval(() => counter.value++, 1000)

        return {
            counter
        }
    }
}).mount()
