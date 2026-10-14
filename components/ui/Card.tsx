"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
  glow?: boolean;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ hoverEffect = true, glow = false, children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hoverEffect
            ? {
                y: -4,
                transition: { duration: 0.25, ease: "easeOut" },
              }
            : undefined
        }
        className={cn(
          "relative rounded-2xl p-6 transition-all duration-300",
          "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl",
          "border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl dark:shadow-slate-950/50",
          glow && "hover:border-blue-500/50 hover:shadow-blue-500/10",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
