import React from 'react'

const Vmloading = () => {
  return (
    <div className="animate-pulse flex cursor-pointer p-4 rounded-md flex-col bg-gray-200">
  <div className="flex items-center justify-between">
    <div className='flex flex-col justify-between w-[50%]'>
      <div className='h-4 bg-gray-300 rounded w-[50%]'></div>
      <div className='h-4 bg-gray-300 rounded w-[50%] mt-1'></div>
    </div>
    <div className='h-4 rounded w-16'></div>
  </div>
  <div className="flex items-center flex-wrap justify-between mt-2 w-full">
    <div className='flex flex-col justify-between w-full'>
      <div className='flex h-4 bg-gray-300 rounded w-[50%]'>
        <div className="w-[100%] h-4 bg-gray-300 rounded"></div>
      </div>
      <div className='flex mt-2 h-4 bg-gray-300 rounded w-[50%]'>
        <div className="w-[100%] h-4 bg-gray-300 rounded"></div>
      </div>
      
      
    </div>
  </div>
</div>
  )
}

export default Vmloading