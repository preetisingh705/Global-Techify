import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import CenterMode from './CenterMode';
import { IoArrowForward } from "react-icons/io5";


function Services () {
  return(
    <section id='services' className='min-h-[50vh] lg:min-h-[100vh]  dark:bg-black overflow-hidden bg-zinc-100' >

    <div className=' justify-center items-center mt-6' >
      <div className='grid grid-cols-1 justify-center items-center font-Verdana'>
        
        {/* Services Text */}
      <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className=' flex flex-col  justify-center items-center text-[30px] mt-8 lg:mt-12 mb-2 lg:text-[40px] text-[#7862e4]  font-semibold '>
           SERVICES
   
      </motion.div>


     {/* Slider */}
      <div className='mt-2'>
       <CenterMode />
       
      </div>

      {/* Know More button */}
      <div className='flex  mt-10 justify-center items-center text-[25px]  lg:text-[30px] text-[#7862e4] font-Verdana  font-semibold '>
      <button className='flex'> Know more <IoArrowForward className='m-2 text-[20px]  lg:text-[35px] text-[#7862e4]' /> 
      </button>  
      </div>
     

    </div> 
    </div>
    </section>
  )
}

export default Services;