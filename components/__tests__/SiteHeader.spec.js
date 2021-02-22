import SiteHeader from '@/components/SiteHeader.vue'
import { shallowMount } from '@vue/test-utils'

describe('SiteHeader', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SiteHeader)
  })

  it('should render a Vue component', () => {
    expect(wrapper.findComponent(SiteHeader).exists()).toBe(true)
  })
})
