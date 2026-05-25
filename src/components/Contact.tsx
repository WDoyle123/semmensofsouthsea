import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, X, MessageSquare } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "2 Furness Rd, Southsea, Portsmouth PO5 2JL",
  },
  { icon: Phone, label: "Phone", value: "023 9281 6610", href: "tel:02392816610" },
  {
    icon: Mail,
    label: "Email",
    value: "info@semmensofsouthsea.co.uk",
    href: "mailto:info@semmensofsouthsea.co.uk",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 08:30–17:30 · Sat 09:00–13:00",
  },
];

function FormSkeleton() {
  return (
    <div className="absolute inset-0 z-10 p-6 space-y-4 animate-pulse pointer-events-none">
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
    </div>
  );
}

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const scrollPos = useRef(0);

  useEffect(() => {
    if (modalOpen) {
      scrollPos.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo({ top: scrollPos.current, behavior: "instant" });
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [modalOpen]);

  return (
    <section id="contact" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-amber-dark text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Get In Touch
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-navy-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book Your Car In
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Give us a call, drop us an email, or send a quick enquiry — we'll
            get back to you the same working day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-navy-dark rounded-2xl p-10 text-cream"
          >
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Semmens of Southsea
            </h3>
            <p className="text-cream/60 text-sm mb-8">
              Motor Engineers · Established 1982
            </p>

            <ul className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-amber" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-cream/50 text-xs uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-cream text-sm hover:text-amber transition-colors break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-cream text-sm break-words">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — map + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            <div className="rounded-2xl overflow-hidden border border-cream-dark shadow-sm bg-white aspect-[16/9]">
              <iframe
                className="w-full h-full"
                frameBorder={0}
                loading="lazy"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Semmens+of+Southsea&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                title="Semmens of Southsea — location"
                allowFullScreen
              />
            </div>

            <div className="bg-white rounded-2xl border border-cream-dark shadow-sm p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-amber/15 flex items-center justify-center shrink-0">
                <MessageSquare size={24} className="text-amber-dark" />
              </div>
              <div className="flex-1">
                <h4
                  className="text-lg font-bold text-navy-dark mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Send Us an Enquiry
                </h4>
                <p className="text-gray-500 text-sm">
                  Fill in our quick form and we'll get back to you the same
                  working day.
                </p>
              </div>
              <motion.button
                onClick={() => {
                  setIframeLoaded(false);
                  setModalOpen(true);
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-navy-dark text-cream font-semibold text-sm hover:bg-navy transition-colors duration-200 whitespace-nowrap"
              >
                Open Form
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setModalOpen(false)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none">
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20 pointer-events-auto"
                style={{
                  height: "min(95dvh, 95vh)",
                  maxHeight: "min(95dvh, 95vh)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 shrink-0">
                  <h3
                    className="text-lg font-bold text-cream"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Contact Semmens of Southsea
                  </h3>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-cream/60 hover:text-cream hover:bg-white/10 transition-colors duration-200"
                    aria-label="Close form"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="relative flex-1 min-h-0 overflow-hidden">
                  {!iframeLoaded && <FormSkeleton />}
                  <motion.iframe
                    className="block h-full w-full bg-white"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSei7rKBh4t3GboTNexsA0d0eeWjjFYYQVAytM66y-X5-tTYtg/viewform?embedded=true"
                    width="100%"
                    frameBorder="0"
                    scrolling="yes"
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact Form"
                    onLoad={() => setIframeLoaded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: iframeLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Loading…
                  </motion.iframe>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
