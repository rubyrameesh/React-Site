import React from "react";
import kidsworking from "./assets/kidsworking.jpg";
import user from "./assets/user.jpg";

import { Row, Col, Card } from "react-bootstrap";

const Empowering = () => {
  return (
    <div className="container py-5">
      <Row className="align-items-center">
        {/* Left Column */}
        <Col md={6}>
          <h5 style={{ color: "#fb772f" }}>WHO YOU ARE</h5>

          <h2>Empowering Kids to Engineer Their Dreams with Robotics</h2>
          <p>
            Lacus erat rhoncus dis ipsum blandit etiam primis. Quisque sodales
            rhoncus torquent suscipit fermentum diam risus pretium aliquet
            aenean. Aliquam nisi pretium fringilla non amet ultricies id maximus
            quisque.
          </p>
          <p>
            Lacus erat rhoncus dis ipsum blandit etiam primis. Quisque sodales
            rhoncus torquent suscipit fermentum diam risus pretium aliquet
            aenean. Aliquam nisi pretium fringilla non amet ultricies id maximus
            quisque.
          </p>
          <hr />
          <div className="d-flex align-items-center mt-4">
            <img
              src={user}
              alt="Benjamin Mitchell"
              className="rounded-circle me-3"
              width="80"
              height="80"
            />
            <div>
              <h5 className="mb-1">Benjamin Mitchell</h5>
              <p
                style={{
                  color: "#fb772f",
                  fontWeight: "500",
                }}
              >
                FOUNDER
              </p>
            </div>
          </div>
        </Col>

        {/* Right Column */}
        <Col md={6}>
          <Card
            className="text-center shadow border-0 position-relative"
            data-aos="fade-left"
          >
            <Card.Img
              src={kidsworking}
              alt="Kids working on robotics"
              className="img-fluid rounded"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Empowering;
