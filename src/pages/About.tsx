import { ArrowRight, Award, HeartHandshake, Phone, ShieldCheck, Star, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import CTABanner from "@/components/CTABanner";
import { images, business } from "@/lib/site";

const values = [
  {
    icon: ShieldCheck,
    title: "Upfront Integrity",
    text: "We explain the problem in plain English and give flat-rate quotes before starting any work.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for Your Home",
    text: "Our technicians arrive on time, wear boot covers, and leave your space spotless.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    text: "Every technician is background-checked, state-licensed, and trained on modern HVAC and plumbing systems.",
  },
];

const stats = [
  { value: 12, suffix: "+", label: "Years serving Austin & Central Texas", static: undefined as string | undefined },
  { value: 350, suffix: "+", label: "Five-Star Google Reviews", static: undefined as string | undefined },
  { value: undefined as number | undefined, suffix: "", label: "Rapid Emergency Dispatch", static: "24/7" },
  { value: 100, suffix: "%", label: "Workmanship Guarantee", static: undefined as string | undefined },
];

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Austin's Trusted <span className="italic text-brand-300">Local</span> HVAC &amp; Plumbing Team</>}
        subtitle="Family-owned, licensed, and committed to keeping Central Texas homes comfortable year-round."
        crumbs={[{ label: "Home", path: "#/" }, { label: "About Us" }]}
      >
        <button
          type="button"
          onClick={() => scrollToId("meet-our-team")}
          className="inline-flex items-center gap-2.5 rounded-full bg-brand-400 px-7 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-[0_16px_32px_-12px_rgba(255,176,32,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-300 active:scale-95"
        >
          <Users size={19} strokeWidth={2.5} aria-hidden="true" />
          Meet Our Team
        </button>
      </PageHero>

      {/* ============ OUR STORY ============ */}
      <section id="our-story" className="bg-cream-50 py-20 sm:py-24" aria-labelledby="story-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-600">Our Story</p>
            <h2 id="story-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Built on Honesty &amp; Craftsmanship
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-600">
              Founded right here in Austin, TX, Lone Star Comfort started with a simple mission: deliver dependable
              heating, cooling, and plumbing work without pushy sales tactics or hidden fees.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Whether it's a midnight pipe leak or a 105-degree August afternoon, we treat every home like our own.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy-900">
                <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
                  <path d="M32 6l6.9 21.2H63l-17.2 12.7L51 58 32 46.2 13 58l5.2-18.1L1 27.2h24.1z" fill="#FFB020" />
                </svg>
              </span>
              <p className="font-display text-lg font-semibold italic text-navy-800">
                — Family-run,<br />Austin to the core
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-navy-900/8 bg-white px-5 py-4 shadow-card">
              <Star size={18} className="shrink-0 fill-brand-400 text-brand-400" aria-hidden="true" />
              <p className="text-sm font-semibold text-navy-700">
                12+ years · Still locally owned and operated
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-navy-900/10">
                <img
                  src={images.technicianVan}
                  alt="Lone Star Comfort technician standing beside their fully-stocked service van"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 rounded-2xl bg-brand-400 px-5 py-4 shadow-lift">
                <p className="font-display text-2xl font-semibold text-navy-950">12+</p>
                <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-navy-800">Years in Austin</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className="bg-white py-20 sm:py-24" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-600">What we stand for</p>
              <h2 id="values-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Our Core Values
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 130}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-navy-900/8 bg-cream-50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-lift">
                  <span className="absolute right-6 top-6 select-none font-display text-5xl font-semibold text-navy-900/6 transition-colors group-hover:text-brand-400/40" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-brand-300 transition-colors group-hover:bg-brand-400 group-hover:text-navy-950">
                    <Icon size={27} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-navy-900">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BY THE NUMBERS ============ */}
      <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-20" aria-label="Lone Star Comfort by the numbers">
        <div className="absolute inset-0 bg-grid-navy opacity-40" aria-hidden="true" />
        <div className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-brand-400/12 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, suffix, label, static: staticValue }, i) => (
              <Reveal key={label} delay={i * 110}>
                <div className="text-center lg:text-left">
                  <p className="font-display text-6xl font-semibold tracking-tight text-brand-300">
                    <CountUp to={value} suffix={suffix} static={staticValue} />
                  </p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-navy-200">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEET OUR TEAM ============ */}
      <section id="meet-our-team" className="scroll-mt-28 bg-cream-50 py-20 sm:py-24" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <img
                src={images.teamWithVan}
                alt="The Lone Star Comfort team standing beside their fully stocked service van"
                loading="lazy"
                className="relative z-10 w-full rounded-3xl object-cover shadow-lift ring-1 ring-navy-900/10"
              />
              <img
                src={images.plumberSink}
                alt="Plumber repairing under-sink plumbing in a residential bathroom"
                loading="lazy"
                className="absolute -bottom-10 -right-3 z-20 hidden w-40 rounded-2xl object-cover shadow-lift ring-1 ring-navy-900/10 sm:block"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-600">Our People</p>
                <h2 id="team-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  Meet Our Team
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-base leading-relaxed text-navy-600">
                  A hardworking crew of background-checked, state-licensed technicians who keep Central Texas
                  homes comfortable — and who know exactly how to fix things right the first time.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <ul className="mt-7 space-y-3" aria-label="Team highlights">
                  {["Background-checked & state-licensed", "Family-owned and community-rooted", "All-stocked vans — most repairs finish in one visit"].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-semibold text-navy-800">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-400/25">
                        <ShieldCheck size={15} strokeWidth={2.5} className="text-brand-700" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={320}>
                <a
                  href="#/contact"
                  className="mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-navy-900 px-7 py-4 text-base font-extrabold tracking-tight text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 active:scale-95"
                >
                  Get in Touch
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <CTABanner heading="Experience the Lone Star Difference" subtext="Ready for honest, reliable service from a team that cares?">
        <a
          href="#/contact"
          className="inline-flex items-center gap-2.5 rounded-full bg-brand-400 px-7 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-[0_16px_32px_-12px_rgba(255,176,32,0.6)] transition-all hover:-translate-y-0.5 hover:bg-brand-300 active:scale-95"
        >
          Schedule Service
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
