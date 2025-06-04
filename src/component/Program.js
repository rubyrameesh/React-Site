import React from "react";
import "./Program.css";
import kidsworking from "./assets/kidsworking.jpg";
const Program = () => {
  return (
    <section className="program-section">
      <div className="program-container row">
        {/* Left Card with Image */}
        <div
          className="col-md-6 card program-left-bg"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="image-card-container">
            <img
              src={kidsworking}
              alt="Kids working with teacher on robot"
              className="img-fluid rounded shadow"
            />
            <div className="icon-box">
              <div className="icon">
                <i className="mdi mdi-robot" aria-hidden="true"></i>
              </div>
              <div className="icon-box-content">
                <div className="icon-box-title">52K+ Member Active</div>
                <p className="icon-box-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card with Text Content */}
        <div
          className="col-md-6 program-right-text"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h6 className="ourprogram">Our Programs</h6>
          <h2 className="program-heading">
            Empowering Kids to Engineer Their Dreams with Robotics.
          </h2>
          <p className="program-description">
            Urna habitant eget conubia cras nullam consectetur aliquet potenti.
            Egestas pharetra metus sapien facilisis ultricies mollis pulvinar
            aptent eget urna. Tempor at ipsum dui turpis etiam.
          </p>
          <a className="discover-more-button" href="#">
            Discover more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Program;
