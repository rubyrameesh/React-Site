import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonial.css";

import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import user from "./assets/user.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent",
    image: user,
    text: "Kids Robotic School has been a game-changer for my child's education. They’ve developed a deep passion for robotics and problem-solving skills.",
  },
  {
    name: "Mark Thompson",
    role: "Teacher",
    image: user,
    text: "Kids Robotic School has revolutionized STEM education at our school. The program inspires students to think critically and creatively.",
  },
  {
    name: "Emma Collins",
    role: "Student",
    image: user,
    text: "Kids Robotic School is a trailblazer in innovative STEM education. Their dedication to nurturing young minds is commendable.",
  },
  {
    name: "Sarah Johnson",
    role: "Parent",
    image: user,
    text: "Kids Robotic School has been a game-changer for my child's education. They’ve developed a deep passion for robotics and problem-solving skills.",
  },
  {
    name: "Mark Thompson",
    role: "Teacher",
    image: user,
    text: "Kids Robotic School has revolutionized STEM education at our school. The program inspires students to think critically and creatively.",
  },
  {
    name: "Emma Collins",
    role: "Student",
    image: user,
    text: "Kids Robotic School is a trailblazer in innovative STEM education. Their dedication to nurturing young minds is commendable.",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <div className="left">
          <h6>Testimonial</h6>
          <h2>
            Authentic Testimonials from <br /> Parents
          </h2>
        </div>
        <div className="right">
          <h4>Excellent</h4>
          <div className="star-rating">
            <p className="count">4.5 out of 5</p>
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarHalfIcon className="star" />
          </div>
          <div className="review-count">
            Based on <strong>10,098</strong> reviews
          </div>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={item.image} alt={item.name} />
              <p>{item.text}</p>
              <cite>
                <strong>{item.name}</strong>
                <br />
                {item.role}
              </cite>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
