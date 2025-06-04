import React from "react";
import logo from "./assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header-section">
      <div className="container">
        {/* Left: Logo */}
        <div className="column logo">
          <a href="">
            <img src={logo} />
          </a>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="column nav-menu">
          <ul>
            <li>
              <a href="/homepage">Home</a>
            </li>
            <li className="has-dropdown">
              <a href="/programs">Programs</a>
              <ul className="dropdown">
                <li>
                  <a href="/detail-program">Detail Program</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="/online-course">Online Course</a>
              <ul className="dropdown">
                <li>
                  <a href="/single-course">Detail Course</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact-us">Contact us</a>
            </li>

            <li className="has-dropdown">
              <a href="#">Pages</a>
              <ul className="dropdown">
                <li>
                  <a href="/about-us">About us</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Right: Placeholder */}
        <div className="column right-side">
          <button className="btn-join">Join school</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
