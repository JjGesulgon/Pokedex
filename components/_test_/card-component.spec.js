import { shallowMount } from "@vue/test-utils";
import CardComponent from "../card-component";


const factory = () => {
  return shallowMount(CardComponent, {
  });
};

describe("CardComponent", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});