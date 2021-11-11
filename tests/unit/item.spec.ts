import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Item from "@/components/Item.vue";

describe("Item.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Item, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
