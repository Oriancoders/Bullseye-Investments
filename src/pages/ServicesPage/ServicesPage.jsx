import React from 'react'
import Navigation from '../../commonComps/Navigation'
import Footer from '../../commonComps/Footer'
import ServicesHero from './sections/ServicesHero'
import ServicesGrid from './sections/ServicesGrid'
import WhyChooseServices from './sections/WhyChooseServices'
import ServicesCTA from './sections/ServicesCTA'
import TrustCompliance from './sections/TrustCompliance'
import ContactLocation from './sections/ContactLocation'

const ServicesPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navigation/>
        <ServicesHero/>
        <ServicesGrid/>
        <WhyChooseServices/>
        <ContactLocation/>
        <ServicesCTA/>
        <TrustCompliance/>

      <Footer/>
    </div>
  )
}

export default ServicesPage
