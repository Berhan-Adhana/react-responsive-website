import React, { useState } from "react";
import Title from "./Title.jsx";
import { ImQuotesLeft } from "react-icons/im";
import { testimonials } from "../data.js";
import { Link } from "react-router-dom";
import { IoCaretForward } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else setIndex(testimonials.length-1);
  };
  const handleNext = () => {
    if (index < testimonials.length-1) {
      setIndex(index + 1);
    } else setIndex(0);
  };
  return (
    <section id="testimonial" className="section">
      <div className="container testimonial__container">
        <Title Icon={ImQuotesLeft} text="Testimonials" />

        <div className="testimonial__Cards">
          <div className="card card__container" key={testimonials[index].id}>
            <div className="card__icon-container absolute">
              <img
                src={testimonials[index].avatar}
                alt=""
                className="avator__img"
              />
            </div>
            <p className="card__text">{testimonials[index].quote}</p>
            <div className="testimonial__author">
              <h3>{testimonials[index].name}</h3>
              <p>{testimonials[index].job}</p>
            </div>
            <Link className="btn btn-primary">
              Learn More <IoCaretForward />
            </Link>
          </div>
        </div>
        <div className="testimonial__buttons">
          <Link onClick={handleBack} className="testimonial__button-container">
            <IoIosArrowBack className="testimonial__buttons-back" />
          </Link>
          <Link className="testimonial__button-container">
            <IoIosArrowForward
              onClick={handleNext}
              className="testimonial__buttons-next"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
