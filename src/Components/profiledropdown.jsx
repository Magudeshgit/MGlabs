import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const ProfileCard = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} className='fixed top-20 right-6 z-20'>
<div id="dropdownDivider" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Logged In as</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
      <li>
        <Link to="/account" class="block px-4 py-2 hover:bg-gray-100">Account Settings</Link>
      </li>
      <li>
        <Link href="#" class="block px-4 py-2 hover:bg-gray-100">Support</Link>
      </li>
    </ul>
    <div class="py-2">
      <Link href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
    </div>
</div>
</motion.div>

  )
}

export default ProfileCard