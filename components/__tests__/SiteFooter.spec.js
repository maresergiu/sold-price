import SiteFooter from "@/components/SiteFooter.vue";
import { shallowMount } from "@vue/test-utils"

describe("SiteFooter", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(SiteFooter);
    });

    it('should render a Vue component', () => {
        expect(wrapper.findComponent(SiteFooter).exists()).toBe(true);
    });
});