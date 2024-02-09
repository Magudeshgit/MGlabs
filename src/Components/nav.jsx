import React from 'react'
import homeicon from '../Assets/Images/home.svg'
import testing from '../Assets/Images/testing.svg'
import pricing from '../Assets/Images/pricing.svg'
import profile from '../Assets/Images/profile.svg'
import settings from '../Assets/Images/settings.svg'


const Navbar = () => {
  return (
    <div className="navparent w-full lg:h-screen flex items-center lg:w-fit absolute bottom-0 left-0">
    <div 
    className='lg:h-[90%] lg:ml-4 lg:w-12 w-full h-12 bg-[#413f45] rounded-md lg:rounded-full flex justify-center items-center py-4'>
        <div className="navitems flex lg:flex-col gap-10">
            <a href="/">
                <img src={homeicon}/>
            </a>
            <a href="/">
                <img src={testing}/>
            </a>
            <a href="/">
                <img src={pricing}/>
            </a>
            <a href="/">
                <img src={profile}/>
            </a>
            <a href="/">
                <img src={settings}/>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Navbar