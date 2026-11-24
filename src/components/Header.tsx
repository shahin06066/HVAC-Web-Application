import { useEffect, useState } from "react";
import { Menu, Phone, ShieldCheck, X } from "lucide-react";
import Logo from "./Logo";
import { business, navLinks } from "@/lib/site";
import { cn } from "@/utils/cn";

export default function Header({ route }: { route: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path: string) =>
    path === "#/" ? route === "home" : path === `#/${route}`;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy-900/95 shadow-lg shadow-navy-950/30 backdrop-blur-md" : "bg-gradient-to-b from-navy-950/70 to-transparent"
      )}
    >
      {/* emergency strip */}
      <a
        href={business.phoneHref}
        className="hidden flex-col items-center justify-between bg-brand-400 px-4 py-1.5 sm:flex"
        aria-label={`24/7 emergency line, call ${business.phone}`}
      >
        <span className="flex items-center gap-2 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-navy-950">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-900 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-navy-900" />
          </span>
          24/7 Emergency Dispatch
        </span>
        <span className="flex items-center gap-1.5 text-sm font-extrabold tracking-tight text-navy-950">
          <Phone size={15} strokeWidth={2.5} aria-hidden="true" />
          {business.phone}
        </span>
      </a>

      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo dark />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={cn(
                "nav-link px-4 py-2 text-sm font-semibold text-navy-100 transition-colors hover:text-white",
                isActive(link.path) && "is-active text-white"
              )}
              aria-current={isActive(link.path) ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-brand-400 px-5 py-2.5 text-sm font-extrabold tracking-tight text-navy-950 shadow-[0_10px_22px_-8px_rgba(255,176,32,0.6)] transition-all hover:bg-brand-300 active:scale-95 sm:inline-flex"
          >
            <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
            <span className="hidden lg:inline">Call Now:</span> {business.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy-900/98 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={cn(
                "rounded-xl px-4 py-3.5 font-display text-xl font-semibold text-navy-100 transition-colors hover:bg-white/5 hover:text-white",
                isActive(link.path) && "bg-white/8 text-brand-300"
              )}
              aria-current={isActive(link.path) ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-400 px-4 py-4 text-base font-extrabold tracking-tight text-navy-950"
          >
            <Phone size={19} strokeWidth={2.5} aria-hidden="true" />
            Call Now: {business.phone}
          </a>
          <p className="mt-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy-300">
            <ShieldCheck size={14} className="text-brand-400" aria-hidden="true" />
            Licensed & Insured
          </p>
        </nav>
      </div>
    </header>
  );
}
