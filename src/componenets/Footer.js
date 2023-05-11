import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../style/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://github.com/Ganeshshinde-2003">
          <FaGithub />
        </Link>
        <Link to="https://twitter.com/Gani_Shinde">
          <FaTwitter />
        </Link>
        <Link to="https://www.linkedin.com/in/dev-ganesh-shinde/">
          <FaLinkedin />
        </Link>
        <Link to="https://www.instagram.com/gani_shinde20/">
          <FaInstagram />
        </Link>
      </div>
      <p>&copy; 2023 ReactPizza</p>
    </div>
  );
}

export default Footer;
