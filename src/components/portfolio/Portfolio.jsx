import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Food Recepie App",
    github: "https://github.com/anwarkvzk/Food-Recipe-App",
    demo: "https://github.com/anwarkvzk/Food-Recipe-App",
  },
  {
    id: 1,
    image: IMG2,
    title: "Netflix-Clone App",
    github: "https://github.com/anwarkvzk/Netflix",
    demo: "https://github.com/anwarkvzk/Netflix",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
                <img src={image} alt={title} />
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank'>Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
}

export default Portfolio;
