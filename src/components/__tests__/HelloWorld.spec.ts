import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MainPage from "../../pages/MainPage/Index.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(MainPage, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
