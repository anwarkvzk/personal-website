import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG1} alt="" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/anwarkvzk/Food-Recipe-App" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/anwarkvzk/Netflix" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG2} alt="" />
          <h3>This is a portfolio item title</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/anwarkvzk/Food-Recipe-App" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/anwarkvzk/Netflix" className="btn btn-primary" target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG1} alt="" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/anwarkvzk/Food-Recipe-App" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/anwarkvzk/Netflix" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
