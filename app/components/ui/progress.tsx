import * as React from "react";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full h-3 rounded-full bg-zinc-200 dark:bg-zinc-700", className)}
      {...props}
    >
      <div
        className="h-full rounded-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-500"
        style={{ width: `${value || 0}%` }}
      />
    </div>
  );
});
Progress.displayName = "Progress";

export { Progress };
