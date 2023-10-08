import React from 'react'
import orange from "../../../asset/orange.webp"
import box1 from "../../../asset/box1.avif"
import box2 from "../../../asset/box2.avif"
import box3 from "../../../asset/box3.avif"
import box4 from "../../../asset/box4.avif"
import pineaple from "../../../asset/pineapple-295366_640.webp"
import coconut from "../../../asset/coconut-7876154_640.webp"
import { Link } from 'react-router-dom'
export default function categories() {
  return (
    <div className='h-[120vh]'>
       <h1 className='text-[3vw] mt-[10vh] ml-[12vw] font-semibold z-0'>
                Categories Which are Loved
            </h1>
            <img src={orange} alt="" className='w-[10vw] opacity-60 -ml-10'/>
            <div className='flex justify-evenly ml-[13vw] mr-[10vw] gap-[5vw] h-[20vh] -mt-10'>
                <div className='rounded-md w-[20vw] h-[15vh]'>
                    <h1 className=' font-semibold text-3xl text-[#febd2f] m-3'>
                        Fruits
                    </h1>
                    <p className='m-3 font-semibold text-white'>
                        Give a hoot, eat more fruit! Fruit in a day is the healthy way!
                    </p>
                    <button className=' bg-[#febd2f] text-[#173334] rounded-md m-3 p-1 hover:bg-[#173334] hover:text-[#febd2f]'>
                      <Link to="/fruits"> Go to Category </Link>
                    </button>
                    <img src={box1} className='z-[-1] rounded-lg opacity-80 relative w-[28vw] -top-[25.5vh] h-[26.5vh]' alt="" />
                </div>
                <div className=' rounded-md w-[20vw] h-[15vh]'>
                    <h1 className=' font-semibold text-3xl text-[#febd2f] m-3'>
                        vegetables
                    </h1>
                    <p class="goto" className='m-3 text-white font-semibold' >
                        The treasure of a good life is hidden in vegetables. Get strong eat vegetables
                    </p>
                    <button className='hover:bg-[#173334] hover:text-[#febd2f] bg-[#febd2f] text-[#173334] rounded-md m-3 p-1'>
                    <Link to="/vegetable"> Go to Category </Link>
                    </button>
                    <img src={box2} className='z-[-1] rounded-lg opacity-80 relative w-[28vw] -top-[25.5vh] h-[26.5vh]' alt="" />
                </div>
                <div className=' rounded-md w-[20vw] h-[15vh]'>
                    <h1 className=' font-semibold text-3xl text-[#febd2f] m-3'>
                        Dry Fruits
                    </h1>
                    <p class="goto" className='m-3 text-white font-semibold' >
                        Consume dried fruits to be healthy. Because life is defined by health.
                    </p>
                    <button className='hover:bg-[#173334] hover:text-[#febd2f] bg-[#febd2f] text-[#173334] rounded-md m-3 p-1'>
                     <Link to="/dryfruit"> Go to Category </Link>
                    </button>
                    <img src={box3} className='z-[-1] rounded-lg opacity-90 relative w-[28vw] -top-[25.5vh] h-[26.5vh]' alt="" />
                </div>
                <div className='rounded-md w-[20vw]'>
                    <h1 className=' font-semibold text-3xl text-[#febd2f] m-3'>
                        Cookies
                    </h1>
                    <p class="goto" className='m-3 text-white font-semibold' >
                        For Serious Cookie Munchers. Freshly Baked.
                    </p>
                    <button className=' hover:bg-[#173334] hover:text-[#febd2f] bg-[#febd2f] text-[#173334] rounded-md m-3 p-1 mt-[5vh]'>
                     <Link to="/cookies">Go to Category</Link>
                    </button>
                    <img src={box4} className='z-[-1] rounded-lg opacity-90 relative w-[28vw] -top-[25.5vh] h-[26.5vh]' alt="" />
                </div>
            </div>
            <img src={pineaple} className='relative opacity-70 -rotate-12 z-[-2] -top-[40vh] ml-[30vw]' alt=""/>
            <img src={coconut} className=' relative opacity-50 -rotate-12 z-[-2] -top-[40vh] ml-[70vw] w-[20vw]' alt="" />
            <div className=' relative -top-[100vh] left-[12vw]'>
                <button
                    className='font-semibold relative bg-[#febd2f] text-[#173334] p-[0.25vw] rounded-sm'>Daily Discounts
                </button>
                <h1 class="mhd" className='text-3xl font-semibold mt-[1vh]'>
                    Fruits and vegetables
                </h1>
                <p className=' mt-3 font-semibold'>
                    If you go to jungles or forests untouched by man, <br/>you will see fruit and vegetables that look
                    like they <br/> sprouted from trees from Heaven. </p>
                <p className=' text-pink-800 font-semibold'>So, You are in Heaven.</p>
                <button id="order" className=' bg-[#febd2f] text-[#173334] font-semibold mt-3 rounded-sm hover:bg-[#173334] hover:text-white p-1 '>
                  <Link to="/Allcategories"> order now </Link>
                </button>
            </div>
    </div>
  )
}
