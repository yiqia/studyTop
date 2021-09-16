import { mount } from '@vue/test-utils'
import Header from '../components/HelloWorld.vue'

describe('Header.vue', () => {
  it('renders', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toContain('hello')
  })
})
