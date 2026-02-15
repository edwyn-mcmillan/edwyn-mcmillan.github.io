import { useState, useEffect, useRef } from "react";

interface AboutPageProps {
  visible: boolean;
}

export function AboutPage({ visible }: AboutPageProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      requestAnimationFrame(() => setOpen(true));
    } else if (mounted) {
      setOpen(false);
      const el = contentRef.current;
      if (el) {
        const onEnd = (e: TransitionEvent) => {
          if (e.target === el && e.propertyName === "transform") {
            el.removeEventListener("transitionend", onEnd);
            setMounted(false);
          }
        };
        el.addEventListener("transitionend", onEnd);
      } else {
        setMounted(false);
      }
    }
  }, [visible]);

  if (!mounted) return null;

  return (
    <div className="about-overlay">
      <div
        ref={contentRef}
        className={`about-content ${open ? "about-content--open" : ""}`}
      >
        <div className="about-inner">
          <div className="about-section">
            <h2>ABOUT</h2>
            <p>
              I am a Fullstack engineer building production software in the
              aerospace industry. I enjoy creative coding in my spare time.
            </p>
          </div>

          <div className="about-section">
            <h2>SKILLS</h2>
            <ul>
              <li>TypeScript / JavaScript</li>
              <li>Angular / React / Three.js</li>
              <li>Node.js / Nest.js / Microservices</li>
              <li>Docker / Kubernetes / CI/CD</li>
              <li>PostgreSQL / SQL</li>
            </ul>
          </div>

          <div className="about-section about-section--bordered">
            <h2>LINKS</h2>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/edwyn-mcmillan"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/edwyn-mcmillan"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
