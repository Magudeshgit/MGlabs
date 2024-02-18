import React, { useEffect, useState } from 'react'
import homeicon from '../Assets/Images/home.svg'
import homefillicon from '../Assets/Images/home-fill.svg'

import testing from '../Assets/Images/testing.svg'
import testingfill from '../Assets/Images/testing-fill.svg'

import settings from '../Assets/Images/settings.svg'
import settingsfill from '../Assets/Images/settings-fill.svg'

import pricing from '../Assets/Images/pricing.svg'
import profile from '../Assets/Images/profile.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [navstatus, setnavstatus] = useState({home:false, labs:false, settings: false})
    const path = window.location.pathname
    useEffect(()=>{
        if (path==='/labs/') 
        {
                setnavstatus({labs:true})   
        }
        else if (path==='/settings/') 
        {
                setnavstatus({settings:true})   
        }
    else 
        {
                setnavstatus({home:true})   
        }
    },[])
    

  return (
    <div className="navparent z-10 w-full lg:h-screen flex items-center lg:w-fit fixed bottom-0 left-0">
    <div 
    className='lg:h-[90%] lg:ml-4 lg:w-12 w-full h-12 bg-[#413f45] rounded-md lg:rounded-full flex justify-center items-center py-4'>
        <div className="navitems flex lg:flex-col gap-10">
            <Link to="/home">
                <img src=
                {navstatus.home?homefillicon:homeicon}
                />  
            </Link>
            <Link to="/labs/">
                <img src={navstatus.labs?testingfill:testing}/>
            </Link>
            <Link to="/cost-management/">
                <img src={pricing}/>
            </Link>
            <Link to="/profile/">
                <img src={profile}/>
            </Link>
            <Link to="/settings/">
                <img src={navstatus.settings?settingsfill:settings}/>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar