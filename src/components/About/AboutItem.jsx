import React from 'react'
const AboutItem = ({item:{title,desc,icon}}) => {
  return (
    <div className='border p-6 rounded-lg group'>
      <div className='inline-block text-5xl p-2 text-primaryBlue rounded-full duration-500 group-hover:bg-primaryBlue group-hover:text-black'>
         {icon}
      </div>
      <h3 className='text-xl font-medium py-4'>{title}</h3>
      <p className='leading-7'>{desc}</p>
    </div>
  )
}




export default AboutItem