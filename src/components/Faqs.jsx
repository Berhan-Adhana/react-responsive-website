import React, { useEffect, useState } from "react";
import Title from "./Title";
import { BsQuestionLg } from "react-icons/bs";
import { faqs } from "../data";
import Accordion from "./Accordion.jsx";

const Faqs = () => {
  const [id, setId] = useState(0);

  return (
    <section id="faqs">
      <div className="container faqs__container">
        <Title Icon={BsQuestionLg} text="FAQS" />
        <div className="faqs__accordion-container">
          {faqs.map((faq) => {
            return (
              <Accordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
