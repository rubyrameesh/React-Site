import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import boy from "./assets/boy.png";
export default function Header() {
  return (
    <section className="banner-section">
      <Navbar />
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          {/* Text Column */}
          <div className="col-50 content">
            <h6 className="subtitle" data-aos="fade-up" data-aos-delay="0">
              The best Kids Robotica School
            </h6>
            <h1 className="title" data-aos="fade-up" data-aos-delay="100">
              Inspiring Creativity, Engineering the Future.
            </h1>
            <p className="description" data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a
              href="#"
              className="btn-discover"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discover more
            </a>
          </div>

          {/* Image Column */}
          <div className="col-50 image" data-aos="fade-up">
            <img
              src={boy}
              alt="Kid with robotics"
              width="600"
              height="692"
              className="responsive-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
