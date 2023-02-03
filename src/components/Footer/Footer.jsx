import React from 'react'
import FooterItem from './FooterItem'
const Footer = () => {
  const FooterLinks = [
    {
      title: 'Products',
      names: ['App', 'Analytics', 'Token Lists', 'Defi']
    },
    {
      title: 'Developers',
      names: ['App', 'Analytics', 'Token Lists', 'Defi']
    },
    {
      title: 'Governance',
      names: ['App', 'Analytics', 'Token Lists', 'Defi']
    },
    {
      title: 'Community',
      names: ['App', 'Analytics', 'Token Lists', 'Defi']
    },
    {
      title: 'About',
      names: ['App', 'Analytics', 'Token Lists', 'Defi']
    }
  ]
  
  return (
    <footer className='font-Kanit pt-20'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <div className='grid lg:grid-cols-5 gap-5'>
          {
            FooterLinks.map((item, index) => {
              return (
                  <FooterItem key={index} item={item} />
              )
            })
          }
        </div>
        <div className='text-center py-4 border-t border-gray-700 mt-6'>
          <p>Developed by <span className='text-primaryBlue'>Eslam Saadat (Iman)</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer