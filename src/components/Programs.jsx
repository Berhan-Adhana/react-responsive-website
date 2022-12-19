import React from "react";
import Title from "./Title";
import { GiQueenCrown } from "react-icons/gi";
import Card from "../common/Card.jsx";
import { programs } from "../data";

const Programs = () => {
  return (
    <section id="programs" className="section">
      <div className="container programs__container">
        <Title Icon={GiQueenCrown} text="Our programs" />
        <div className=" programs__cards">
          {programs.map((program, index) => {
            return (
              <Card
                Icon={program.icon}
                title={program.title}
                path={program.path}
                text={program.info}
                key={program.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
