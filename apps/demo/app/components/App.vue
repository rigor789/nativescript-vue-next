<template>
  <Frame>
    <Page>
      <ActionBar title="My Vue3 App!" />

      <StackLayout class="content" ref="stackLayout">
        <Label class="label">Hello World</Label>
        <Button @tap="toggleThing">Tap Here</Button>
        <HelloWorld v-if="showThing" />
      </StackLayout>
    </Page>
  </Frame>
</template>

<script setup>
import { ref } from 'nativescript-vue'
import HelloWorld from './HelloWorld.vue'

const stackLayout = ref(null)
const showThing = ref(false)

function toggleThing() {
  showThing.value = !showThing.value

  console.log(stackLayout.value.nativeView)
}
</script>

<style scoped>
/* deep selector to affect Label from HelloWorld */
.content >>> Label {
  padding: 0 24;
  color: #333;
  font-size: 18;
}

/* non-deep selector to affect local Label */
/* order is important because the deep-selector also targets the local Label */
.content > Label {
  font-size: 24;
  color: #65adf1;
  text-align: center;
  margin-top: 20;
}
</style>
