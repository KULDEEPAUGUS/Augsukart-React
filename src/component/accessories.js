import React from 'react'
import Nav from './childcomponent/Register/nav_common'
import Footer from './footer'
import Accessories from './childcomponent/Accessories/main_acces'
export default function Allcategories() {
  return (
    <div className=' font-Nuinto'>
        <Nav/>
        <Accessories/>
        <Footer/>
    </div>
  )
}
