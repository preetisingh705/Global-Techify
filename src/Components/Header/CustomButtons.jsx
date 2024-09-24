import { useState, useContext } from 'react';

import { Badge, Box, Button, styled, Typography} from '@mui/material';

import NavItem from './NavItem';



const Wrapper = styled(Box)(({theme}) => ({
display: 'flex',
margin: '0 3% 0 auto',
'& > * ': {
 marginRight: '40px !important',
 fontSize: 16,
 alignItem: 'center'
},
[theme.breakpoints.down('md')]: {
    display: 'block'
}
}));


const navItems = ['Home', 'Services', 'Courses', 'Events', 'Contact'];

const CustomButtons = () => {



    return (
        <Wrapper
         >

           
            <Typography style={{marginTop: 3, width: 135}}          className="flex flex-wrap flex-1 justify-end flex-end shrink gap-2 items-start self-stretch my-auto whitespace-nowrap basis-0 min-w-[240px] text-[#563AE0] max-md:max-w-full"
            >
            {navItems.map((item, index) => (
                   <NavItem key={index} label={item} />
                  ))}
            </Typography>

           
        </Wrapper>
    )
}

export default CustomButtons;