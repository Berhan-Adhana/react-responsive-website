import React, { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      className="scroll-top__button"
      style={{ display: visible ? "inline" : "none" }}
    >
      <FaArrowAltCircleUp className="scroll-top__icon" />
    </button>
  );
};

export default ScrollTop;
