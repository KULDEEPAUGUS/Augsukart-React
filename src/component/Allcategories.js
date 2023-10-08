import React from 'react'
import Nav from './childcomponent/Register/nav_common'
import Footer from './footer'
import Actit from './childcomponent/Allcategories/actit'
export default function Allcategories() {
  return (
    <div className=' font-Nuinto'>
        <Nav/>
        <Actit/>
        <Footer/>
    </div>
  )
}
