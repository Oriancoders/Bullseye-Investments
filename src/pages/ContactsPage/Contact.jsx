import React, { lazy, Suspense, useEffect } from 'react'
import Loader from '../../utils/Loader'

const Navigation = lazy(() => import('../../commonComps/Navigation'))
const FooterFinal = lazy(() => import('../../commonComps/FooterFinal'))
const RegisteredAgents = lazy(() => import('./sections/RegisteredAgents'))
const AddressSection = lazy(() => import('./sections/AddressSection'))
const ContactDetails = lazy(() => import('./sections/ContactDetails'))
const InvestorComplaints = lazy(() => import('./sections/InvestorComplaints'))
const AuditorsLegal = lazy(() => import('./sections/AuditorsLegal'))
const PoliciesProcedures = lazy(() => import('./sections/PoliciesProcedures'))
const ContactHero = lazy(() => import('./sections/ContactHero'))

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <ContactHero />
        {/* <RegisteredAgents /> */}
        <AddressSection />
        <ContactDetails />
        <InvestorComplaints />
        <AuditorsLegal />
        <PoliciesProcedures />
        {/* <ContactForm /> */}
        <FooterFinal />
      </Suspense>
    </div>
  )
}

export default Contact