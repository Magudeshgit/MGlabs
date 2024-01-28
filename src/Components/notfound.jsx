import React from 'react'
import logo from '../logo2.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main class="grid min-h-full place-items-center bg-white px-6 py-16 sm:py-16 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-28 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="text-center tracking-normal text-2xl font-bold leading-9 text-gray-900">
            MGLABS🧪
          </h2>
        </div>
  <div class="text-center">
    <p class="text-base font-semibold text-indigo-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-8 flex items-center justify-center gap-x-6">
      <Link to="/" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
    </div>
  </div>
</main>
  )
}

export default NotFound