import React from 'react'
import { Link } from 'react-router-dom'
import back from "../../../asset/back.svg"
export default function Contactus() {
  return (
    <div>
        <h1 className='ml-[13vw] font-extrabold text-5xl text-[#173334] mt-8 mb-8'>Contact Us</h1>
        <form action="" className=' mb-10 ml-[12vw] p-3 w-[40vw] border-[0.1vw] border-[#173334]'>
            <label className='text-lg mr-3' htmlFor="name">Full Name</label>
            <label className='text-lg mr-[12.5vw] float-right' htmlFor="telephone">Phone no </label> <br />
                <input required className=' outline-none p-1 border-[0.1vw] mt-1 w-[18vw] rounded-sm pl-1 border-[#173334]' type="name" /> 
             <input required type="telephone" className=' float-right mt-1  outline-none p-1 rounded-sm pl-1 border-[0.1vw] w-[18vw] border-[#173334] mb-5' /> <br />
             <label className='text-lg mr-3' htmlFor="Email">Email:- </label> <br />
             <input required type="email"className=' mt-1  outline-none p-1 rounded-sm pl-1 border-[0.1vw] w-[38vw] border-[#173334]' /><br />
             <label className='text-lg mr-3' htmlFor="comment">Incident Detail</label><br />
             <textarea required className=' outline-none p-1 border-[0.1vw] border-[#173334] mt-3' name="" id="" cols="58" rows="3"></textarea>
             <input type="file" className=' outline-none mt-3 file:bg-[#173334] file:rounded-sm file:last:text-xl file:hover:bg-[#173334dd] cursor-pointer file:border-none file:p-1 file:text-white' />
             <div className='mt-3 mb-0'>
                <input type="checkbox" className=' bg-[#173334]' />
                <label className=' text-sm ml-2' htmlFor="">File must be in pdf/docx/jpg/jpeg</label>
             </div>
             <div className=''>
                <input type="checkbox" className=' bg-[#173334]' />
                <label className=' text-sm ml-2' htmlFor="">Follows the term and condition of Auguskart</label>
             </div>
             <button className=' w-[98%] hover:bg-[#173334e1] hover:shadow-md p-1 text-white bg-[#173334] mt-3'>Send Message</button>
        </form>
    </div>
    
  )
}
