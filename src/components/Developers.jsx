import React from 'react'
import Developer from '../assets/terminal.png'
const Developers = () => {
  return (
    <section name='developers' className='font-Kanit py-20'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <div className=' grid md:grid-cols-3 items-center gap-5'>
          <div className='md:col-span-2 md:pr-20 mb-8'>
            <h2 className='font-bold text-2xl md:text-3xl mb-4'>Superpowers for DEFI developers.
            </h2>
            <p className='md:text-lg'>Checkout the <span className='text-primaryBlue'>documentation</span> , the <span className='text-primaryBlue'>quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
          </div>
          <div>
            <img src={Developer} alt="developers" className='w-full shadow-developer' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Developers