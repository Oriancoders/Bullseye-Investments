import React, { lazy, Suspense, useEffect } from 'react'
import Loader from '../../utils/Loader'

const Navigation = lazy(() => import('../../commonComps/Navigation'))
const ServicesHero = lazy(() => import('./sections/ServicesHero'))
const WhyChooseServices = lazy(() => import('./sections/WhyChooseServices'))
const ServicesCTA = lazy(() => import('./sections/ServicesCTA'))
const TrustCompliance = lazy(() => import('./sections/TrustCompliance'))
const ContactLocation = lazy(() => import('./sections/ContactLocation'))
const PremiumServices = lazy(() => import('./sections/PremiumServices'))
const AssociatedCompanies = lazy(() => import('./sections/AssociatedCompanies'))
const InvestorComplaints = lazy(() => import('./sections/InvestorsComplaints'))
const FooterFinal = lazy(() => import('../../commonComps/FooterFinal'))



const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <ServicesHero />
        <PremiumServices />
        <WhyChooseServices />
        <AssociatedCompanies />
        <InvestorComplaints />
        <ContactLocation />
        <ServicesCTA />
        <TrustCompliance />
        <FooterFinal />
      </Suspense>
    </div>
  )
}

export default ServicesPage