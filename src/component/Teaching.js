import React from "react";
import "./Teaching.css";
import bgImage from "./assets/teacherhelping.jpg";

const Teaching = () => {
  return (
    <section
      className="teaching-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="teaching-content">
        <h1 className="teaching-title">
          Creating Tomorrow's Tech Leaders through Robotics
        </h1>
        <p className="teaching-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <a href="#" className="teaching-button">
          Discover more
        </a>
      </div>
    </section>
  );
};

export default Teaching;
