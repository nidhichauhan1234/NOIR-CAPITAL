// app/lib/utils.ts
import { clsx } from "clsx";
// utils.ts or wherever your cn function is defined
import { twMerge } from "tailwind-merge";

export function cn(...classes: (string | undefined | null | false)[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}

