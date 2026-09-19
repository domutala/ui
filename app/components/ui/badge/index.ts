import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-medium transition-all [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[color-mix(in_srgb,var(--badge-color)_30%,transparent)] aria-invalid:border-danger aria-invalid:ring-danger/20",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--badge-color)] text-[var(--badge-foreground)] [a&]:hover:brightness-95",
        flat:
          "bg-[var(--badge-color)] text-[var(--badge-foreground)] [a&]:hover:brightness-95",
        elevated:
          "bg-[var(--badge-color)] text-[var(--badge-foreground)] shadow-md [a&]:hover:-translate-y-px [a&]:hover:shadow-lg [a&]:hover:brightness-95",
        tonal:
          "bg-[var(--badge-tonal)] text-[var(--badge-color)] [a&]:hover:bg-[var(--badge-tonal-hover)]",
        outline:
          "border border-[var(--badge-color)] bg-transparent text-[var(--badge-color)] [a&]:hover:bg-[var(--badge-tonal)]",
        ghost:
          "bg-transparent text-[var(--badge-color)] [a&]:hover:bg-[var(--badge-tonal)]",
      },
      color: {
        default:
          "[--badge-color:var(--foreground)] [--badge-foreground:var(--background)] [--badge-tonal:color-mix(in_srgb,var(--foreground)_10%,transparent)] [--badge-tonal-hover:color-mix(in_srgb,var(--foreground)_16%,transparent)]",
        accent:
          "[--badge-color:var(--accent-color)] [--badge-foreground:var(--accent-color-foreground)] [--badge-tonal:color-mix(in_srgb,var(--accent-color)_14%,transparent)] [--badge-tonal-hover:color-mix(in_srgb,var(--accent-color)_22%,transparent)]",
        danger:
          "[--badge-color:var(--danger)] [--badge-foreground:var(--danger-foreground)] [--badge-tonal:color-mix(in_srgb,var(--danger)_12%,transparent)] [--badge-tonal-hover:color-mix(in_srgb,var(--danger)_20%,transparent)]",
        info:
          "[--badge-color:var(--info)] [--badge-foreground:var(--info-foreground)] [--badge-tonal:color-mix(in_srgb,var(--info)_12%,transparent)] [--badge-tonal-hover:color-mix(in_srgb,var(--info)_20%,transparent)]",
        success:
          "[--badge-color:var(--success)] [--badge-foreground:var(--success-foreground)] [--badge-tonal:color-mix(in_srgb,var(--success)_12%,transparent)] [--badge-tonal-hover:color-mix(in_srgb,var(--success)_20%,transparent)]",
        warning:
          "[--badge-color:var(--warning)] [--badge-foreground:var(--warning-foreground)] [--badge-tonal:color-mix(in_srgb,var(--warning)_14%,transparent)] [--badge-tonal-hover:color-mix(in_srgb,var(--warning)_22%,transparent)]",
        neutral:
          "[--badge-color:var(--neutral)] [--badge-foreground:var(--neutral-foreground)] [--badge-tonal:color-mix(in_srgb,var(--neutral)_12%,transparent)] [--badge-tonal-hover:color-mix(in_srgb,var(--neutral)_20%,transparent)]",
      },
    },
    defaultVariants: {
      variant: "flat",
      color: "default",
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
