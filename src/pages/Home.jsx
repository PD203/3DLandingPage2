import React from 'react'
import Hero from '../sections/Home/Hero'
import Latest from '../sections/Home/Latest'
import Explore from '../sections/Home/Explore'
import Featured from '../sections/Home/Featured'

function Home() {
  return (
    <div className='container mx-auto w-full'>
      <Hero/>
      <Latest/>
      <Explore/>
      <Featured />
    </div>
  )
}

export default Home