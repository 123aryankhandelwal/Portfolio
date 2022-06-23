import React from "react";
import "./Experience.css";
import { HiBadgeCheck} from "react-icons/hi";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="experience_container">
        <div className="experience_frontend">
          <h3>Frontend_Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Html</h4>
                <small className="text-light">Expereinced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Jquery</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of fdrontent */}
        <div className="experience_backend">
          <h3>Backend_Development</h3>
          <div className="experience_content">
            
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>flask</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Machine learning */}
        
        <div className="experience_ML">
          <h3>Machine Learning</h3>
          <div className="experience_content">
            
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Computer vision</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Neural Network</h4>
                <small className="text-light">intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Time Series Forecasting</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* Machine learning */}
        
        <div className="experience_ML">
          <h3>Competative Programming</h3>
          <div className="experience_content">
            
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Codeforces</h4>
                <small className="text-light">Newbie(1017)</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icon" />
              <div>
                <h4>Hackerrank</h4>
                <small className="text-light">4 star</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
