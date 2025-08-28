import React, { Suspense, lazy, useEffect } from 'react'
import Navigation from '../../commonComps/Navigation'
import FooterFinal from '../../commonComps/FooterFinal'
import Loader from '../../utils/Loader'
// Lazy load sections
const FaqsHero = lazy(() => import('./sections/FaqsHero'))
const MarketFAQ = lazy(() => import('./sections/MarketFAQ'))



const FAQs = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <FaqsHero />
        <MarketFAQ />
      </Suspense>
      <FooterFinal />
    </div>
  )
}

export default FAQs
