export default {
  props: ['foo'],
  template: `<Page><ActionBar title="SECOND PAGE"/><StackLayout>
    <Label text="Hello World!"/>
    <Label :text="foo.value"/>
    <Label text="Hello World!"/>
    <Label text="Hello World!"/>
</StackLayout></Page>`,
  data() {
    return {
      key: 1,
      counter: 0,
      time: new Date(),
      model: 'This is model 1',
      progress: 50,
      toggle: true,
    }
  },
  watch: {
    model(value) {
      console.log('model change...!', value)
    },
  },
  created() {
    // this.$navigateTo(this, {
    //   clearHistory: true,
    //   props: {
    //     foo: 'bar'
    //   }
    // })
    // setInterval(() => this.counter++, 1000)
  },
}
