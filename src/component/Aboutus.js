import React from 'react'
import Auguskart from './childcomponent/Aboutus/Auguskart'
import Nav from './childcomponent/Register/nav_common'
import Footer from './footer'
// import Faq from './childcomponent/Aboutus/Faq'
import Scrolltomiddle from "./scrolltomiddle"
import Contact from './childcomponent/Aboutus/Contactus'
export default function Aboutus() {
  return (
    <div>
      <Nav/>
      <Auguskart/>
      <Scrolltomiddle/>
      <Contact/>
      <Footer/>
    </div>
  )
}
