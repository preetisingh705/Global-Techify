import { useState } from 'react';
import React from 'react';
import NavItem from './NavItem';
import Button from './Button';
import Logo from '../../assets/Header/Logo.png'
import {  Box,Drawer ,List, ListItem} from '@mui/material';
import { CiMenuKebab } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";






const navItems = ['home','Services', 'Courses', 'Events', 'Contact'];

function Header() {

  const [open, setOpen] = useState(false);
const handleOpen = ()=>{
setOpen(true);
}
const handleClose = ()=>{
setOpen(false);
}

  return (
    <header className="fixed z-50 flex overflow-hidden flex-wrap   p-2 lg:p-4 w-full leading-none border-b bg-zinc-100 border-zinc-300 font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:px-4">
   
    {/* Header */}
     <div className='flex flex-1 md:grid md:grid-cols-3 lg:flex   '>
      {/* Menu Bar Icon */}
     <div className='mx-1 w-[60px]  flex items-center  justify-start lg:hidden '>
      <div className='border-solid border-2 px-1'>
        <IoIosMenu className='text-[#563AE0] text-2xl md:text-3xl  lg:hidden ' onClick={handleOpen} />
        </div>
     </div>

        {/* Drawer */}
      <Drawer open={open} onClose={handleClose} >
        <Box className='w-full '>
          <List>
            <ListItem className='m-2'>
          <Button variant="secondary" label="Sign in/Login" />
          <FaChevronLeft className='text-[20px] ml-4  ' onClick={handleClose} />

          </ListItem>
          <hr></hr>

          <ListItem className='flex flex-col mx-2'>
         {navItems.map((item, index) => (
          <NavItem key={index} label={item} />
        ))}
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

      <div className='flex items-center justify-center p-[5px]  w-[190px] md:w-[300px] lg:w-[310px] lg:border-r-2 border-indigo-300'>
       <img src={Logo} className='w-[40px] lg:w-[60px] md:w-[50px]  '  />
       <p className=" w-[200px] text-xl lg:text-3xl  items-center font-bold text-[rgb(86,58,224)] ">Global Techify</p>
       </div>

       {/* Courses Filter Box */}
       <div className='  hidden lg:flex ml-2 mt-2 h-[45px] w-[150px]  border-solid border-2 border-[#DBDBDC] rounded-lg justify-center'>
        <button className='bg-zinc-100 w-[150px] font-bold border-none border-[#DBDBDC] text-[#757575] hover:none flex'> All Courses
           <FaAngleDown className='ml-1 text-xl text-[#563AE0]' />
        </button>
       
       </div>

      {/* Dark Mode Icon */}
      <div className='w-[60px] md:w-56  flex  items-center place-content-end lg:hidden'>
      <CiMenuKebab className='text-[#563AE0] text-2xl justify-end lg:hidden ' onClick={handleOpen} />
      </div>

     </div>
   

   {/* Large Mode Navbar */}
     <div className='lg:flex justify-end'>
      <nav className=" hidden lg:flex flex-1 shrink gap-2 items-end justify-end self-stretch my-auto whitespace-nowrap basis-0 min-w-[240px] text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
        {navItems.map((item, index) => (
          <NavItem key={index} label={item} />
        ))}
        <div className="flex gap-3 items-center self-stretch my-auto w-[178px]">
        {/* <Button variant="secondary" label="Sign in/Login" /> */}
        <Button variant="primary" label="Sign in/Login" />
      
      </div>
      </nav>
      </div>
     
      
      
    
      
    </header>
  );
}

export default Header;