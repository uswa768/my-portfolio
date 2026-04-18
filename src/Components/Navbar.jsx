import React from 'react'
import "tailwindcss"

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    <div className='container py-3 flex justify-center md:justify-between item-center'>
         <div className='text-2x1 font-bold hidden md:inline'>Uswa</div>
         <div className='space-x-6'>
            <a href="home"className='hover:text-grey-400'>Home</a>
            <a href="#about"className='hover:text-grey-400'>About</a>
            <a href="#Service"className='hover:text-grey-400'>Services</a>
            <a href="#projects"className='hover:text-grey-400'>Project</a>
            <a href="#Contact"className='hover:text-grey-400'>Contact Me</a>
         </div>
         <button className='bg-linear-to-r from-green-400 to-blue-500 text-white hidden md:inline
         transform trancition-transform duration-300 hover:scale-105 px-3 py-2 rounded-full'>Contact Me</button>
      </div>
    </nav>
  )
}

export default Navbar
