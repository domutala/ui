import { describe, expect, it } from "vitest";
import { alertVariants } from "@ui/components/ui/alert";

describe("alertVariants", () => {
  it("utilise tonal et la densité standard par défaut", () => {
    const classes = alertVariants();

    expect(classes).toContain("bg-[var(--alert-tonal)]");
    expect(classes).toContain("px-4");
    expect(classes).toContain("py-3");
  });

  it("combine couleur, variante, densité et mode prominent", () => {
    const classes = alertVariants({
      color: "warning",
      variant: "elevated",
      density: "comfortable",
      prominent: true,
    });

    expect(classes).toContain("[--alert-color:var(--warning)]");
    expect(classes).toContain("shadow-lg");
    expect(classes).toContain("px-5");
    expect(classes).toContain("min-h-24");
  });
});
