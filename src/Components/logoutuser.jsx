import React, { useEffect } from 'react'
import { useAuth } from '../Utilities/AuthContext'

const LogoutUser = () => {
    const {Logout} = useAuth()
    useEffect(()=>{
        Logout()
    })
  return (
    <div>logoutUser</div>
  )
}

export default LogoutUser