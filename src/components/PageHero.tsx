import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  crumbs: { label: string; path?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-[188px] pb-14 sm:pb-20">
      {/* backdrop */}
      <div className="absolute inset-0 bg-grid-navy opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-navy-400/20 blur-3xl"
        aria-hidden="true"
      />
      <span className="star-watermark absolute right-[-40px] bottom-[-60px] h-64 w-64" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-navy-300">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={12} aria-hidden="true" />}
                {crumb.path ? (
                  <a href={crumb.path} className="transition-colors hover:text-brand-300">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-brand-300" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">{subtitle}</p>

        {children && <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
