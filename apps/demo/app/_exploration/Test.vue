<template>
    <Label text="Hello"/>
    <Label text="World" @tap="doSomething"/>
    <Label :text="msg"/>

    <ContentView>
        <Frame>
            <TestPage/>
        </Frame>
    </ContentView>
</template>

<script>
  import TestPage from './TestPage'

  export default {
    data() {
      return {
        msg: 'Foo'
      }
    },
    methods: {
      doSomething() {
        console.log('tapped world!')
        this.msg += '.'

        this.$navigateTo(TestPage)
      }
    },
    components: {
      TestPage
    }
  }
</script>
