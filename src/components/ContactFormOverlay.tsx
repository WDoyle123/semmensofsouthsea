import { useEffect } from "react";

type ContactFormOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactFormOverlay({
  isOpen,
  onClose,
}: ContactFormOverlayProps) {
  // Guard for SSR
  const canUseDOM =
    typeof window !== "undefined" && typeof document !== "undefined";

  useEffect(() => {
    if (!canUseDOM || !isOpen) return;

    const scrollY = window.scrollY;
    const { style } = document.body;

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";

    return () => {
      style.position = "";
      style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, canUseDOM]);

  if (!isOpen) return null;

  return (
    <div
      className="overlay fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
      onClick={(e) => e.currentTarget === e.target && onClose()}
    >
      <div className="iframe-container rounded-lg relative w-11/12 md:w-3/4 h-[80vh] shadow-lg">
        <button
          className="close-button absolute top-2 right-2 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close contact form"
        >
          &times;
        </button>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSei7rKBh4t3GboTNexsA0d0eeWjjFYYQVAytM66y-X5-tTYtg/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
