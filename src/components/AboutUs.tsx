import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Independent family-run garage since 1982",
  "DVSA-approved MOT testing centre",
  "OEM-spec parts & manufacturer-approved oils",
  "Clear, jargon-free advice — no surprises",
];
const garageImageSrc = `${import.meta.env.BASE_URL}garage.jpg`;

function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Garage image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-xl border border-cream-dark"
              style={{ width: "100%", aspectRatio: "4 / 5" }}
            >
              <img
                src={garageImageSrc}
                alt="Inside the Semmens of Southsea workshop"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-6 -right-6 bg-navy-dark text-cream rounded-2xl p-6 shadow-xl"
            >
              <p
                className="text-4xl font-bold text-amber"
                style={{ fontFamily: "var(--font-display)" }}
              >
                40+
              </p>
              <p className="text-cream/80 text-sm mt-1">
                Years on Furness Road
              </p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              delay: 0.15,
            }}
            className="order-1 lg:order-2"
          >
            <p className="text-amber-dark text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Who We Are
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Southsea Garage You Can Trust
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Semmens of Southsea has been keeping Portsmouth's drivers on the
              road for over four decades. From the family runabout to the
              weekend project car, every vehicle gets the same careful
              attention from our experienced engineers.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We believe in doing things properly: the right parts, the right
              tools, and clear conversations about what your car actually
              needs. No upsells, no surprises — just honest workmanship and
              a 12-month parts &amp; labour guarantee on everything we do.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <CheckCircle
                    size={18}
                    className="text-amber-dark mt-0.5 shrink-0"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center mt-10 px-7 py-3.5 rounded-xl bg-navy-dark text-cream font-semibold text-sm hover:bg-navy transition-colors duration-200"
            >
              Book Your Car In
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
