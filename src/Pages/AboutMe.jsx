import React from 'react'
import AboutImage from '../assets/pic.png'

const AboutMe = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt='' className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                        <p className='text-lg mb-8'> I am a BSCS student with a strong interest in web development.
                            Currently, I am learning and working with the MERN stack (MongoDB, Express.js, React, Node.js).
                            I enjoy building responsive and user-friendly web applications and continuously improving my skills.
                            I am looking for opportunities to gain real-world experience and grow as a developer.
                            </p>
                        <div className='space-y-4'>
                            <div className='flex-item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-linear-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-x-105 w-10/12"></div>
                                </div> 
                            </div>

                            <div className='flex-item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Javascript</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-linear-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-x-105 w-9/12"></div>
                                </div> 
                            </div>

                            <div className='flex-item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>XML , Java</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-linear-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-x-105 w-11/12"></div>
                                </div> 
                            </div>

                            <div className='flex-item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>React Vite Concepts</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-linear-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-x-105 w-6/12"></div>
                                </div> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
