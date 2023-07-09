import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer">
      <div className="right">
        <Link to="https://linkedin.com/in/ankit-thakur-nita">
          <FaLinkedin size={20} />
        </Link>
        <a href="mailto:ankit.nita.mca@gmail.com">
          <FaEnvelope size={20} />
        </a>
        <Link to="https://github.com/Ankitthakur2">
          <FaGithub size={20} />
        </Link>
      </div>
      <div className="left">
        <p>© 2023 Ankit Thakur. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
