import React from 'react'
import Button from '../Button'
import AboutItem from './AboutItem'
import { VscServerProcess } from 'react-icons/vsc'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
const About = () => {
  const data = [
    {
      icon: <SiHiveBlockchain/>,
      title: 'Reliable, tamper-proof network',
      desc: 'Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.'
    },
    {
      icon: <SiStrapi/>,
      title: 'Seamless connection to any API',
      desc: 'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'
    },
    {
      icon: <SiFsecure/>,
      title: 'Proven, ready-made solutions',
      desc: 'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'
    },
    {
      icon: <VscServerProcess/>,
      title: 'Secure off-chain computation',
      desc: 'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'
    },
  ]

  return (
    <section name='about' className='font-Kanit py-20'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            data.map((item, index) => (
            <AboutItem key={index} item={item} />
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