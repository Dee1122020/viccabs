"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavMenu() {
    const [menuIcon, setMenuIcon] = useState(false)
    const [isNavigating, setIsNavigating] = useState(false)
    const router = useRouter()

    useEffect(() => {
      if (menuIcon) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [menuIcon]);

    const handleSmallScreenNavigation = () =>{
        setMenuIcon(!menuIcon)
    }

    const handleNavigation = (href: string) => {
        setIsNavigating(true)
        setMenuIcon(false)
        router.push(href)
    }

  return (
    <header className='bg-blue-950 text-gray-400 w-full ease-in duration-500 top-0 left-0 z-10 relative'>
        <nav className='max-w-7xl mx-auto h-[68px] flex justify-between items-center p-4'>

            <div>
                <Link href='/'>
                    <span className='font-bold text-3xl md:2xl capitalize cursor-pointer hover:opacity-60 px-4 md:px-0'>Vic Cabs</span>
                </Link>
            </div>

            <ul className='hidden md:flex font-semibold text-xl'>
                
                <li>
                    <Link href='/' className='hover:opacity-60 mr-4 capitalize'>
                        Home
                    </Link>
                    <Link href='/pages/book' className='hover:opacity-60 mr-4 capitalize'>
                        Book
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

            {!menuIcon && (
                <div onClick={handleSmallScreenNavigation} className='flex md:hidden cursor-pointer hover:opacity-60'>
                    <AiOutlineMenu size = '25' className = 'text-white' />
                </div>
            )}

            {menuIcon && (
              <div 
                onClick={handleSmallScreenNavigation}
                className="md:hidden fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black/95 backdrop-blur-sm ease-in duration-300"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
              >
                {/* Close button - positioned at top right */}
                <button
                  onClick={handleSmallScreenNavigation}
                  className="absolute top-6 right-6 z-[60] cursor-pointer hover:opacity-60 transition-opacity"
                  aria-label="Close menu"
                >
                  <AiOutlineClose size={30} className='text-white' />
                </button>
                
                <div className='w-full' onClick={(e) => e.stopPropagation()}>
                    <ul className='font-bold text-2xl md:text-3xl capitalize text-center space-y-2'>

                        <li 
                          onClick={() => handleNavigation('/')} 
                          className='py-4 hover:opacity-60 cursor-pointer min-h-[60px] flex items-center justify-center transition-opacity'
                        >
                          <span className='w-full h-full flex items-center justify-center'>
                            Home
                            {isNavigating && <span className='ml-2 animate-pulse'>...</span>}
                          </span>
                        </li>
                        <li 
                          onClick={() => handleNavigation('/pages/book')} 
                          className='py-4 hover:opacity-60 cursor-pointer min-h-[60px] flex items-center justify-center transition-opacity'
                        >
                          <span className='w-full h-full flex items-center justify-center'>
                            Book
                            {isNavigating && <span className='ml-2 animate-pulse'>...</span>}
                          </span>
                        </li>
                        <li 
                          onClick={() => handleNavigation('/pages/about')} 
                          className='py-4 hover:opacity-60 cursor-pointer min-h-[60px] flex items-center justify-center transition-opacity'
                        >
                          <span className='w-full h-full flex items-center justify-center'>
                            About Us
                            {isNavigating && <span className='ml-2 animate-pulse'>...</span>}
                          </span>
                        </li>
                        <li 
                          onClick={() => handleNavigation('/pages/services')} 
                          className='py-4 hover:opacity-60 cursor-pointer min-h-[60px] flex items-center justify-center transition-opacity'
                        >
                          <span className='w-full h-full flex items-center justify-center'>
                            Services
                            {isNavigating && <span className='ml-2 animate-pulse'>...</span>}
                          </span>
                        </li>
                        <li 
                          onClick={() => handleNavigation('/pages/whyChoose')} 
                          className='py-4 hover:opacity-60 cursor-pointer min-h-[60px] flex items-center justify-center transition-opacity'
                        >
                          <span className='w-full h-full flex items-center justify-center'>
                            Why Choose Us
                            {isNavigating && <span className='ml-2 animate-pulse'>...</span>}
                          </span>
                        </li>
                        <li 
                          onClick={() => handleNavigation('/pages/contact')} 
                          className='py-4 hover:opacity-60 cursor-pointer min-h-[60px] flex items-center justify-center transition-opacity'
                        >
                          <span className='w-full h-full flex items-center justify-center'>
                            Contact Us
                            {isNavigating && <span className='ml-2 animate-pulse'>...</span>}
                          </span>
                        </li>
                    </ul>
                </div>

              </div>
            )}

        </nav>

    </header>
    
  )
}

export default NavMenu