import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import jcb from "./assets/jcb.png";
import "./SupportSection.css"; // we'll add styles here

const SupportSection = () => {
  return (
    <div className="support-section">
      <Row>
        <Col md={7} className="fadeInLeft">
          <h2 className="title">Still have any questions?</h2>
          <p className="subtitle">
            Neque cubilia letius nam at nec suspendisse et magnis pulvinar. Est
            curabitur id vehicula semper enim.
          </p>

          <Row>
            <Col md={6} className="box bounceIn text-center">
              <Card className="custom-shadow">
                <Card.Body>
                  <div className="icon mb-3">
                    <FaPhoneAlt
                      size={24}
                      className="support-icon"
                      style={{ backgroundColor: "orange" }}
                    />
                  </div>
                  <Card.Title>Free Consultations</Card.Title>
                  <Card.Text>
                    Quam auctor amet primis per sem. Blandit lorem hac ipsum
                    velit rhoncus suscipit dictum.
                  </Card.Text>
                  <a className="support-button">Chat Now</a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="box bounceIn text-center">
              <Card className="custom-shadow">
                <Card.Body>
                  <div className="icon mb-3">
                    <FaEnvelopeOpen
                      size={24}
                      className="support-icon"
                      style={{ backgroundColor: "blue" }}
                    />
                  </div>
                  <Card.Title>Ticket Support</Card.Title>
                  <Card.Text>
                    Quam auctor amet primis per sem. Blandit lorem hac ipsum
                    velit rhoncus suscipit dictum.
                  </Card.Text>
                  <a className="support-button">Send Ticket</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={4} className="text-end image-section">
          <img
            src={jcb}
            alt="Support"
            width="400"
            height="390"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SupportSection;
