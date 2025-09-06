import { useState } from "react";
import ContactFormOverlay from "./ContactFormOverlay";

export default function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
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
                Phone: <a href="tel:+44XXXXXXXXXX" className="link link-secondary">023 9281 6610</a>
              </p>
              <p className="text-lg">
                Email: <a href="mailto:info@semmensofsouthsea.co.uk" className="link link-secondary">info@semmensofsouthsea.co.uk</a>
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

      <div id="contact-form-overlay">
        <ContactFormOverlay
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      </div>
    </section>
  );
}

