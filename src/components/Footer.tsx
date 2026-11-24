import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { business, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-10 sm:px-6 sm:pt-14 md:pb-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200">
              {business.name} — Dependable heating, cooling, and plumbing services built on
              honesty and craftsmanship.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-300">
              <ShieldCheck size={15} aria-hidden="true" />
              Licensed & Insured · 100% Satisfaction Guarantee
            </div>
          </div>

          {/* service areas */}
          <nav aria-label="Service areas">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-400">Service Areas</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {business.areas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-navy-200">
                  <MapPin size={13} className="shrink-0 text-navy-400" aria-hidden="true" />
                  {area}, TX
                </li>
              ))}
            </ul>
          </nav>

          {/* hours + links */}
          <nav aria-label="Hours and quick links">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-400">Hours</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {business.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2 text-navy-200">
                  <Clock size={13} className="mt-0.5 shrink-0 text-navy-400" aria-hidden="true" />
                  <span>
                    <span className="block text-navy-100">{h.day}</span>
                    <span className="text-navy-300">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="text-navy-200 underline-offset-4 transition-colors hover:text-brand-300 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-400">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-brand-300"
                >
                  <Phone size={16} className="text-brand-400" aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2.5 break-all text-navy-200 transition-colors hover:text-brand-300"
                >
                  <Mail size={16} className="shrink-0 text-brand-400" aria-hidden="true" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-navy-300">
                <MapPin size={16} className="shrink-0 text-brand-400" aria-hidden="true" />
                Austin, Texas — Serving Central Texas
              </li>
            </ul>
            <a
              href={business.phoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-400 px-5 py-3 text-sm font-extrabold text-navy-950 transition-all hover:bg-brand-300 active:scale-95"
            >
              <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
              24/7 Emergency Line
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-navy-300">
            © 2026 {business.name}. Serving Austin, Round Rock, and surrounding areas. Licensed & Insured.
          </p>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-navy-400">
            30 Days Free Support · Clean Code · Flat-Rate Pricing
          </p>
        </div>
      </div>
    </footer>
  );
}
