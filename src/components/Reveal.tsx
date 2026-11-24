import type { ElementType, ReactNode, CSSProperties } from "react";
import { cn } from "@/utils/cn";

/**
 * Fade-up entrance animation on mount (no scroll gating).
 * Always renders visible content — the animation is a pure enhancement.
 * Usage: <Reveal delay={120}>...</Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}) {
  const Tag = as as "div";

  return (
    <Tag
      className={cn("reveal-anim", className)}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
