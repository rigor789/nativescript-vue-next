<script setup lang="ts">
// import type { INSVElement } from 'nativescript-vue'
import { ref } from 'nativescript-vue'
import { dumpViewTree } from '~/utils/dumpViewTree'
import HelloWorld from './HelloWorld.vue'

const stackLayout = ref()
const showThing = ref(false)

function toggleThing() {
  showThing.value = !showThing.value

  console.log(stackLayout.value!.nativeView)
  console.log(dumpViewTree(stackLayout.value!))
}

function onItemTap(args: any) {
  console.log('Item tapped', args.item)
}

function onTestTap(item: any, index: number, even: boolean, odd: boolean) {
  console.log('Inner button tapped', item, index, even, odd)
}

const items = ['Foo', 'Bar', 'Baz']
</script>

<template>
  <Frame>
    <Page>
      <ActionBar title="My Vue3 App!" />

      <StackLayout class="content" ref="stackLayout">
        <Label class="label">Hello World</Label>
        <Button @tap="toggleThing">Tap Here</Button>
        <HelloWorld v-if="showThing" />

        <ListView
          :items="items"
          @itemTap="onItemTap"
        >
          <template v-slot:default="{ item, index, even, odd }">
            <GridLayout columns="*, 80">
              <Label textWrap="true"> {{ index }} - {{ item }} </Label>
              <Button
                col="1"
                :text="'tap ' + index"
                backgroundColor="#65adf1"
                padding="8"
                @tap="onTestTap(item, index, even, odd)"
              />
            </GridLayout>
          </template>
        </ListView>
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
