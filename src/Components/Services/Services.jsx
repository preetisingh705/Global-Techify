import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import CenterMode from './CenterMode';
import { IoArrowForward } from "react-icons/io5";


function Services () {
  return(
    <section id='services' className=' dark:bg-black overflow-hidden bg-zinc-100' >

      <div className='grid grid-cols-1 gap-y-4 justify-center items-center font-poppins'>
        
        {/* Services Text */}
      <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className=' flex flex-col  justify-center items-center text-[25px] md:text-[35px] mt-8   text-[#7862e4]  font-semibold '>
         Our Services
      </motion.div>
      
      <motion.div
       variants={fadeIn('up',0.4)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.7}}
       className='text-center text-sm md:text-lg mx-4 md:mx-20 xl:mx-40 flex justify-around items-baseline '>
        Global Techify Provide the Online Courses Of there Best Top Teachers  & Mentorship Program To Guidance To the Students . Oraganizing Events On the New Techonology.
        </motion.div>

     {/* Slider */}
      <div className='mt-4 md:mt-8'>
       <CenterMode />
       
      </div>

      {/* Know More button */}
      <div className='flex  mt-10 justify-center items-center text-[25px]  lg:text-[30px] text-[#7862e4] font-poppins  font-semibold '>
      <button className='flex'> View more <IoArrowForward className='m-2 text-[20px]  lg:text-[35px] text-[#7862e4]' /> 
      </button>  
      </div>
     

    </div> 
    
    </section>
  )
}

export default Services;