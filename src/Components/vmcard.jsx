import React from 'react'

const Vmcard = () => {
  return (
    <div className="card flex p-4 bg-[#FBFBFB] shadow-md rounded-md flex-col">
        <div className="vminfo flex flex-col justify-between">
            <p className='font-medium text-base'>Windows lab</p>
            <p className='text-xs text-slate-400'>Instance-ID: i-0d9fffc559ba22742</p>
            <p className='text-xs text-slate-400'>Status check: passed</p>
        </div>

        <div className="vminfo flex flex-col justify-between mt-2">
            <p className='font-regular text-sm'>Status: Running</p>
            <p className='text-xs text-slate-400'>IP: 192.231.023.122</p>
            <p className='text-xs text-slate-400'>SSH: ssh -i "securitykey1.pem" ubuntu@ec2-51-21-29-231.eu-north</p>
        </div>
    </div>
  )
}

export default Vmcard
