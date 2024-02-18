import React from 'react'
import mongodb from '../Assets/Images/mongodb.svg'
import mysql from '../Assets/Images/mysql.png'
import i from '../Assets/Images/i.svg'
import server from '../Assets/Images/server.svg'
import port from '../Assets/Images/port.svg'
import ip from '../Assets/Images/hotspot.svg'

const Dbcard = () => {
  return (
    <div className='py-4 px-6 mt-2 bg-[#FBFBFB] flex flex-col max-w-[400px] gap-2 shadow-md rounded-md'>
        <div className="flex gap-4 items-center justify-between">
            <div className="img w-[100px] h-[100px] rounded-full shadow-lg flex items-center justify-center p-2">
                <img src={mongodb} alt="image" className='w-[100%]'/>
            </div>
            <div>
                <p className='font-poppins font-semibold text-lg'>MongoDB</p>
                <p className='font-poppins text-slate-500 text-xs'>large scale relational database system</p>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <ul className='flex flex-col w-full text-slate-500'>
                <li className='flex items-center justify-between'>
                    <li className='flex'><img src={ip} alt="ip" />IP address</li>
                    <li>192.168.0.1</li>
                </li>

                <li className='flex items-center justify-between'>
                    <li className='flex'><img src={port} alt="ip" />Service port</li>
                    <li>3600</li>
                </li>

                <li className='flex items-center justify-between'>
                    <li className='flex'><img src={server} alt="ip" />Instance</li>
                    <li>Macintosh</li>
                </li>

                <li className='flex items-center justify-between'>
                    <li className='flex'><img src={i} alt="ip" />Status</li>
                    <li>Online</li>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Dbcard