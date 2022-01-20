<script setup lang="ts">
import { ref, NSVElement } from 'nativescript-vue'
import HelloWorld from './HelloWorld.vue'

const stackLayout = ref<NSVElement>()
const showThing = ref(false)

function toggleThing() {
  showThing.value = !showThing.value

  console.log(stackLayout.value!.nativeView)
}
</script>

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

<style scoped>
/* deep selector to affect Label from HelloWorld */
.content >>> Label {
  padding: 0 24;
  color: #333;
  font-weight: bold;
  font-size: 18;
  text-transform: uppercase;
}

/* non-deep selector to affect local Label */
/* order is important because the deep-selector also targets the local Label */
.content > Label {
  font-size: 24;
  color: #65adf1;
  font-weight: normal;
  text-align: center;
  margin-top: 20;
  text-transform: none;
}
</style>
