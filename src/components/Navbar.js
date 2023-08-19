import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import profile from "../assets/Pic.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ scrollToRef }) => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY > 1 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  function handleNavItemClick() {
    if (click) {
      handleClick(click);
    }
  }

  return (
    <div className={color ? "header header-bg" : "header"}>
      {/* <div className="logo">
        <div className="logo-name">Ankit Thakur</div>
      </div> */}

      <ul className={click ? "navbar active" : "navbar"}>
        <li>
          <Link
            href="#home"
            onClick={() => {
              scrollToRef("home");
              handleNavItemClick();
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            onClick={() => {
              scrollToRef("about");
              handleNavItemClick();
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            onClick={() => {
              scrollToRef("contact");
              handleNavItemClick();
            }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="#project"
            onClick={() => {
              scrollToRef("project");
              handleNavItemClick();
            }}
          >
            Project
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} color="white" />
        ) : (
          <FaBars size={20} color="white" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
