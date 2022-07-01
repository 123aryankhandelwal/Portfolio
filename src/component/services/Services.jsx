import React from "react";
import "./Services.css";
import CFG from "../../Asset/cfg.png";
import gifto from "../../Asset/gifto.png";
import giftovid from "../../Asset/giftovid.mp4";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5></h5>
      <h2>Acheivements</h2>
      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>Rank 1st CODE_FOR_GOOD</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <div className="about_me_image">
                <img src={CFG} alt="About Image" />
              </div>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>collaborated better</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Attitude to learn</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Accepted each other</p>
            </li>
          </ul>
        </article>
        {/* End of one card */}
        <article className="service">
          <div className="service_head">
            <h3>Internships</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <div className="about_me_image">
                <img src={gifto} alt="About Image" />
              </div>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <div className="about_me_image">
                <img src={gifto} alt="About Image" />
              </div>
            </li>
            <li> 
              <BiCheck className="service_list_icon" />
              <b>FULL STACK DEVELOPMENT(5Months)</b>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <b>Machine Learning Intern(4Months)</b> 
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <b>My Journey From Giftolexia</b>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:6908407630218309632/">Click Here</a> 
            </li>
          </ul>
        </article>
        {/* End of Second Card */}

       <article className="service">
          <div className="service_head">
            <h3>Teaching Assistent</h3>
          </div>
          <ul className="service_list">
            <li> 
              <BiCheck className="service_list_icon" />
              <b>FULL STACK DEVELOPMENT(5Months)</b>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <b>Dayananda Sagar College Of engineering</b> 
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <b>My Journey From Giftolexia</b>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:6908407630218309632/">Click Here</a> 
            </li>
          </ul>
        </article>



      </div>
    </section>
  );
};
export default Services;
