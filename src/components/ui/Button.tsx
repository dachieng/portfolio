import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-12 w-12",
        lg: "h-12 rounded-md px-4",
        sm: "h-8 rounded-md px-2",
      },
      variant: {
        blue: "bg-blue text-light hover:bg-blue/50",
        dark: "bg-dark text-light hover:bg-dark/90",
        "dark-blue": "bg-blue-dark text-light hover:bg-blue-dark/50",
        default: "bg-primary text-light hover:bg-primary/50",
        destructive: "bg-destructive text-light hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "muted-blue": "bg-blue-muted text-blue-dark hover:bg-blue-light/50",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary-light text-gray hover:bg-secondary-dark hover:text-light",
        "submit-gradient":
          "bg-gradient-to-r from-[#FFBB00] to-[#B2E7B4] hover:from-[#FFBB00]/80 hover:to-[#B2E7B4]/80",
        success: "bg-success text-light hover:bg-success/80",
        transparent:
          "bg-transparent text-secondary-dark hover:bg-accent hover:text-accent-foreground",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        type="button"
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
