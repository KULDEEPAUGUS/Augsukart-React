import React from 'react'
import Nav from "./nav"
import Healthfruit from "./childcomponent/home/healthfruit"
import Categories from './childcomponent/home/categories'
import Bestseller from './childcomponent/home/bestseller'
import Goodies from './childcomponent/home/Goodies'
import Footer from './footer'
export default function home() {
  return (
    <div className=' overflow-hidden font-Nuinto'>
      <Nav/>
      <Healthfruit/>
      <Categories/>
      <Bestseller/>
      <Goodies/>
      <Footer/>
    </div>
  )
}
