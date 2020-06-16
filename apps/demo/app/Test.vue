<template>
    <Label text="Hello"/>
    <Label text="World" @tap="doSomething"/>
    <Label :text="msg"/>
</template>

<script>
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
      }
    }
  }
</script>
