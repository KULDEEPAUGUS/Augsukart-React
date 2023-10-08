import React from 'react'
import shake from "../../../asset/photo-1615478503562-ec2d8aa0e24e.avif"
import Giphy from "../../../asset/giphy.gif"
import { Link } from 'react-router-dom'
export default function Goodies() {
  return (
    <div className='bg-[#febd2f] p-[5vw] h-[60vh]'>
        <h1 className='text-[#173334] text-4xl ml-[4vw] font-bold'>
            Goodies for Your Little Ones
        </h1>
        <p className='text-[#173334] text-medium w-[50vw] ml-[4vw] mt-[1.5vh] font-medium' >They're made from botanically pure ingredients, so you can feel good about eating them. Plus, they're
            really nutritious, so you can feel good too. The best part is that they're all vegan and
            gluten-free, so
            you can have them any time of day. So go on and make yourself a bowl of these healthy and delicious
            fruits & vegetables today!</p>
        <button className='bg-white text-[#173334] p-1 rounded-sm m-2 ml-[4vw] mt-5 hover:bg-[#173334] hover:text-white hover:transition-all'>
           <Link to="/Allcategories"> Show More </Link>
        </button>
        <img src={Giphy} className=' hover:scale-[1.2] w-[20%] relative -top-[22vh] left-[65vw] rounded-sm' alt="" />
        
    </div>
  )
}
