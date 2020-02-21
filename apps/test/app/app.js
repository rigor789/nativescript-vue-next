import { createApp, h, dumpOps } from '@nativescript-vue/runtime'

createApp({
    render() {
        return h('Label', {
            text: 'Hello World!',
            textAlignment: 'center',
            verticalAlignment: 'middle'
        })
    },
    mounted() {
        // dumpOps().map(console.log)
    }
}).mount()
