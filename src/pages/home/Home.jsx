import React from "react";
import Hero from "../../components/Hero";
import "./home.css";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import Faqs from "../../components/Faqs";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Programs />
      <Values/>
      <Faqs/>
      <Testimonial/>
    </div>
  );
};

export default Home;
