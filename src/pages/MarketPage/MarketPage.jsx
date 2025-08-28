import React, { Suspense, lazy, useEffect } from 'react'
import Loader from '../../utils/Loader'
// Lazy load all components
const Navigation = lazy(() => import('../../commonComps/Navigation'))
const FooterFinal = lazy(() => import('../../commonComps/FooterFinal'))
const MarketsHero = lazy(() => import('./sections/MarketsHero'))
const MarketSnapshot = lazy(() => import('./sections/MarketSnapshot'))
const PSXSection = lazy(() => import('./sections/PSXSection'))
const PMEXSection = lazy(() => import('./sections/PMEXSection'))
const ForexSection = lazy(() => import('./sections/ForexSection'))
const MarketHeatmap = lazy(() => import('./sections/MarketHeatMap'))
const MarketTools = lazy(() => import('./sections/MarketTools'))
const MarketCTA = lazy(() => import('./sections/MarketCTA'))

const MarketPage = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <div className="overflow-x-hidden">
        <Navigation />
        <MarketsHero />
        <MarketSnapshot />
        <PSXSection />
        <MarketHeatmap />
        <PMEXSection />
        <MarketCTA />
        <MarketTools />
        <FooterFinal />
      </div>
    </Suspense>
  )
}

export default MarketPage
