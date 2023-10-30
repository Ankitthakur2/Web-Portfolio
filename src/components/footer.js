import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer">
      <div className="icon-container">
        <Link to="https://linkedin.com/in/ankit-thakur-nita" className="icon">
          <FaLinkedin size={40} />
        </Link>
        <a href="mailto:ankit.nita.mca@gmail.com" className="icon">
          <FaEnvelope size={40} />
        </a>
        <Link to="https://github.com/Ankitthakur2" className="icon">
          <FaGithub size={40} />
        </Link>
      </div>
      <div className="left">
        <p>© 2023 Ankit Thakur. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
