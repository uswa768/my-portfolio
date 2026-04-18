import React from 'react'

const SocialIcon = ({ href, icon }) => {
  return (
    <a href={href} className='text-gray-400 hover:text-white'>
      {icon}
    </a>
  )
}

export default SocialIcon