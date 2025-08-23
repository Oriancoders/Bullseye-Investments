import React from 'react'
import Navigation from '../../commonComps/Navigation'
import Footer from '../../commonComps/Footer'
import MarketsHero from './sections/MarketsHero'
import MarketSnapshot from './sections/MarketSnapshot'
import PSXSection from './sections/PSXSection'
import PMEXSection from './sections/PMEXSection'
import ForexSection from './sections/ForexSection'
import MarketHeatmap from './sections/MarketHeatMap'
import MarketTools from './sections/MarketTools'
// import MarketFAQ from './sections/MarketFAQ'
import MarketCTA from './sections/MarketCTA'

const MarketPage = () => {
  return (
    <div>
      <Navigation />
      <MarketsHero/>
      <MarketSnapshot/>
      <PSXSection/>
      <MarketHeatmap/>
      <PMEXSection/>
      <ForexSection/>
      <MarketTools/>
      {/* <MarketFAQ/> */}
      <MarketCTA/>
      <Footer/>
    </div>
  )
}

export default MarketPage
