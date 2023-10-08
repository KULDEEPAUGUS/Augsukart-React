import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div className='m-0 p-0 font-Nuinto'>
      <header className='font-nuinto bg-[#173334] font-[400] text-white pl-[10vw] pr-[10vw]'>
        <nav className=' flex justify-evenly items-center -mt-[3vh] h-[17vh] relative '>
            <h1 className=' text-[#febd2f] font-[700] text-3xl hover:scale-[1.05] '>Auguskart</h1>
            <form className=' shadow-2xl text-black border-slate-400 border-[0.1vw] flex'>
                <button className='p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="#febd2f" class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button><input type="search" placeholder="Search here.." id="ProgrammingLang" className=' outline-none bg-[#173334] text-white m-1'/>
                        <datalist id="ProgrammingLang">
                            <option value="Objective C">Objective C</option>
                            <option value="C++">C++</option>
                            <option value="C#">C#</option>
                            <option value="Cobol">Cobol</option>
                            <option value="Go">Go</option>
                            <option value="Java">Java</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="PHP">PHP</option>
                            <option value="Pascal">Pascal</option>
                            <option value="Perl">Perl</option>
                            <option value="R">R</option>
                            <option value="Swift">Swift</option>
                        </datalist>
                    <select className=' bg-[#173334] text-white' name="selection" id="select">
                    <option value="Vegetable">Vegetables</option>
                    <option value="All">Fruits</option>
                    <option value="All">Dry Fruits</option>
                    <option value="All">Special Product</option>
                    <option value="All">Accessories</option>
                </select>
            </form>
             <p className=' hover:scale-[1.05]'><a href="https://time.is/">Monday-Friday
                    <br/><span className='text-[#febd2f]'>8:00AM-9:00PM</span></a></p>
            <p className=' hover:scale-[1.05]' class="contact"><a 
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new">Support 24/7
                    <br/><span className='text-[#febd2f]' >+9179820XXXX</span></a></p>
            <button title='Login' className=' hover:shadow-sm rounded-[50%] hover:shadow-[#febd2f]'>
                <Link to="/login" className='' /*style="background-color: #173334;border: none;"*/>
                    <svg className=' hover:scale-[1.1] hover:shadow-xl rounded-[50%] hover:shadow-[#febd2f]' xmlns="http://www.w3.org/2000/svg" width="1.5vw"
                        height="1.5vw" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#febd2f"></path>
                        <path  fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            fill="#febd2f"></path>
                    </svg>
                </Link>
            </button>
            <button>
                <a href="/wishlist.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw"
                        height="1.5vw" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                            fill="#febd2f"></path>
                    </svg>
                </a>
            </button>
            <div className='flex text-normal gap-2'>
                <span className=' text-[1vw]'>
                    <p>My cart:<br/>0.00 INR</p>
                </span>
                <button className=' hover:scale-[1.1]'>
                    <a href="/cart.html" >
                        <svg  xmlns="http://www.w3.org/2000/svg" width="1.5vw"
                            height="1.5vw" fill="#febd2f" class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </a>
                </button>
            </div>
        </nav>
        <div className='flex justify-evenly pb-4'>
            <div className=' absolute left-[13vw] top-[15vh] bg-[#173334] p-5 rounded-lg'>
                <ul className='flex flex-col gap-1'>
                    <li className=' bg-[#febd2f] rounded-lg text-black pl-2 pr-2'><Link to="/Allcategories" >All Categories </Link></li>
                    <li className='hover:text-black hover:bg-[#febd2f] hover:rounded-lg pl-2 pr-2'><Link to="/Vegetable">Vegetable <span className=' float-right ml-4 hover:text-[#febd2f]'>&rarr;</span> </Link></li>
                    <li className='hover:text-black hover:bg-[#febd2f] hover:rounded-lg pl-2 pr-2'><Link to="/Fruits">Fruits <span className=' float-right ml-4 hover:text-[#febd2f]'>&rarr;</span></Link></li>
                    <li className='hover:text-black hover:bg-[#febd2f] hover:rounded-lg pl-2 pr-2'><Link to="/dryfruit">Dry Fruits <span className=' float-right ml-4 hover:text-[#febd2f]'>&rarr;</span></Link></li>
                    <li className='hover:text-black hover:bg-[#febd2f] hover:rounded-lg pl-2 pr-2'><Link to="/cookies">Cookies <span className=' float-right ml-4 hover:text-[#febd2f]'>&rarr;</span></Link></li>
                    <li className='hover:text-black hover:bg-[#febd2f] hover:rounded-lg pl-2 pr-2'><Link to="/juice">Fruit Juice <span className=' float-right ml-4 hover:text-[#febd2f]'>&rarr;</span></Link></li>
                    <li className='hover:text-black hover:bg-[#febd2f] hover:rounded-lg pl-2 pr-2'><Link to="/Accessories">Home Accessories <span className=' float-right ml-4 hover:text-[#febd2f]'>&rarr;</span></Link></li>
                </ul>
            </div>
            <div className=' ml-[20vw] text-[#febd2f]'>
                -20% <span className='text-white'>off for first order with &#8377;300 in the
                    cart. <Link to="/Allcategories" className=' hover:text-[#febd2f]'>Show More</Link></span>
            </div>
            <div>
                <ul className='flex justify-evenly gap-2 '>
                    <li><a href="Faq" className='hover:text-[#febd2f]'>Faq</a></li>
                    <li><a href="Suppor" className='hover:text-[#febd2f]'>Support</a></li>
                    <li><Link to="/Aboutus" href="Cs" className='hover:text-[#febd2f]'>ContactUs</Link></li>
                    <li><Link to="/Aboutus" className='hover:text-[#febd2f]'>AboutUs</Link></li>
                </ul>
            </div>
        </div> 
    </header>
    </div>
  )
}
