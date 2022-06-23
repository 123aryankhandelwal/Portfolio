import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="www.linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="www.github.com" target='_blank'><BsGithub /></a>
        <a href="www.email.com" target='_blank'><MdEmail/></a>
    </div>
  )
}

export default Headersocials