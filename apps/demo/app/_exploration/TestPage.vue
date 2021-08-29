<template>
   <Page>
       <Label text="Test Page" @tap="$navigateBack()"/>
   </Page>
</template>

<script>
    export default {
      mounted() {
        console.log('test page mounted')
      },
      unmounted() {
        console.log('test page unmounted')
      }
    }
</script>
