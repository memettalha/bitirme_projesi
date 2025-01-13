import React from 'react'
import Navbar from '../Components/Navbar'
import Account from '../Components/Account'
import Footer from "../Components/Footer"
import FooterAccordion from "../Components/FooterAccordion"

const AccountPage = () => {
  return (
    <div>
      <Navbar/>
      <Account/>
      <Footer/>
      <FooterAccordion/>
    </div>
  )
}

export default AccountPage
