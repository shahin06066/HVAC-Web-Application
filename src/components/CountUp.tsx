import { useEffect, useRef, useState } from "react";

/**
 * Animated number counter, triggered when it scrolls into view.
 * Defaults to the final value so the number is always readable —
 * the count-up is a pure enhancement.
 * Use `static` for values like "24/7" that don't count.
 */
export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
  static: staticValue,
}: {
  to?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  static?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const final = staticValue ?? String(to ?? 0);
  const [value, setValue] = useState(final);

  useEffect(() => {
    const el = ref.current;
    if (!el || staticValue || to === undefined) return;
    if (typeof IntersectionObserver === "undefined") return; // keep final value

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.disconnect();
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(String(Math.round(eased * to)));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [staticValue, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {!staticValue && suffix}
    </span>
  );
}
