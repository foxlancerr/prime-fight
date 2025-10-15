import React, { JSX } from "react";
import { cn } from "@/lib/utils";

// HitShotTitle Props Interface
interface HitShotTitleProps {
  children: React.ReactNode;
  className?: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right" | "justify";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "muted"
    | "accent"
    | "destructive";
  truncate?: boolean;
  id?: string;
}

// Responsive Variant Styles Mapping based on level
const levelStyles = {
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight", // Mobile: 30px -> Tablet: 36px -> Desktop: 48px -> Large: 60px
  h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", // Mobile: 24px -> Tablet: 30px -> Desktop: 36px -> Large: 48px
  h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug", // Mobile: 20px -> Tablet: 24px -> Desktop: 30px -> Large: 36px
  h4: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-normal", // Mobile: 18px -> Tablet: 20px -> Desktop: 24px -> Large: 30px
  h5: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-normal", // Mobile: 16px -> Tablet: 18px -> Desktop: 20px -> Large: 24px
  h6: "text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-normal", // Mobile: 14px -> Tablet: 16px -> Desktop: 18px -> Large: 20px
};

// Font Weight Mapping
const weightStyles = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

// Text Alignment Mapping
const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

// Color Mapping
const colorStyles = {
  default: "text-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  muted: "text-muted-foreground",
  accent: "text-accent-foreground",
  destructive: "text-destructive",
};

// HitShotTitle Component
export const HitShotTitle = ({
  children,
  className,
  as,
  weight,
  align = "left",
  color = "default",
  truncate = false,
  id,
}: HitShotTitleProps) => {
  // Determine the HTML element to render (h1-h6)
  const Tag = as as keyof JSX.IntrinsicElements;

  // Build className
  const classes = cn(
    levelStyles[as],
    weight && weightStyles[weight],
    alignStyles[align],
    colorStyles[color],
    truncate && "truncate",
    className
  );

  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
};

HitShotTitle.displayName = "HitShotTitle";
