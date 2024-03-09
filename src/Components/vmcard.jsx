import React, { useEffect, useState } from 'react'

import Status from '../Components/status'
import Vmbutton from '../Components/vmbuttons'
import Vmloading from '../Components/vmloading'



const Vmcard = ({callback, data}) => {
  console.log("vmcard", data)
  return (
    <div className="card flex cursor-pointer p-4 bg-[#FBFBFB] shadow-md rounded-md flex-col" onClick={()=>{callback(true)}}>
        <div className="vminfo flex items-center justify-between">
          <div className='flex flex-col justify-between'>
            <p className='font-medium text-lg font-inter'>{data.InstanceName}</p>
            <p className='text-xs  text-slate-500 font-inter'>Instance-ID: {data.InstanceID}</p>
          </div>
          {console.log("sdd", data.Status)}
          <Status type={data.Status}/>
        </div>

        <div className="vminfo flex items-center flex-wrap justify-between mt-2">
          <div className='flex flex-col justify-between'>
            <p className='text-xs flex items-center cursor-pointer '>
              IP address: -
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>  
            </p>
            <p className='text-xs underline flex items-center cursor-pointer'>
              Copy SSH
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
              </p>
          </div>
          <Vmbutton btnData={data.InstanceID}/>
        </div>
    </div>
  )
}

export default Vmcard
