import React from 'react'
import apple from "../../../asset/items1.jpeg"
import pumpkin from "../../../asset/pumpkin-3624499_960_720.jpg"
import cashew from "../../../asset/photo-1615485925873-7ecbbe90a866.avif"
import Bakery from "../../../asset/cookies.avif"
import heartline from "../../../asset/heart-line-icon.svg"
import { Link } from 'react-router-dom'
export default function bestseller() {
  return (
    <div className=' bg-[#173334]'>
        <h1 class="thmain" className=' font-semibold text-4xl text-white pt-[5vh] ml-[11vw]'>
            Our Best Sellers
        </h1>
        <nav>
            <ul className='flex text-white gap-[1vw] mt-[1vh] ml-[11vw]'>
                <li><Link to="/Allcategories" className=' hover:text-[#febd2f]'>All categories</Link></li>
                <li><Link to="/vegetable" className=' hover:text-[#febd2f]'>vegetables</Link></li>
                <li><Link to="/Fruits" className=' hover:text-[#febd2f]'>Fruits</Link></li>
                <li><Link to="/accessories" className=' hover:text-[#febd2f]'>Accessories</Link></li>
            </ul>
        </nav>
        <div className=' pb-10 text-[#173334] flex justify-around ml-[11vw] mr-[11vw] mt-[5vh]'>
            <div className=' bg-white rounded-lg'>
                <img src={heartline} className='float-right mr-2 mt-2 ' alt="" width="25vw"/>
                <img src={apple} alt="" className='w-[14vw] m-[3vh]' />
                <h4 className='text-2xl font-semibold ml-3'>Fruits</h4>
                <h2 className='text-3xl font-bold ml-3'>Apples</h2>
                <p className='ml-3'> &#9733;&#9733;&#9733;&#9733;&#9733;(5)</p>
                <p class="price" className='ml-3 font-semibold'>&#8377;300 <del>&#8377;600</del></p>
                <span className='ml-3 font-semibold'>size</span>
                <span className='mr-3 float-right font-semibold'>Quantity</span>
                <form action="/gotocart" className='ml-3'>
                    <select name="size" id="size" className='bg-white border-[0.1vw] p-[0.25vw] mt-1 border-[#173334]'>
                        <option value="500gm">
                            500gm</option>
                        <option value="1kg">
                            1kg</option>
                    </select>
                    <input type="number" className='w-[3vw] ml-[7vw] outline-none border-[.1vw] border-[#173334] p-1'/>
                </form>
                <button className=' hover:bg-[#173334] hover:text-white m-3 w-[90%] text-[#173334] bg-[#febd2f] mr-3'>
                    <a href="/addtocart">
                        Add To Cart
                    </a>
                </button>
            </div>
            <div className=' bg-white rounded-lg'>
                <img src={heartline} className='float-right mr-2 mt-2 ' alt="" width="25vw"/>
                <img src={pumpkin} alt="" className='w-[12vw] m-[3vh]' />
                <h4 className='text-2xl font-semibold ml-3'>Vegetable</h4>
                <h2 className='text-3xl font-bold ml-3'>Pumpkin</h2>
                <p className='ml-3'> &#9733;&#9733;&#9733;&#9733;&#9733;(5)</p>
                <p class="price" className='ml-3 font-semibold'>&#8377;300 <del>&#8377;600</del></p>
                <span className='ml-3 font-semibold'>size</span>
                <span className='mr-3 float-right font-semibold'>Quantity</span>
                <form action="/gotocart" className='ml-3'>
                    <select name="size" id="size" className='bg-white border-[0.1vw] p-[0.25vw] mt-1 border-[#173334]'>
                        <option value="500gm">
                            500gm</option>
                        <option value="1kg">
                            1kg</option>
                    </select>
                    <input type="number" className='w-[3vw] ml-[7vw] outline-none border-[.1vw] border-[#173334] p-1'/>
                </form>
                <button className='m-3 w-[90%] text-[#173334] hover:bg-[#173334] hover:text-white bg-[#febd2f] mr-3'>
                    <a href="/addtocart">
                        Add To Cart
                    </a>
                </button>
            </div><div className=' bg-white rounded-lg'>
                <img src={heartline} className='float-right mr-2 mt-2 ' alt="" width="25vw"/>
                <img src={cashew} alt="" className='w-[12vw] m-[3vh]' />
                <h4 className='text-2xl font-semibold ml-3'>Dry Fruits</h4>
                <h2 className='text-3xl font-bold ml-3'>Cashew</h2>
                <p className='ml-3'> &#9733;&#9733;&#9733;&#9733;&#9733;(5)</p>
                <p class="price" className='ml-3 font-semibold'>&#8377;300 <del>&#8377;600</del></p>
                <span className='ml-3 font-semibold'>size</span>
                <span className='mr-3 float-right font-semibold'>Quantity</span>
                <form action="/gotocart" className='ml-3'>
                    <select name="size" id="size" className='bg-white border-[0.1vw] p-[0.25vw] mt-1 border-[#173334]'>
                        <option value="500gm">
                            500gm</option>
                        <option value="1kg">
                            1kg</option>
                    </select>
                    <input type="number" className='w-[3vw] ml-[7vw] outline-none border-[.1vw] border-[#173334] p-1'/>
                </form>
                <button className='m-3 hover:bg-[#173334] hover:text-white w-[90%] text-[#173334] bg-[#febd2f] mr-3'>
                    <a href="/addtocart">
                        Add To Cart
                    </a>
                </button>
            </div><div className=' bg-white rounded-lg'>
                <img src={heartline} className='float-right mr-2 mt-2 ' alt="" width="25vw"/>
                <img src={Bakery} alt="" className='w-[12vw] m-[3vh]' />
                <h4 className='text-2xl font-semibold ml-3'>Fruits</h4>
                <h2 className='text-3xl font-bold ml-3'>Apples</h2>
                <p className='ml-3'> &#9733;&#9733;&#9733;&#9733;&#9733;(5)</p>
                <p class="price" className='ml-3 font-semibold'>&#8377;300 <del>&#8377;600</del></p>
                <span className='ml-3 font-semibold'>size</span>
                <span className='mr-3 float-right font-semibold'>Quantity</span>
                <form action="/gotocart" className='ml-3'>
                    <select name="size" id="size" className='bg-white border-[0.1vw] p-[0.25vw] mt-1 border-[#173334]'>
                        <option value="500gm">
                            500gm</option>
                        <option value="1kg">
                            1kg</option>
                    </select>
                    <input type="number" className='w-[3vw] ml-[7vw] outline-none border-[.1vw] border-[#173334] p-1'/>
                </form>
                <button className='m-3 w-[90%] text-[#173334] hover:bg-[#173334] hover:text-white bg-[#febd2f] mr-3'>
                    <a href="/addtocart">
                        Add To Cart
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}
