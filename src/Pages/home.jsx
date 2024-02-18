import React, { useEffect, useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../Utilities/firebase'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../Utilities/AuthContext'
import {motion} from 'framer-motion'

import Navbar from '../Components/nav'
import Header from '../Components/header'
import Profile from '../Components/profile'
import Jumbotron from '../Components/jumbotron'
import Vmcard from '../Components/vmcard'
import Monitoring from '../Components/monitoring'
import Vmdetail from '../Components/vmdetail'

//API Endpoints


const Home = () => {
  document.title = "MGLabs || Home"
  const {user} = useAuth()
  const navigate = useNavigate()
  const [Vmpopup, setVmpopup] = useState(false)

  // function popupfunction(){
  //   setVmpopup(true)
  // }
  useEffect(()=>{
    if (user===null) navigate('/signup');
  })
  

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{durations: 1}}>
    <section className='w-full h-screen px-6 bg-[#F9F9F9]'>
        <Navbar/>
        <div className="parent lg:ml-20 py-6 flex flex-col">
          <div className="flex justify-between">
            <Header
              data={{title:'AWS Management',secondary_text:'Client ID: 750195eef141e27ece65'}}
            />
            <Profile/>
          </div>
          <div className='tabparent flex lg:flex-nowrap flex-wrap justify-between items-start gap-4'>
          <div className="lefttab lg:min-w-[60%] w-full">
            <Jumbotron/>
            <p className='font-poppins text-lg text-slate-700 font-semibold mt-6'>Virtual Machines</p>
            <div className='flex flex-col gap-4'>
            <Vmcard callback={setVmpopup} />
            {Vmpopup?<Vmdetail current={setVmpopup}/>:<></>}
            </div>
          </div>
          <div className='rightab lg:min-w-1/3 w-full h-4/5'>
            <Monitoring/>
          </div>
          </div>

        </div>
    </section>
    </motion.div>
  )
}

export default Home