import React from "react";
import image1 from "./assets/kidsworking.jpg";
import image2 from "./assets/kidsworking2.jpg";
import image3 from "./assets/kidsworking3.jpg";
import image4 from "./assets/kidsworking4.jpg";
import "./FeaturedCourses.css";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const courses = [
  {
    id: 1,
    title: "Basic Robotics",
    description: "Robotics 101: Building a Foundation for Young Innovators",
    image: image1,
    price: 99,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Coding and Programming",
    description: "Coding Adventures: Introduction to Programming for Kids",
    image: image2,
    price: 89,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Hands-On Robotics",
    description: "Exploring Robotics: Hands-On Learning for Young Explorers",
    image: image3,
    price: 89,
    rating: 4.7,
  },
  {
    id: 4,
    title: "STEM Education",
    description: "Mastering STEM Skills through Robotics and Coding",
    image: image4,
    price: 89,
    rating: 4.7,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 justify-content-center">Featured Courses</h2>
        <Row className="justify-content-center">
          {courses.map((course) => (
            <Col key={course.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={course.image}
                    alt={course.title}
                  />
                  <Badge className="position-absolute top-0 end-0 m-2 price-badge">
                    ${course.price}
                  </Badge>
                </div>
                <Card.Body className="text-start">
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <div className="text-warning mb-3">
                    {"★".repeat(Math.floor(course.rating))} ({course.rating})
                  </div>
                  <a className="enroll-button " href="#">
                    ENROLL NOW
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedCourses;
