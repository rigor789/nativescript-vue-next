import { createApp, h, ref } from '@nativescript-vue/runtime'

const app = createApp({
    render() {
        const button = attrs => {
            return h(
                'Button',
                {
                    ...attrs,
                    onTap() {
                        console.log('tapped')
                        alert('tapped')
                    }
                },
                ['Tap Me']
            )
        }
        return h('StackLayout', { paddingTop: 48 }, [
            h('Label', { text: this.toggler.toString() }),
            button({ style: 'font-size: 24;' })
        ])
    },
    setup() {
        const toggler = ref(true)
        setInterval(() => {
            toggler.value = !toggler.value
        }, 1000)

        return {
            toggler
        }
    }
}).mount()
