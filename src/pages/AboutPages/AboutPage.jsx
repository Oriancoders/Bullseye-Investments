import React, { Suspense, lazy, useEffect } from 'react'
import Navigation from '../../commonComps/Navigation'
import FooterFinal from '../../commonComps/FooterFinal'
import Loader from '../../utils/Loader'
// Lazy load sections
const AboutHero = lazy(() => import('./sections/AboutHero'))
const MissionVision = lazy(() => import('./sections/MissionVison'))
const TeamCTA = lazy(() => import('./sections/TeamCTA'))
const SponsorsSection = lazy(() => import('./sections/SponsorsSection'))

// Simple fallback loader

const AboutPage = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<Loader />}>
        <Navigation />  
        <AboutHero />
        <MissionVision />
        <TeamCTA />
        <SponsorsSection />
      <FooterFinal />
      </Suspense>
    </div>
  )
}

export default AboutPage
