import React from 'react'

import Navbar from '../Components/nav'
import Vmtable from '../Components/vmtable'
import Header from '../Components/header'

const Settings = () => {
  return (
    <section className='lg:px-24 px-6 py-6 w-full h-screen'>
        <div className="navigation">
            <Navbar/>
        </div>
        <div>
            <Header data={{title: 'Settings', secondary_text: ''}}/>
        </div>
        <Vmtable/>

    </section>
  )
}

export default Settings