import { ClipboardList, Phone } from "lucide-react";
import { business } from "@/lib/site";

/**
 * Sticky mobile Call Now bar — visible on small screens only.
 * Keeps the primary conversion path always one tap away.
 */
export default function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-950/95 px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2 backdrop-blur-md md:hidden"
      role="complementary"
      aria-label="Quick call bar"
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={business.phoneHref}
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-400 py-3.5 text-[0.95rem] font-extrabold text-navy-950 shadow-[0_10px_20px_-10px_rgba(255,176,32,0.7)] transition-transform active:scale-95"
        >
          <Phone size={19} strokeWidth={2.6} aria-hidden="true" />
          Call Now
        </a>
        <a
          href="#/contact"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3.5 text-[0.95rem] font-bold text-white transition-transform active:scale-95"
        >
          <ClipboardList size={18} aria-hidden="true" />
          Estimate
        </a>
      </div>
    </div>
  );
}
