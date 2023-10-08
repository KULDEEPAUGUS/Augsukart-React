import React from 'react'
import Nav from "./childcomponent/Register/nav_common"
import Main_login from './childcomponent/Register/main_register'
import Footer from './footer'
export default function login() {
  return (
    <div className=' font-Nuinto'>
      <Nav/>
      <Main_login/>
      <Footer />
    </div>
  )
}
