import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../Asset/jpg2.jpg'
import Headersocials from './Headersocials'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aryan Khandelwal</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <Headersocials />
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}
