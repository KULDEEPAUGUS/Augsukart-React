import React from 'react'
import { Link } from 'react-router-dom'
export default function footer() {
  return (
    <div className='bg-[#173334] font-Nuinto'>
        <div className='flex justify-evenly p-[5vw]'>
            <div>
                <h4 className='text-[#febd2f] text-3xl font-bold'>Auguskart</h4>
                <p className='w-[30vw] mt-4 text-white'>Fruits, vegetables and lots of greens.
                    Eat
                    fruits plenty, keep
                    your body
                    healthy.
                    We are the organization which provide the organic fruits and vegetable which are good for health and
                    have a motive of healthy India and we know you will definetly help us to fullfill this dream.
                </p>
            </div>
            <div >
                <h4 className='text-xl font-bold text-white' >Navigation</h4>
                <p className='text-white mt-4 flex flex-col gap-1'><a href="/search" className=' hover:text-[#febd2f]'>Search</a><br/>
                    <a className='hover:text-[#febd2f]' href="/search">Cart</a><br/>
                    <a className='hover:text-[#febd2f]' href="/search">Wishlist</a><br/>
                    <Link to="/login" className='hover:text-[#febd2f]'>Login</Link><br/>
                </p>
            </div>
            <div>
                <h4 className='text-xl font-bold text-white'>
                    About Us
                </h4>
                <p className='text-white mt-4 flex flex-col gap-1'>
                    <Link to="/Aboutus" className='hover:text-[#febd2f]'>About Us</Link><br/>
                    <Link to="/Aboutus" className='hover:text-[#febd2f]'>Contact Us</Link><br/>
                    <a href="" className='hover:text-[#febd2f]'>Faq</a><br/>
                    <a href="" className='hover:text-[#febd2f]'>Shipping & Deliveries</a><br/>
                    <a href="" className='hover:text-[#febd2f]'>Terms and Condition</a><br/>
                </p>
            </div>
            <div>
                <h4 className='text-xl font-bold text-white'>
                    All Categories
                </h4>
                <p className='text-white mt-4 flex flex-col gap-1'>
                    <Link to="/vegetable" className='hover:text-[#febd2f]'>vegetables</Link><br/>
                    <Link to="/Fruits" className='hover:text-[#febd2f]'>fruits</Link><br/>
                    <Link to="/accessories" className='hover:text-[#febd2f]'>Accessories</Link><br/>
                    <Link to="/cookies" className='hover:text-[#febd2f]'>Cookies</Link><br/>
                    <Link to="/Allcategories" className='hover:text-[#febd2f]'>Best Sellers</Link><br/>
                </p>
            </div>
        </div>
        <p className='text-white p-2 relative -top-8 text-center'>&copy; Auguskart , Created by <a href="https://portfoliokuldeep.netlify.app" target="_blank">
                Kuldeep Chotiya :)</a>
        </p>
    </div>
  )
}
