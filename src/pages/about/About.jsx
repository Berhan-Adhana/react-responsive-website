import React from "react";
import "./about.css";
import HeaderImg from "../../images/header_bg_1.jpg";
import Header from "../../common/Header";
import AboutStory from "../../images/about1.jpg";
import AboutVision from "../../images/about2.jpg";
import AboutMission from "../../images/about3.jpg";
const About = () => {
  const aboutHeadertext =
    "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aliquam vitae culpa laborum quod. Pariatur sunt ipsa tempora. Consequuntur, beatae.";
  return (
    <>
      <Header img={HeaderImg} title="About Us" text={aboutHeadertext} />
      <div className="container about__container section">
        <div className="about__our-story">
          <h2 className="about__title">Our Story</h2>
          <div className="about__content">
            <div className="about__img">
              <img src={AboutStory} alt="" />
            </div>
            <p className="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              consectetur reprehenderit, eligendi consequatur minus magnam
              exercitationem quia voluptatibus. Provident voluptatum vitae
              veniam quibusdam, numquam itaque molestias commodi nam dolorum
              quasi.
            </p>
          </div>
        </div>
        <div className="about__our-vision">
          <h2 className="about__title">Our Vision</h2>
          <div className="about__content">
            <div className="about__img">
              <img src={AboutVision} alt="" />
            </div>
            <p className="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              consectetur reprehenderit, eligendi consequatur minus magnam
              exercitationem quia voluptatibus. Provident voluptatum vitae
              veniam quibusdam, numquam itaque molestias commodi nam dolorum
              quasi.
            </p>
          </div>
        </div>
        <div className="about__our-mission">
          <h2 className="about__title">Our Mission</h2>
          <div className="about__content">
            <div className="about__img">
              <img src={AboutMission} alt="" />
            </div>
            <p className="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              consectetur reprehenderit, eligendi consequatur minus magnam
              exercitationem quia voluptatibus. Provident voluptatum vitae
              veniam quibusdam, numquam itaque molestias commodi nam dolorum
              quasi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
