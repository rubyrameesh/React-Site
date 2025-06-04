import React from "react";
import "./Footer.css";
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container" style={{ display: "flex", gap: "20px" }}>
      <div className="footer-column logo-column" style={{ flex: 1 }}>
        <img
          src={logo}
          alt="Robotica Kids Logo"
          loading="lazy"
          style={{ maxWidth: "150px" }}
        />
        <h5>
          Unlocking Creativity, Igniting Curiosity: Building Future Innovators.
        </h5>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="icomoon_brands icomoon_brands-youtube1"></i>
          </a>
        </div>
      </div>

      {/* Programs */}
      <div className="footer-column" style={{ flex: 1 }}>
        <h4>Programs</h4>
        <ul
          className="program-list"
          style={{ listStyle: "none", paddingLeft: 0 }}
        >
          {[
            "Basic Robotics",
            "Coding",
            "Challenges",
            "Exploration",
            "Showcase and Competition",
          ].map((program, idx) => (
            <li key={idx}>
              <a href="#">
                <i className="icofont icofont-ui-play"></i> {program}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Helpful Links */}
      <div className="footer-column" style={{ flex: 1 }}>
        <h4>Helpful Links</h4>
        <ul
          className="elementor-icon-list-items"
          style={{ listStyle: "none", paddingLeft: 0 }}
        >
          {[
            { text: "About us", href: "#" },
            { text: "Job Opportunities", href: "#" },
            { text: "Article & News", href: "#" },
            { text: "Franchise Opportunities", href: "#" },
            { text: "Contact us", href: "#" },
          ].map((link, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>
              <a
                href={link.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span style={{ marginRight: "6px" }}>
                  <i className="icofont icofont-ui-play" />
                </span>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Get in touch */}
      <div className="footer-column" style={{ flex: 1 }}>
        <h4>Get in touch</h4>
        <p>
          <strong>Address:</strong> 123 Robotics Street, Innovation City
        </p>
        <p>
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p>
          <strong>Email:</strong> info@roboticakids.com
        </p>
        <p>
          <strong>Follow us:</strong>
        </p>
        <p>
          <a href="#" aria-label="Facebook" style={{ marginRight: "8px" }}>
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" aria-label="Twitter" style={{ marginRight: "8px" }}>
            <i className="fab fa-twitter" />
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube" />
          </a>
        </p>
      </div>
      <div className="footer-bottom__container">
        <div className="footer-bottom__left">
          <p>
            &copy; 2023 RoboticaKids, All rights reserved. Powered by
            MoxCreative.
          </p>
        </div>
        <div className="footer-bottom__right">
          <ul className="footer-bottom__links">
            <li>
              <a href="#">
                <i className="icofont-ui-play"></i> Term of use
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-ui-play"></i> Privacy Policy
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-ui-play"></i> Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
