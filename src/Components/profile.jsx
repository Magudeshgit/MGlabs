import React from 'react'

import profile from '../Assets/Images/profile.jpg'

const Profile = () => {
  return (
    <div className='gap-1 items-center hidden lg:flex md:flex'>
        <img src={profile} className="max-w-8 rounded-full" alt="" />
        <p className='font-poppins font-medium hover:underline text-neutral-800 cursor-pointer'>Account</p>
    </div>
  )
}

export default Profile