interface NavBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function NavBar({ currentPage, onNavigate }: NavBarProps) {
  return (
    <nav className="nav">
      <span className="nav-title">PORTFOLIO</span>
      <ul className="nav-links">
        <li>
          <button
            className={`nav-link ${currentPage === "home" ? "nav-link--active" : ""}`}
            onClick={() => onNavigate("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${currentPage === "about" ? "nav-link--active" : ""}`}
            onClick={() => onNavigate("about")}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  );
}
