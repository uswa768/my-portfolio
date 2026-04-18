import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
import SocialIcon from './SocialIcon'
import FooterItem from './FooterItem'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2'>Uswa</h3>
                    <p className='text-gray-400'>Frontend developer based in Pakistan, Currently 
                    working on projects to enhance my skills.</p>
                </div>
                <div className='flex-1 w-full'>
                    <form className='flex items-center justify-center'>
                        <input 
                            type="email" 
                            placeholder='enter email' 
                            className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                            focus:outline-none focus:border-green-400' 
                        />
                        <button 
                            type="submit" 
                            className='bg-linear-to-r from-green-400 to-blue-500 text-white 
                            px-4 py-2 rounded-r-lg'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row
            justify-between items-center'>
                <p>&copy; {new Date().getFullYear()} Uswa. All Right Reserved</p>

                {/* Social Icons — Component use kiya! */}
                <div className='flex space-x-4 my-4 md:my-0'>
                    <SocialIcon href="" icon={<FaFacebook/>} />
                    <SocialIcon href="" icon={<FaLinkedin/>} />
                    <SocialIcon href="" icon={<FaTwitter/>} />
                    <SocialIcon href="https://github.com/uswa768" icon={<FaGithub/>} />
                </div>

                <div className='flex space-x-4'>
                    <FooterItem href="" label="Privacy" />
                    <FooterItem href="" label="Terms of Services" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer