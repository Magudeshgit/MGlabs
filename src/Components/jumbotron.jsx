import React from 'react'

import jumbotron from '../Assets/Images/jumbotron.svg'

const Jumbotron = () => {
  return (
    <div className="parent relative flex items-center bg-[#8F6AF6] p-6 mt-4 rounded-md w-full">
        <div className="usergreet flex flex-col">
            <p className='font-poppins text-medium text-lg text-white'>Hey Magudesh!</p>
            <p className='text-white text-regular text-xs'>Let’s fire up those servers and get things going!</p>
        </div>
        
        <img src={jumbotron} className='absolute bottom-0 right-2 max-w-20 hidden md:block md:max-w-32 md:top-[-60px] sm:block' />
    </div>
  )
}

export default Jumbotron
