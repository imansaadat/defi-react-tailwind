import React from 'react'
import FooterData from './FooterData'
const Footer = () => {
  return (
    <footer className='font-Kanit pt-20'>
    <div className='max-w-[1200px] mx-auto px-5'>
      <div className='grid lg:grid-cols-5 gap-5'>
         <FooterData />
      </div>
      <div className='text-center py-4 border-t border-gray-700 mt-6'>
          <p>Developed by <span className='text-primaryBlue'>Eslam Saadat (Iman)</span></p>
      </div>
    </div>
</footer>
  )
}

export default Footer