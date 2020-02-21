import { createApp, h, ref, onUnmounted } from '@nativescript-vue/runtime'

createApp({
    render() {
        return h('Label', {
            text: 'Hello World: ' + this.counter,
            textAlignment: 'center',
            verticalAlignment: 'middle'
        })
    },
    setup() {
        const counter = ref(0)

        const interval = setInterval(() => counter.value++, 1000)
        onUnmounted(() => clearInterval(interval))

        return {
            counter
        }
    }
}).mount()
