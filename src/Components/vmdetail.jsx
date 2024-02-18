import React from 'react'
import Header from './header'
import {motion, AnimatePresence} from 'framer-motion'

import cross from '../Assets/Images/cross.svg'
import i from '../Assets/Images/i.svg'
import Status from './status'
import Vmbutton from './vmbuttons'

import ip from '../Assets/Images/hotspot.svg'
import ssh from '../Assets/Images/ssh.svg'
import port from '../Assets/Images/port.svg'
import server from '../Assets/Images/server.svg'
import processor from '../Assets/Images/processor.svg'
import Monitoring from './monitoring'

const Vmdetail = ({current}) => {
    if (current===false)
    {
      return <></>
    }
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>
    <section className='h-screen w-screen backdrop-blur-sm p-4 shadow-md flex justify-center items-center absolute left-0 top-0 z-10'>
        <div className='w-[900px] max-h-[550px] overflow-y-scroll p-6 bg-slate-100 rounded-md flex flex-col items-start justify-between'>
            <div className='flex w-full justify-between items-start'>
                <Header data={{title: 'Macintosh', secondary_text: 'Instance ID: 928383h3829'}}/>
                <div className='flex items-center justify-center cursor-pointer' onClick={()=>{current(false)}}>
                    <img src={cross} alt="cross" />
                </div>
            </div>
            
            <div className='seperator w-[100%] flex items-center gap-4 justify-between flex-wrap'>
            <div>
            <div className="midcontemt mt-4 flex flex-col gap-2">
                <p className='flex items-center text-xs text-slate-500'>
                    <img src={i} alt="info" />
                    Status: 2/2 Passed
                </p>
                <Status/>
                <Vmbutton/>
            </div>

            <div className='generaldetails max-w-[100%]'>
            <ul className='flex flex-col w-full text-slate-500 text-sm mt-4 gap-1'>
                <li className='flex items-center justify-between gap-12'>
                    <li className='flex'><img src={ip} alt="ip" />IP address</li>
                    <li>192.168.0.1</li>
                </li>

                <li className='flex items-center justify-between gap-12'>
                    <li className='flex'><img src={port} alt="ip" />Service port</li>
                    <li>3600</li>
                </li>

                <li className='flex items-center justify-between gap-12'>
                    <li className='flex'><img src={server} alt="ip" />Instance</li>
                    <li>Macintosh</li>
                </li>

                <li className='flex items-center justify-between gap-12'>
                    <li className='flex'><img src={i} alt="ip" />Status</li>
                    <li>Online</li>
                </li>

            </ul>
            </div>
            <div className="h-px w-full mt-4 mb-4 bg-slate-300"></div>
            <div className='configdetails'>
            <p className='font-poppins font-medium text-lg flex'>
                <img src={processor} alt="server" />
                System Configuration
            </p>
            <ul className='flex flex-col w-full text-slate-500 mt-4'>
                <li className='flex items-center justify-between gap-12'>
                    <li className='flex'>CPU</li>
                    <li>t1.v2 core</li>
                </li>

                <li className='flex items-center justify-between gap-12'>
                    <li className='flex'>RAM</li>
                    <li>1GB</li>
                </li>

                <li className='flex items-center justify-between gap-12'>
                    <li className='flex'>Storage</li>
                    <li>4GB</li>
                </li>

                <li className='flex items-center justify-between gap-12'>
                    <li className='flex'>Region</li>
                    <li>Ap-south-01</li>
                </li>

            </ul>
            </div>
            </div>
            <div className="monitor lg:w-[50%] w-80%">
                <Monitoring/>
            </div>
            </div>
        </div>
    </section>
    </motion.div>
  )
}

export default Vmdetail