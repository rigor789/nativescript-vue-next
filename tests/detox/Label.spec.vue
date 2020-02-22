<!-- THIS IS NOT A WORKING TEST YET
 JUST AN IDEA FOR HOW WE MAY WRITE THEM IN THE FUTURE -->
<template>
    <Label text="label static text as prop"/>
    <Label>label static text as child</Label>
    <Label :text="dynamicLabelText('prop')"/>
    <Label>{{ dynamicLabelText('child') }}</Label>
    <Label>
        <FormattedString>
            <Span text="span static text as prop"/>
            <Span>span static text as child</Span>
            <Span :text="dynamicSpanText('prop')"/>
            <Span>{{ dynamicSpanText('child') }}</Span>
        </FormattedString>
    </Label>
</template>

<script>
  export default {
    setup() {
      return {
        dynamicLabelText: type => `label dynamic text as ${type}`
        dynamicSpanText: type => `span dynamic text as ${type}`
      }
    }
  }
</script>

<script for="detox">
  describe('Label', () => {
    it('accepts static text as a prop', () => {
      // todo: implement test
    })
  })
</script>
