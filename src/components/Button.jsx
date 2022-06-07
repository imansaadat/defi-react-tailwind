import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='bg-gradient-to-l from-[#00d8ff] to-[#6a00ff] text-black px-6 py-2  text-lg rounded duration-300 hover:text-white'>{text}</button>
  )
}

export default Button