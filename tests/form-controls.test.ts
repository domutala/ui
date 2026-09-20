import { describe, expect, it } from "vitest";
import { inputVariants } from "@ui/components/ui/input";
import {
  switchThumbVariants,
  switchVariants,
} from "@ui/components/ui/switch";

describe("inputVariants", () => {
  it.each([
    ["sm", "h-8"],
    ["default", "h-9"],
    ["lg", "h-11"],
  ] as const)("applique la taille %s", (size, expectedClass) => {
    expect(inputVariants({ size })).toContain(expectedClass);
  });

  it("ne génère aucun outline de focus", () => {
    const classes = inputVariants();

    expect(classes).toContain("outline-none");
    expect(classes).toContain("focus-visible:ring-0");
  });
});

describe("switchVariants", () => {
  it("utilise la taille, la couleur et la forme par défaut", () => {
    const classes = switchVariants();

    expect(classes).toContain("h-5");
    expect(classes).toContain("w-9");
    expect(classes).toContain("[--switch-color:var(--accent-color)]");
    expect(classes).toContain("rounded-full");
  });

  it("synchronise la taille du rail et du curseur", () => {
    expect(switchVariants({ size: "lg" })).toContain("w-11");
    expect(switchThumbVariants({ size: "lg" })).toContain("size-5");
    expect(switchThumbVariants({ size: "lg" })).toContain(
      "data-[state=checked]:translate-x-5",
    );
  });
});
