import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(17,23,42,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 col-span-2 md:col-span-1 min-w-0"
        >
          <div className="flex flex-col leading-none min-w-0">
            <span
              className="text-cream font-bold tracking-tight truncate text-base md:text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Semmens of Southsea
            </span>
            <span className="text-amber text-[10px] md:text-xs tracking-[0.25em] uppercase mt-0.5">
              Motor Engineers · Est. 1982
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center justify-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cream/80 hover:text-cream text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:02392816610"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber text-navy-dark hover:bg-amber-light transition-colors duration-200 justify-self-end"
        >
          <Phone size={16} />
          023 9281 6610
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream p-2 justify-self-end"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-navy-dark/95 backdrop-blur-md px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-cream/80 hover:text-cream text-base font-medium block py-1 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:02392816610"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber text-navy-dark hover:bg-amber-light transition-colors"
              >
                <Phone size={16} />
                023 9281 6610
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default NavBar;
