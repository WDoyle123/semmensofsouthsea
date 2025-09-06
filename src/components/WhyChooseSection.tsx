import type { CSSProperties } from "react";

type CSSVar = CSSProperties & Record<string, string | number>;

export default function WhyChooseSection() {
  return (
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
                  <div className="badge join-item badge-outline">DVSA Approved</div>
                  <div className="badge join-item badge-outline">Warranty Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

