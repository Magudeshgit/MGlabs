import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../Utilities/AuthContext'

const LogoutUser = () => {
    const {Logout} = useAuth()
    Logout()
    const navigate = useNavigate()
    useEffect(()=>{
      navigate('/') 
    },[])
  return (
    <div>Logging out</div>
  )
}

export default LogoutUser