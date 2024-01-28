import React, { useEffect } from 'react'
import { useState } from 'react'
import { SignupUser } from './auth'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import {Signin, Signup} from './Components/form'
import NotFound from './Components/notfound'

var isAuthenticated = false
console.log(isAuthenticated)


const App = () => {
  async function formprocess(dict) {
    console.log(dict)
    const user = await SignupUser(dict)
    if (user){
      isAuthenticated = true
      console.log('login', isAuthenticated)
    }
    console.log(user)
  }

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={
        <div>
          <Link to='/signup'>
           <button
              type="submit"
              className="flex mt-4 w-full justify-center rounded-md bg-[#5E5BF1] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
            </Link>
            <Link to='/signin'>
           <button
              type="submit"
              className="flex mt-4 w-full justify-center rounded-md bg-[#5E5BF1] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            </Link>

        </div>
        }/>
        <Route path='/signin' element={<Signin response={formprocess}/>}/>
        <Route path='/signup' element={<Signup response={formprocess}/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App