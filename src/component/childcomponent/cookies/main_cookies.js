import React from 'react'
import back from "../../../asset/back.svg"
import {Freshcookies} from '../../constantdata/data'
import heart from '../../../asset/heart-line-icon.svg'
import { Link } from 'react-router-dom'
export default function actit() {
  return (
    <>
    <div className=' bg-slate-50 text-[#173334]'>
        <Link to="/" className='flex items-center ml-[13vw] pt-[5vh]' href=''>
            <img src={back} alt="404 Error" className=' w-[4vw]' />
            <h4 className='text-2xl font-normal '>Back to home</h4>
        </Link>
        <h1 className='ml-[13vw] font-extrabold text-5xl text-[#173334] mt-8 mb-4'>Fresh Cookies</h1>
        <p className='w-[50%] ml-[13.5%] font-thin pb-10'>Freshly baked cookies, warm from the oven, evoke a sense of comfort and delight. The aroma of buttery dough mingling with chocolate chips or aromatic spices fills the air, creating an irresistible invitation. With each bite, there's a perfect harmony of crisp edges and a soft, gooey center, delivering a symphony of flavors. Whether it's classic chocolate chip, oatmeal raisin, or decadent double chocolate, each cookie is a testament to the baker's artistry. These treats, shared with loved ones or savored in solitude, transcend mere confections; they become moments of simple, unadulterated joy, leaving a lingering memory of warmth and indulgence.</p>
    </div>
    <div className=' flex flex-wrap gap-5 ml-[11%] text-[#173334] w-[76%] p-14'>
        {
            Freshcookies.map(item=>
              <div className='w-[20vw] border-[0.1vw] border-solid shadow-xl border-[#1733348b] rounded-md p-2'>
                <img src={heart} className='w-5 float-right m-2 z-[-1]' alt="" />
                <img src={item.url} className='w-[18vw]' alt="" />
                <h6 className=' font-semibold text-xl ml-5'>Fresh cookies</h6>
                <h1 className='ml-5 font-bold text-2xl'>{item.name}</h1>
                <p className='ml-5 font-semibold'> &#9733; &#9733; &#9733; &#9733; &#9733;(5)</p>
                <h1 className='text-xl ml-5 mt-2 font-semibold'>&#8377;{item.price}</h1>
                <form action="" className='ml-5 m-1 flex'> 
                    <div className='mb-2'>
                        <h1 className=''>Size</h1>
                        <select name="" id="" className=' bg-white p-1 border-[0.1vw] border-[#173334]'>
                            <option value="">{item.size[0]}</option>
                            <option value="">{item.size[1]}</option>
                        </select>
                    </div>
                    <div className='float-right'>
                    <h1 className=' float-right'>Quantity</h1> <br />
                    <input className='w-[50%] float-right p-[0.1vw] ml-3 border-[#173334] border-[0.1vw]' type="number" />
                    </div>
                </form>
                <button className='hover:bg-[#febd2f] hover:text-[#173334] bg-[#173334] ml-5 w-[92%] text-white p-1'>Add To Cart</button>
              </div> 
            )
        }
    </div>
    </>
)}
