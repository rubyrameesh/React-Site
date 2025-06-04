import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./component/Header";
import About from "./component/About";
import Card from "./component/Card";
import Empowering from "./component/Empowering";
import Features from "./component/Features";
import ProgramOffering from "./component/ProgramOffering";
import Testimonial from "./component/Testimonial";
import Program from "./component/Program";
import FeaturedCourses from "./component/FeaturedCourses";
import Teaching from "./component/Teaching";
import SupportSection from "./component/SupportSection ";
import Footer from "./component/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <About />
      <Card />
      <Empowering />
      <Features />
      <ProgramOffering />
      <Testimonial />
      <Program />
      <FeaturedCourses />
      <Teaching />
      <SupportSection />
      <Footer />
    </div>
  );
}

export default App;
