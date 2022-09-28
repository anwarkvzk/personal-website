import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="linkedin.com/in/anwar-k" target="_blank">
        <BsLinkedin />
      </a>
      <a href="github.com/anwarkvzk" target="_blank">
        <FaGithub />
      </a>
      <a href="instagram.com/anwar_kx" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
