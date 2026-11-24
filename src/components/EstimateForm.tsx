import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, Flame, Loader2 } from "lucide-react";
import { serviceTypes, business } from "@/lib/site";
import { cn } from "@/utils/cn";

type Errors = { name?: string; phone?: string; service?: string };

/**
 * High-converting "Request an Estimate" form.
 * In this build there is no backend; submissions simulate a response and
 * surface a clear confirmation state with the dispatch phone number.
 */
export default function EstimateForm({
  compact = false,
  heading,
  onSubmitted,
}: {
  compact?: boolean;
  heading?: string;
  onSubmitted?: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a valid phone number";
    if (!service) next.service = "Pick a service";
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
      onSubmitted?.();
    }, 700);
  };

  if (done) {
    return (
      <div
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15">
          <CheckCircle2 size={34} className="text-emerald-600" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold text-navy-900">Request received!</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
          Thanks, {name.split(" ")[0]}. A Lone Star technician will call you back shortly.
        </p>
        <a
          href={business.phoneHref}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-800"
        >
          Call us now: {business.phone}
        </a>
        <p className="mt-3 text-xs text-navy-500">24/7 emergency dispatch · Austin, TX</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("space-y-4", compact && "space-y-3")}
      aria-label="Request an estimate"
    >
      <div>
        <div className="flex items-center gap-2">
          <Flame size={20} className="text-brand-600" aria-hidden="true" />
          <h3 className="font-display text-xl font-semibold tracking-tight text-navy-900">
            {heading ?? "Request an Estimate"}
          </h3>
        </div>
        <p className="mt-1 text-sm text-navy-500">
          Free, no-pressure quote. We call back within the hour.
        </p>
      </div>

      <div className="grid gap-3">
        <div>
          <label htmlFor="est-name" className="mb-1 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Your Name
          </label>
          <input
            id="est-name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Marcus T."
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "est-name-err" : undefined}
            className={cn("field-input", errors.name && "field-error")}
          />
          {errors.name && (
            <p id="est-name-err" role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="est-phone" className="mb-1 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Phone Number
          </label>
          <input
            id="est-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(512) 555-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "est-phone-err" : undefined}
            className={cn("field-input", errors.phone && "field-error")}
          />
          {errors.phone && (
            <p id="est-phone-err" role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="relative">
          <label htmlFor="est-service" className="mb-1 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Service Needed
          </label>
          <div className="relative">
            <select
              id="est-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "est-service-err" : undefined}
              className={cn(
                "field-input appearance-none pr-10",
                !service && "text-navy-400",
                errors.service && "field-error"
              )}
            >
              <option value="" disabled>
                Select a service…
              </option>
              {serviceTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-500"
              aria-hidden="true"
            />
          </div>
          {errors.service && (
            <p id="est-service-err" role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.service}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-xl bg-brand-400 px-6 py-3.5 text-base font-extrabold tracking-tight text-navy-950",
          "shadow-[0_14px_28px_-10px_rgba(245,158,11,0.55)] transition-all hover:bg-brand-300 hover:shadow-[0_18px_32px_-10px_rgba(245,158,11,0.65)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70",
          compact && "py-3 text-sm"
        )}
      >
        {submitting ? (
          <>
            <Loader2 size={19} className="animate-spin" aria-hidden="true" /> Scheduling…
          </>
        ) : (
          <>Get Free Estimate</>
        )}
      </button>

      <p className="text-center text-[0.7rem] leading-snug text-navy-500">
        No hidden fees. No pushy sales. Flat-rate quotes approved before work begins.
      </p>
    </form>
  );
}
