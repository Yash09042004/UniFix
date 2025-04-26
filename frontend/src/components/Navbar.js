import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="/domains" className="navbar-link">
            Domains
          </a>
        </li>
        <li>
          <a href="/feedback" className="navbar-link">
            Feedback
          </a>
        </li>
        <li>
          <a href="/contribute" className="navbar-link">
            Contribute
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;