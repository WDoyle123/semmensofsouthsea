import { useMemo, useState, useEffect, useRef } from "react";
import type { CSSProperties, JSX } from "react";
import CircleType from "circletype";
;
import ContactFormOverlay from "./components/ContactFormOverlay";
import "./App.css";

const SERVICE_NAMES = [
  "MOT",
  "Services",
  "Repairs",
  "Tyres",
  "Engine Diagnostics",
  "Steering and Suspension",
] as const;

type ServiceKey = (typeof SERVICE_NAMES)[number];

const SERVICE_COPY: Record<ServiceKey, string> = {
  MOT: "DVSA-approved MOT testing for Class 4 vehicles. Pre-checks, advisories explained plainly, and same-day retests where applicable.",
  Services:
    "Interim and full servicing using OEM-spec parts and oils. Digital service records updated where supported.",
  Repairs:
    "Mechanical and electrical repairs from clutches and brakes to alternators and cooling systems. Clear quotes before we start.",
  Tyres:
    "Supply, fit, and balance. Puncture repairs, valve replacements, and TPMS diagnostics.",
  "Engine Diagnostics":
    "Modern diagnostics with live data and fault-code analysis. Root-cause reports (not just code clearing).",
  "Steering and Suspension":
    "Shocks, springs, bushings, track rods and geometry checks to keep the ride safe and precise.",
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

type CSSVar = CSSProperties & Record<string, string | number>;

export default function App() {
  const [activeService, setActiveService] = useState<ServiceKey>("MOT");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    new CircleType(textRef.current).radius(420);
  }, []);

  const services = useMemo<ServiceKey[]>(() => [...SERVICE_NAMES], []);

  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-base-100/70 backdrop-blur supports-[backdrop-filter]:bg-base-100/50 border-b border-base-300">
        <div className="navbar-start">
          <div className="dropdown ">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-square"
              aria-label="Open navigation menu"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#why">Why us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="mt-2">
                <a href="#contact" className="btn btn-secondary btn-sm">
                  Book now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <a
            href="#contact"
            className="btn btn-secondary btn-sm hidden md:inline-flex"
          >
            Book now
          </a>
        </div>
      </div>

      <section
        id="top"
        className="hero min-h-[50vh] sm:min-h-[70vh] relative overflow-hidden"
      >
        <div className="hero-content w-full px-4 sm:px-6 md:px-8 text-center">
          <div className="mx-auto max-w-xl sm:max-w-2xl">
            <div className="badge badge-secondary mb-3 sm:mb-4">
              Since 1982 • Portsmouth
            </div>

            <h1
              ref={textRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-shadow text-[#3a4572] tracking-[0rem] mt-5 sm:mt-10"
              style={{ fontFamily: "'Old Standard TT', serif" }}
            >
              SEMMENS
            </h1>
            <h2
              className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl sm:mt-[-10px] md:mt-[-20px] lg:mt-[-30px] text-[#3a4572]  leading-tight tracking-tight font-bold"
              style={{ fontFamily: "'Old Standard TT', serif" }}
            >
              of Southsea
            </h2>

            <p className="mt-3 sm:mt-4  sm:text-lg md:text-xl lg:text-3xl font-bold text-[#3a4572] lg:tracking-[0.5rem]">
              MOTOR ENGINEERS
            </p>

            <img
              src="tower.svg"
              alt=""
              aria-hidden="true"
              className="
      pointer-events-none select-none filter invert
      absolute bottom-[17.5rem] left-[0rem]
      w-[clamp(180px,35vw,520px)]     
      md:bottom-[19rem] md:right-[-1rem]
      lg:bottom-[5rem] lg:left-[1rem]
      object-contain
    "
            />

            <img
              src="luc-img-mod.png"
              alt=""
              aria-hidden="true"
              className="
      pointer-events-none select-none 
      absolute bottom-[18.5rem] right-[-2.8rem]
      w-[clamp(200px,45vw,720px)]     
      md:bottom-[21rem] md:right-[-4.5rem]
      lg:bottom-[7.5rem] lg:right-[-3.5rem]
      object-contain
    "
            />

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href="#services"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Explore services
              </a>
              <a href="#contact" className="btn btn-outline w-full sm:w-auto">
                Get a quote
              </a>
            </div>

            <div className="mt-6 sm:mt-8 stats stats-horizontal shadow-xl bg-base-100/70 backdrop-blur scale-100">
              <div className="stat px-2 sm:px-4">
                <div className="stat-title text-xs sm:text-sm">
                  Customer rating
                </div>
                <a
                  href="https://www.google.com/search?sca_esv=67db8545f6bda9c4&sxsrf=AE3TifPc8jKTc85c3tMl7HK8GQbTjxj_mw:1757096031060&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E83CyQ1woFGro85n2fReaq4-3ssyJSYTK7Ng2qWQGQ4CyaIShJ97jjVdXGni4BaUeBGmQcUolW4k3YdQbxDR5_bvIeypCtoKrIuExYo5hPQisnq74g%3D%3D&q=Semmens+Of+Southsea+Reviews&sa=X&ved=2ahUKEwjY55HmnMKPAxWlQUEAHaoaInAQ0bkNegQIOxAE&cshid=1757096048511484&biw=1664&bih=1094&dpr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read our Google reviews (opens in a new tab)"
                  className="stat-value text-lg sm:text-2xl transform transition-transform duration-200 hover:-translate-y-0.5"
                >
                  4.9⭐
                </a>{" "}
                <div className="stat-desc text-[10px] sm:text-xs">
                  Local &amp; repeat business
                </div>
              </div>
              <div className="stat px-2 sm:px-4">
                <div className="stat-title text-xs sm:text-sm">Turnaround</div>
                <div className="stat-value text-lg sm:text-2xl">Same-day</div>
                <div className="stat-desc text-[10px] sm:text-xs">
                  Where applicable
                </div>
              </div>
              <div className="stat px-2 sm:px-4">
                <div className="stat-title text-xs sm:text-sm">Guarantee</div>
                <div className="stat-value text-lg sm:text-2xl">12 mo</div>
                <div className="stat-desc text-[10px] sm:text-xs">
                  Parts &amp; labour
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-100 to-transparent" />
      </section>

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
          <div className="border border-base-300 bg-base-100 shadow-xl">
            <div className="px-6 py-8">
              <div className="flex items-start gap-4">
                <div className="btn btn-circle btn-secondary btn-outline">
                  {ICONS[activeService]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{activeService}</h3>
                  <p className="opacity-80 mt-1 max-w-3xl">
                    {SERVICE_COPY[activeService]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="badge badge-outline">OEM-spec parts</span>
                    <span className="badge badge-outline">Clear pricing</span>
                    <span className="badge badge-outline">
                      Same-day when possible
                    </span>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="#contact" className="btn btn-secondary">
                      Book {activeService}
                    </a>
                    <a href="#contact" className="btn btn-outline">
                      Ask a question
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {services.map((label) => (
            <div
              key={label}
              className="card card-compact bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition"
            >
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <div className="btn btn-square btn-sm btn-ghost">
                    {ICONS[label]}
                  </div>
                  <h4 className="card-title">{label}</h4>
                </div>
                <p className="opacity-80">{SERVICE_COPY[label]}</p>
                <div className="card-actions justify-end">
                  <a href="#contact" className="btn btn-secondary btn-sm">
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          {/* Heading spans full width */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-12 text-center">
            Why choose Semmens of Southsea?
          </h2>

          {/* 2-column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column: image */}
            <img
              src="garage.jpg"
              alt="Our garage at Semmens of Southsea"
              className="rounded-lg shadow-xl w-full"
            />

            {/* Right column: cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Accurate diagnostics</h3>
                  <p className="opacity-80">
                    We use the latest tools to pinpoint issues quickly—saving
                    you time and money.
                  </p>
                  <div
                    className="mt-4 radial-progress"
                    style={{ "--value": 100 } as CSSVar}
                    role="progressbar"
                    aria-label="Diagnostic accuracy"
                  >
                    100%
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Clear &amp; fair pricing</h3>
                  <p className="opacity-80">
                    Estimates given up-front, with your approval before any work
                    begins.
                  </p>
                  <ul className="mt-3 steps steps-vertical md:steps-horizontal">
                    <li className="step step-secondary">Inspection</li>
                    <li className="step step-secondary">Estimate</li>
                    <li className="step">Approval</li>
                    <li className="step">Repair</li>
                  </ul>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg md:col-span-2">
                <div className="card-body">
                  <h3 className="card-title">Trusted parts &amp; service</h3>
                  <p className="opacity-80">
                    We only use quality OEM or equivalent parts, keeping your
                    vehicle safe and warranty intact.
                  </p>
                  <div className="join mt-4">
                    <div className="badge join-item badge-outline">OEM</div>
                    <div className="badge join-item badge-outline">
                      DVSA Approved
                    </div>
                    <div className="badge join-item badge-outline">
                      Warranty Safe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Contact
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mt-6 items-start">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <h3 className="card-title">Get in touch</h3>
                <p className="text-lg">
                  Phone:{" "}
                  <a href="tel:+44XXXXXXXXXX" className="link link-secondary">
                    023 9281 6610
                  </a>
                </p>
                <p className="text-lg">
                  Email:{" "}
                  <a
                    href="mailto:info@semmensofsouthsea.co.uk"
                    className="link link-secondary"
                  >
                    info@semmensofsouthsea.co.uk
                  </a>
                </p>
                <p className="opacity-80">
                  Opening hours: Mon–Fri 08:30–17:30, Sat 09:00–13:00
                </p>

                <div className="divider" />

                <button
                  type="button"
                  className="btn btn-secondary md:col-span-2"
                  onClick={() => setIsFormOpen(true)}
                  aria-expanded={isFormOpen}
                  aria-controls="contact-form-overlay"
                >
                  Enquiry
                </button>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
              <div className="card-body">
                <h3 className="card-title">Find us</h3>
              </div>
              <div className="px-6 pb-6">
                <div
                  className="relative w-full rounded-box border border-base-300 overflow-hidden"
                  style={{ paddingTop: "65%" }}
                >
                  <iframe
                    title="Semmens of Southsea — map"
                    className="absolute inset-0 w-full h-full"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=600&height=543&hl=en&q=Semmens%20of%20Southsea&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                  />
                </div>
                <a
                  href="https://embed-googlemap.com"
                  className="link link-hover text-xs opacity-60 mt-2 inline-block"
                >
                  embed google map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <aside>
          <h4 className="font-black tracking-widest">SEMMENS of SOUTHSEA</h4>
          <p className="opacity-70">
            © {new Date().getFullYear()} Semmens of Southsea — Motor Engineers
          </p>
        </aside>
        <div>Created and Designed by William Doyle</div>
      </footer>
      <div id="contact-form-overlay">
        <ContactFormOverlay
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      </div>
    </>
  );
}
