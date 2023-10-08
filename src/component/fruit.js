import React from 'react'
import Nav from './childcomponent/Register/nav_common'
import Footer from './footer'
import Mains from './childcomponent/Fruits/main'
export default function Allcategories() {
  return (
    <div className=' font-Nuinto'>
        <Nav/>
        <Mains/>
        <Footer/>
    </div>
  )
}
