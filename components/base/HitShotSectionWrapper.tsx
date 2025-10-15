"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  /** Section children */
  children: React.ReactNode;
  /** Optional class for section (backgrounds, etc.) */
  className?: string;
  /** Add Tailwind `.container` around inner content */
  isContainerEnabled?: boolean;
  /** Optional section id for anchors */
  id?: string;
}

/**
 * Best-practice section wrapper:
 * - Full-width section for backgrounds.
 * - Inner `.container` for content alignment.
 * - Consistent responsive padding.
 */
export const HitShotSectionWrapper = ({
  children,
  className,
  isContainerEnabled = true,
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        // Full width, vertical spacing, and smooth transitions
        "w-full py-12 sm:py-16 md:py-20 lg:py-24 transition-colors duration-300",
        className
      )}
    >
      {isContainerEnabled ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

HitShotSectionWrapper.displayName = "HitShotSectionWrapper";
