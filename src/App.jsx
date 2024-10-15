import { useState } from 'react'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services'
import Courses from './Components/Courses/Courses';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
import About from './Components/About/About';
import Mentor from './Components/Mentor/Mentor';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  return (
    <div className="bg-[#F0F0F0] ">
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/events' element={<Events/>} />
        <Route path='/about' element={<About/>} /> 
        <Route path='/mentor' element={<Mentor/>} /> 

        <Route component={Error} /> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
