import React from 'react'

import copy from '../Assets/Images/copy.svg'

const Header = () => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col">
            <p className='font-poppins font-semibold text-2xl'>AWS Management</p>
            <p className='font-poppins font-light text-sm text-slate-500 flex gap-1 cursor-pointer'>
              Client ID: 750195eef141e27ece65 
              <img src={copy}/>
            </p>
        </div>
    </div>
  )
}

export default Header