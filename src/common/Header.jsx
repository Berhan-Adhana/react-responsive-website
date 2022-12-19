import React from "react";
const Header = ({ img, title,text }) => {
  return (
    <div className="header__container">
      <div className="header__img">
        <img src={img} alt="" />
      </div>
      <div className="header__content container">
        <h2 className="header__title">{title}</h2>
        <p className="header__text">
        {text}
        </p>
      </div>
    </div>
  );
};

export default Header;
