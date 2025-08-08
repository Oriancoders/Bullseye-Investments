import React from 'react'
import Navigation from '../../commonComps/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import WhyChoose from './sections/WhyChoose'
import Markets from './sections/Markets'
import Education from './sections/Education'
import OpenAccount from './sections/OpenAccount'
import MetaTrader from './sections/MetaTrader'
import Contact from './sections/Contact'
import Footer from '../../commonComps/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Markets />
      <Education />
      <OpenAccount />
      <MetaTrader />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
