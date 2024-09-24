
import React from 'react';
import NavItem from './NavItem';
import Button from './Button';
import Logo from '../../assets/Header/Logo.png'

const navItems = ['Home', 'Services', 'Courses', 'Events', 'Contact'];

function Header() {
  return (
    <header className="flex overflow-hidden flex-wrap gap-6 items-center p-6 h-full leading-none border-b bg-zinc-100 border-zinc-300 font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:px-5">
      <img src={Logo} className='w-[40px] lg:w-[60px] md:w-[50px]' />
       <div className="text-2xl lg:text-3xl font-bold text-[rgb(86,58,224)]">Global Techify</div>

      <nav className="flex  flex-1 shrink gap-2 items-end justify-end self-stretch my-auto whitespace-nowrap basis-0 min-w-[240px] text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
        {navItems.map((item, index) => (
          <NavItem key={index} label={item} />
        ))}
      </nav>
      <div className="flex gap-3 items-center self-stretch my-auto w-[178px]">
        <Button variant="secondary" label="Sign in" />
        <Button variant="primary" label="Register" />
      </div>
    </header>
  );
}

export default Header;