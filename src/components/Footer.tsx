const navLinks = [
  { label: "Services", href: "#pricing" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-navy-dark text-cream/70 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span
            className="text-cream text-lg font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Semmens of Southsea
          </span>
          <span className="text-amber text-xs tracking-widest uppercase mt-1">
            Motor Engineers · Est. 1982
          </span>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cream transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-xs text-cream/40 text-center md:text-right">
            &copy; {new Date().getFullYear()} Semmens of Southsea. All rights
            reserved.
          </p>
          <p className="text-xs text-cream/30 text-center md:text-right">
            Website by{" "}
            <a
              href="https://williamdoyle.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream/70 transition-colors duration-200 underline underline-offset-2"
            >
              William E. Doyle
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
