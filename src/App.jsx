import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './sections/Navbar'
import Home from './pages/Home';
import News from './pages/News';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Students from './pages/Students';


function App() {
  return (
    <Router>
      <div className='container mx-auto w-full'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App