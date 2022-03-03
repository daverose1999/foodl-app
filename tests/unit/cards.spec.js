import { shallowMount } from "@vue/test-utils";
import Cards from "@/components/Cards/Cards.vue";

describe("Cards.vue", () => {
  it("check what it is in it", () => {
    const wrapper = shallowMount(Cards, {
      // propsData: { searchQuery: "chicken" },
      // mocks: {
      //   $route,
      // },
    });
    expect(wrapper.vm.$options.name).toMatch("Cards");
    // expect(wrapper.props().searchQuery).toBe("chicken");
    // expect(wrapper.props("searchQuery")).toBe("chicken");
  });
});

describe("Testing Component Methods", () => {
  const wrapper = shallowMount(Cards);
  it("changes the state of the skelton loader ", () => {
    expect(wrapper.vm.loading).toBe(true); //initial state true
    wrapper.vm.setLoadingState(false); // calling component method
    expect(wrapper.vm.loading).toBe(false); // state updates to false
  });

  // it("loads the skeleton loader when called", () => {
  //   expect(wrapper.vm.title).toBe("Hello"); //initial title Hello
  //   wrapper.vm.changeTitle(); // calling component method
  //   expect(wrapper.vm.title).toBe("Hi"); // title updates to Hi
  // });
});
