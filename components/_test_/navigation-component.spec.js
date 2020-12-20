import { shallowMount } from "@vue/test-utils";
import NavigationComponent from "../navigation-component";


const factory = () => {
  return shallowMount(NavigationComponent, {
  });
};

describe("NavigationComponent", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});