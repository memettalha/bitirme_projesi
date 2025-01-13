import './App.css'
import Navbar from './Components/Navbar'
import MainSection from './Components/MainSection'
import Product from './Components/Betseller'
import Ojs from './Components/Ojs'
import Comments from './Components/Comments'
import FooterTop from "./Components/FooterTop"
import Footer from "./Components/Footer"
import FooterAccordion from './Components/FooterAccordion'
import { useState } from 'react'



function Home() {
 



  return (
    <div>
      <Navbar/>
      <MainSection/>
      <Product/>
      <Ojs/>
      <Comments />
      <FooterTop/>
      <Footer/>
      <FooterAccordion/>
    </div>
  )
}

export default Home
