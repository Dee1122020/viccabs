import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <header className='bg-blue-950 text-gray-300 sticky top-0 z-10'>
        <NavBar />
    </header>
  )
}

export default Header