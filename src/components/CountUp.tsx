import { useEffect, useRef, useState } from "react";

/**
 * Animated number counter, triggered when it scrolls into view.
 * `suffix`/`prefix` keep semantics ("12+", "24/7", "100%") simple: with static
 * special values (like "24/7") use `static` instead of counting.
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
  const [started, setStarted] = useState(false);
  const [value, setValue] = useState(staticValue ? 0 : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || staticValue || to === undefined) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, staticValue, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {staticValue ?? value}
      {!staticValue && suffix}
    </span>
  );
}
