import {
    createApp,
    h,
    ref,
    onMounted,
    onUnmounted,
    dumpOps
} from '@nativescript-vue/runtime'

const dumpDebug = () =>
    dumpOps().map(op => {
        if (op.nodeType) {
            console.log(
                `  +++ ${op.type}${op.nodeType[0].toUpperCase() +
                    op.nodeType.substr(1)}(${op.tag})`
            )
        } else {
            console.log(`  +++ ${op.type}`)
        }
    })

createApp({
    render() {
        return h('Label', {
            text: 'Hello World: ' + this.counter,
            textAlignment: 'center',
            verticalAlignment: 'middle'
        })
    },
    setup() {
        onMounted(dumpDebug)

        const counter = ref(0)

        const interval = setInterval(() => counter.value++, 1000)
        onUnmounted(() => clearInterval(interval))

        return {
            counter
        }
    }
}).mount()
