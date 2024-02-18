import React, { useState } from 'react'

import profile from '../Assets/Images/profile.jpg'
import ProfileCard from '../Components/profiledropdown'

const Profile = () => {
  const [pcard, setpcard] = useState(false)
  return (
    <>
    <div className='gap-1 items-center cursor-pointer lg:flex md:flex' onClick={()=>{setpcard(!pcard)}}>
        <img src={profile} className="max-w-8 rounded-full" alt="" />
        <p className='font-poppins font-medium hover:underline text-neutral-800 cursor-pointer'></p>
        
    </div>
    {pcard?<ProfileCard/>:<></>}
    </>
  )
}

export default Profile