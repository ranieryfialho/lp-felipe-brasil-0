import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/cn";

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 ring-accent disabled:pointer-events-none disabled:opacity-50 active:scale-95";

const variants = {
  default: "bg-accent text-bg hover:brightness-110",
  outline: "border border-line/60 bg-transparent text-text hover:bg-bg2/40",
  ghost: "bg-transparent hover:bg-bg2/40",
  gold: "bg-gold text-bg hover:bg-[#B58D63]",
  link: "text-accent underline-offset-4 hover:underline",
};

const sizes = {
  sm: "h-9 px-3",
  md: "h-11 px-5",
  lg: "h-12 px-6 text-base",
};

export function Button({ asChild = false, variant = "default", size = "md", className, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}
