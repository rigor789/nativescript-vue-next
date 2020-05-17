import { Tabs } from 'nativescript-vue'

export default {
  components: {
    Tabs,
  },
  template: `
<StackLayout>
  <Label :text="activeTab" />
  <Button text="Add tab" @tap="tabs.push({title: 'new', text: 'new tab'})" />
  <Button text="Go last" @tap="activeTab = tabs.length - 1" />

  <Tabs v-model="activeTab">
    <TabStrip>
      <TabStripItem
        v-for="(tab, i) in tabs"
        :key="i + tab.title"
        :title="tab.title">
      </TabStripItem>
    </TabStrip>
    <TabContentItem
      v-for="(tab, i) in tabs"
      :key="i + tab.title">
      <GridLayout>
        <Label :text="tab.text" />
      </GridLayout>
    </TabContentItem>
  </Tabs>
</StackLayout>`,
  data() {
    return {
      activeTab: 1,
      tabs: [
        { title: 'First Tab', text: 'im the first tab' },
        { title: 'Second Tab', text: 'im the second tab' },
        { title: 'Third Tab', text: 'im the third tab' },
      ],
    }
  },
  mounted() {},
}
