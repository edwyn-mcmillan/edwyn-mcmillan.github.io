import type { Page } from "../pages/Home";

const NAV_LINKS: { page: Page; label: string }[] = [
  { page: "home", label: "Home" },
  { page: "about", label: "About" },
  // { page: "projects", label: "Projects" },
];

interface NavBarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function NavBar({ currentPage, onNavigate }: NavBarProps) {
  return (
    <nav className="nav">
      <span className="nav-title">Edwyn McMillan</span>
      <ul className="nav-links">
        {NAV_LINKS.map(({ page, label }) => (
          <li key={page}>
            <button
              className={`nav-link ${currentPage === page ? "nav-link--active" : ""}`}
              onClick={() => onNavigate(page)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
