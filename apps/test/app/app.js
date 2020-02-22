import { createApp, h, ref, onUnmounted } from '@nativescript-vue/runtime'

function useInterval(cb, ms) {
    const interval = setInterval(cb, ms)
    onUnmounted(() => clearInterval(interval))
}

createApp({
    render() {
        const label = h('Label', {
            text: 'Hello World: ' + this.counter,
            textAlignment: 'center',
            verticalAlignment: 'middle'
        })
        return h(
            'StackLayout',
            {
                verticalAlignment: 'middle'
            },
            [
                label,
                label,
                label,
                h(
                    'StackLayout',
                    {
                        horizontalAlignment: 'center',
                        orientation: 'horizontal',
                        marginTop: 20
                    },
                    [label, label]
                )
            ]
        )
    },
    setup() {
        const counter = ref(0)
        useInterval(() => counter.value++, 1000)

        return {
            counter
        }
    }
}).mount()
