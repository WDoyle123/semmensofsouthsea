import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wrench, ShieldCheck, Clock, Star } from "lucide-react";
import SemmensLogo from "./SemmensLogo";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 bg-navy-dark" style={{ y: bgY }}>
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #e89b3c 0%, transparent 45%),
                              radial-gradient(circle at 80% 20%, #3a4572 0%, transparent 45%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/85 to-navy-dark" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-28 pb-28 gap-8"
      >
        {/* Curved logo */}
        <div>
          <SemmensLogo fontSize={72} />
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-24 h-px bg-amber/50"
        />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-cream/70 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          MOTs, servicing, repairs, tyres and diagnostics — carried out by
          experienced engineers using OEM-spec parts. Honest pricing, clear
          advice and a 12-month parts &amp; labour guarantee.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-amber text-navy-dark font-semibold text-base hover:bg-amber-light transition-all duration-200 shadow-lg"
          >
            Book a Service
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl border border-cream/30 text-cream font-semibold text-base hover:bg-cream/10 transition-all duration-200"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl"
        >
          {[
            { icon: Star,        label: "4.9★ Google",     sub: "Trusted locally" },
            { icon: ShieldCheck, label: "12 mo guarantee", sub: "Parts & labour"  },
            { icon: Clock,       label: "Same-day",        sub: "Where possible"  },
            { icon: Wrench,      label: "DVSA approved",   sub: "Class 4 MOT"     },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm flex items-center gap-3"
            >
              <Icon size={20} className="text-amber shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-cream text-sm font-semibold">{label}</p>
                <p className="text-cream/50 text-[11px]">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
