import { useState, useEffect, useRef } from "react";

interface Project {
  title: string;
  image: string;
  description: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    title: "Accessibility Web Extension",
    image: "",
    description:
      "A short description of what this project does, the problem it solves, and the technologies used to build it.",
    githubUrl: "https://github.com/edwyn-mcmillan",
  },
  {
    title: "Processing",
    image: "",
    description:
      "A short description of what this project does, the problem it solves, and the technologies used to build it.",
    githubUrl: "https://github.com/edwyn-mcmillan",
  },
];

interface ProjectsPageProps {
  visible: boolean;
}

export function ProjectsPage({ visible }: ProjectsPageProps) {
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
  }, [visible, mounted]);

  if (!mounted) return null;

  return (
    <div className="about-overlay">
      <div
        ref={contentRef}
        className={`about-content ${open ? "about-content--open" : ""}`}
      >
        <div className="about-inner">
          <div className="about-section">
            <h2>PROJECTS</h2>
          </div>

          {PROJECTS.map((project, i) => (
            <div key={i} className="about-section project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <div className="project-card__image-wrap">
                {project.image ? (
                  <img
                    className="project-card__image"
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div className="project-card__image-placeholder" />
                )}
              </div>
              <p className="project-card__description">{project.description}</p>
              <a
                className="project-card__link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
