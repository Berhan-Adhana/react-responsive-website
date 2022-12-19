import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <section id=" footer" className="footer">
      <footer className="container footer__container">
        <div className="footer__left">
          <Link className="logo">
            <img src={Logo} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ipsa
            reiciendis sed excepturi voluptas rem exercitationem consequatur
            eaque modi nostrum?
          </p>
          <ul className="list">
            <li className="icon__container icon__container-white list__item">
              <Link className="list__link">
                <AiFillLinkedin className="icon" />
              </Link>
            </li>
            <li className="icon__container icon__container-white list__item">
              <Link className="list__link">
                <FaFacebookF className="icon" />
              </Link>
            </li>
            <li className="icon__container icon__container-white list__item">
              <Link className="list__link">
                <AiOutlineTwitter className="icon" />
              </Link>
            </li>
            <li className="icon__container icon__container-white list__item">
              <Link className="list__link">
                <AiFillInstagram className="icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__permalinks">
          <h2 className="footer__title">Permalinks</h2>
          <ul className="list list-column">
            {links.map((link, index) => {
              return (
                <li className="list__item" key={index}>
                  <NavLink to={link.path} className={({isActive})=>{
                    return isActive ? "footer-active list__link" : "list__link";
                  }}>
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__insights">
          <h2 className="footer__title">Insights</h2>
          <ul className="list list-column">
            <li className="list__item">
              <Link className="list__link">Blog</Link>
            </li>
            <li className="list__item">
              <Link className="list__link">Case Studies</Link>
            </li>
            <li className="list__item">
              <Link className="list__link">Events</Link>
            </li>
            <li className="list__item">
              <Link className="list__link">Communities</Link>
            </li>
            <li className="list__item">
              <Link className="list__link">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="footer__getintouch">
          <h2 className="footer__title">Get In Touch</h2>
          <ul className="list list-column">
            <li className="list__item">
              <Link className="list__link">Contact Us </Link>
            </li>
            <li className="list__item">
              <Link className="list__link">Support</Link>
            </li>
          </ul>
        </div>
      </footer>
      <hr />
      <p className="copy-right">
        {new Date().getFullYear() + " Berhan Adhana @ All Rights Reserved."}
      </p>
    </section>
  );
};

export default Footer;
