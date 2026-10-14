import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "gray" | "outline" | "success";
  size?: "sm" | "md";
  children?: React.ReactNode;
}

export function Badge({
  variant = "blue",
  size = "md",
  children,
  className,
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-full transition-colors";

  const variants = {
    blue: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60",
    gray: "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60",
    outline: "bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
    success: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}
