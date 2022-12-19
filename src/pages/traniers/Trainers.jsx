import React from "react";
import "./trainers.css";
import TrainerImg from "../../images/header_bg_4.jpg";
import Header from "../../common/Header";
import { trainers } from "../../data";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Trainers = () => {
  const trainersText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, omnis? Deserunt eaque obcaecati animi. Architecto nesciunt ratione repudiandae dolores esse repellendus in recusandae fuga harum quam nulla neque, quis voluptates.";
  return (
    <>
      <Header img={TrainerImg} text={trainersText} title="Our Trainers" />
      <div className="container trainers__container section">
        {trainers.map((trainer, index) => {
          return (
            <div className="card card__container" key={trainer.id}>
              <div className="trainer__img-wrapper">
                <img src={trainer.image} alt="" className="trainer__img" />
              </div>
              <h4 className="trainer__name">{trainer.name}</h4>
              <p className="trainer__job">{trainer.job}</p>

              <div className="list" key={index}>
                <div className="list__item icon__container icon__container-gray-600">
                  <Link to={trainer.socials[index]}>
                    <AiOutlineInstagram className="icon icon-white" />
                  </Link>
                </div>
                <div className="list__item icon__container icon__container-gray-600">
                  <Link to={trainer.socials[index + 1]}>
                    <AiOutlineTwitter className="icon icon-white" />
                  </Link>
                </div>
                <div className="list__item icon__container icon__container-gray-600">
                  <Link to={trainer.socials[index + 3]} target="_blank">
                    <BsFacebook className="icon icon-white" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Trainers;
