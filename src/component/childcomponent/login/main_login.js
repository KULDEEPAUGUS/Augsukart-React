import React from 'react'
import back from "../../../asset/back.svg"
import google from "../../../asset/google.svg"
import toggle from "../../../asset/toggle.svg"
import email from "../../../asset/email.svg"
import psswd from "../../../asset/psswd.svg"
import { Link } from 'react-router-dom'
export default function main_login() {
  return (
    <div className='bg-[#febd2f] text-[#173334] flex flex-col -ml-10 items-center p-10'>
        <Link to="/" className='flex items-center' >
            <img src={back} alt="404 Error" className=' w-8' />
            <h4 className='text-xl font-semibold'>Back to Shop</h4>
        </Link>
        <h2 className='text-4xl p-2 font-semibold'>Login</h2>
        <div className=' bg-white border-[0.05vw] p-5 shadow-2xl w-[40vw] m-5'>
            <h1 className=' text-xl font-semibold pb-1' >Your Personal Detail</h1>
            <hr className='font-[1vw]' />
            <br/>
            <form action="">
                <label for="email" className='text-medium font-semibold'>Email: </label>
                <br/>
                <div className='w-[100%] border-[0.1vw] flex items-center border-[#173334] mt-2 p-[0.1vw]'>
                <img src={email} alt="" />
                <input type="email"
                    placeholder="Email" className='outline-none text-normal pl-2  ' />
                </div>
            </form>
            <div className='flex mt-3 flex-col'>
                <form action="">
                    <label for="passwd">Password: </label>
                    <br/>
                <div className='w-[100%] border-[0.1vw] flex items-center border-[#173334] mt-2 p-[0.1vw]'>
                    <img src={psswd} alt="" />
                    <input type="password" className=' w-[90%] outline-none pl-2'
                        placeholder="Password" />
                    <a href=""><img src={toggle} alt="" /></a>
                </div>
                </form>
                <a href="" className='mt-4 text-sm text-[#2B47FC]'>Forgot Password?</a>
                <a href='' className='mt-7 hover:bg-[#173334] hover:text-white bg-[#febd2f] text-center text-[#173334] p-[0.3vw] rounded-sm'>
                    Sign in &#10141;
                </a>
            </div>
            <div className='p-1 align-middle border-solid mt-5 border-[#173334] border-[0.1vw]'>
                <a href="" className='flex items-center text-center ml-[35%]'>
                      <img src={google} alt="" className='w-7' />
                      <p className=''>Login With Google</p>
                </a>
            </div>
            <p className='mt-5 text-center'>Don't have an account?<Link to="/register" className=' text-[#2B47FC]'> Register</Link></p>
        </div>
    </div>
  )
}
