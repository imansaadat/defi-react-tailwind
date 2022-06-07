import React from 'react'
import Data from './Data'
import Button from '../Button'
const About = () => {
  return (
    <section name='about' className='font-Kanit py-20'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            Data.map((d, index) => (
              <div key={index} className='border p-6 rounded-lg group'>
                <d.icon className='text-6xl text-primaryBlue rounded-full p-1 duration-500 group-hover:bg-primaryBlue group-hover:text-black' />
                <h3 className='text-xl font-medium py-4'>{d.title}</h3>
                <p className='leading-7'>{d.desc}</p>
              </div>
            ))
          }
        </div>
        <div className='text-center mt-10'>
          <Button text='Use Defi' />
        </div>
      </div>
    </section>
  )
}

export default About