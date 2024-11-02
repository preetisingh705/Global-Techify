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

import DataProvider from "./Context/DataProvider"
import AllCourses from './Components/Courses/AllCourses';
import AllServices from './Components/Services/AllServices';
import Contact from './Components/Contact/conatct';
import Allevents from './Components/Events/Allevents';

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/events' element={<Events/>} />
        <Route path='/about' element={<About/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/mentor' element={<Mentor/>} /> 
        <Route path='/allcourses' element={<AllCourses/>} /> 
        <Route path='/allservices' element={<AllServices/>} />
        <Route path='/allevents' element={<Allevents/>} />
        <Route component={Error} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
