import React, { useEffect } from 'react'
import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import {Signin, Signup} from './Components/form'
import NotFound from './Components/notfound'



const App = () => {
  const [notification, setnotification] = useState(false);
  function formprocess(dict) {
    console.log(dict.mail)
    setnotification(true)
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
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App