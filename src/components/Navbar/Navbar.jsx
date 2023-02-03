import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'
import Button from '../Button';
const Navbar = () => {

   const [nav, setNav] = useState(false)
   const [bg, setBg] = useState(false)

   const handleNav = () => {
      setNav(!nav)
   }

   window.addEventListener("scroll",()=>{
      if(window.scrollY){
         setBg(true)
      }else{
         setBg(false)
      }
   })

   return (
      <header className={`fixed w-full left-0 top-0 font-Kanit z-10 ${bg ? 'bg-black':'backdrop-blur-[6px]'}`}>
         <nav className='flex justify-between items-center max-w-[1200px] mx-auto px-5 h-20'>
            <Link to="platform" smooth={true} duration={500} className='z-10 cursor-pointer'>
               <h1 className='text-primaryBlue text-5xl font-bold'>Defi</h1>
            </Link>
            <div className='hidden md:flex'>
               <ul className='flex mr-6'>
                  <NavLinks />
               </ul>
               <Button text='Use Defi' />
            </div>
            {/* Hamburger icon */}
            <div className="flex md:hidden cursor-pointer z-10" onClick={handleNav}>
               {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile menu */}
            <div className={`flex flex-col justify-center items-center md:hidden w-full absolute top-0 duration-500 h-screen bg-black opacity-95 ${nav ? 'left-0' : 'left-[-100%]'}`}>
               <ul className='flex flex-col items-center'>
                  <NavLinks py='py-4' onClick={handleNav} />
               </ul>
               <Button text='Use Defi' />
            </div>
         </nav>
      </header>
   )
}

export default Navbar