import React from 'react'
import Nav from './childcomponent/Register/nav_common'
import Footer from './footer'
import Veg from './childcomponent/vegetable/veg'
export default function Allcategories() {
  return (
    <div className=' font-Nuinto'>
        <Nav/>
        <Veg/>
        <Footer/>
    </div>
  )
}
