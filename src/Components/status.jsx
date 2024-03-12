import React from 'react'

const Status = ({type}) => {
  if (type)
  {
    return (
      <div className='flex'>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Online</span>
      </div>
    )
  }
  else
  {
    return (
      <div className='flex'>
              <span class="bg-red-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Offline</span>
      </div>
    )
  }
}

export default Status