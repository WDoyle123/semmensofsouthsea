import { useEffect, useRef } from "react";
import CircleType from "circletype";
import { motion } from "framer-motion";

type Props = {
  fontSize?: number;
  color?: string;
  accentColor?: string;
};

export default function SemmensLogo({
  fontSize = 72,
  color = "#f7f4ee",
  accentColor = "#e89b3c",
}: Props) {
  const semmensRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!semmensRef.current) return;

    const ct = new CircleType(semmensRef.current).radius(fontSize * 5.5);

    // Set spans to opacity 0 *before* revealing the container,
    // so the curved layout is already in place when it becomes visible.
    const spans = semmensRef.current.querySelectorAll<HTMLSpanElement>("span");
    spans.forEach((span, i) => {
      span.style.opacity = "0";
      span.style.animation = `letterIn 0.4s ease forwards`;
      span.style.animationDelay = `${0.15 + i * 0.08}s`;
    });

    // Now reveal — CircleType has already curved, spans start their stagger.
    semmensRef.current.style.opacity = "1";

    return () => ct.destroy();
  }, [fontSize]);

  return (
    <div className="flex flex-col items-center select-none pointer-events-none">
      <h1
        ref={semmensRef}
        className="font-bold"
        style={{
          fontFamily: "'Old Standard TT', serif",
          fontSize,
          color,
          lineHeight: 1,
          letterSpacing: "0.12em",
          opacity: 0,          // hidden until CircleType has curved it
        }}
      >
        SEMMENS
      </h1>

      {/* "of Southsea" fades in after all letters */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-bold italic"
        style={{
          fontFamily: "'Old Standard TT', serif",
          fontSize: fontSize * 0.64,
          color: accentColor,
          marginTop: fontSize * -0.20,
          letterSpacing: "0.06em",
        }}
      >
        of Southsea
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-bold"
        style={{
          fontFamily: "'Old Standard TT', serif",
          fontSize: fontSize * 0.24,
          color: accentColor,
          marginTop: fontSize * 0.20,
          letterSpacing: "0.06em",
        }}
      >
        MOTOR ENGINEERS - EST. 1982
      </motion.p>

    </div>
  );
}
