import React from "react";
import { Link } from "react-router-dom";
import Header from "../../common/Header.jsx";
import { plans } from "../../data.js";
import PlansImg from "../../images/header_bg_3.jpg";
import "./plans.css";
const Plans = () => {
  const plansText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, omnis? Deserunt eaque obcaecati animi. Architecto nesciunt ratione repudiandae dolores esse repellendus in recusandae fuga harum quam nulla neque, quis voluptates.";
  return (
    <>
      <Header img={PlansImg} text={plansText} title="Our Plans" />
      <div className="container plans__container section">
        {plans.map((plan, index) => {
          return (
            <div className="card card__container" key={index}>
              <h2 className="plan__title">{plan.name}</h2>
              <p className="plan__desc">{plan.desc}</p>
              <p className="plan__price">${plan.price}<small>/mo</small></p>
              <h3 className="plan__features">Features</h3>
              <ul className="list list-column">
                {plan.features.map((feature, index) => {
                  return (
                    <li
                      className={
                        feature.available
                          ? "feature__available list__item"
                          : "list__item feature__not-available"
                      }
                    key={index}>
                      {feature.feature}
                    </li>
                  );
                })}
              </ul>
              <Link className="btn btn-primary">Choose Plan</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Plans;
