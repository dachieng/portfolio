import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, endIcon, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          className={cn(
            "border-input bg-background ring-offset-background file:text-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border p-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:opacity-50 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-80",
            className
          )}
          ref={ref}
          type={type}
          {...props}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            {endIcon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
