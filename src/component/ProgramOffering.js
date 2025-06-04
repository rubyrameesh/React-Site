import React from "react";
import "./ProgramOffering.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import CabinIcon from "@mui/icons-material/Cabin";

const programs = [
  {
    iconClass: HomeWorkIcon,
    title: "After School",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#31a852",
  },
  {
    iconClass: CabinIcon,
    title: "Summer Camps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#328bff",
  },
  {
    iconClass: SportsFootballIcon,
    title: "Virtual Programs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#fb772f",
  },
  {
    iconClass: WorkspacePremiumIcon,
    title: "Competitions & Clubs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#328bff",
  },
  {
    iconClass: ArchitectureIcon,
    title: "Homeschool Programs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#fb772f",
  },
  {
    iconClass: VideoChatIcon,
    title: "Online Course",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#31a852",
  },
];

const ProgramCard = ({ iconClass, title, description, color }) => {
  const isComponent = typeof iconClass !== "string";

  return (
    <div
      className="program-card"
      data-aos="zoom-in"
      data-aos-duration="2000"
      style={{
        background: "linear-gradient(135deg, #25d5fe 0%, #328bff 100%)",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
        margin: "10px 0",
      }}
    >
      <div
        className="program-icon"
        style={{
          backgroundColor: color || "#0d6efd", // fallback to blue
        }}
      >
        {isComponent ? (
          React.createElement(iconClass)
        ) : (
          <i className={iconClass} aria-hidden="true"></i>
        )}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <a className="learn-more-button" href="">
        Learn more
      </a>
    </div>
  );
};

const ProgramOffering = () => {
  return (
    <div className="program-offer" style={{ padding: "40px" }}>
      <h5
        style={{ color: "#fecc50", textAlign: "center" }}
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Program Offering
      </h5>
      <h1
        style={{ color: "white", textAlign: "center", fontWeight: "800" }}
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Experience the Difference Our <br /> Enrichment Programs Can
        <br /> Make!
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {programs.map((program, idx) => (
          <div
            key={idx}
            style={{
              flex: "1 1 30%",
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            <ProgramCard {...program} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramOffering;
