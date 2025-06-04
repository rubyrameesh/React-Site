import React from "react";
import "./About.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import aboutrobotics from "./assets/aboutrobotics.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div
          className=" about-left-bg"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="video-card-container">
            <img
              src={aboutrobotics}
              alt="Kids working with teacher on robot"
              className="img-fluid rounded shadow"
            />
            <a
              className="video-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play Video"
            >
              <PlayCircleIcon style={{ fontSize: "50px" }} />
            </a>
          </div>
        </div>

        <div
          className="about-right-text"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="about-heading">
            Unleashing the Power of Robotics for Young Innovators.
          </h2>
          <p className="about-description">
            Adipiscing conubia porta sit fusce euismod venenatis. Aenean enim
            parturient mauris curabitur feugiat. Facilisi venenatis per pulvinar
            eros habitant pede fames mollis.
          </p>
          <ul className="features-list">
            <li>
              <CheckBoxIcon style={{ color: "green" }} />
              <span>Non letius diam sapien</span>
            </li>
            <li>
              <CheckBoxIcon style={{ color: "green" }} />
              <span>Mauris inceptos dis penatibus</span>
            </li>
            <li>
              <CheckBoxIcon style={{ color: "green" }} />
              <span>Tellus iaculis massa sociosqu egestas</span>
            </li>
            <li>
              <CheckBoxIcon style={{ color: "green" }} />
              <span>Convallis in neque primis</span>
            </li>
            <li>
              <CheckBoxIcon style={{ color: "green" }} />
              <span>Natoque nulla dictum pretium</span>
            </li>
          </ul>
          <a className="learn-more-button" href="#">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
