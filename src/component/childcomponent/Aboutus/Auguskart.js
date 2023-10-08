import React from 'react'
import { Link } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import back from "../../../asset/back.svg"
import Carousel from "react-multi-carousel";
import respons from "../Allcategories/cons"
import img1 from "../../../asset/Banner/Auguskart.png"
import img2 from "../../../asset/Banner/Auguskart.netlify(1).png"
import img3 from "../../../asset/Banner/Delieverin24hr.png"
import img4 from "../../../asset/Banner/Auguskart.netlify.gif"
import { Banner } from '../../constantdata/data';
export default function Aboutus() {
  return (
    <div className='mb-10'>
        <div className=' bg-slate-50 text-[#173334]'>
            <Link to="/" className='flex items-center ml-[13vw] pt-[5vh]' href=''>
                <img src={back} alt="404 Error" className=' w-[4vw]' />
                <h4 className='text-2xl font-normal '>Back to home</h4>
            </Link>
        </div>
            <h1 className='ml-[13vw] font-extrabold text-5xl text-[#173334] mt-8 mb-8'>Auguskart</h1>
            <p className='w-[73%] ml-[13.5%] font-thin pb-3'>
            Auguskart is a revolution in online shopping, offering a diverse array of nature's bounty right at your doorstep. Specializing in the freshest fruits, premium dry fruits, farm-fresh vegetables, and revitalizing fresh juices, Auguskart ensures that every product is handpicked for perfection. With a seamless ordering process, navigating through our user-friendly website is a breeze, making your shopping experience not only convenient but also enjoyable.
            </p>
            <p className='w-[73%] ml-[13.5%] font-thin pb-3'>
            What sets Auguskart apart is its commitment to quality and freshness. Our produce is sourced directly from trusted farms, guaranteeing the highest standards of taste and nutrition. From succulent seasonal fruits to a wide range of exquisitely packed dry fruits, we cater to every palate. And our selection of freshly squeezed juices provides a healthy and invigorating option for all.
            </p>
            <p className='w-[73%] ml-[13.5%] font-thin pb-3'>
            With Auguskart, your kitchen is just a click away from being replenished with the finest. Embrace a healthier lifestyle with the ease of online shopping, and let Auguskart be your partner in providing nature's best, delivered directly to your home. Elevate your shopping experience with Auguskart today!
            </p>
            <Carousel className='w-[80vw] ml-[11%] mt-10' itemClass='2'  responsive={respons} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
              <div className=' shadow-lg w-[100vw]'>
                  <Link to="/">
                  <img src={img1} alt="" className='w-[30vw] ' />
                  </Link>
              </div>
              <div className=' shadow-lg w-[100vw]'>
                   <Link to="/">
                  <img src={img2} alt="" className='w-[30vw] ' />
                  </Link>
              </div>
              <div className=' shadow-lg w-[100vw]'>
                  <Link to="/">
                  <img src={img3} alt="" className='w-[30vw] ' />
                  </Link>
              </div>
              <div className=' shadow-lg w-[100vw]'>
                  <Link to="/">
                  <img src={img4} alt="" className='w-[30vw] ' />
                  </Link>
              </div>  
            </Carousel>
        </div>
  )
}
