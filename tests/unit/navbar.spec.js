import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar/NavBar.vue";

describe("NavBar.vue", () => {
  it("check what it is in it", () => {
    const wrapper = shallowMount(NavBar, {
      // propsData: { searchQuery: "chicken" },
      // mocks: {
      //   $route,
      // },
    });
    expect(wrapper.vm.$options.name).toMatch("Navbar");
    // expect(wrapper.props().searchQuery).toBe("chicken");
    // expect(wrapper.props("searchQuery")).toBe("chicken");
  });
});
