import { useState } from 'react';
import React from 'react';
import NavItem from './NavItem';
import Button from './Button';
import Logo from '../../assets/Header/Logo.png'
import { AppBar, Toolbar, Box, Typography, styled,Drawer ,List,IconButton, ListItemButton, ListItem} from '@mui/material';
import { CiMenuKebab } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";




const navItems = ['Home', 'Services', 'Courses', 'Events', 'Contact'];

function Header() {

  const [open, setOpen] = useState(false);
const handleOpen = ()=>{
setOpen(true);
}
const handleClose = ()=>{
setOpen(false);
}

  return (
    <header className="flex overflow-hidden flex-wrap gap-6  p-2 lg:p-4 h-full leading-none border-b bg-zinc-100 border-zinc-300 font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:px-4">
      <img src={Logo} className='w-[40px] lg:w-[60px] md:w-[50px] ml-[-10px] md:ml-0 lg:ml-0 '  />
       <div className="text-2xl lg:text-3xl  items-center font-bold text-[rgb(86,58,224)] ml-[-20px]">Global Techify</div>

      
      <nav className=" hidden lg:flex flex-1 shrink gap-2 items-end justify-end self-stretch my-auto whitespace-nowrap basis-0 min-w-[240px] text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
        {navItems.map((item, index) => (
          <NavItem key={index} label={item} />
        ))}
        <div className="flex gap-3 items-center self-stretch my-auto w-[178px]">
        <Button variant="secondary" label="Sign in" />
        <Button variant="primary" label="Register" />
      </div>
      </nav>
      
      <CiMenuKebab className='text-[#563AE0] text-2xl items-center lg:hidden ml-12   md:ml-96  flex flex-1 justify-end' onClick={handleOpen} />
      
      <Drawer open={open} onClose={handleClose} >
      <RxCross2 className='text-[35px] mt-2 ml-36' onClick={handleClose} />

        <Box className='w-[200px] '>
          <List>
          <ListItem className='flex flex-col'>
         {navItems.map((item, index) => (
          <NavItem key={index} label={item} />
        ))}
        <Button variant="secondary" label="Sign in" />
        <Button variant="primary" label="Register" />
        </ListItem>
        </List>
        </Box>
      </Drawer>
      
    </header>
  );
}

export default Header;