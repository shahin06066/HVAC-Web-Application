import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Siren,
  Star,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";
import { business, serviceTypes } from "@/lib/site";
import { cn } from "@/utils/cn";

type Errors = { name?: string; phone?: string; email?: string; message?: string };

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid phone number";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email address";
    if (message.trim().length < 5) next.message = "Tell us a little about the job";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 900);
  };

  if (done) {
    return (
      <div className="grid h-full place-items-center rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <div>
          <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15">
            <CheckCircle2 size={38} className="text-emerald-600" aria-hidden="true" />
          </span>
          <h3 className="font-display text-2xl font-semibold text-navy-900">We've got your message</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-navy-600">
            Thanks, {name.split(" ")[0]}. A member of our Austin team will reach out within the hour — day or night.
          </p>
          <a
            href={business.phoneHref}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-navy-800"
          >
            <Phone size={16} aria-hidden="true" />
            {business.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Your Name *
          </label>
          <input
            id="c-name" type="text" autoComplete="name" placeholder="Marcus T."
            value={name} onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "c-name-err" : undefined}
            className={cn("field-input", errors.name && "field-error")}
          />
          {errors.name && (
            <p id="c-name-err" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="c-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Phone *
          </label>
          <input
            id="c-phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(512) 555-0000"
            value={phone} onChange={(e) => setPhone(e.target.value)}
            aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "c-phone-err" : undefined}
            className={cn("field-input", errors.phone && "field-error")}
          />
          {errors.phone && (
            <p id="c-phone-err" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
          Email <span className="font-medium normal-case text-navy-400">(optional)</span>
        </label>
        <input
          id="c-email" type="email" autoComplete="email" placeholder="you@example.com"
          value={email} onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "c-email-err" : undefined}
          className={cn("field-input", errors.email && "field-error")}
        />
        {errors.email && (
          <p id="c-email-err" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="relative">
        <label htmlFor="c-service" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
          Service Needed <span className="font-medium normal-case text-navy-400">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="c-service" value={service} onChange={(e) => setService(e.target.value)}
            className={cn("field-input appearance-none pr-10", !service && "text-navy-400")}
          >
            <option value="">Not sure yet — I need a hand</option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ChevronDown size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-500" aria-hidden="true" />
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
          How can we help? *
        </label>
        <textarea
          id="c-message" rows={4} placeholder="e.g. AC stopped blowing cold air on a 104-degree afternoon…"
          value={message} onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "c-message-err" : undefined}
          className={cn("field-input resize-none", errors.message && "field-error")}
        />
        {errors.message && (
          <p id="c-message-err" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-400 px-6 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-[0_14px_30px_-10px_rgba(245,158,11,0.6)] transition-all hover:bg-brand-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 size={19} className="animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send size={18} strokeWidth={2.4} aria-hidden="true" />
            Send My Request
          </>
        )}
      </button>
      <p className="text-center text-[0.7rem] leading-snug text-navy-500">
        Your details stay private. We only use them to respond and schedule service.
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Get in <span className="italic text-brand-300">Touch</span></>}
        subtitle="Questions, emergencies, or a free estimate? Call now — or fill out the form and a member of our team will get back to you within the hour."
        crumbs={[{ label: "Home", path: "#/" }, { label: "Contact" }]}
      >
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2.5 rounded-full bg-brand-400 px-7 py-4 text-base font-extrabold tracking-tight text-navy-950 shadow-[0_16px_32px_-12px_rgba(255,176,32,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-300 active:scale-95"
        >
          <Phone size={19} strokeWidth={2.5} aria-hidden="true" />
          Call {business.phone}
        </a>
      </PageHero>

      <section className="bg-cream-50 py-14 sm:py-24" aria-labelledby="contact-heading">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8">
          {/* form card */}
          <Reveal>
            <h2 id="contact-heading" className="sr-only">Contact form</h2>
            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-900/6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          {/* info column */}
          <div className="flex flex-col gap-4">
            <Reveal delay={120}>
              <div className="flex items-start gap-4 rounded-3xl bg-navy-900 p-6 shadow-lift">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-400 text-navy-950">
                  <Siren size={23} strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-white">24/7 Emergency Dispatch</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-200">
                    Burst pipes, heating failures, AC blowing warm — we're dispatched day and night.
                  </p>
                  <a
                    href={business.phoneHref}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-brand-300 underline-offset-4 transition-colors hover:text-brand-400 hover:underline"
                  >
                    {business.phone} <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={business.phoneHref}
                  className="group rounded-3xl border border-navy-900/8 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5"
                >
                  <Phone size={22} className="text-brand-600" aria-hidden="true" />
                  <p className="mt-3 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-navy-400">Phone</p>
                  <p className="mt-1 text-sm font-extrabold text-navy-900 group-hover:text-brand-600">{business.phone}</p>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="group rounded-3xl border border-navy-900/8 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5"
                >
                  <Mail size={22} className="text-brand-600" aria-hidden="true" />
                  <p className="mt-3 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-navy-400">Email</p>
                  <p className="mt-1 break-all text-xs font-extrabold leading-relaxed text-navy-900 group-hover:text-brand-600">
                    {business.email}
                  </p>
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="rounded-3xl border border-navy-900/8 bg-white p-6 shadow-card">
                <p className="flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-navy-400">
                  <Clock size={14} aria-hidden="true" /> Hours
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-navy-800">{h.day}</span>
                      <span className="text-right font-medium text-navy-500">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-navy-900/8 pt-4">
                  <p className="flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-navy-400">
                    <MapPin size={14} aria-hidden="true" /> Service Areas
                  </p>
                  <p className="mt-2 flex flex-wrap gap-1.5 text-xs font-bold text-navy-700">
                    {business.areas.map((area) => (
                      <span key={area} className="rounded-full bg-cream-100 px-2.5 py-1 ring-1 ring-navy-900/6">
                        {area}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="flex items-center gap-3 rounded-2xl border border-brand-400/40 bg-brand-300/15 p-4">
                <Star size={18} className="shrink-0 fill-brand-500 text-brand-500" aria-hidden="true" />
                <p className="text-xs font-bold leading-relaxed text-navy-700">
                  4.9 / 5 rating · 350+ five-star Google reviews across Austin & Round Rock
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* final thin CTA */}
      <section className="bg-navy-900 pb-6 pt-12 sm:py-14" aria-label="Emergency callout">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
          <div className="flex items-center gap-4">
            <Stars size={20} className="hidden sm:inline-flex" />
            <p className="font-display text-xl font-semibold text-white sm:text-2xl">
              Prefer to talk? Just call — we'll get back to you, rain or shine.
            </p>
          </div>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-2xl bg-brand-400 px-8 py-4 text-base font-extrabold text-navy-950 shadow-[0_16px_32px_-12px_rgba(255,176,32,0.6)] transition-all hover:-translate-y-0.5 hover:bg-brand-300 active:scale-95"
          >
            <Phone size={19} strokeWidth={2.5} aria-hidden="true" />
            {business.phone}
          </a>
        </div>
      </section>
    </>
  );
}
