import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Logo from "../images/logo.png";
import { links } from "../data";
const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <header id="header">
      <nav id="nav" className="nav container">
        <Link className="logo">
          <img src={Logo} alt="" />
        </Link>
        <ul
          className="list list-column"
          style={open ? { right: 0 } : { right: "-100%" }}
        >
          {links.map((link, index) => {
            return (
              <li className="list__item" key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => {
                    return isActive ? "list__link active-nav " : "list__link";
                  }}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
          <AiOutlineClose
            className="nav__close-btn"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </ul>
        <AiOutlineMenu
          className="nav__menu-btn"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </nav>
    </header>
  );
};

export default Navbar;
