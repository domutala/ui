import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { describe, expect, it, vi } from "vitest";

vi.mock("@iconify/vue", () => ({
  Icon: defineComponent({
    name: "IconifyIcon",
    props: { icon: { type: String, required: true } },
    template: '<svg data-testid="icon" :data-icon="icon" />',
  }),
}));

import Icon from "@ui/components/ui/icon/Icon.vue";

describe("Icon", () => {
  it("convertit le séparateur slash au format Iconify", () => {
    const wrapper = mount(Icon, { props: { name: "lucide/home" } });

    expect(wrapper.get('[data-testid="icon"]').attributes("data-icon")).toBe(
      "lucide:home",
    );
  });

  it("conserve le format Iconify natif", () => {
    const wrapper = mount(Icon, { props: { name: "lucide:settings" } });

    expect(wrapper.get('[data-testid="icon"]').attributes("data-icon")).toBe(
      "lucide:settings",
    );
  });

  it("conserve un nom sans préfixe", () => {
    const wrapper = mount(Icon, { props: { name: "home" } });

    expect(wrapper.get('[data-testid="icon"]').attributes("data-icon")).toBe(
      "home",
    );
  });
});
