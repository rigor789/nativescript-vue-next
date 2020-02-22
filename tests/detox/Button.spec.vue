<!-- THIS IS NOT A WORKING TEST YET
 JUST AN IDEA FOR HOW WE MAY WRITE THEM IN THE FUTURE -->
<template>
    <Button text="button static text as prop"/>
    <Button>button static text as child</Button>
    <Button :text="dynamicButtonText('prop')"/>
    <Button>{{ dynamicButtonText('child') }}</Button>
    <Button>
        <FormattedString>
            <Span text="span static text as prop"/>
            <Span>span static text as child</Span>
            <Span :text="dynamicSpanText('prop')"/>
            <Span>{{ dynamicSpanText('child') }}</Span>
        </FormattedString>
    </Button>
</template>

<script>
  export default {
    setup() {
      return {
        dynamicButtonText: type => `button dynamic text as ${type}`
        dynamicSpanText: type => `span dynamic text as ${type}`
      }
    }
  }
</script>

<detox>
  describe('Button', () => {
    it('accepts static text as a prop', () => {
      // todo: implement test
    })
  })
</detox>
