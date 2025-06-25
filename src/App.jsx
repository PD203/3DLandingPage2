import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Explore from './sections/Explore'

function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero  id="home" />
      <About id="about" />
      <Explore id="explore" />
    </div>
  )
}

export default App