import React from 'react'

const FooterItem = ({href , label }) => {
  return (
      <a href={href} className='text-gray-400 hover:text-white'>
        {label}
      </a>
  )
}

export default FooterItem