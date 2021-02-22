import Pricer from '@/components/Pricer.vue'
import { shallowMount } from '@vue/test-utils'

describe('SiteHeader', () => {
  let wrapper
  let priceArray = [
    ['60', '23', '1422640'],
    ['58', '66', '3653379'],
    ['61', '62', '5045331']
  ]

  beforeEach(() => {
    wrapper = shallowMount(Pricer, {
      propsData: {
        priceArray
      }
    })
  })

  it('should render a Vue component', () => {
    expect(wrapper.findComponent(Pricer).exists()).toBe(true)
  })

  it(`should render a list with ${priceArray.length} elements`, () => {
    expect(wrapper.findAll('.pricer-list_element').length).toBe(
      priceArray.length
    )
  })

  it('should render a list, and each list element should have a style attribut', () => {
    expect(
      wrapper.find('.pricer-list_element').attributes('style')
    ).toBeTruthy()
  })

  it('should include width, height, top, left and background inside the style attribut', () => {
    const styleAttr = wrapper.find('.pricer-list_element').attributes('style')

    expect(styleAttr.indexOf('width') > -1).toBe(true)
    expect(styleAttr.indexOf('height') > -1).toBe(true)
    expect(styleAttr.indexOf('top') > -1).toBe(true)
    expect(styleAttr.indexOf('left') > -1).toBe(true)
    expect(styleAttr.indexOf('background') > -1).toBe(true)
  })
})
