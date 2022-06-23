import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";

// Dynamically from github
const data = [
  {
    id: 1,
    image: img1,
    title: "Virtual Labs",
    github: "https://github.com/123aryankhandelwal/vtlab-cse-dsce",
    demo: "https://vtlab-cse-dsce.herokuapp.com/",
  },
  {
    id: 2,
    image: img2,
    title: "BLOCKaro",
    github: "https://github.com/123aryankhandelwal/Blockaro",
    demo: "https://github.com/123aryankhandelwal/FingerSpell-ASL/raw/main/Images/1.gif",
  },
  {
    id: 3,
    image: img3,
    title: "FingerSpell-ASL",
    github: "https://github.com/123aryankhandelwal/FingerSpell-ASL.git",
    demo: "https://dribbble.com/shots/18402931-Pizza-Rat",
  },
  {
    id: 4,
    image: img4,
    title: "Human Activity Recognition",
    github: "https://github.com/123aryankhandelwal/Human_activity_recognition",
    demo: "https://drive.google.com/file/d/1VQfocF-pRPOwUI6ffSZs5svqr3N6A8MJ/view?usp=sharing",
  },
  {
    id: 5,
    image: img5,
    title: "Portfolio",
    github: "https://github.com/123aryankhandelwal/Portfolio",
    demo: "https://github.com/123aryankhandelwal/Portfolio",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="Portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target='_blank'>
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
