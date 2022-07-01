import React from 'react'
import { Header } from './component/Header/Header'
import Nav from './component/Nav/Nav'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import Portfolio from './component/Portfolio/Portfolio'
import Testimonials from './component/Testimonials/Testimonials'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Services from './component/services/Services'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />

    </>
  )
}
export default App