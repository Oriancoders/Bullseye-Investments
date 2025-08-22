import React from 'react'
import Navigation from '../../commonComps/Navigation'
import Footer from '../../commonComps/Footer'
import RegisteredAgents from './sections/RegisteredAgents'
import AddressSection from './sections/AddressSection'
import ContactDetails from './sections/ContactDetails'
import InvestorComplaints from './sections/InvestorComplaints'
import AuditorsLegal from './sections/AuditorsLegal'
import PoliciesProcedures from './sections/PoliciesProcedures'
import ContactForm from './sections/ContactForm'
import ContactHero from './sections/ContactHero'

const Contact = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navigation/>
        <ContactHero/>
        {/* <RegisteredAgents/> */}
        <AddressSection/>
        <ContactDetails/>
        <InvestorComplaints/>
        <AuditorsLegal/>
        <PoliciesProcedures/>
        {/* <ContactForm/> */}
      <Footer/>
    </div>
  )
}

export default Contact
