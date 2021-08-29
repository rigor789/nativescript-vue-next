<template>
    <Frame>
        <Page>
            <ActionBar title="My Vue3 App!" />

            <StackLayout ref="stackLayout">
                <Label>Hello World</Label>
                <Button @tap="toggleThing">Tap Here</Button>
                <HelloWorld v-if="showThing" />
            </StackLayout>
        </Page>
    </Frame>
</template>

<script>
import { ref, defineComponent } from 'nativescript-vue'
import HelloWorld from './HelloWorld.vue';

export default defineComponent({
    components: {
        HelloWorld
    },
    setup() {
        const stackLayout = ref(null)

        const showThing = ref(false);
        const toggleThing = () => {
            showThing.value = !showThing.value
        }

        return {
            stackLayout,
            showThing,
            toggleThing,
        };
    },
});
</script>

<style>
label {
    font-size: 24;
    color: #65adf1;
    text-align: center;
}
</style>