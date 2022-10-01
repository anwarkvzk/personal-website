import React from "react";
import "./footer.css";
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Anwar
      </a>
      <ul className="permallinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Services</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/anwar-k" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/anwar_kx" target="_blank">
        <FaInstagram />
      </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Anwar. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
