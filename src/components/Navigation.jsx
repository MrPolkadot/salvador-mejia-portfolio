const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true">
            <span aria-hidden="true">
              <span aria-hidden="true"></span>
            </span>
          </span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a
            className="navbar-item"
            href="#about"
            onClick={() => setCurrentPage("About")}
          >
            About
          </a>
          <a
            className="navbar-item"
            href="#contact"
            onClick={() => setCurrentPage("Contact")}
          >
            Contact
          </a>
          <a
            className="navbar-item"
            href="#contact"
            onClick={() => setCurrentPage("Portfolio")}
          >
            Portfolio
          </a>
          <a
            className="navbar-item"
            href="#contact"
            onClick={() => setCurrentPage("Resume")}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
