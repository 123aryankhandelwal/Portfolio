import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiFillBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'
import {AiOutlineProject } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#"  onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className= { activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className= { activeNav === '#experience' ? 'active' : ''}><AiFillBook /></a>
      <a href='#testimonials' onClick={()=>setActiveNav('#services')} className= { activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#services')} className= { activeNav === '#services' ? 'active' : ''}><AiOutlineProject /></a>
      <a href='#contact'onClick={()=>setActiveNav('#contact')} className= { activeNav === '#services' ? 'active' : ''}><TiContacts /></a>
    </nav>
  )
}

export default Nav