import React from 'react'

const Vmloading = () => {
  return (
    <div className="animate-pulse flex cursor-pointer p-4 rounded-md flex-col bg-gray-200">
  <div className="flex items-center justify-between">
    <div className='flex flex-col justify-between'>
      <div className='h-4 bg-gray-300 rounded w-1/4'></div>
      <div className='h-4 bg-gray-300 rounded w-3/4 mt-1'></div>
    </div>
    <div className='h-4 bg-green-300 rounded w-16'></div>
  </div>
  <div className="flex items-center flex-wrap justify-between mt-2">
    <div className='flex flex-col justify-between'>
      <div className='flex h-4 bg-gray-300 rounded w-3/4'>
        <div className="w-4 h-4 bg-gray-600 rounded"></div>
      </div>
      <div className='flex h-4 bg-gray-300 rounded w-1/2 mt-1'>
        <div className="w-4 h-4 bg-gray-600 rounded"></div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Vmloading