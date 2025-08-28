import React, { lazy, Suspense, useEffect } from 'react'
import Loader from '../../utils/Loader'
// Lazy load all components
const Navigation = lazy(() => import('../../commonComps/Navigation'))
const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Services = lazy(() => import('./sections/Services'))
const WhyChoose = lazy(() => import('./sections/WhyChoose'))
const Markets = lazy(() => import('./sections/Markets'))
const Education = lazy(() => import('./sections/Education'))
const OpenAccount = lazy(() => import('./sections/OpenAccount'))
const MetaTrader = lazy(() => import('./sections/MetaTrader'))
const Contact = lazy(() => import('./sections/Contact'))
const FooterFinal = lazy(() => import('../../commonComps/FooterFinal'))


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Suspense fallback={<Loader />}>
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
        <FooterFinal />
      </Suspense>
    </div>
  )
}

export default Home