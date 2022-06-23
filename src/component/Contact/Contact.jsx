import React from "react";
import "./contact.css";
import { GrMail } from "react-icons/gr";
import { BsLinkedin, BsFillChatDotsFill } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m0z1b39",
        "template_6vaawg5",
        form.current,
        "imp5e4wmRw5McB7IA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <GrMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>khandelwalaryan12@gmail.com</h5>
            <a href="mailto:khandelwalaryan12@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <BsLinkedin className="contact_option_icon" />
            <h4>Linkedin</h4>
            <h5>Aryan Khandelwal</h5>
            <a
              href="https://www.linkedin.com/in/aryan-khandelwal-04a8971a9/"
              target="_blank"
            >
              Let's Connect
            </a>
          </article>

          <article className="contact_option">
            <BsFillChatDotsFill className="contact_option_icon" />
            <h4>What's app</h4>
            <h5>+918560066869</h5>
          </article>
        </div>
        {/* End of Conatct options */}
        <form ref={form} onSubmit={sendEmail} >
          <input
            type="text"
            name="name"
            placeholder="your Full name"
            required
          />
          <input type="email" name="email" placeholder="your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
