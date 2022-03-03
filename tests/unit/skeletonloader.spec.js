import { shallowMount } from "@vue/test-utils";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader.vue";

describe("SkeletonLoader.vue", () => {
  it("check what it is in it", () => {
    const wrapper = shallowMount(SkeletonLoader, {
      // propsData: { searchQuery: "chicken" },
      // mocks: {
      //   $route,
      // },
    });
    expect(wrapper.vm.$options.name).toMatch("SkeletonLoader");
    // expect(wrapper.props().searchQuery).toBe("chicken");
    // expect(wrapper.props("searchQuery")).toBe("chicken");
  });
});
