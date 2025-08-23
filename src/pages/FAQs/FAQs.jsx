import React from 'react'
import Navigation from '../../commonComps/Navigation'
import Footer from '../../commonComps/Footer'
import MarketFAQ from './sections/MarketFAQ'
import FaqsHero from './sections/FaqsHero'

const FAQs = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navigation/>
        <FaqsHero/>
        <MarketFAQ/>
      <Footer/>
    </div>
  )
}

export default FAQs
