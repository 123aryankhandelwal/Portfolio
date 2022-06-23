import React from 'react'
import './Footer.css'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>ARYAN KHANDELWAL</a>

      <ul className='permalinks' >
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials1</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/aryan-khandelwal-04a8971a9/"><BsLinkedin /></a>
        <a href="https://github.com/123aryankhandelwal"><BsGithub /></a>
        <a href="www.instagram.com"><BsInstagram /></a>
      </div>

      <div className="footer_copywrite">
        <small>&copy; Aryan Portfolio. Reserved</small>
      </div>
    </footer>
  )
}

export default Footer