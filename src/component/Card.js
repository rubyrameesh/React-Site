import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Card.css";
import logoipsum from "./assets/logoipsum.png";
import ScienceIcon from "@mui/icons-material/Science";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import CabinIcon from "@mui/icons-material/Cabin";

export default function ServiceCards() {
  return (
    <section className="services-section py-5">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <Card
              className="text-center h-100 shadow-sm service-card"
              data-aos="fade-right"
            >
              <Card.Body>
                <div className="icon mb-3">
                  <ScienceIcon
                    style={{
                      fontSize: "2rem",
                      color: "#fff",
                      backgroundColor: "#198754", // success
                      borderRadius: "50%",
                      padding: "10px",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
                <Card.Title>Classes</Card.Title>
                <Card.Text>
                  Discover engaging, instructor-led classes for all ages and
                  interests.
                </Card.Text>
                <a className="learn-more-button" href="#">
                  Learn more
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className="text-center h-100 shadow-sm service-card"
              data-aos="flip-down"
            >
              <Card.Body>
                <div className="icon mb-3">
                  <VideoChatIcon
                    style={{
                      fontSize: "2rem",
                      color: "#fff",
                      backgroundColor: "#ffc107", // warning
                      borderRadius: "50%",
                      padding: "10px",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
                <Card.Title>Online Course</Card.Title>
                <Card.Text>
                  Learn at your own pace with our expertly crafted online
                  courses.
                </Card.Text>
                <a className="learn-more-button" href="#">
                  Learn more
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className="text-center h-100 shadow-sm service-card"
              data-aos="fade-left"
            >
              <Card.Body>
                <div className="icon mb-3">
                  <CabinIcon
                    style={{
                      fontSize: "2rem",
                      color: "#fff",
                      backgroundColor: "#0d6efd", // primary
                      borderRadius: "50%",
                      padding: "10px",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
                <Card.Title>Camps</Card.Title>
                <Card.Text>
                  Join fun and educational camps that spark creativity and
                  teamwork.
                </Card.Text>
                <a className="learn-more-button" href="#">
                  Learn more
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="align-items-center mt-5" data-aos="fade-down">
          <Col sm={6}>
            <h2 className="trusted">
              Trusted by 30,000 world-class brands and organizations of all
              sizes.
            </h2>
          </Col>
          <Col sm={6}>
            <img src={logoipsum} alt="Partners" className="img-fluid w-25" />
            <img src={logoipsum} alt="Partners" className="img-fluid w-25" />
            <img src={logoipsum} alt="Partners" className="img-fluid w-25" />
            <img src={logoipsum} alt="Partners" className="img-fluid w-25" />
            <br />
            <img src={logoipsum} alt="Partners" className="img-fluid w-25" />
            <img src={logoipsum} alt="Partners" className="img-fluid w-25" />
            <img src={logoipsum} alt="Partners" className="img-fluid w-25" />
            <img src={logoipsum} alt="Partners" className="img-fluid w-25" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
