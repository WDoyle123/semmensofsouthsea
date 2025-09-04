import { useMemo, useState } from "react";
import type { CSSProperties, JSX } from "react";
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

  // Derive strongly-typed keys from the literal list
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

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Semmens
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black leading-tight">
              of
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Southsea
            </h2>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg opacity-80">
              Motor Engineers
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
      absolute bottom-[18.5rem] right-[-2rem]
      w-[clamp(200px,45vw,720px)]     
      md:bottom-[21rem] md:right-[-2.5rem]
      lg:bottom-[7.5rem] lg:right-[-1.5rem]
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

            <div className="mt-6 sm:mt-8 stats stats-horizontal shadow-lg bg-base-100/70 backdrop-blur scale-100">
              <div className="stat px-2 sm:px-4">
                <div className="stat-title text-xs sm:text-sm">
                  Customer rating
                </div>
                <div className="stat-value text-lg sm:text-2xl">4.9⭐</div>
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
                activeService === s && "tab-active"
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
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Why choose Semmens of Southsea?
          </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Accurate diagnostics</h3>
                <p className="opacity-80">
                  We use the latest tools to pinpoint issues quickly—saving you
                  time and money.
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

            <div className="card bg-base-100 shadow-lg">
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

          <div className="mt-10 mockup-window border bg-base-100 shadow-xl">
            <div className="px-6 py-8">
              <div className="chat chat-start">
                <div className="chat-bubble">
                  “Booked in for an MOT and was back on the road the same day.
                  Clear advice, no stress—couldn’t ask for better service.”
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-secondary">
                  That’s exactly what we aim for—straightforward, same-day
                  service to keep you driving with confidence.
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
                    +44 XX XXXX XXXX
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

