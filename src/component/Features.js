import React from "react";
import "./Features.css";
import feature1 from "./assets/feature1.png";
import feature2 from "./assets/feature2.png";
import feature3 from "./assets/feature3.png";
import feature4 from "./assets/feature4.png";

export default function Features() {
  const features = [
    {
      title: "Personal & Group Classes",
      description:
        "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
      image: feature1,
    },
    {
      title: "Learn with STEM kits",
      description:
        "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
      image: feature2,
      alt: "Learn with STEM kits",
    },
    {
      title: "Flexible Class timing",
      description:
        "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
      image: feature3,
      alt: "Flexible Class timing",
    },
    {
      title: "Have fun while learning",
      description:
        "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
      image: feature4,
      alt: "Have fun while learning",
    },
  ];
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div
          className="feature"
          key={index}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="feature-image">
            <img
              src={feature.image}
              alt={feature.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
