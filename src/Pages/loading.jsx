import React from 'react'
import logo from '../Assets/Images/logo001.svg'

import {motion} from 'framer-motion'

const Loading = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} animate={{opacity: 1}} transition={{durations: 1}}
    className='w-screen h-screen flex-col bg-slate-900 flex justify-center items-center'>
        <div>
            <img src={logo} alt="Logo" className='drop-shadow-2xl' />
            <div className="relative h-[3px] overflow-hidden rounded-full bg-gray-200">
            <div className="absolute transition-opacity h-full animate-width rounded-full bg-[#5E5BF1] w-[200px] flex justify-center">
            </div>
            </div>
        </div>
        <div className='mt-5'>
            <p className='font-proDisplay text-slate-600'>A Product of Magudesh K</p>
        </div>
    </motion.div>
  )
}
export default Loading

/* HTML: <div class="loader"></div> */
//   @keyframes l16 {
//     0%   {background-position:-150% 0,-150% 0}
//     66%  {background-position: 250% 0,-150% 0}
//     100% {background-position: 250% 0, 250% 0}
//   }