import Pricer from "@/components/Pricer.vue";
import { shallowMount, mount } from "@vue/test-utils"

describe("SiteHeader", () => {
    let wrapper;
    let priceArray = [
        [
            "60",
            "23",
            "1422640"
        ],
        [
            "58",
            "66",
            "3653379"
        ],
        [
            "61",
            "62",
            "5045331"
        ]
    ];
    window = Object.assign(window, { innerWidth: 500, innerHeight: 500 });

    beforeEach(() => {
        wrapper = mount(Pricer, {
            propsData: {
                priceArray
            }
        });
    });

    it('should render a Vue component', () => {
        expect(wrapper.findComponent(Pricer).exists()).toBe(true);
    });

    it(`should render a list with ${priceArray.length} elements`, () => {
        expect(wrapper.findAll('.pricer-list_element').length).toBe(priceArray.length);
    });
});