import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "@ui/components/ui/button/Button.vue";
import { buttonVariants } from "@ui/components/ui/button";

describe("Button", () => {
  it("utilise les variantes par défaut", () => {
    const classes = buttonVariants();

    expect(classes).toContain("h-9");
    expect(classes).toContain("bg-[var(--button-color)]");
    expect(classes).toContain("[--button-color:var(--foreground)]");
  });

  it.each(["elevated", "flat", "tonal", "outline", "ghost"] as const)(
    "génère la variante %s",
    (variant) => {
      expect(buttonVariants({ variant })).toBeTruthy();
    },
  );

  it.each([
    "default",
    "accent",
    "danger",
    "info",
    "success",
    "warning",
    "neutral",
  ] as const)("génère la couleur %s", (color) => {
    expect(buttonVariants({ color })).toContain("--button-color");
  });

  it("rend un bouton avec son contenu et ses attributs", () => {
    const wrapper = mount(Button, {
      props: { variant: "outline", color: "danger", size: "lg" },
      slots: { default: "Supprimer" },
    });

    expect(wrapper.element.tagName).toBe("BUTTON");
    expect(wrapper.text()).toBe("Supprimer");
    expect(wrapper.attributes("data-variant")).toBe("outline");
    expect(wrapper.attributes("data-color")).toBe("danger");
    expect(wrapper.classes()).toContain("h-10");
  });
});
