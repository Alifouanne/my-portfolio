import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { GiAngryEyes } from "react-icons/gi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <GiAngryEyes />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experince">Experince</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#qualification">Qualification</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/ali-fouanne-56b602222/"
          target="_blank"

          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/ali.fouanne.1/"
          target="_blank"

          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/3le_fouanne/"
          target="_blank"

          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Eng ALI Fouanne. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
