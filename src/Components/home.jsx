import React, { useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../Utilities/firebase'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../Utilities/AuthContext'

const Home = () => {
  document.title = "MGLabs || Home"
  const {user} = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    if (user===null) navigate('/signup');
  })
  
  
  return (
    <div className='flex w-full h-16 bg-slate-100 justify-between px-4 items-center drop-shadow-md'>
      Voila! Home Page
    </div>
  )
}

export default Home