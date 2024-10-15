import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import {TypeAnimation} from 'react-type-animation';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { VscCommentDiscussion } from "react-icons/vsc";
import { TbFileCertificate } from "react-icons/tb";
import { PiVideoDuotone } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import Girl from "../../assets/Services/Learning.png"

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
  { id: 1, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' },
  { id: 2, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50' },
  { id: 3, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50' },
  { id: 4, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50' }
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

  return <section id='home' className='min-h-[50vh] lg:min-h-[95vh] p-4 lg:p-10 flex justify-center items-center dark:bg-black overflow-hidden bg-zinc-100' >
    
    
    <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-14 '>

   {/* Left Home Page */}
   <motion.div 
   className='grid grid-cols-1 gap-2 '
   variants={fadeIn('up',0.5)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false, amount: 0.5}} 
   >

   <div 
    className='flex-1 justify-start  font-Verdana border-l-2 border-[#7862e4] p-4  '>
     <h1 className=' text-[20px] font-bold  lg:text-[30px] font-Verdana text-black dark:text-white'> 
     Welcome To
    </h1>
    
    <div className=' text-[35px] lg:text-[60px]   font-semibold leading-none  text-[#fa8f52] '>
    <span className='flex text-[#7862e4] font-Arial'>Global Techify </span> 
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
     className='text-[30px] lg:text-[50px] font-Arial '
     wrapper='span'
     repeat={Infinity}
     />
    </div>  

    <p 
      className="text-[20px] lg:text-[30px]    font-bold text-black dark:text-white ">
      Start Your Career Journey <br />With Us.
    </p>

    <div className=' flex  mt-2'>
    <button className="flex px-4 rounded-3xl items-center border-2 border-[#7862e4] text-[#563AE0] font-bold font-Verdana mr-2">
      Explore More
    </button>
    <IoArrowForwardCircleOutline className='text-[40px] text-[#7862e4] ' />
     </div>

    </div>

    {/* Video lecture Icons */}

    <div className=' grid grid-cols-3 gap-x-4 justify-center items-center font-Verdana dark:text-white'>

      <div >
        <div><TbFileCertificate className=' text-[50px] md:text-[60px] text-[#7d68e9]' />  </div>
        <p className='text-sm md:text-lg font-bold'>Certificate</p>
        <p className='text-[12px] md:text-[15px]'>Online Autorized Certificates</p>
      </div>
  
      <div>
        <div className='flex'  >
        <PiVideoDuotone className='text-[50px] md:text-[60px] text-[#7d68e9]' />
        </div>
        <p className='text-sm md:text-lg font-bold'>Live Videos</p>
        <p className='text-[12px] md:text-[15px]'>Live & Recorded Video lectures</p>
      </div>

      <div>
       <div><VscCommentDiscussion className='text-[48px] md:text-[60px] text-[#7d68e9]' />
       </div>
        <p className='text-sm md:text-lg font-bold'>Discussion</p>
        <p className='text-[12px] md:text-[15px]'>Problem & Doubt Solutions</p>
      </div>

    </div>


   </motion.div>
    
  {/* Right Home page */}

   <div className='flex flex-col gap-0 font-Arial '>

   <motion.div 
    variants={fadeIn('up',0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.5}}
   >

    {/* Full screen Image Section */}

      <motion.div 
   variants={fadeIn('up',0.5)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false, amount: 0.5}}
   className='h-full w-full relative hidden xl:flex   '>

    <div className='relative flex items-center justify-center  border-solid border-4 dark:border-black bg-[#a9a4ee] z-10 top-10 left-44 right-0  bottom-0  h-[90px] w-[90px] rounded-full '>
    <p className='font-bold'><h1 className='text-[20px]'>30+</h1>Teachers</p>
    </div> 
    <div className=' relative flex items-center justify-center border-solid border-4 dark:border-black bg-[#fcb675] z-10 top-72 lg:left-28 right-0  bottom-0 h-[100px] w-[100px] rounded-full '>
    <p className='  font-bold '><h1 className='text-[20px]'>80%</h1> Off Now</p>
    </div> 
    <div className='relative   bg-[#aea3e7] z-0 xl:top-8 left-4 right-0  bottom-0  h-[330px] w-[330px] rounded-full '>
    </div> 

       <div className='absolute z-0 top-0  left-56 right-0  h-[350px] w-[300px]  '>
                <img src={Girl} className='h-full w-full'></img>
       </div>
   <div className='relative flex items-center justify-center  border-solid border-4 dark:border-black bg-[#c9bff8] z-0 top-20 -left-10 right-0  bottom-0 h-[90px] w-[90px] rounded-full '>
    <p className='font-bold'><b className='text-[20px]'>50+</b><br />Courses</p>
    </div> 
     </motion.div>

     {/* Large screen Image Section */}

     <motion.div 
   variants={fadeIn('up',0.5)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false, amount: 0.5}}
   className='h-full w-full relative hidden lg:flex xl:hidden mt-4 '>

    <div className='relative flex items-center justify-center  border-solid border-2 dark:border-black bg-[#a9a4ee] left-32 right-0  bottom-0 z-10  h-[70px] w-[70px]  rounded-full '>
    <p className='text-[12px] font-bold'><p>30+</p>Teachers</p>
    </div> 
    <div className=' relative flex items-center justify-center border-solid border-2 dark:border-black bg-[#fcb675] z-10 top-56 left-24 right-0  bottom-0 h-[70px] w-[70px]  rounded-full '>
    <p className=' text-[12px] font-bold '><p>80%</p> Off Now</p>
    </div> 
    <div className='relative   bg-[#aea3e7] z-0 top-0 left-0 right-0  bottom-0  h-[250px] w-[250px] rounded-full '>
    </div> 

       <div className='absolute z-0 top-0 left-36 right-0   h-[220px] w-[230px]   '>
                <img src={Girl} className='h-full w-full'></img>
       </div>
     <div className='relative flex items-center justify-center  border-solid border-2 dark:border-black bg-[#c9bff8] z-0 top-14 -left-10 right-0  bottom-0 h-[65px] w-[65px]  rounded-full '>
    <p className='text-[12px] font-bold'><p>50+</p>Courses</p>
    </div> 
      

     </motion.div>

     {/* Medium Screen Image section */}
     <motion.div 
   variants={fadeIn('up',0.5)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false, amount: 0.5}}
   className='h-full w-full relative  hidden  md:flex   lg:hidden mt-4   '>

     <div className='relative flex items-center justify-center  border-solid border-2 dark:border-black bg-[#a9a4ee] left-28 right-0  bottom-0 z-10  h-[65px] w-[65px]  rounded-full '>
    <p className='text-[12px] font-bold'><p>30+</p>Teachers</p>
    </div> 
    <div className=' relative flex items-center justify-center border-solid border-2 dark:border-black bg-[#fcb675] z-10 top-40 left-20 right-0  bottom-0 h-[65px] w-[65px]  rounded-full '>
    <p className=' text-[12px] font-bold '><p>80%</p> Off Now</p></div>
    <div className='bg-[#aea3e7] z-0 top-8 left-0 right-0  bottom-0  h-[200px] w-[200px] rounded-full '>
    </div> 

       <div className='absolute z-0 top-0 left-40 right-0   h-[180px] w-[150px]   '>
                <img src={Girl} className='h-full w-full'></img>
       </div>

       <div className='relative flex items-center justify-center  border-solid border-2 dark:border-black bg-[#c9bff8] z-0 top-10 -left-6 right-0  bottom-0 h-[60px] w-[60px]  rounded-full '>
    <p className='text-[12px] font-bold'><p>50+</p>Courses</p>
    </div>

     </motion.div>

     {/* Enroll Now Button */}
     
     <div className=' flex justify-center items-center mt-6 md:mt-2 gap-2 md:gap-4 '>
     <button className='flex justify-center items-center gap-x-1 lg:ml-10 text-lg lg:text-xl font-bold border-2 border-[#7862e4] border-solid rounded-full text-[#7862e4] px-1 md:px-4 py-1 md:py-3 ' >
     <FaPlayCircle className='text-[23px] md:text-[25px]' /> Watch Videos</button>
     <button className=' text-lg lg:text-2xl font-bold text-white rounded-full bg-[#7862e4] px-2 md:px-4 py-1 md:py-3 ' >
     Enroll now</button>
     </div>
     

     </motion.div>

     </div>


     <div className="w-full  mt-6    md:hidden ">
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
            <img className="w-full h-20"  src={data.url} alt="banner" />
          ))
        }

      </Carousel>

      {/* <div className=' '>
      <Slider {...settings}>
        {data.map((d) => (
         <div className=" bg-white ">
          <img src={d.img} alt="img" className="w-full lg:h-40 h-36 " />
         </div>
        ))}
 
      </Slider> */}
      {/* </div> */}
    </div>
    
  </div>

 

  </section>;
  
};

export default Landing;

