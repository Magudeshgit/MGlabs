import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../Utilities/AuthContext'

const Joke = () => {
    const navigate = useNavigate()
    const {user, logoutUser} = useAuth()

    const logoutClick = () => {
        navigate('/login')
    }
  return (
    <div>Joke</div>
  )
}

export default Joke