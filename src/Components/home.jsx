import React, { useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../Utilities/firebase'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../Utilities/AuthContext'

const Home = () => {
  const {user} = useAuth()
  console.log(user)
  //const [user, loading] = useAuthState(auth)
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