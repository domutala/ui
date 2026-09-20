import { describe, expect, it } from "vitest";
import { badgeVariants } from "@ui/components/ui/badge";

describe("badgeVariants", () => {
  it("utilise flat et default par défaut", () => {
    const classes = badgeVariants();

    expect(classes).toContain("rounded-full");
    expect(classes).toContain("bg-[var(--badge-color)]");
    expect(classes).toContain("[--badge-color:var(--foreground)]");
  });

  it.each(["elevated", "flat", "tonal", "outline", "ghost"] as const)(
    "génère la variante %s",
    (variant) => {
      expect(badgeVariants({ variant })).toContain("--badge-color");
    },
  );

  it("applique la couleur accent", () => {
    expect(badgeVariants({ color: "accent" })).toContain(
      "[--badge-color:var(--accent-color)]",
    );
  });
});
