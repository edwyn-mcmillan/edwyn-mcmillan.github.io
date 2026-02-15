import { useState, useEffect, useCallback } from "react";

interface PanHintProps {
  visible: boolean;
}

export function PanHint({ visible }: PanHintProps) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  const dismiss = useCallback(() => setShow(false), []);

  useEffect(() => {
    if (!visible) {
      setShow(false);
      return;
    }

    setMounted(true);
    // small delay so the fade-in transition triggers after mount
    const rafId = requestAnimationFrame(() => setShow(true));

    // auto-hide after 3s
    const timer = setTimeout(() => setShow(false), 5000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [visible]);

  // dismiss on any pointer interaction
  useEffect(() => {
    if (!show) return;
    window.addEventListener("pointerdown", dismiss);
    return () => window.removeEventListener("pointerdown", dismiss);
  }, [show, dismiss]);

  // unmount after fade-out
  useEffect(() => {
    if (!show && mounted) {
      const timer = setTimeout(() => setMounted(false), 600);
      return () => clearTimeout(timer);
    }
  }, [show, mounted]);

  if (!mounted) return null;

  return (
    <div className={`pan-hint ${show ? "pan-hint--visible" : ""}`}>
      <svg
        className="pan-hint__icon"
        width="28"
        height="40"
        viewBox="0 0 28 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="26"
          height="38"
          rx="13"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="14"
          y1="8"
          x2="14"
          y2="16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
