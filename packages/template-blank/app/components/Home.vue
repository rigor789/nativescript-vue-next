<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout>
            <Label class="info" :text="message" />
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  };
</script>

<style scoped>
    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
