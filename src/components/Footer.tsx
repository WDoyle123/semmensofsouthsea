export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <h4 className="font-black tracking-widest">SEMMENS of SOUTHSEA</h4>
        <p className="opacity-70">
          © {new Date().getFullYear()} Semmens of Southsea — Motor Engineers
        </p>
      </aside>
      <div>Created and Designed by William Doyle</div>
    </footer>
  );
}

