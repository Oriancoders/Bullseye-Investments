import React from 'react'
import Navigation from '../../commonComps/Navigation'
import Footer from '../../commonComps/Footer'
import AboutHero from './sections/AboutHero'
import MissionVision from './sections/MissionVison'
import TeamCTA from './sections/TeamCTA'
import Timeline from './sections/TimeLine'
import SponsorsSection from './sections/SponsorsSection'

const AboutPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navigation/>
        <AboutHero/>
        <Timeline/>
        <MissionVision/>
        <TeamCTA/>
        <SponsorsSection/>
      <Footer/>
    </div>
  )
}

export default AboutPage
