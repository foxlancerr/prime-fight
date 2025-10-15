"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HitShotButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: "filled" | "outline" | "text";
  /** Button size */
  size?: "large" | "medium" | "small";
  /** If true, shows active/selected state */
  selected?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

/**
 * Responsive, reusable button component with multiple
 * sizes and visual variants following design system best practices.
 */
export const HitShotButton = React.forwardRef<
  HTMLButtonElement,
  HitShotButtonProps
>(
  (
    {
      rounded = "full",
      className,
      variant = "filled",
      size = "medium",
      selected = false,
      ...props
    },
    ref
  ) => {
    /* -------------------- Size Variants -------------------- */
    const sizeStyles = {
      large: "px-10 pb-2 pt-3 text-base sm:text-lg",
      medium: "px-6 pb-2 pt-3 text-sm sm:text-base ",
      small: "px-4 pb-2 pt-3 text-sm",
    };

    /* -------------------- Variant Styles -------------------- */

    const roundedStyles: Record<typeof rounded, string> = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    };
    /* -------------------- Variant Styles -------------------- */
    const variantStyles = {
      filled: cn(
        "bg-primary text-white font-semibold shadow-sm",
        "hover:bg-primary/90",
        selected && "bg-primary/80 ring-2 ring-primary/40"
      ),
      outline: cn(
        "border border-primary text-primary font-medium",
        "hover:bg-primary/10",
        selected && "bg-primary/15 border-primary/70"
      ),
      text: cn(
        "text-primary font-medium",
        "hover:text-primary/80",
        selected && "text-primary/90 underline underline-offset-4"
      ),
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 cursor-pointer text-center",
          sizeStyles[size],
          variantStyles[variant], 
          roundedStyles[rounded],
          className
        )}
        {...props}
      />
    );
  }
);

HitShotButton.displayName = "HitShotButton";
