import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { business } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTABanner({
  heading,
  subtext,
  children,
  amber = false,
}: {
  heading: string;
  subtext: string;
  children?: ReactNode;
  amber?: boolean;
}) {
  return (
    <section className={amber ? "bg-brand-400" : "bg-navy-900"}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2
                className={
                  "font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl " +
                  (amber ? "text-navy-950" : "text-white")
                }
              >
                {heading}
              </h2>
              <p
                className={
                  "mt-3 text-base leading-relaxed sm:text-lg " +
                  (amber ? "text-navy-900/80" : "text-navy-200")
                }
              >
                {subtext}
              </p>
            </div>
            {children ? (
              <div className="flex shrink-0 flex-wrap items-center gap-4">{children}</div>
            ) : (
              <div className="flex shrink-0 flex-wrap items-center gap-4">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-xl transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <Phone size={20} strokeWidth={2.5} aria-hidden="true" />
                  Call {business.phone}
                </a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
