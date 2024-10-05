import { useState } from 'react'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services'
import Courses from './Components/Courses/Courses';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import { ClassNames } from '@emotion/react';


function App() {

  return (
    <div ClassName="bg-[#F0F0F0] ">
    <Header />
    <Home />
    <Services />
    <Courses />
    <Events />
    <Footer />
    </div>
  )
}

export default App
