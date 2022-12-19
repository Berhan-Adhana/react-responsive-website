import React from "react";
const Title = ({ Icon, text }) => {
  return (
    <div className="section__title">
      <div className="section__title-icon-container">
          <Icon className="section__title-icon" />
      </div>
      <h3 className="section__title-text">{text}</h3>
    </div>
  );
};

export default Title;
