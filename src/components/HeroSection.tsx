import { useEffect, useRef } from "react";
import CircleType from "circletype";

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    new CircleType(textRef.current).radius(420);
  }, []);

  return (
    <section
      id="top"
      className="hero min-h-[50vh] sm:min-h-[70vh] relative overflow-hidden"
    >
      <div className="hero-content w-full px-4 sm:px-6 md:px-8 text-center">
        <div className="mx-auto max-w-xl sm:max-w-2xl">
          <div className="pointer-events-none select-none badge badge-secondary mb-3 sm:mb-4">
            Since 1982 • Portsmouth
          </div>

          <h1
            ref={textRef}
            className="pointer-events-none select-none text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-shadow text-[#3a4572] tracking-[0rem] mt-5 sm:mt-10"
            style={{ fontFamily: "'Old Standard TT', serif" }}
          >
            SEMMENS
          </h1>
          <h2
            className="pointer-events-none select-none text-3xl sm:text-3xl md:text-4xl lg:text-6xl sm:mt-[-10px] md:mt-[-20px] lg:mt-[-30px] text-[#3a4572] leading-tight tracking-tight font-bold"
            style={{ fontFamily: "'Old Standard TT', serif" }}
          >
            of Southsea
          </h2>

          <p className="pointer-events-none select-none mt-3 sm:mt-4 sm:text-lg md:text-xl lg:text-3xl font-bold text-[#3a4572] lg:tracking-[0.5rem]">
            MOTOR ENGINEERS
          </p>

          <img
            src="tower.svg"
            alt=""
            aria-hidden="true"
            className="
      pointer-events-none select-none filter invert
      absolute bottom-[17.5rem] left-[-1rem]
      w-[clamp(180px,35vw,520px)]
      md:bottom-[19rem] md:right-[-1rem]
      lg:bottom-[5rem] lg:left-[1rem] xl:left-[4rem] 2xl:left-[8rem]
              object-contain
    "
          />

          <img
            src="luc-img-mod.png"
            alt=""
            aria-hidden="true"
            className="
      pointer-events-none select-none
      absolute bottom-[18.5rem] right-[-2.8rem]
      w-[clamp(200px,45vw,720px)]
      md:bottom-[21rem] md:right-[-4.5rem]
      lg:bottom-[7.5rem] lg:right-[-3.5rem]
      object-contain
    "
          />

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href="#services"
              className="btn btn-secondary w-full sm:w-auto"
            >
              Explore services
            </a>
            <a href="#contact" className="btn btn-outline w-full sm:w-auto">
              Get a quote
            </a>
          </div>

          <div className="mt-6 sm:mt-8 stats stats-horizontal shadow-xl bg-base-100/70 backdrop-blur scale-100">
            <div className="stat px-2 sm:px-4">
              <div className="stat-title font-bold text-xs sm:text-sm">
                Customer rating
              </div>
              <a
                href="https://www.google.com/search?sca_esv=67db8545f6bda9c4&sxsrf=AE3TifPc8jKTc85c3tMl7HK8GQbTjxj_mw:1757096031060&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E83CyQ1woFGro85n2fReaq4-3ssyJSYTK7Ng2qWQGQ4CyaIShJ97jjVdXGni4BaUeBGmQcUolW4k3YdQbxDR5_bvIeypCtoKrIuExYo5hPQisnq74g%3D%3D&q=Semmens+Of+Southsea+Reviews&sa=X&ved=2ahUKEwjY55HmnMKPAxWlQUEAHaoaInAQ0bkNegQIOxAE&cshid=1757096048511484&biw=1664&bih=1094&dpr=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our Google reviews (opens in a new tab)"
                className="stat-value text-lg sm:text-2xl transform transition-transform duration-200 hover:-translate-y-0.5"
              >
                4.9⭐
              </a>{" "}
              <div className="stat-desc text-[10px] font-bold sm:text-xs">
                Local &amp; repeat business
              </div>
            </div>
            <div className="stat px-2 sm:px-4">
              <div className="stat-title text-xs sm:text-sm font-bold">
                Turnaround
              </div>
              <div className="stat-value text-lg sm:text-2xl">Same-day</div>
              <div className="stat-desc text-[10px] sm:text-xs font-bolt">
                Where applicable
              </div>
            </div>
            <div className="stat px-2 sm:px-4">
              <div className="stat-title text-xs sm:text-sm font-bold">
                Guarantee
              </div>
              <div className="stat-value text-lg sm:text-2xl">12 mo</div>
              <div className="stat-desc text-[10px] sm:text-xs font-bold">
                Parts &amp; labour
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-100 to-transparent" />
    </section>
  );
}

