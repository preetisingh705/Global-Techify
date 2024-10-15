import { useState ,useEffect} from 'react';
import React from 'react';
import Logo from '../../assets/Header/Logo.png'
import {  Box,Drawer ,List, ListItem} from '@mui/material';
import { FaChevronLeft } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";

import { FaLinkedin } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import {Link} from 'react-router-dom';


function Header() {

  // change icon
const [icon,setIcon] = useState(<BsFillMoonStarsFill />)
const [visible,setVisible] = useState(false)
const changeIcon = () => {
  setVisible(!visible);
  setIcon(visible ? <BsFillMoonStarsFill/> : <HiSun />);
};

// Open drawer
const [open, setOpen] = useState(false);
const handleOpen = ()=>{
setOpen(true);
};
const handleClose = ()=>{
setOpen(false);
};

//Dark Mode 
const [darkMode, setDarkMode] = useState();

useEffect(() => {
  const theme = localStorage.getItem("theme")
if( theme === "light") setDarkMode(true)
},[]);

useEffect(() => {
 if(darkMode){
  document.documentElement.classList.add('dark');
  localStorage.setItem("theme", "light")
 }else{
  document.documentElement.classList.remove('dark');
  localStorage.setItem("theme", "dark")
 }
},[darkMode]);



  return (
    <header className="fixed z-50  overflow-hidden flex p-2 w-full leading-none border-b dark:bg-black bg-zinc-100 border-zinc-300 
    font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] ">
   
    {/* Header */}
   

     <div className='flex flex-1 justify-start font-Arial'>

      {/* Menu Bar Icon */}
     <div className=' w-[45px] flex  items-center  justify-start lg:hidden '>
      <div className='border-solid border-2 px-1'>
        <IoIosMenu className='text-[#563AE0] text-2xl md:text-3xl   ' onClick={handleOpen} />
        </div>
     </div>

        {/* Drawer */}
      <Drawer open={open} onClose={handleClose} >
        <Box className='w-full '>
          <List>
          <ListItem className='m-2'>
          <button className='flex m-2 px-4 h-[40px] rounded-3xl items-center bg-[#7862e4]  text-[black] font-serif '>Sign Up/Login</button>    
          <FaChevronLeft className='text-[20px] ml-4  ' onClick={handleClose} />
          </ListItem>
          <hr></hr>

         <ListItem>
        <button className=' flex font-bold text-xl   hover:none '> All Courses
           <FaAngleDown className=' mt-2 -rotate-90 text-xl text-[#563AE0]' />
        </button>
         </ListItem>

      <ListItem className='flex flex-col mx-2'>
        <Link to='/courses' className="gap-4 p-2 self-stretch  rounded-lg"> Courses
        </Link>
        
        <Link to='/services' className="gap-2 p-2 self-stretch  rounded-lg"> Services
        </Link>
        
        <Link to='/events' className="gap-2 p-2 self-stretch  rounded-lg"> Events
        </Link>
       
        <Link to='/footer' className="gap-2 p-2 self-stretch  rounded-lg"> Contact
        </Link>
       
        <Link to='/home' className="gap-2 p-2 self-stretch  rounded-lg"> About
        </Link>
       
      </ListItem>
        
        <ListItem>
          <p>Follow Us On</p>
          <hr></hr>
        </ListItem>

       <ListItem>
            <div 
       className='text-[25px]  lg:mx-0 flex gap-x-4 lg:gap-x-10'>    
       <div className='bg-icon'>
        <a href="https://www.linkedin.com/in/preeti-singh-764190258/">
        <FaYoutube className='text-black dark:text-black' />
        </a>
         <span></span>
        </div>    
        <div className='bg-icon'>
        <a href="https://www.linkedin.com/in/preeti-singh-764190258/">
        <FaLinkedin className='text-black dark:text-black' />
        </a>
         <span></span>
        </div>
        <div className='bg-icon'>
        <a href="https://t.me/+917905845454">
        <FaTelegramPlane  className='text-black dark:text-black ' />
        </a>
         <span></span>
        </div><div className='bg-icon'>
        <a href="https://x.com/singh_preeti7?t=RV2Of7sbPm1-X0RiQBqipw&s=03">
        <FaTwitter className='text-black dark:text-black ' />
        </a>
         <span></span>
        </div>
            </div>
       </ListItem>
    
        </List>
        </Box>
      </Drawer>

       {/* Logo and Courses */}
       <Link to='/'>
      <div className=' flex items-center m-1 justify-center w-[200px] md:w-[200px] lg:w-[300px] md:border-r-2 border-indigo-300'>
       <img src={Logo} className='w-[40px] lg:w-[60px]  '  />
       <p className="w-[250px] text-xl lg:text-3xl  items-center font-bold text-[#7862e4] ">Global Techify</p>
       </div>
       </Link>
     

       {/* Courses Filter Box */}
       <div className='hidden md:flex ml-2 px-1  border-solid border-2 border-[#DBDBDC] rounded-lg  items-center'>
        <button className=' flex font-bold border-none border-[#DBDBDC] text-[#535353] dark:text-[#7862e4] hover:none '> All Courses
           <FaAngleDown className=' text-xl text-[#563AE0]' />
        </button>
       
       </div>
     </div>

     

   {/* Large screen Navbar */}
     <div className='hidden lg:flex justify-end items-center mx-2 font-Verdana font-bold'>
      <nav className=" flex   text-[#7862e4] dark:text-[#7862e4]  h-[40px] items-center gap-4 xl:gap-8">
       <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
        <Link to='/courses' > Courses
        </Link>
        </div>
        <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
        <Link to='/services' > Services
        </Link>
        </div>
        <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
        <Link to='/events'> Events
        </Link>
        </div>
        <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
        <Link to='/mentor' > MentorShip
        </Link>
        </div>
        <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
        <Link to='/about'> About
        </Link>
        </div>
        <button className='flex px-1 h-[40px] rounded-3xl items-center border-2 border-solid border-[#7862e4]  text-[#7862e4] font-Arial '>Sign Up/Login</button>      

      </nav>

      </div>


       {/* Dark Mode Icon */}
       <div className='w-[45px] flex  justify-end  items-center'>
      <button className=' rounded-full border-solid border-[#7862e4] border-2 p-1 text-[#7862e4] text-xl ' onClick={() =>{changeIcon(); setDarkMode(!darkMode);} }>
        {icon}
      {/* <BsFillMoonStarsFill className='text-[#7862e4] text-xl ' onClick={handleOpen}/> */}
      </button>
      </div>
      
    </header>
  );
}

export default Header;