import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../images/main_header.png";
const Hero = () => {
  return (
    <section id="hero" className="container hero__container section">
      <div className="hero__info">
        <h1 className="hero__title">
          Join The Legends Of
          <br /> The Fitness World
        </h1>
        <div className="hero__desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
          assumenda! In officia eum, laboriosam debitis alias impedit laborum
          maiores ex ut consectetur possimus, pariatur molestiae illo aspernatur
          cupiditate, itaque velit?
        </div>
        <Link className="btn btn-primary">Get Started</Link>
      </div>
      <div className="hero__image">
        <div className="blur"></div>
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
