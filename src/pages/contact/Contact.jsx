import React from "react";
import "./contact.css";
import Header from "../../common/Header";
import HeaderImg from "../../images/header_bg_2.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
const Contact = () => {
  const contactHeadertext =
    "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aliquam vitae culpa laborum quod. Pariatur sunt ipsa tempora. Consequuntur, beatae.";

  return (
    <>
      <Header img={HeaderImg} title="Get In Touch" text={contactHeadertext} />
      <div className="container contact__container section">
        <div className="icon__container icon__container-primary ">
          <Link>
            <AiOutlineMail className="icon icon-white" />
          </Link>
        </div>
        <div className="icon__container icon__container-primary ">
          <Link>
            <BsMessenger className="icon icon-white" />
          </Link>
        </div>
        <div className="icon__container icon__container-primary ">
          <Link>
            <BsWhatsapp className="icon icon-white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
