import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="logo">
          <h1>LucasSilva</h1>
        </div>
        <div className="navbar__links">
          <NavLink
            className={`navbar__links--link ${(nav) =>
              nav.isActive ? "active" : ""}`}
            to="/"
          >
            Sobre
          </NavLink>
          <NavLink
            className={`navbar__links--link ${(nav) =>
              nav.isActive ? "active" : ""}`}
            to="/projetos"
          >
            Projetos
          </NavLink>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
