import React from 'react'
import {DryFruits} from '../../constantdata/data'
import "react-multi-carousel/lib/styles.css";
import heart from "../../../asset/heart-line-icon.svg"
import Carousel from "react-multi-carousel";
import respons from './cons'
import { Link } from 'react-router-dom';
export default function vegetable() {
  return (
    <div className=''>
            <div className=' flex justify-between ml-[13%] mr-[13%] mt-[2%]'>
            <h1 className='text-[#173334] text-4xl font-bold'>Dry Fruits</h1>
            <button className=' bg-[#173334] hover:bg-[#febd2f] hover:text-[#173334] text-white p-1 rounded-sm'><Link to="/dryfruit">View all</Link></button>
            </div>
            <Carousel className='w-[74%] ml-[13%] p-10' responsive={respons} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                {
                    DryFruits.map(item=>
                    <div className=' shadow-lg w-[20vw]'>
                        <a href="" >
                        <img src={heart} alt="" className='w-5 float-left ml-[90%] pt-3' />
                        </a>
                        <a href="">
                        <img src={item.url} alt="" className='w-[12vw] ml-[15%] ' />
                        <h1 className=" text-[#173334] text-xl font-thin text-center p-3">{item.name}</h1>
                        </a>
                    </div>
                 )
                }
            </Carousel>  
        </div>
    )
}
