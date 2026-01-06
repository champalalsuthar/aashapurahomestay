'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

function Navbar() {
  const [nav, setNav] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 
      bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 
      backdrop-blur-md shadow-xl">

      <div className="flex justify-between items-center px-4 mx-auto lg:max-w-7xl md:px-8">
        
        {/* LOGO */}
        <Link href="/" className="py-4">
          <h1
            className="text-2xl md:text-3xl font-extrabold tracking-wide
            text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-700 to-blue-700
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]
            hover:scale-105 transition-transform duration-300"
          >
            Aashapura
          </h1>
          <h2
            className="text-sm md:text-base font-semibold tracking-widest
            text-gray-700 uppercase
            drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
          >
            Homestay
          </h2>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-8">
          {['Home', 'Rooms', 'About Us', 'Contact Us'].map((item, i) => (
            <li key={i}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                className="relative text-lg font-medium text-black
                after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
                after:bg-purple-700 hover:after:w-full
                after:transition-all after:duration-300
                hover:text-purple-700"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setNav(!nav)}
        >
          {nav ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute w-full bg-blue-100 shadow-2xl
        transition-all duration-300 ease-in-out
        ${nav ? 'top-full opacity-100' : '-top-[400px] opacity-0'}`}
      >
        <ul className="flex flex-col py-6 space-y-4 text-center">
          {['Home', 'Rooms', 'About Us', 'Contact Us'].map((item, i) => (
            <li key={i}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                onClick={() => setNav(false)}
                className="block text-xl font-semibold text-black
                hover:text-purple-700 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
