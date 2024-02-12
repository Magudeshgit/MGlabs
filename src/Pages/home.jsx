import React, { useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../Utilities/firebase'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../Utilities/AuthContext'

import Navbar from '../Components/nav'
import Header from '../Components/header'
import Profile from '../Components/profile'
import Jumbotron from '../Components/jumbotron'
import Vmcard from '../Components/vmcard'
import Monitoring from '../Components/monitoring'

const Home = () => {
  document.title = "MGLabs || Home"
  const {user} = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    if (user===null) navigate('/signup');
  })
  
  
  return (
    <section className='w-full h-screen px-6 bg-[#F9F9F9]'>
        <Navbar/>
        <div className="parent lg:ml-20 py-6 flex flex-col">
          <div className="flex justify-between">
            <Header/>
            <Profile/>
          </div>
          <div className='tabparent flex justify-between items-center'>
          <div className="lefttab w-3/5">
            <Jumbotron/>
            <p className='font-poppins text-lg text-slate-700 font-semibold mt-6'>Virtual Machines</p>
            <div className='flex flex-col gap-4'>
            <Vmcard/>
            </div>
          </div>
          <div className='rightab w-1/3 h-4/5'>
            <Monitoring/>
          </div>
          </div>

        </div>
    </section>
  )
}

export default Home