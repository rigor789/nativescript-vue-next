export default {
  template: `<ScrollView><StackLayout>
    <SearchBar v-model="model" />
    <Label :text="counter + ' ' + progress" />
    <Label :text="time" />
    <Label :text="toggle" />
    <Label text="Elements with v-model:" @tap="counter++"/>
    <Label :text="model.toUpperCase()" />
    <TextField v-model="model"/>
    <TextView v-model="model"/>
    <DatePicker v-model="time"/>
    <TimePicker v-model="time"/>
    <SegmentedBar v-model="counter">
        <SegmentedBarItem title="a"/>
        <SegmentedBarItem title="b"/>
        <SegmentedBarItem title="c"/>
    </SegmentedBar>
    <ListPicker :items="['a', 'b', 'c']" v-model="counter"/>
    <Progress :value="progress"/>
    <Slider v-model="progress"/>
    <Switch v-model="toggle"/>
</StackLayout></ScrollView>`,
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
    // setInterval(() => this.counter++, 1000)
  },
}
