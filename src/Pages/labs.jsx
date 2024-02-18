import React from 'react'
import {motion} from 'framer-motion'

import Navbar from '../Components/nav'
import Header from '../Components/header'
import Labcard from '../Components/labcard'
import Dbcard from '../Components/dbcard'

const Labs = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
    <section className='lg:px-24 px-6 py-6 w-full h-screen'>
    <Navbar/>
    <div>
    <Header data={{title: "Labs", secondary_text: "Let's break and build stuff!"}}/>
    </div>
    <Labcard/>
    <p className='font-poppins text-md font-semibold mt-4'>Databases</p>
    <Dbcard/>
    </section>
    </motion.div>

  )
}

export default Labs