import React from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import { FaInstagram } from "react-icons/fa";
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a47p6wy', 'template_go2mufh', form.current, 'KqUUqunAlmLZbFOpo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>anwarvzk521@gmail.com</h5>
            <a href="mailto:anwarvzk521@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <FaInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>anwar_kx</h5>
            <a href="https://www.instagram.com/anwar_kx/" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+919744433064</h5>
            <a href="https://wa.me/+919744433064" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
