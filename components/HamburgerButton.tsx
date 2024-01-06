import React from 'react'

function HamburgerButton() {
  return (
    <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer relative w-8 h-8">
        <div
            className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"
        ></div>
    </button>
  )
}

export default HamburgerButton