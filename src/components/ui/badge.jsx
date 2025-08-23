import { cn } from "../../lib/cn";

export function Badge({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-line/50 bg-bg2/50 px-3 py-1 text-xs text-muted",
        className
      )}
      {...props}
    />
  );
}
