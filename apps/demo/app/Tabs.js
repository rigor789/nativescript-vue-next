import PageComp from '~/PageComp'
import { ref } from 'nativescript-vue'
export default {
  template: `<Tabs selectedIndex="1">
  <TabStrip>
    <TabStripItem>
      <Label text="Home"></Label>
    </TabStripItem>
    <TabStripItem>
      <Label text="Account"></Label>
    </TabStripItem>
    <TabStripItem>
      <Label text="Search"></Label>
    </TabStripItem>
  </TabStrip>
  <TabContentItem>
    <GridLayout>
      <Label text="Home Page"></Label>
    </GridLayout>
  </TabContentItem>
  <TabContentItem>
    <GridLayout>
      <Label text="Account Page"></Label>
    </GridLayout>
  </TabContentItem>
  <TabContentItem>
    <GridLayout>
      <Label text="Search Page"></Label>
    </GridLayout>
  </TabContentItem>
</Tabs>`,
  data() {
    return {}
  },
  watch: {
    model(value) {},
  },
  mounted() {},
}
