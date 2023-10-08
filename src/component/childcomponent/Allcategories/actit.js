import React from 'react'
import back from "../../../asset/back.svg"
import { data } from '../../constantdata/data'
import Fruit from "./fruits"
import Vegetable from './vegetable'
import Accessories from './accessories'
import Freshcookies from './freshcookies'
import Dryfruit from './dryfruit'
import Fruitjuice from './fruitjuice'
import { Link } from 'react-router-dom'
export default function actit() {
  return (
    <>
    <div>
        <Link to="/" className='flex items-center ml-[13vw] mt-[5vh]' href=''>
            <img src={back} alt="404 Error" className=' w-[5vw]' />
            <h4 className='text-xl font-semibold'>Back to Shop</h4>
        </Link>
        <h1 className='ml-[13vw] font-extrabold text-5xl text-[#173334] mt-5 mb-3'>All Categories</h1>
        <div className=' flex justify-center gap-[3vw] mt-8 mb-8'>
            {
                data.map(dati =>(
                    <div className=' shadow-xl hover:bg-slate-50 hover:gap-[0.2vh] flex flex-col items-center gap-[0.1vh] p-3'>
                        <Link to={dati.rout}><img src={dati.url} alt="" className='w-[8vw]' /></Link>
                        <Link to={dati.rout} className=' w-[100%] font-thin text-center bg-white text-[#173334] text-xl'>{dati.text}</Link>
                    </div>
                ))
            }
        </div>
        <p className='w-[70%] ml-[13%] font-thin'>Fruits, vegetables and lots of greens. Eat fruits plenty, keep your body healthy. We are the organization which provide the organic fruits and vegetable which are good for health and have a motive of healthy India and we know you will definetly help us to fullfill this dream.</p>
        <Vegetable/>
        <Fruit/>
        <Dryfruit/>
        <Fruitjuice/>
        <Accessories/>
        <Freshcookies/>
    </div>
    </>
)}
