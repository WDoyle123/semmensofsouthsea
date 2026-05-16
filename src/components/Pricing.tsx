import { motion } from "framer-motion";
import {
  Check,
  ClipboardCheck,
  Wrench,
  Cog,
  CircleDot,
  Gauge,
  Compass,
  AlignHorizontalJustifyCenter,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PriceItem = {
  icon: LucideIcon;
  label: string;
  description: string;
  from: string;
  unit?: string;
  includes?: string[];
  notes?: string;
  badge?: string;
};

const PRICING: PriceItem[] = [
  {
    icon: ClipboardCheck,
    label: "MOT (Class 4)",
    description: "DVSA-approved testing with a pre-check. Free same-day retest when we do the repairs.",
    from: "£45",
    notes: "Free retest when repairs are completed with us*",
    badge: "Popular",
  },
  {
    icon: Wrench,
    label: "Interim Service",
    description: "Essential maintenance to keep your car safe and running well between full services.",
    from: "£129",
    includes: [
      "Oil & filter change",
      "Top-up of essential fluids",
      "Brake, tyre & safety checks",
      "Digital service record update",
    ],
  },
  {
    icon: Wrench,
    label: "Full Service",
    description: "Comprehensive service covering all filters, plugs and a full vehicle health check.",
    from: "£199",
    includes: [
      "All interim items included",
      "Air, pollen & fuel filters",
      "Spark/glow plugs (vehicle dependent)",
      "Comprehensive inspection report",
    ],
    badge: "Best value",
  },
  {
    icon: Gauge,
    label: "Engine Diagnostics",
    description: "Live-data diagnostics to pinpoint root causes — clear jargon-free report included.",
    from: "£60",
    unit: "initial assessment",
    notes: "Fee deducted if you approve the repair*",
  },
  {
    icon: Cog,
    label: "Repairs Labour",
    description: "Brakes, clutches, cooling, electrics and more. Fixed-price quote before we start.",
    from: "£75",
    unit: "per hour",
    notes: "Fixed-price quotes provided before work",
  },
  {
    icon: CircleDot,
    label: "Tyres (fitted & balanced)",
    description: "Supply, fit and balance from trusted brands across all budgets. TPMS resets included.",
    from: "£55",
    unit: "per tyre",
    notes: "Economy 195/65 R15 — sizes & brands vary",
  },
  {
    icon: AlignHorizontalJustifyCenter,
    label: "Wheel Alignment",
    description: "Restore handling and extend tyre life. Four-wheel alignment quoted after inspection.",
    from: "£49",
    unit: "front axle",
    notes: "Four-wheel alignment quoted after inspection",
  },
  {
    icon: Compass,
    label: "Steering & Suspension",
    description: "Shocks, springs, ball joints and track rods inspected and repaired to factory spec.",
    from: "POA",
    notes: "Priced after inspection — always agreed before work",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-navy-dark relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, #e89b3c 0%, transparent 40%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-amber text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Services &amp; Pricing
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-cream mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Honest Prices, No Surprises
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto text-base leading-relaxed">
            We publish "from" prices below and always confirm a firm quote
            before any work begins.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {PRICING.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber/30 rounded-2xl p-6 flex flex-col transition-colors duration-300"
              >
                {p.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-amber text-navy-dark text-[10px] font-bold uppercase tracking-wider">
                    {p.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 group-hover:bg-amber group-hover:text-navy-dark text-amber transition-all duration-300 mb-4">
                  <Icon size={20} />
                </div>

                <h3
                  className="text-base font-semibold text-cream mb-1.5 pr-16 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.label}
                </h3>

                <p className="text-cream/50 text-xs leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-3xl font-bold text-amber">{p.from}</span>
                  {p.unit && (
                    <span className="text-cream/40 text-xs">{p.unit}</span>
                  )}
                </div>

                {p.includes && (
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {p.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-cream/65 text-xs"
                      >
                        <Check size={13} className="text-amber mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {p.notes && (
                  <p className="text-cream/35 text-[11px] leading-relaxed mt-auto pt-3 border-t border-white/10">
                    {p.notes}
                  </p>
                )}

                <a
                  href="#contact"
                  className="mt-4 block text-center text-xs font-semibold text-amber/70 hover:text-amber transition-colors duration-200"
                >
                  Book now →
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="text-cream/35 text-xs text-center mt-10 max-w-2xl mx-auto">
          * Retest and diagnostic fee policies apply when repairs are completed
          by us. Prices include VAT. Parts may vary by vehicle — exact costs
          always confirmed before work begins.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
