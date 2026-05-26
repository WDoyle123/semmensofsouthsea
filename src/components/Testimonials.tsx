import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  reviewUrl: string;
  name: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Luke and his team are honest, trustworthy and reliable. They all work incredibly hard whilst delivering results that are always outstanding.",
    reviewUrl: "https://share.google/LQgvF4iXI79T8aaTU",
    name: "Leah S.",
    initials: "LS",
  },
  {
    quote:
      "Have been going to Semmens for all car related fixes for a number of years now! I have always received a friendly and professional service from Luc and his team. Would highly recommend - even now I live further away, I still wouldn't take my car anywhere else!",
    reviewUrl: "https://share.google/7Sk9nhRjRqQLM8SMw",
    name: "B S.",
    initials: "BS",
  },
  {
    quote:
      "I recently took my car to Semmens for its MOT and service, as they were recommended by my sister and dad and I’m super happy I did! Luke and his team were really helpful, friendly and kind and I felt full trust with them. Even though my car required a few repairs, it’s a great feeling to be able to drive away knowing my car is safe to use and was in good hands. I’ll be glad to go back there whenever I should need their help again :)",
    reviewUrl: "https://share.google/pZW7wP1EW5Er7U6TB",
    name: "Emma B.",
    initials: "EB",
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
    <section id="testimonials" className="py-24 px-6 bg-white overflow-hidden">
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
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.reviewUrl}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative bg-cream border border-cream-dark rounded-2xl p-8 flex flex-col gap-6"
            >
              <Quote size={28} className="text-amber" />
              <p className="text-gray-700 text-base leading-relaxed flex-1">
                “{testimonial.quote}”
              </p>
              <a
                href={testimonial.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read full Google review from ${testimonial.name}`}
                className="inline-flex w-fit items-center gap-2 text-navy-dark hover:text-amber-dark text-sm font-semibold transition-colors duration-200 underline underline-offset-2"
              >
                Read full review
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <div className="flex items-center gap-4 pt-2 border-t border-cream-dark">
                <div className="w-10 h-10 rounded-full bg-navy-dark flex items-center justify-center text-cream text-sm font-bold shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-navy-dark text-sm font-semibold">
                    {testimonial.name}
                  </p>
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
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
