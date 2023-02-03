import React from 'react'

const FooterItem = ({item:{title,names}}) => {

  return (
     <div>
         <h4 className='font-semibold text-xl underline underline-offset-[5px] decoration-[#00d8ff]'>{title}</h4>
         <ul>
          {
           names.map((name,index)=>(
             <li key={index} className='px-0'>{name}</li>
           ))
          }
         </ul>
     </div>
  )
}

export default FooterItem