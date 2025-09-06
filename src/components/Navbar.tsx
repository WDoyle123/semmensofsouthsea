export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/70 backdrop-blur supports-[backdrop-filter]:bg-base-100/50 border-b border-base-300">
      <div className="navbar-start">
        <div className="dropdown ">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-square"
            aria-label="Open navigation menu"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#why">Why us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="mt-2">
              <a href="#contact" className="btn btn-secondary btn-sm">
                Book now
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <a
          href="#contact"
          className="btn btn-secondary btn-sm hidden md:inline-flex"
        >
          Book now
        </a>
      </div>
    </div>
  );
}

