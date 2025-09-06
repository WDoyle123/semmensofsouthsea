import { useMemo, useState } from "react";
import type { JSX, ReactNode } from "react";

const SERVICE_NAMES = [
  "MOT",
  "Services",
  "Repairs",
  "Tyres",
  "Engine Diagnostics",
  "Steering and Suspension",
] as const;

type ServiceKey = (typeof SERVICE_NAMES)[number];

const SERVICE_CONTENT: Record<ServiceKey, ReactNode> = {
  MOT: (
    <>
      <p>
        Our DVSA-approved MOT testing covers Class 4 vehicles, ensuring your car
        meets all legal safety and environmental standards. Before the test, we
        carry out a quick pre-check to highlight any obvious issues that might
        cause a fail.
      </p>
      <br />
      <p>
        During the test, we inspect brakes, lights, steering, suspension,
        emissions, and structural integrity. If advisories are raised, we’ll
        explain them clearly without jargon, so you know exactly what they mean
        for your car.
      </p>
      <br />
      <p>
        Should your vehicle fail, we offer same-day retests where possible once
        the issue is corrected, helping you get back on the road quickly and
        with confidence.
      </p>
    </>
  ),

  Services: (
    <>
      <p>
        We provide both interim and full servicing to keep your vehicle safe,
        efficient, and reliable.
      </p>
      <br />

      <p className="font-semibold">Interim service typically includes:</p>
      <ul className="list-disc pl-6">
        <li>Oil and filter change</li>
        <li>Top-up of essential fluids (coolant, brake fluid, screenwash)</li>
        <li>Brake inspection (pads, discs, and hydraulics)</li>
        <li>Tyre checks (tread depth, pressures, and wear patterns)</li>
        <li>Steering and suspension visual check</li>
        <li>Lights, wipers, and horn test</li>
        <li>Battery health check</li>
      </ul>

      <p className="font-semibold mt-4">
        Full service expands on this and also covers:
      </p>
      <ul className="list-disc pl-6">
        <li>Air, pollen, and fuel filter replacement (where required)</li>
        <li>Spark plugs or glow plugs (depending on vehicle type)</li>
        <li>Detailed brake inspection and adjustment</li>
        <li>Suspension components and drive belts inspection</li>
        <li>Exhaust system and emissions checks</li>
        <li>Full vehicle health check with advisory notes</li>
      </ul>

      <p className="mt-4 italic">
        All work is carried out with OEM-spec parts and manufacturer-approved
        oils. Where supported, we update your digital service record so your
        vehicle’s history remains complete and up to date.
      </p>
    </>
  ),

  Repairs: (
    <>
      <p>
        Our workshop handles a wide range of mechanical and electrical repairs,
        from routine fixes like brakes and clutches to more complex jobs such as
        alternators, starter motors, radiators, and cooling systems.
      </p>
      <br />
      <p>
        We use up-to-date diagnostic tools and proven repair techniques to get
        the job done properly the first time. Before any work begins, we’ll give
        you a clear, itemised quote with no hidden extras.
      </p>
      <br />
      <p>
        If additional issues are discovered during repair, we’ll contact you
        first to discuss options and costs, so you’re always in control of the
        decision-making.
      </p>
    </>
  ),

  Tyres: (
    <>
      <p>
        We supply, fit, and balance tyres from trusted brands to suit every
        budget and driving need, whether you’re after premium, mid-range, or
        economy options.
      </p>
      <br />
      <p>
        Our technicians check tread depth, wear patterns, and pressures to
        ensure safety and performance. We also handle puncture repairs (where
        safe to do so), valve replacements, and tyre pressure monitoring system
        (TPMS) servicing, including diagnostics and resets.
      </p>
      <br />
      <p>
        Wheel balancing is included with every tyre fitted, and we can also
        advise on wheel alignment to extend tyre life and improve handling.
      </p>
    </>
  ),

  "Engine Diagnostics": (
    <>
      <p>
        Modern vehicles rely on complex electronic systems, and our advanced
        diagnostic equipment allows us to go beyond simply reading fault codes.
      </p>
      <br />
      <p>
        We access live data streams to see how sensors and components are
        behaving in real time, allowing us to pinpoint root causes rather than
        just symptoms.
      </p>
      <br />
      <p>
        After analysis, we provide a clear, jargon-free report that explains
        what’s wrong, why it’s happening, and the best repair options. This
        approach saves you time and money by avoiding unnecessary part
        replacements and ensuring the issue is properly fixed.
      </p>
    </>
  ),

  "Steering and Suspension": (
    <>
      <p>
        We inspect and repair all aspects of your steering and suspension
        system, from shocks, springs, and bushings to ball joints, track rods,
        and anti-roll bars.
      </p>
      <br />
      <p>
        If your car feels unstable, pulls to one side, or makes knocking noises,
        these components are often the cause. Our team checks geometry and
        alignment to ensure tyres wear evenly and handling stays precise.
      </p>
      <br />
      <p>
        By restoring your suspension to its proper condition, we help improve
        safety, ride comfort, and fuel efficiency. We’ll always explain the
        findings and options clearly so you know exactly what’s being done and
        why.
      </p>
    </>
  ),
};

const ICONS: Record<ServiceKey, JSX.Element> = {
  MOT: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d="M3 16h18M5 16l4-7 3 5 3-5 4 7M4 19h16"
        className="stroke-current"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Services: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        className="stroke-current"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  Repairs: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d="M3 8l7 7M14 3l7 7M14 3l-2 5 5-2"
        className="stroke-current"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Tyres: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle
        cx="12"
        cy="12"
        r="7"
        className="stroke-current"
        fill="none"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        className="stroke-current"
        fill="none"
        strokeWidth="1.5"
      />
    </svg>
  ),
  "Engine Diagnostics": (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d="M3 10h3l2-2h6l2 2h3v6h-4l-2 2H8l-2-2H3zM9 12h6M9 15h4"
        className="stroke-current"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Steering and Suspension": (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d="M12 3v5M6 13l6-5 6 5M6 13l-2 8M18 13l2 8"
        className="stroke-current"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function classNames(...v: Array<string | false | null | undefined>) {
  return v.filter((x): x is string => Boolean(x)).join(" ");
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceKey>("MOT");
  const services = useMemo<ServiceKey[]>(() => [...SERVICE_NAMES], []);

  return (
    <>
      <section id="services" className="py-16 container mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Services
          </h2>
        </div>

        <div className="mt-6 tabs tabs-boxed overflow-x-auto w-full">
          {services.map((s) => (
            <button
              key={s}
              className={classNames(
                "tab whitespace-nowrap",
                activeService === s && "tab-active",
              )}
              onClick={() => setActiveService(s)}
            >
              <span className="mr-2">{ICONS[s]}</span>
              {s}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className="border border-base-300 bg-base-100 shadow-xl overflow-hidden rounded-lg">
            <div className="px-6 py-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="btn btn-circle btn-secondary btn-outline shrink-0">
                  {ICONS[activeService]}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold break-words">
                    {activeService}
                  </h3>

                  <div className="opacity-80 mt-1 prose break-words">
                    {SERVICE_CONTENT[activeService]}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="badge badge-outline">OEM-spec parts</span>
                    <span className="badge badge-outline">Clear pricing</span>
                    <span className="badge badge-outline">
                      Same-day when possible
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 min-w-0">
                    <a
                      href="#contact"
                      className="btn btn-secondary w-full sm:w-auto max-w-full whitespace-normal break-words"
                    >
                      Book {activeService}
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-outline w-full sm:w-auto max-w-full whitespace-normal break-words"
                    >
                      Ask a question
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
