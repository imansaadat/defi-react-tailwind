import React from 'react'
import introVideo from '../assets/video.mp4'
import Button from '../components/Button'
const Intro = () => {
  return (
    <section name='platform' className='font-Kanit py-10'>
      <div className='flex flex-col justify-center items-center text-center max-w-[700px] mx-auto min-h-screen px-5'>
        <video className='w-full h-full md:object-cover absolute -z-10' autoPlay loop muted >
          <source src={introVideo} type="video/mp4" />
        </video>
        <h2 className='text-3xl lg:text-5xl'>Decentralized<br /><span className='text-primaryBlue'>Trading </span>Protocol</h2>
        <p className='py-6 text-md md:text-xl'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
        <div className='flex gap-5 mb-20'>
          <Button text='Use Defi' />
          <Button text='FAQ' />
        </div>
        <h3 className='font-bold md:text-xl'>Total Volume Secured:<span> $42,104,783,662.47</span></h3>
      </div>
    </section>
  )
}

export default Intro