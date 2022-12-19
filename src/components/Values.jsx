import React from "react";
import Title from "./Title.jsx";
import { RiVipDiamondFill } from "react-icons/ri";
import ValuesImg from "../images/values.jpg";
import { values } from "../data";
import Card from "../common/Card.jsx";
const Values = () => {
  return (
    <section id="values" className="section">
      <div className="container values__container">
        <div className="values__image">
          <img src={ValuesImg} alt="" />
        </div>
        <div className="values__content">
          <Title Icon={RiVipDiamondFill} text="Our Values" />

          <div className="values__content-wrapper">
            <p className="values__text1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              eaque!
            </p>
            <div className="values__cards">
              {values.map((value, index) => {
                return (
                  <Card
                    Icon={value.icon}
                    title={value.title}
                    text={value.desc}
                    absolute
                    key={value.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
