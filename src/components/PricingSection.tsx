export type PriceKey =
  | "MOT"
  | "Interim Service"
  | "Full Service"
  | "Diagnostics"
  | "Repairs Labour"
  | "Tyres"
  | "Wheel Alignment";

export type PriceItem = {
  key: PriceKey;
  label: string;
  from: string;
  unit?: string;
  includes?: string[];
  notes?: string;
  badge?: string;
  ctaText?: string;
};

const PRICING: PriceItem[] = [
  {
    key: "MOT",
    label: "MOT (Class 4)",
    from: "£45",
    notes: "Free retest when repairs are completed with us*",
    badge: "Popular",
    ctaText: "Book MOT",
  },
  {
    key: "Interim Service",
    label: "Interim Service",
    from: "£129",
    includes: [
      "Oil & filter",
      "Top-up essential fluids",
      "Brake, tyre & safety checks",
      "Digital service record update (where supported)",
    ],
    ctaText: "Book Interim Service",
  },
  {
    key: "Full Service",
    label: "Full Service",
    from: "£199",
    includes: [
      "All interim items",
      "Air/pollen/fuel filters (where required)",
      "Plugs (vehicle-dependent)",
      "Comprehensive inspection & report",
    ],
    badge: "Best value",
    ctaText: "Book Full Service",
  },
  {
    key: "Diagnostics",
    label: "Engine Diagnostics",
    from: "£60",
    unit: "initial assessment",
    notes: "Diagnostic fee deducted if you approve repair*",
    ctaText: "Book Diagnostics",
  },
  {
    key: "Repairs Labour",
    label: "Repairs Labour",
    from: "£75",
    unit: "per hour",
    notes: "Fixed-price quotes provided before work",
    ctaText: "Book Repairs",
  },
  {
    key: "Tyres",
    label: "Tyres (fitted & balanced)",
    from: "£55",
    unit: "per tyre",
    notes: "Economy 195/65 R15 example — sizes/brands vary",
    ctaText: "Book Tyres",
  },
  {
    key: "Wheel Alignment",
    label: "Wheel Alignment",
    from: "£49",
    unit: "front axle",
    notes: "Four-wheel alignment quoted after inspection",
    ctaText: "Book Alignment",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 container mx-auto px-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
          Pricing
        </h2>
      </div>

      <p className="opacity-80 mt-3 max-w-3xl">
        Transparent, upfront pricing. Many jobs depend on vehicle model and
        condition, so we publish “from” prices below and confirm a firm quote
        after a quick check.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRICING.map((p) => (
          <div
            key={p.key}
            className="relative border border-base-300 bg-base-100 shadow-xl rounded-lg overflow-hidden"
          >
            {p.badge && (
              <div className="absolute right-3 top-3 badge badge-secondary">
                {p.badge}
              </div>
            )}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold">{p.label}</h3>
              <div className="mt-2">
                <span className="text-3xl font-extrabold">{p.from}</span>
                <span className="opacity-70 ml-2">
                  {p.unit ? ` ${p.unit}` : " starting from"}
                </span>
              </div>

              {p.includes && p.includes.length > 0 && (
                <ul className="mt-4 list-disc pl-6">
                  {p.includes.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              )}

              {p.notes && <p className="mt-3 text-sm opacity-75">{p.notes}</p>}

              {p.ctaText && (
                <div className="mt-auto pt-6">
                  <a href={"#contact"} className="btn btn-secondary w-full">
                    {p.ctaText}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs opacity-70 space-y-1">
        <p>
          *Retest and diagnostic fee policies apply when repairs are completed
          by us; details confirmed at booking.
        </p>
        <p>
          Prices include VAT. Parts/prices may vary by vehicle and
          specification. We’ll always confirm exact costs before work begins.
        </p>
      </div>
    </section>
  );
}
