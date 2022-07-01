import React from "react";
import "./About.css";
import ME from "../../Asset/jpg1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <a href="#experience">
              <div className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>likhna hai</small>
              </div>
            </a>

            <a href="#portfolio">
              <div className="about_card">
                <RiGitRepositoryLine className="about_icon" />
                <h5>Projects</h5>
                <small>Refer portfolio</small>
              </div>
            </a>

            <a href="#contact">
              <div className="about_card">
                <FiUsers className="about_icon" />
                <h5>contacts</h5>
                <small>Contact me</small>
              </div>
            </a>
          </div>
          <p>
            Aspiring Software Engineer<br></br>
            Explorer 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
