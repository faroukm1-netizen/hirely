
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    
<nav className="navbar">
  <div className="container navbar__container">

    {/* Logo */}
    <a href="/" className="navbar__logo">
      Hire<span>ly</span>
      <i className="bi bi-briefcase-fill"></i>
    </a>

    {/* Navigation */}
    <div className="collapse navbar__collapse" id="hirelyNavbar">
      <div className="container navbar__inner">

        <ul className="navbar__links">
          <li>
            <NavLink to="/home" className="navbar__link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/jobs" className="navbar__link">
              Find Jobs
            </NavLink>
          </li>

          <li>
            <NavLink to="/companies" className="navbar__link">
              Companies
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="navbar__link">
              About
            </NavLink>
          </li>
        </ul>

        <div className="navbar__actions">
          <NavLink to="/" className="navbar__login">
            Login
          </NavLink>

          <NavLink to="/register" className="navbar__signup">
            Get Started
            <i className="bi bi-arrow-up-right"></i>
          </NavLink>
        </div>

      </div>
    </div>

    {/* Hamburger */}
    <button
      className="navbar__menu"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#hirelyNavbar"
      aria-controls="hirelyNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="bi bi-list"></i>
    </button>

  </div>
</nav>

  );
}

export default Navbar;
