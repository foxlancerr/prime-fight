"use client";

import React, { JSX } from "react";
import { cn } from "@/lib/utils";

interface HitShotTextProps {
  children: React.ReactNode;
  as?: "p" | "span"; // ✅ choose semantic element
  size?: "xsmall" | "small" | "normal" | "large" | "xlarge";
  weight?: "light" | "normal" | "medium" | "semibold";
  align?: "left" | "center" | "right" | "justify";
  truncate?: boolean;
  uppercase?: boolean;
  italic?: boolean;
  underline?: boolean;
  id?: string;
  className?: string;
}

/* ---------------------- Base Variant Styles ---------------------- */
const sizeStyles = {
  xsmall: "text-xs sm:text-sm leading-snug",
  small: "text-sm sm:text-base leading-snug",
  normal: "text-base sm:text-lg leading-relaxed",
  large: "text-lg sm:text-xl md:text-2xl leading-relaxed",
  xlarge: "text-xl sm:text-2xl md:text-3xl leading-loose",
};

/* ---------------------- Weight Styles ---------------------- */
const weightStyles = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

/* ---------------------- Alignment Styles ---------------------- */
const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

/* ---------------------- Component ---------------------- */
export const HitShotText = ({
  children,
  as = "p",
  size = "normal",
  weight = "normal",
  align = "left",
  truncate = false,
  uppercase = false,
  italic = false,
  underline = false,
  id,
  className,
}: HitShotTextProps) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  const classes = cn(
    sizeStyles[size],
    weightStyles[weight],
    alignStyles[align],
    uppercase && "uppercase tracking-wide",
    italic && "italic",
    underline && "underline",
    truncate && "truncate",
    as === "span" && "inline", // ensure inline for spans
    as === "p" && "block", // ensure block for paragraphs
    className
  );

  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
};

HitShotText.displayName = "HitShotText";
