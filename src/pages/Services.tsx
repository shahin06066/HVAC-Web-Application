import {
  ArrowRight,
  Check,
  Droplets,
  Fan,
  Flame,
  Gauge,
  Phone,
  ShowerHead,
  Snowflake,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { images, business } from "@/lib/site";

const hvac = [
  {
    icon: Snowflake,
    title: "AC Repair & Diagnostics",
    text: "Fast troubleshooting for warm air, refrigerant leaks, frozen coils, and compressor issues.",
  },
  {
    icon: Fan,
    title: "AC Installation & Replacement",
    text: "High-efficiency system upgrades sized specifically for Texas summers.",
  },
  {
    icon: Flame,
    title: "Heating & Furnace Care",
    text: "Safety inspections, heat pump repairs, and winter tune-ups.",
  },
  {
    icon: Gauge,
    title: "Smart Thermostat Setup",
    text: "Installation and calibration for Nest, Ecobee, and Honeywell thermostats.",
  },
];

const plumbing = [
  {
    icon: Droplets,
    title: "Emergency Leak & Pipe Repair",
    text: "Rapid response for burst pipes, slab leaks, and water line replacements.",
  },
  {
    icon: Waves,
    title: "Drain Cleaning & Hydro-Jetting",
    text: "Clearing stubborn kitchen, bathroom, and main sewer line blockages.",
  },
  {
    icon: Flame,
    title: "Tankless & Traditional Water Heaters",
    text: "New installations, annual descaling flushes, and heating element repairs.",
  },
  {
    icon: ShowerHead,
    title: "Fixture Upgrades",
    text: "Faucet, toilet, garbage disposal, and shower valve installations.",
  },
];

const comfortClub = [
  "Two seasonal HVAC tune-ups",
  "Annual water heater flush",
  "Priority scheduling",
  "15% off all repairs",
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Complete HVAC &amp; Plumbing Services in <span className="italic text-brand-300">Austin, TX</span></>}
        subtitle="Honest diagnostics, flat-rate pricing, and fast repairs backed by licensed Central Texas technicians."
        crumbs={[{ label: "Home", path: "#/" }, { label: "Services" }]}
      >
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2.5 rounded-full bg-brand-400 px-7 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-[0_16px_32px_-12px_rgba(255,176,32,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-300 active:scale-95"
        >
          <Phone size={19} strokeWidth={2.5} aria-hidden="true" />
          Call Now: {business.phone}
        </a>
        <a
          href="#/contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-4 text-base font-bold text-white transition-colors hover:border-brand-400 hover:text-brand-300"
        >
          Request Estimate
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </PageHero>

      {/* ============ HVAC ============ */}
      <section className="bg-cream-50 py-20 sm:py-24" aria-labelledby="hvac-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-navy-900/10">
                  <img
                    src={images.acCondenser}
                    alt="High-efficiency AC condenser unit on a Texas brick home"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 left-4 hidden w-44 overflow-hidden rounded-2xl shadow-lift ring-4 ring-white sm:block">
                  <img
                    src={images.smartThermostat}
                    alt="Technician configuring a smart thermostat in a modern Austin home"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 right-4 rounded-2xl bg-navy-900 px-5 py-4 shadow-lift sm:-right-6">
                  <p className="flex items-center gap-2 text-sm font-extrabold text-brand-300">
                    <Zap size={16} aria-hidden="true" />
                    Energy-Efficient + Smart
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-navy-200">AUSTIN-READY SIZING</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-600">Heating & Cooling</p>
                <h2 id="hvac-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  HVAC Done Right<br />For Texas Comfort
                </h2>
              </Reveal>
              <div className="mt-8 space-y-4">
                {hvac.map(({ icon: Icon, title, text }, i) => (
                  <Reveal key={title} delay={i * 110}>
                    <div className="group flex gap-4 rounded-2xl border border-navy-900/8 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/60 hover:shadow-card">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-brand-300 transition-colors group-hover:bg-brand-400 group-hover:text-navy-950">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight text-navy-900">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-navy-500">{text}</p>
                      </div>
                      <span className="ml-auto hidden self-start font-display text-sm font-semibold text-navy-200 transition-colors group-hover:text-brand-600 sm:block">
                        0{i + 1}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PLUMBING ============ */}
      <section className="bg-white py-20 sm:py-24" aria-labelledby="plumbing-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-600">Residential Plumbing</p>
                <h2 id="plumbing-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  Fix it Right<br />The First Time
                </h2>
              </Reveal>
              <div className="mt-8 space-y-4">
                {plumbing.map(({ icon: Icon, title, text }, i) => (
                  <Reveal key={title} delay={i * 110}>
                    <div className="group flex gap-4 rounded-2xl border border-navy-900/8 bg-cream-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/60 hover:shadow-card">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-brand-300 transition-colors group-hover:bg-brand-400 group-hover:text-navy-950">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight text-navy-900">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-navy-500">{text}</p>
                      </div>
                      <span className="ml-auto hidden self-start font-display text-sm font-semibold text-navy-200 transition-colors group-hover:text-brand-600 sm:block">
                        0{i + 1}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={140}>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-navy-900/10">
                  <img
                    src={images.tanklessWaterHeater}
                    alt="Technician calibrating a wall-mounted tankless water heater"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 rounded-2xl bg-brand-400 px-5 py-4 shadow-lift sm:-left-6">
                  <p className="text-sm font-extrabold text-navy-950">Endless Hot Water</p>
                  <p className="mt-0.5 text-xs font-semibold text-navy-800">LOWER ENERGY BILLS</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ COMFORT CLUB ============ */}
      <section className="bg-cream-50 pb-20 pt-4 sm:pb-24" aria-labelledby="club-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 shadow-lift">
              <div className="absolute inset-0 bg-grid-navy opacity-50" aria-hidden="true" />
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" aria-hidden="true" />
              <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-brand-400/15 px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-brand-300 ring-1 ring-brand-400/30">
                    <Wrench size={13} aria-hidden="true" />
                    Preventive Maintenance Plan
                  </p>
                  <h2 id="club-heading" className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Comfort Club
                  </h2>
                  <p className="mt-2 font-display text-2xl font-semibold text-brand-300">$19<span className="text-base font-medium text-navy-200"> / month</span></p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {comfortClub.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-sm font-semibold text-navy-100">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-400/20">
                          <Check size={12} strokeWidth={3.5} className="text-brand-400" aria-hidden="true" />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand-400 px-7 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-[0_16px_32px_-12px_rgba(255,176,32,0.6)] transition-all hover:-translate-y-0.5 hover:bg-brand-300 active:scale-95"
                  >
                    <Phone size={19} strokeWidth={2.5} aria-hidden="true" />
                    Call for Enrollment
                  </a>
                  <a
                    href="#/contact"
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-white/25 px-7 py-4 text-base font-bold text-white transition-colors hover:border-brand-400 hover:text-brand-300"
                  >
                    Request Free Estimate
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <CTABanner heading="Not Sure What Service You Need?" subtext="Tell us what's going on and get a clear, no-pressure estimate today.">
        <a
          href="#/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-xl transition-all hover:-translate-y-0.5 active:scale-95"
        >
          Request Free Estimate
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2.5 rounded-full border-2 border-white px-7 py-4 text-base font-extrabold tracking-tight text-white transition-all hover:bg-white hover:text-navy-950 active:scale-95"
        >
          <Phone size={19} strokeWidth={2.5} aria-hidden="true" />
          Call {business.phone}
        </a>
      </CTABanner>
    </>
  );
}
