import React from 'react'

const FooterData = () => {

  const FooterLinks = [
    {
      title: 'Products',
      names:['App','Analytics','Token Lists','Defi']
    },
    {
      title: 'Developers',
      names:['App','Analytics','Token Lists','Defi']
    },
    {
      title: 'Governance',
      names:['App','Analytics','Token Lists','Defi']
    },
    {
      title: 'Community',
      names:['App','Analytics','Token Lists','Defi']
    },
    {
      title: 'About',
      names:['App','Analytics','Token Lists','Defi']
    }
  ]

  return (
    <>
      {
        FooterLinks.map((link, index) => (
          <div key={index}>
            <h4 className='font-semibold text-xl underline underline-offset-[5px] decoration-[#00d8ff]'>{link.title}</h4>
            <ul>
              {
              link.names.map((name,index)=>(
                <li className='px-0' key={index}>{name}</li>
              ))
              }
            </ul>
          </div>
        ))
      }
    </>
  )
}

export default FooterData