import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Stars({ count = 5, className, size = 18 }: { count?: number; className?: string; size?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={cn(
            i < count ? "fill-brand-400 text-brand-400" : "fill-navy-100 text-navy-200"
          )}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}
