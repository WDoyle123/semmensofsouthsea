import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Honest, friendly and reasonably priced. I've been bringing my cars here for years and wouldn't go anywhere else in Portsmouth.",
    name: "Sarah M.",
    role: "Southsea",
    initials: "SM",
  },
  {
    quote:
      "Great communication — they explained exactly what was wrong, gave a clear quote, and the car was ready the same day. Highly recommended.",
    name: "David R.",
    role: "Eastney",
    initials: "DR",
  },
  {
    quote:
      "A proper old-school garage in the best possible way. Skilled mechanics, fair prices, and they actually take the time to talk you through everything.",
    name: "Emma T.",
    role: "Old Portsmouth",
    initials: "ET",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-amber-dark text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Customer Reviews
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-navy-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Rated 4.9★ on Google by the people of Portsmouth and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative bg-cream border border-cream-dark rounded-2xl p-8 flex flex-col gap-6"
            >
              <Quote size={28} className="text-amber" />
              <p className="text-gray-700 text-base leading-relaxed flex-1">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-cream-dark">
                <div className="w-10 h-10 rounded-full bg-navy-dark flex items-center justify-center text-cream text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-navy-dark text-sm font-semibold">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Semmens+Of+Southsea+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy-dark hover:text-amber-dark text-sm font-semibold transition-colors"
          >
            Read all reviews on Google
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
