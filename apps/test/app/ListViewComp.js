import { ListView } from 'nativescript-vue'

export default {
  components: {
    ListView,
  },
  template: `
<ListView :items="items" _tap="items.push('Item ' + (items.length + 1))">
  <template v-slot:default="{item, index, even, odd}">
    <Label textWrap="true">
        Item: {{ item }}
        Index: {{ index }}
        Even: {{ even }}
        Odd: {{ odd }}
    </Label>
  </template>
  <!--<template v-slot:other="{item}">-->
  <!--  <Label >{{ item }}Other</Label>-->
  <!--</template>-->
</ListView>`,
  data() {
    return {
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
}
