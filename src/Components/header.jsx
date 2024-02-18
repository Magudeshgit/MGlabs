import React from 'react'

import copy from '../Assets/Images/copy.svg'

const Header = ({data}) => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col">
            <p className='font-poppins font-semibold text-2xl'>{data.title}</p>
            <p className='font-poppins font-light text-sm text-slate-500 flex gap-1 cursor-pointer'>
              {data.secondary_text} 
            </p>
        </div>
    </div>
  )
}

export default Header