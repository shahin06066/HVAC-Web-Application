import { cn } from "@/utils/cn";

export default function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <a href="#/" className="group inline-flex items-center gap-2.5 outline-none" aria-label="Lone Star Comfort — Home">
      <span
        className={cn(
          "relative grid h-11 w-11 shrink-0 place-items-center rounded-xl shadow-lg transition-transform duration-300 group-hover:-rotate-6",
          dark ? "bg-brand-400" : "bg-brand-400"
        )}
        style={{ boxShadow: "0 10px 24px -8px rgba(255,176,32,0.55)" }}
      >
        <svg viewBox="0 0 64 64" className="h-6.5 w-6.5" aria-hidden="true">
          <path
            d="M32 6l6.9 21.2H63l-17.2 12.7L51 58 32 46.2 13 58l5.2-18.1L1 27.2h24.1z"
            fill="#0C2237"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.05rem] font-semibold tracking-tight",
              dark ? "text-white" : "text-navy-900"
            )}
          >
            Lone Star Comfort
          </span>
          <span
            className={cn(
              "mt-1 text-[0.62rem] font-bold uppercase tracking-[0.28em]",
              dark ? "text-brand-300" : "text-brand-600"
            )}
          >
            HVAC & Plumbing
          </span>
        </span>
      )}
    </a>
  );
}
