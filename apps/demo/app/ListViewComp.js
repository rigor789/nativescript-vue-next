import { ListView } from 'nativescript-vue'

const randomText = () => {
  let length = Math.floor(Math.random() * 200) + 20
  let result = ''
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export default {
  components: {
    ListView,
  },
  template: `
<ListView :items="items2" @itemTap="onItemTap">
  <template v-slot:default="{item, index, even, odd}">
    <GridLayout columns="*, auto">
      <Label textWrap="true">
          {{ index }} - {{ item }}
      </Label>
      <Button col="1" :text="'tap ' + index" @tap="onTestTap(item, index, even, odd)"/>
    </GridLayout>
  </template>
  <!--<template v-slot:other="{item}">-->
  <!--  <Label >{{ item }}Other</Label>-->
  <!--</template>-->
</ListView>`,
  data() {
    return {
      items2: [
        ...Array(200)
          .fill('')
          .map((item, index) => `Item ${index}\n${randomText()}`),
      ],
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
        'Item 11',
        'Item 12',
        'Item 13',
        'Item 14',
        'Item 15',
        'Item 16',
        'Item 17',
        'Item 18',
        'Item 19',
      ],
    }
  },
  methods: {
    onItemTap(event) {
      console.log(`Tapped ${event.item}`)
    },
    onTestTap(item, index, even, odd) {
      console.log(`Test tap ${index}! (${item}, ${index}, ${even}, ${odd})`)
    },
  },
}
