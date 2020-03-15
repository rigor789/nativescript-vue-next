import { compile } from '../src'
import { registerTestElement } from 'tests/registry'

registerTestElement('Frame')

describe('compile', () => {
  it('works', () => {
    const { code } = compile(`<Frame></Frame>`)

    expect(code).toMatchSnapshot()
  })
})
