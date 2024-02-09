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

const Home = () => {
  //document.title = "MGLabs || Home"
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
          <div className="lefttab max-w-xl">
            <Jumbotron/>
            <p className='font-poppins text-lg text-slate-700 font-semibold mt-6'>Virtual Machines</p>

            <Vmcard/>
          </div>
        </div>
    </section>
  )
}

export default Home