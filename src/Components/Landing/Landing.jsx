import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import {TypeAnimation} from 'react-type-animation';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { VscCommentDiscussion } from "react-icons/vsc";
import { TbFileCertificate } from "react-icons/tb";
import { PiVideoDuotone } from "react-icons/pi";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegFilePdf } from "react-icons/fa";
import Learn from "../../assets/Home/Home1.jpg"
import ai from "../../assets/Events/ai.jpg"
import app from "../../assets/Events/app.jpg"
import business from "../../assets/Events/business.jpg"
import "./landing.css";


const data = [
  { id: 1, img: Learn },
  { id: 2, img: ai  },
  { id: 3, img: business },
  { id: 4, img: app }
]

const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Landing() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: "linear",
      arrows:false,
      
    };

  return (
    <section id='home' className=' h-[100vh] dark:bg-black overflow-hidden  flex flex-col justify-center items-center ' >
    
  {/* <div className=''> */}

   <div  className='font-poppins  main bg-no-repeat bg-cover bg-center bg-fixed  w-full h-full  opacity-[0.8]  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 p-4  md:p-10 lg:p-10 xl:px-16 xl:pt-16 xl:pb-4 mt-16 ' >

   {/* Left Home Page */}
   <div>
   <motion.div 
   className='grid grid-cols-1  '
   variants={fadeIn('up',0.5)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false, amount: 0.5}} 
   >

   <div className='flex-1 justify-center items-center font-poppins border-l-2 border-[#7862e4] p-2 '>
     <h1 className=' text-[20px] font-bold md:text-[50px]  text-white dark:text-white'> 
     Welcome To
    </h1>
    
    <div className=' text-[35px] md:text-[45px]  lg:text-[60px]   font-semibold leading-none  text-[#fac17f] '>
    <span className='flex text-[#f3aa57] '>Global Techify </span> 
    <TypeAnimation
     sequence={[
      'E-Learning !!',
      2000,
      'Mentorship !!',
      2000,
      'Events !!',
      2000,
     ]}
     speed={50}
     className='md:text-[50px]  '
     wrapper='span'
     repeat={Infinity}
     />
    </div>  

    <p 
      className="text-md   font-medium text-black dark:text-white mt-2 ">
      Unlock your careers by signing up with Global Techify- Learn and Build Carrers.
    </p>


    <div className=' flex  mt-2 gap-2  md:gap-4'>
    <button className="flex px-2 md:px-4 rounded-md items-center  text-[#7b67df] border-[1px] border-solid border-[#7b67df] bg-white font-bold font-Verdana ">
      Get Started  <IoArrowForwardCircleOutline className='text-[28px] md:[40px] text-[#7862e4] ' />

    </button>
     <button className=' text-lg xl:text-xl font-bold text-white rounded-full bg-[#7862e4] px-2 md:px-4 py-1 md:py-3 ' >
     Enroll now</button>
     </div>

    </div>

   </motion.div>

  
    </div>
    
  {/* Right Home page */}
  {/* <div>
  <div  className='bg-white flex  border-b-2 shadow-lg  font-poppins dark:text-black  rounded-md '>
     
     <div 
    
      className='border-[#6c6d6e]  border-r-[1px]  border-solid flex flex-col justify-end items-center  ' >
      <div><TbFileCertificate className=' text-[45px] md:text-[60px] text-[#7d68e9]' />  </div>
     <p className='text-sm md:text-lg font-bold'>Certificate</p>
     <p className='text-[12px] md:text-[15px]'>Verified Certificates</p>
   </div>

<div className='md:border-[#6c6d6e]  md:border-r-[1px]  md:border-solid flex flex-col justify-center items-center '>
<div className='flex'  >
<PiVideoDuotone className='text-[50px] md:text-[60px] text-[#7d68e9]' />
 </div>
<p className='text-sm md:text-lg font-bold'> Daily Live</p>
<p className='text-[12px] md:text-[15px]'>Intracvtive Classes</p>
 </div>

<div className='border-[#6c6d6e]  border-r-[1px] border-solid flex flex-col justify-center items-center' >
<div><VscCommentDiscussion className='text-[48px] md:text-[60px] text-[#7d68e9]' />
</div>
<p className='text-sm md:text-lg font-bold'> 24 X 7</p>
<p className='text-[12px] md:text-[15px]'>Doubt Solutions</p>
</div>

<div className=' flex flex-col justify-center items-center ' >
<div><FaRegFilePdf className='text-[48px] md:text-[60px] text-[#7d68e9]' />
</div>
<p className='text-sm md:text-lg font-bold'> 100 +</p>
<p className='text-[12px] md:text-[15px]'>Notes & Papers</p>
</div>

    </div>
  </div> */}

  {/* <motion.div 
   variants={fadeIn('up',0.5)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false, amount: 0.5}}
    className='hidden md:flex gap-2 font-poppins lg:justify-center lg:items-center relative'>

      <div className='hidden lg:flex lg:flex-col justify-center items-center text-[#5636f5] dark:text-white absolute bg-white shadow-[#e6d0f1] shadow-lg p-2 rounded-l-md rounded-br-md border-b-2 top-2 xl:top-6 left-0 xl:left-10 '> 
      <p className='text-[20px] font-semibold '>Online Courses </p>
      <div className='flex gap-x-1 xl:gap-x-3'>
      <p className='   text-sm  ' >
       30+ teacher
      </p>
      <div className='  text-sm  ' >
       300+ videos
      </div>
     
      </div>

      </div>

       <div className='hidden lg:flex lg:flex-col justify-center items-center text-[#5636f5] dark:text-white absolute bg-white shadow-[#e6d0f1] shadow-lg bottom-6  left-20 xl:left-36  p-2  rounded-l-md rounded-br-md border-b-2 '> 
      <p className='text-xl font-semibold '>Events </p> 
      <p className='  text-md  ' >
       6+ Events
      </p>
       </div> 

       <div className=' border-4 border-solid border-white rounded-md '>
    <img src={Learn} className='h-72 w-full rounded-md' />
    </div>

      <div className='hidden lg:flex lg:flex-col justify-center items-center gap-2 text-[#5636f5] dark:text-white absolute bg-white shadow-[#e6d0f1] shadow-lg right-10 xl:right-24   p-2 rounded-r-md rounded-bl-md border-b-2  '> 
      <p className='text-xl  font-semibold '>Mentorship </p>    
     
     <p className=' text-sm ' >
       Carrier Guidance
      </p>
    </div> 

  
    
   </motion.div> */}


    </div>


    
  {/* small screen view */}


   <div className="w-full  md:hidden mt-3 ">
     <Carousel
     responsive={responsive}
     swipeable={false}
     draggable={false}
     infinite={true}
     autoPlay={true}
     removeArrowOnDeviceType={["mobile"]}
     showDots={true}
     containerClass="carousel-container"
       itemClass="carousel-item-padding-40-px"
       autoPlaySpeed={1000}
     >
       { 
         data.map(data => (
           <img className="w-full h-40"  src={data.img} alt="banner" />
         ))
       }

     </Carousel>

    
   </div>


       {/* Video lecture Icons */}

    
{/* </div> */}
   
    

  </section>
  );
  
};

export default Landing;

