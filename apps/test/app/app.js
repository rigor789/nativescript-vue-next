import {createApp, h, dumpOps} from "@nativescript-vue/runtime";
import {run} from 'tns-core-modules/application'
import {Label} from 'tns-core-modules/ui/label/label'

createApp({
    render() {
        return h('Label')
    },
    mounted() {
        console.log(dumpOps())
    }
}).mount();

// placeholder to be able to start the app without NS crashing.
run({
    create() {
        const label = new Label()
        label.text = 'Hello World'
        label.verticalAlignment = 'middle'
        label.textAlignment = 'center'
        return label
    }
})
