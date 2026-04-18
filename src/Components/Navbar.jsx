import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-3 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Uswa</div>
        <div className='space-x-6'>
          <Link to="/" className='hover:text-green-400'>Home</Link>
          <Link to="/about" className='hover:text-green-400'>About</Link>
          <Link to="/services" className='hover:text-green-400'>Services</Link>
          <Link to="/projects" className='hover:text-green-400'>Projects</Link>
          <Link to="/contact" className='hover:text-green-400'>Contact</Link>
        </div>
        <Link to="/contact">
          <button className='bg-linear-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-3 py-2 rounded-full'>
            Contact Me
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar