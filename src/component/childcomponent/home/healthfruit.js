import React from 'react'
import veg from "../../../asset/vegetables-gf56dd0880_1280.png"
import dele from "../../../asset/delievery-removebg-preview.png"
import { Link } from 'react-router-dom'
export default function healthfruit() {
  return (
    <div className='bg-[#febd2f] flex h-[55vh]'>
            <div className='bg-[#1733348f] relative w-[14vw] rounded-lg h-[28vh] top-[30vh] left-[13vw]'>
                <button className='bg-white text-[#1733348] m-[2vh] pl-1 pr-1 rounded-sm'>Delievery
                    Services</button>
                <h1 className='text-md ml-4 text-[#febd2f] font-extrabold'>Delivery <br/> in 24 hours</h1>
                <img src={dele} className='w-[5vw] relative left-[17vh] -top-[10vh]' alt="404 img error"/>
                <div className='absolute top-[14vh] text-sm ml-[1vw] mr-[1vw] text-white'>
                    <p>Our Grocery Partner Deliever The Product Straight From The Farm.</p>
                </div>
                <button className='float-right mr-[2vw] bg-[#febd2f] text-[#1733348] hover:bg-[#173334] hover:text-white p-1 rounded-sm' ><a href="Showing">Show More</a></button>
            </div>
            <div>
                <button className='ml-[15vw] bg-white text-[#1733348] rounded-sm pl-1 pr-1 mt-[8vh] font-medium'><a
                        href="#daily">Daily Discounts</a></button>
                <h1 className='ml-[15vw] font-bold text-[#173334e2] text-3xl mt-[3vh]'>Healthy Fruits <br/> and Vegetables</h1>
                <p className=' relative left-[15vw] w-[30vw] font-normal mt-[2vh]'>
                    Fruits, vegetables and lots of greens. Eat fruits plenty, keep your body healthy. Die old with
                    fruits
                    and vegetables. Make the switch to fruits and vegetables.
                </p> 
                <button className='ml-[15vw] mt-[2vh] bg-white p-1 hover:bg-[#173348] hover:text-white rounded-sm'><Link to="/Allcategories">Show Products</Link></button>
            </div>
            <img src={veg} className='w-[30vw] relative top-[15vh] left-[16vw] h-[25vw]' alt="veggies img not respond"/>
        </div>
  )
}
