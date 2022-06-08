import React from 'react'
import Button from './Button'

const Community = () => {
  return (
    <section name='community' className='font-Kanit py-20 bg-community bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/75'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-bold text-center text-2xl md:text-5xl'>Join Our DeFi Community</h2>
          <form>
            <div className='flex justify-center gap-4 py-5'>
              <input type='email' name='email' className='rounded px-3 text-black outline-none' placeholder='Enter your email' />
              <Button text='Sign Up' />
            </div>
            <div className='flex items-center gap-2'>
              <input type='checkbox' id='checkbox' className='cursor-pointer' />
              <label htmlFor='checkbox' className='cursor-pointer'>
                Yes, I agree to receive email communications from DeFi.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Community