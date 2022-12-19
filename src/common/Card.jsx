import React from "react";
import { IoCaretForward } from "react-icons/io5";
import { SiOpenaigym } from "react-icons/si";
import { Link } from "react-router-dom";

const Card = ({ Icon, title, text, path, absolute }) => {
  return (
    <div className=" card card__container">
      <div
        className={
          absolute
            ? "card__icon-container-absolute card__icon-container"
            : "card__icon-container"
        }
      >
        <SiOpenaigym className="card__icon" />
      </div>
      <h2 className="card__tile">{title}</h2>
      <p className="card__text">{text}</p>
      <Link className="btn btn-primary">
        Learn More <IoCaretForward />
      </Link>
    </div>
  );
};

export default Card;
