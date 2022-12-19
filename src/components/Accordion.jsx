import React, { useState } from "react";
const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faqs__accordion">
      <button
        className="accordion"
        onClick={(e) => {
          setOpen(!open);
        }}
      >
        {question}
        <span className="accordion__icon">{open ? "-" : "+"}</span>
      </button>
      <div
        className="panel"
        style={open ? { display: "block" } : { display: "none" }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
