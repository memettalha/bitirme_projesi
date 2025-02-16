import React from 'react'
import Navbar from "../Components/Component/Navbar/Navbar"
import Paginations from '../Components/Pagination'
import Footer from '../Components/Footer'
import FooterAccordion from '../Components/FooterAccordion'
import AboutContent from '../Components/AboutContent'



const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutContent/>
         <div className="flex justify-center items-center my-4 mb-32">
            <Paginations />
        </div>
        <Footer/>
        <FooterAccordion/>
     
    </div>
  )
}

export default AboutUs
