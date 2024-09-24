import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import {TypeAnimation} from 'react-type-animation';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import Logo1 from "../../assets/Home/Logo1.png";



function Home() {
  return <section id='home' className=' min-h-[95vh] lg:min-h-[95vh] flex dark:bg-none overflow-hidden' >
    {/* <AnimatedBg /> */}
    <div className='container mx-2 lg:mx-28  mt-6 lg:mt-10'>
    <div className=' flex lg:flex-end  lg:gap-x-6'>

   {/* data */}
    <div className='mt-6 md:mt-4 lg:mt-4 flex-1 justify-start  font-secondary lg:text-left '>
    
    <motion.h1
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
     className=' text-[20px] font-bold leading-[1.4] lg:text-[30px] font-secondary text-black
      flex flex-row lg:flex-row  lg:gap-x-4  lg:justify-start '> 
     Welcome To
    
    </motion.h1>
    
    <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className=' text-[35px] mt-2 lg:mt-4 mb-2 lg:text-[60px] justify-start font-secondary font-semibold leading-none lg:leading-[1] text-black dark:text-white'>
    <span className="text-[#563AE0] mr-2 ">Global Techify</span> <br/>
    <TypeAnimation
     sequence={[
      'E-Learning !!',
      2000,
      'Mentorship !!',
      2000,
      'Coding !!',
      2000,
     ]}
     speed={50}
     className='text-[30px] lg:text-[50px] mt-2'
     wrapper='span'
     repeat={Infinity}
     />
    </motion.div>
<motion.div className='flex '
variants={fadeIn('up',0.5)}
initial='hidden'
whileInView={'show'}
viewport={{once: false, amount: 0.5}} >
<p 
    
    className=" max-w-lg mb-4 text-[25px] lg:text-[30px]    font-bold lg:mx-0 text-black dark:text-white ">
      Start Your Career Journey <br />With Us.
 </p>
 <IoArrowForward className='mt-8 lg:mt-12 ml-[-180px] lg:ml-[-220px] text-[40px] lg:text-[45px] text-[#563AE0]' />

</motion.div>
   

      <motion.div
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.6}}
      className=' flex max-w-max gap-x-6   mt-4 lg:mt-8 lg:mx-0 text-black dark:text-white'
      >
 <button className="items-start text-[18px] lg:text-[20px] w-40 lg:w-60 bg-[#563AE0] text-black font-bold">
      Explore More
    </button>
    <IoArrowForwardCircleOutline className='text-[55px] text-[#563AE0] ' />

      </motion.div>

      {/* <motion.div 
       variants={fadeIn('up',0.7)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.7}}
       className='social text-[25px] mx-auto max-w-max lg:mx-0 flex gap-x-4 lg:gap-x-10'>        
        <div className='bg-icon'>
        <a href="https://www.linkedin.com/in/preeti-singh-764190258/">
        <FaLinkedin className='text-black dark:text-black' />
        </a>
         <span></span>
        </div>
        <div className='bg-icon'>
        <a href="https://t.me/+917905845454">
        <FaTelegram  className='text-black dark:text-black ' />
        </a>
         <span></span>
        </div><div className='bg-icon'>
        <a href="https://x.com/singh_preeti7?t=RV2Of7sbPm1-X0RiQBqipw&s=03">
        <FiTwitter className='text-black dark:text-black ' />
        </a>
         <span></span>
        </div>
   </motion.div>
     */}
    </div>
  
   
  <motion.div 
   variants={fadeIn('down',0.9)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false, amount: 0.8}}
   className=' max-w-[600px] max-h-[600px]
 '>
      <img src={Logo1} className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] hidden sm:flex lg:flex'></img>
  </motion.div>

  </div>

 {/* <div className='home_scroll flex items-center justify-center  dark:text-white text-black'>
<a href="#about" className='home_scroll_button'>
<CiSaveDown1 className='lg:text-[40px] text-[40px] dark:text-white' />
</a>Down</div> */}

  </div>

  </section>;
};

export default Home;