import { compile } from '../src'
import { registerTestElement } from '@nativescript-vue/test-utils'

registerTestElement('Frame')
registerTestElement('Page')
registerTestElement('ActionBar')
registerTestElement('ActionItem')
registerTestElement('StackLayout')
registerTestElement('Label')

describe('compile', () => {
  // This is just a temporary test to see that the compiler actually compiles the template
  // to the correct blocks/render calls.
  it('works', () => {
    const { code } = compile(`<Frame>
    <Page>
        <ActionBar>
            <ActionItem v-if="foo" text="Test Item" />
            <ActionItem v-else text="Test Item" />
        </ActionBar>
        <StackLayout>
            <!-- Comment -->
            <Label v-for="i in 10" :key="i" @tap="onTap" :text="msg" ref="test" />
            <UnknownElement/>
        </StackLayout>
    </Page>
</Frame>`)

    expect(code).toMatchSnapshot()
  })
})
