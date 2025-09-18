export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <p className="opacity-70">
          © {new Date().getFullYear()} Semmens of Southsea — Motor Engineers
        </p>
      </aside>
      <a
        href="https://www.williamdoyle.co.uk"
        className="opacity-70 underline transform transition-transform duration-200 hover:-translate-y-1"
      >
        Website by William Doyle
      </a>
    </footer>
  );
}
