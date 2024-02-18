import React from 'react'
import vscode from '../Assets/Images/vscode.svg'
import i from '../Assets/Images/i.svg'
import server from '../Assets/Images/server.svg'
import ssh from '../Assets/Images/ssh.svg'
import Vmbutton from './vmbuttons'

const Labcard = () => {
  return (
    <div className='p-6 mt-2 bg-[#FBFBFB] flex gap-4 shadow-md flex-wrap max-w-[900px] rounded-md'>
        <div className="p-6 rounded-full shadow-lg flex items-center justify-center max-w-[80%]">
            <img src={vscode} className=''/>
        </div>
        <div className="content flex flex-col justify-center">
            <div className="header"><p className='font-poppins text-lg font-semibold'>Visual Studio Code</p></div>
            <p className='flex gap-2 text-slate-500'>
                <img src={ssh}/>
                SSH: ssh -i "securitykey1.pem" ubuntu@ec2-51-21-29-231
            </p>
            <p className='flex gap-2 text-slate-500'>
                <img src={server}/>
                Associated Instance: Windows lab
            </p>
            <p className='flex gap-2 text-slate-500 items-center'>
                <img src={i}/>
                Status: Online
                <span className='w-2 h-2 bg-green-400 rounded-full'></span>
            </p>
            <div className="cta">
                <Vmbutton/>
            </div>
        </div>
    </div>
  )
}

export default Labcard
