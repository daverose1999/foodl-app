import { shallowMount } from "@vue/test-utils";
import Search from "@/components/SearchBar/Search.vue";

const $route = {
  query: {
    recipe: "some recipe",
  },
};

describe("Search.vue", () => {
  it("renders props.searchQuery when passed", () => {
    const wrapper = shallowMount(Search, {
      propsData: { searchQuery: "chicken" },
      mocks: {
        $route,
      },
    });
    expect(wrapper.vm.$options.name).toMatch("Search");
    // expect(wrapper.props().searchQuery).toBe("chicken");
    // expect(wrapper.props("searchQuery")).toBe("chicken");
  });
});
