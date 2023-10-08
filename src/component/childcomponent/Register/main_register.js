import React from 'react'
import back from "../../../asset/back.svg"
import google from "../../../asset/google.svg"
import email from "../../../asset/email.svg"
import profile from "../../../asset/name.svg"
import psswd from "../../../asset/psswd.svg"
import { Link } from 'react-router-dom'
export default function main_login() {
  return (
    <div className='bg-[#febd2f] text-[#173334] flex flex-col -ml-10 items-center p-10'>
        <Link to="/" className='flex items-center'>
            <img src={back} alt="404 Error" className=' w-8' />
            <h4 className='text-xl font-semibold'>Back to Shop</h4>
        </Link>
        <h2 className='text-4xl p-2 font-semibold'>Register</h2>
        <div className=' bg-white border-[0.05vw] p-5 shadow-2xl w-[40vw] m-5'>
            <h1 className=' text-xl font-semibold pb-1' >Your Personal Detail</h1>
            <hr className='font-[1vw]' />
            <form action="" name="loginpage" className='pt-3'>
                <label for="fname" className='text-medium font-semibold'>First Name: </label>
                <label for="lname" className='text-medium font-semibold float-right mr-[31.5%]'>Last name: </label>
                <br/>
                <div className='flex'>
                    <div className='flex w-[45%] items-center border-[0.1vw] text-normal p-[0.1vw] pl-2 mt-2 border-[#173334]'>
                        <img src={profile} alt="" />
                        <input type="text" name="fname"
                            placeholder="First name" className=' outline-none text-normal pl-2' />
                    </div>
                    <div className='flex w-[45%] items-center border-[0.1vw] ml-[10%] text-normal p-[0.1vw] pl-2 mt-2 border-[#173334]'>
                        <img src={profile} alt="" />
                         <input type="text" placeholder="Last name" className=' ml-2 outline-none text-normal' name="lname"/>
                    </div>
                </div>
            </form>
            <br/>
            <form action="">
                <label for="email" className='text-medium font-semibold'>Email: </label>
                <label for="contact" className='text-medium font-semibold float-right mr-[30%]'>Contact No: </label>
                <br/>
                <div className='flex'>
                    <div className='flex w-[45%] items-center border-[0.1vw] text-normal p-[0.1vw] pl-2 mt-2 border-[#173334]'>
                        <img src={email} alt="" />
                        <input type="text" name="fname"
                            placeholder="Email" className=' outline-none text-normal pl-2' />
                    </div>
                    <div className='flex w-[45%] items-center border-[0.1vw] ml-[10%] text-normal p-[0.1vw] pl-2 mt-2 border-[#173334]'>
                        <img src={profile} alt="" />
                         <input type="text" placeholder="Contact" className='ml-2 outline-none text-normal' name="lname"/>
                    </div>
                </div>
            </form>
            <hr />
            <h1 className='mt-5 mb-3' >Your Password</h1>
            <hr/>
            <div className='flex mt-3 flex-col'>
                <form action="">
                    <label for="passwd" className=' font-semibold'>Password: </label>
                    <label for="passwd" className='ml-[42.5%] font-semibold'>Confirm Password: </label>
                    <br/>
                    <div className='flex'>
                    <div className='flex w-[45%] items-center border-[0.1vw] text-normal p-[0.1vw] pl-2 mt-2 border-[#173334]'>
                        <img src={psswd} alt="" />
                        <input type="text" name="fname"
                            placeholder="Password" className=' outline-none text-normal pl-2' />
                    </div>
                    <div className='flex w-[45%] items-center border-[0.1vw] ml-[10%] text-normal p-[0.1vw] pl-2 mt-2 border-[#173334]'>
                        <img src={psswd} alt="" />
                         <input type="text" placeholder="Confirm Password" className='ml-2 outline-none text-normal' name="lname"/>
                    </div>
                </div>
                </form>
                <a href='' className=' hover:bg-[#173334] hover:text-white mt-7 text-center bg-[#febd2f] text-[#173334] p-[0.3vw] rounded-sm'>
                    Sign In &#10141;
                </a>
            </div>
            <div className='p-1 align-middle border-solid mt-5 border-[#173334] border-[0.1vw]'>
                <a href="" className='flex items-center text-center ml-[35%]'>
                      <img src={google} alt="" className='w-7' />
                      <p className=''>Register With Google</p>
                </a>
            </div>
            <p className='mt-5 text-center'>Already have an account?<Link to="/login" className=' text-blue-500'> Login</Link></p>
        </div>
    </div>
  )
}
