import { ArrowRight, BadgeCheck, MapPin, Phone, ShieldCheck, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import EstimateForm from "@/components/EstimateForm";
import Stars from "@/components/Stars";
import CTABanner from "@/components/CTABanner";
import { images, business } from "@/lib/site";

const services = [
  {
    title: "AC Repair & Installation",
    text: "Beat the Texas heat with rapid AC diagnostics, refrigerant recharges, seasonal tune-ups, and energy-efficient system installations.",
    image: images.acCondenser,
    alt: "Brand-new heat pump condenser on the side of a brick home in Austin",
  },
  {
    title: "Emergency Plumbing",
    text: "From burst pipes and stubborn drain clogs to fixture upgrades and leak detection, our plumbers arrive ready to fix it right the first time.",
    image: images.plumberSink,
    alt: "Plumber repairing under-sink plumbing in a residential bathroom",
  },
  {
    title: "Tankless Water Heaters",
    text: "Enjoy endless hot water and lower energy bills with professional tankless water heater installation, descaling, and repair.",
    image: images.tanklessWaterHeater,
    alt: "Technician servicing a wall-mounted tankless water heater",
  },
];

const whyChoose = [
  {
    icon: BadgeCheck,
    title: "Upfront Flat-Rate Pricing",
    text: "You approve the exact quote before we start — no hourly surprises.",
  },
  {
    icon: MapPin,
    title: "Local & Family-Owned",
    text: "Proudly serving Austin, Round Rock, Cedar Park, and surrounding Central Texas communities.",
  },
  {
    icon: Wrench,
    title: "Fully Stocked Vans",
    text: "Our trucks carry common replacement parts so most repairs finish in a single visit.",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-navy-900">
        {/* ambient photo background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.technicianVan})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/88 to-navy-900/55" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid-navy opacity-50" aria-hidden="true" />
        <span className="star-watermark absolute -right-24 top-24 h-80 w-80" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-[178px] sm:px-6 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:pb-28">
          {/* left — message */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-navy-100">
                <MapPin size={13} className="text-brand-400" aria-hidden="true" />
                Austin, TX · HVAC & Plumbing
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[2.55rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]">
                Reliable HVAC &amp;
                <span className="block">Plumbing Services</span>
                <span className="block italic text-brand-300">in Austin, TX</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
                Fast, honest, and expert heating, cooling, and plumbing solutions for your home.
                Same-day emergency dispatch with upfront pricing and zero hidden fees.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Highlights">
                {[
                  { icon: ShieldCheck, label: "Licensed & Insured" },
                  { icon: Wrench, label: "24/7 Emergency Service" },
                  { icon: BadgeCheck, label: "100% Satisfaction Guarantee" },
                ].map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-[0.78rem] font-bold text-white ring-1 ring-white/12 backdrop-blur-sm"
                  >
                    <Icon size={15} className="text-brand-400" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={330}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-4">
                <button
                  type="button"
                  onClick={() => document.getElementById("estimate-form")?.scrollIntoView({ behavior: "smooth", block: "center" })}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-brand-400 px-6 py-3.5 text-base font-extrabold tracking-tight text-navy-950 shadow-[0_18px_36px_-12px_rgba(255,176,32,0.6)] transition-all hover:-translate-y-0.5 hover:bg-brand-300 active:scale-95 sm:w-auto"
                >
                  Get Free Estimate
                  <ArrowRight size={19} aria-hidden="true" />
                </button>
                <a
                  href={business.phoneHref}
                  className="group hidden items-center gap-3 text-white sm:inline-flex"
                >
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <span className="absolute inset-0 rounded-full bg-brand-400/40 blur-lg" aria-hidden="true" />
                    <Phone size={19} className="relative text-brand-300" aria-hidden="true" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-[0.66rem] font-bold uppercase tracking-[0.22em] text-navy-200">
                      Call Now
                    </span>
                    <span className="block text-base font-extrabold tracking-tight text-white group-hover:text-brand-300">
                      {business.phone}
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-9 flex items-center gap-4 rounded-2xl border border-white/12 bg-white/6 p-4 backdrop-blur-sm sm:inline-flex">
                <Stars size={20} />
                <div className="leading-tight">
                  <p className="font-display text-lg font-semibold text-white">4.9 / 5</p>
                  <p className="text-xs font-semibold text-navy-200">350+ Google Reviews</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* right — estimate form */}
          <Reveal delay={200} as="aside" className="relative">
            <div
              id="estimate-form"
              className="relative scroll-mt-[170px] rounded-3xl bg-white p-6 shadow-[0_36px_70px_-24px_rgba(2,14,26,0.65)] ring-1 ring-navy-900/10 sm:p-7"
            >
              <div
                className="absolute -top-4 right-6 rounded-full bg-navy-900 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-brand-300 shadow-lg ring-4 ring-navy-900/10"
                aria-hidden="false"
              >
                Free Quote
              </div>
              <EstimateForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="border-b border-navy-900/10 bg-brand-400">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-4 py-4 text-center sm:px-6 lg:px-8">
          {["12+ Years Serving Austin", "Same-Day Dispatch", "Flat-Rate Pricing", "30 Days Free Support"].map((t) => (
            <p key={t} className="flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-navy-950">
              <span className="h-1.5 w-1.5 rotate-45 bg-navy-950" aria-hidden="true" />
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-cream-50 py-20 sm:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-600">What we do</p>
              <h2 id="services-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem]">
                Our Expert Services
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <a
                href="#/services"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 text-sm font-extrabold tracking-tight text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
              >
                View All Services
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 120} as="article" className="group">
                <a href="#/services" className="block overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-900/6 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-navy-900">{s.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-navy-500">{s.text}</p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-600 transition-colors group-hover:text-brand-700">
                      Learn More
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24" aria-labelledby="why-heading">
        <div className="absolute inset-0 bg-grid-navy opacity-40" aria-hidden="true" />
        <div className="absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-brand-400/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-400">Why us</p>
              <h2 id="why-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Why Austin Homeowners Trust Us
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 140}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/8">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-400 text-navy-950 shadow-[0_12px_24px_-10px_rgba(255,176,32,0.6)] transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={27} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-200">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CUSTOMER REVIEWS ============ */}
      <section className="bg-cream-50 py-20 sm:py-24" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <img
                src={images.teamWithVan}
                alt="Lone Star Comfort technicians standing beside their service van in front of an Austin home"
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-lift ring-1 ring-navy-900/10 lg:max-h-[27rem]"
              />
            </Reveal>

            <Reveal delay={150}>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-600">Reviews</p>
              <h2 id="reviews-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Loved by Austin Homeowners
              </h2>
              <div className="mt-4 flex items-center gap-4">
                <Stars size={24} />
                <p className="text-sm font-bold text-navy-700">
                  4.9 out of 5 <span className="font-medium text-navy-500">based on 350+ Google Reviews</span>
                </p>
              </div>

              <figure className="relative mt-8 rounded-3xl border border-navy-900/8 bg-white p-7 shadow-card">
                <span className="absolute -top-7 left-6 select-none font-display text-[6rem] italic leading-none text-brand-400/80" aria-hidden="true">
                  “
                </span>
                <blockquote className="relative text-[0.95rem] leading-relaxed text-navy-700 sm:text-base">
                  Our AC went out on a 102-degree Saturday afternoon. Lone Star Comfort had a technician at our door
                  within two hours, explained the issue clearly, and got our house cool again without trying to
                  upsell us. Best service company in Austin!
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-900/8 pt-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 font-display text-lg font-semibold text-brand-300">
                    M
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-navy-900">Marcus T.</p>
                    <p className="text-xs font-medium text-navy-500">South Austin, TX · Verified Google Review</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABanner heading="Need Fast HVAC or Plumbing Help Today?" subtext="Call our Austin dispatch team now or book your service online in under 60 seconds.">
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-xl transition-all hover:-translate-y-0.5 active:scale-95"
        >
          <Phone size={20} strokeWidth={2.5} aria-hidden="true" />
          Call {business.phone}
        </a>
        <a
          href="#/contact"
          className="inline-flex items-center gap-2.5 rounded-full border-2 border-white px-7 py-4 text-base font-extrabold tracking-tight text-white transition-all hover:bg-white hover:text-navy-950 active:scale-95"
        >
          Book Online Now
          <ArrowRight size={19} aria-hidden="true" />
        </a>
      </CTABanner>
    </>
  );
}
