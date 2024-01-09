"use client"
import React, {useState} from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavMenu() {
    const [menuIcon, setMenuIcon] = useState(false)

    const handleSmallScreenNavigation = () =>{
        setMenuIcon(!menuIcon)
    }

  return (
    <header className='bg-blue-950 text-gray-400 w-full ease-in duration-500 top-0 left-0 z-10 relative'>
        <nav className='max-w-7xl mx-auto h-[68px] flex justify-between items-center p-4'>

            <div>
                <Link href='/' onClick={handleSmallScreenNavigation}>
                    <span className='font-bold text-3xl md:2xl capitalize cursor-pointer hover:opacity-60'>Vic Cabs</span>
                </Link>
            </div>

            <ul className='hidden md:flex font-semibold text-xl'>
                
                <li>
                    <Link href='/' className='hover:opacity-60 mr-4 capitalize'>
                        Home
                    </Link>
                    <Link href='/pages/about' className='hover:opacity-60 mr-4 capitalize'>
                        About Us
                    </Link>
                    <Link href='/pages/services' className='hover:opacity-60 mr-4 capitalize'>
                        Services
                    </Link>
                    <Link href='/pages/whyChoose' className='hover:opacity-60 mr-4 capitalize'>
                        Why Choose Us
                    </Link>
                    <Link href='/pages/contact' className='hover:opacity-60 mr-4 capitalize'>
                        Contact Us
                    </Link>
                </li>

            </ul>

            <div onClick={handleSmallScreenNavigation} className='flex md:hidden cursor-pointer hover:opacity-60'>
                {menuIcon ? (<AiOutlineClose size = '25' className = 'text-gray-400' />) : (<AiOutlineMenu size = '25' className = 'text-gray-400' />)}
            </div>

            <div className= {menuIcon ? 'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300' : 'md:hidden absolute top-[68px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-gray-400 text-center ease-in duration-300'}>
                
                <div className='w-full top-0'>
                    <ul className='font-bold text-2xl capitalize text-center'>

                        <li onClick={handleSmallScreenNavigation} className='py-5 hover:opacity-60 cursor-pointer'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className='py-5 hover:opacity-60 cursor-pointer'>
                            <Link href='/pages/about'>about us</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className='py-5 hover:opacity-60 cursor-pointer'>
                            <Link href='/pages/services'>services</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className='py-5 hover:opacity-60 cursor-pointer'>
                            <Link href='/pages/whyChoose'>why Choose us</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className='py-5 hover:opacity-60 cursor-pointer'>
                            <Link href='/pages/contact'>contact us</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>

    </header>
    
  )
}

export default NavMenu