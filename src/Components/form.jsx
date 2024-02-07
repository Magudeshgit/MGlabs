//Library Imports
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { account } from '../Utilities/appwriteconfig'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useAuth } from '../Utilities/AuthContext'


import {auth} from '../Utilities/firebase'
import Loader from '../Components/loader'
// import Loader from './loader'

//Static Assets
import logo from '../Assets/Images/logo2.png'
import google from '../Assets/Images/google.png'
import github from '../Assets/Images/github.png'

//Pre initializers
    
//Code
export const Signin = (props) => {
  const navigate = useNavigate()
  document.title = "MGLabs || Signin"
  const {user,setUser, Login, loading} = useAuth()
  //Google Auth Check
  const [OauthUser,Oauthloading] = useAuthState(auth)
  if (OauthUser) setUser(OauthUser)
  if (user) navigate("/home")
  
  //Form Handling
  const [formData, setformData] = useState({
    "mail": "", 
    "password": ""
})
    function handlingFunction(e){
          e.preventDefault()
          const loginOps = Login(setformData)
      }

    async function GoogleOauth(){
      const googleauthprovider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, googleauthprovider)
        if(result) setUser(result)
    }
  
    async function GithubOauth(){
      const githubauthprovider = 
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=750195eef141e27ece65'
    }
    return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-28 w-auto drop-shadow-2xl"
            src={logo}
            alt="Your Company"
          />
          <h2 className="text-center tracking-normal text-2xl font-bold leading-9 text-gray-900">
            MGLABS🧪
          </h2>
          <h2 className="text-center text-lg font-normal leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handlingFunction}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="mail"
                  type="email"
                  autoComplete="email"
                  required
                  className="block outline-none w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{setformData.mail = e.target.value}}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block outline-none w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{setformData.password = e.target.value}}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full gap-2 items-center justify-center rounded-md bg-[#5E5BF1] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading?<Loader/>:null}
                Sign in
              </button>
            </div>
            <div className="mt-6">
          <div className="w-full  mt-4 flex items-center justify-evenly">
            <div className="h-px w-1/4 bg-slate-300"></div>
            <p>Or continue with</p>
            <div className="h-px w-1/4 bg-slate-300"></div>
          </div>
          <div className="flex w-full items-center justify-evenly gap-4 mt-4">
              <div onClick={GoogleOauth} className="flex w-full px-2 py-3 items-center rounded-md justify-center gap-3 ring-offset-2 ring-0 border-solid border-2 border-slate-100 cursor-pointer">
                <img src={google} alt="googleimg" className='max-h-8'/>
                <p className="text-xl font-medium">Google</p>
              </div>
              <div onClick={GithubOauth} className="disabled flex w-full px-2 py-3 ring-offset-2 ring-0 items-center rounded-md justify-center gap-3 border-solid border-2 border-slate-100 cursor-pointer">
                <img src={github} alt="googleimg"  className='max-h-8'/>
                <p className="text-xl font-medium">Github</p>
              </div>
          </div>
          </div>  
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Signup here!
            </Link>
          </p>
        </div>
      </div>
  )
}


export const Signup = (props) => {
  document.title = "MGLabs || Create an account"
  const {user, Register, setUser, loading} = useAuth()
  const [formData, setformData] = useState({
    "username": "",
    "mail": "", 
    "password1": "",
    "password2": ""
})
  const [OauthUser, authloading] = useAuthState(auth)
  if (OauthUser) setUser(OauthUser)
  const [errors, setErrors] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    if (user) navigate("/home")
  })  

  async function GoogleOauth(){
    const googleauthprovider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, googleauthprovider)
      console.log(result)
  }

  async function GithubOauth(){
    const githubauthprovider = 
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=750195eef141e27ece65'
  }
  
  function Validator(e){
      e.preventDefault()
      if (setformData.password1 !== setformData.password2)
      {
        
        setErrors("Passwords do not match")
        console.log(errors)
      }
      else  if (setformData.password1.length<8)
      {
        setErrors("Password must be atleast 8 characters long")
        console.log(errors)
        console.log("stasd")
      }
      else
      {
        Register(setformData)
      }
  }

  return (
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-28 w-auto"
          src={logo}
          alt="Your Company"
        />
        <h2 className="text-center tracking-normal text-2xl font-bold leading-9 text-gray-900">
          MGLABS🧪
        </h2>
        <h2 className="text-center text-lg font-normal leading-9 tracking-tight text-gray-900">
          Create Your Account
        </h2>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" method="POST" onSubmit={Validator}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="mail"
                type="email"
                autoComplete="email"
                required
                className="block outline-none w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{setformData.mail = e.target.value}}
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Your name
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="name"
                type="text"
                required
                className="block outline-none w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{setformData.username = e.target.value}}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password1"
                type="password"
                autoComplete="current-password"
                required
                className="block outline-none w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{setformData.password1 = e.target.value}}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Re-Enter Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password2"
                type="password"
                autoComplete="current-password"
                required
                className="block outline-none w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{setformData.password2 = e.target.value}}
              />
            </div>
          </div>
          <p className='text-xs text-red-500'>{errors}</p>
          <p className="flex text-center"></p>
          <div className="mt-6">
          <button
              type="submit"
              className="flex mt-4 items-center gap-2 w-full justify-center rounded-md bg-[#5E5BF1] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {loading?<Loader/>:null}
              Sign up
          </button>
            </div>
          <div className="mt-6">
          <div className="w-full  mt-4 flex items-center justify-evenly">
            <div className="h-px w-1/4 bg-slate-300"></div>
            <p>Or continue with</p>
            <div className="h-px w-1/4 bg-slate-300"></div>
          </div>
          <div className="flex w-full items-center justify-evenly gap-4 mt-4">
              <div onClick={GoogleOauth} className="flex w-full px-2 py-3 items-center rounded-md justify-center gap-3 ring-offset-2 ring-0 border-solid border-2 border-slate-100 cursor-pointer">
                <img src={google} alt="googleimg" className='max-h-8'/>
                <p className="text-xl font-medium">Google</p>
              </div>
              <div onClick={GithubOauth} className="disabled flex w-full px-2 py-3 ring-offset-2 ring-0 items-center rounded-md justify-center gap-3 border-solid border-2 border-slate-100 cursor-pointer">
                <img src={github} alt="googleimg"  className='max-h-8'/>
                <p className="text-xl font-medium">Github</p>
              </div>
          </div>
          </div>  

          <div>
            
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Signin here!
          </Link>
        </p>
      </div>
    </div>
)
}