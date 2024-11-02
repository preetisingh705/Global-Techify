import { IoArrowForward, IoMailOpen } from "react-icons/io5";
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import Mentorship from "../../assets/Mentor/Mentorship.jpg"
import image from "../../assets/Mentor/mentorboy.jpg"

function Mentor() {
 
  
    return (
    <section  className='p-4 md:p-8 dark:bg-black bg-zinc-100 overflow-hidden  ' >
        

    {/* Heading name */}
      <div className='grid font-poppins justify-center items-center mt-4  '>
      <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}>
          <p className="text-[25px] md:text-[35px]  text-[#7862e4]  font-semibold leading-none">MentorShip</p>
      </motion.div>     
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] p-4 gap-y-4 gap-x-2 md:gap-x-8 mt-4 md:mt-8">

      <div className="flex flex-col gap-y-4 md:gap-y-10 md:p-4">

       <div className="flex flex-col gap-y-4 md:gap-y-10">
       <motion.p 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}} 
        className="text-3xl  md:text-4xl lg:text-6xl font-bold leading-1">
            Let's Started Planning For The Future Today !
        </motion.p>
        <motion.p
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}} 
         className="text-xl leading-1">
        Global Techify gives you the information, tools and support to figure out the skills you need today that will get you the job ou want in the future.
        </motion.p>
       </div>

       <div className="flex gap-x-4">
         <motion.button 
         variants={fadeIn('up',0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}}
         className="p-2 lg:p-4 bg-[#6952dd] rounded-md text-sm md:text-xl text-white font-semibold">
           BOOK A SESSION
        </motion.button>
       <motion.button 
       variants={fadeIn('up',0.4)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.7}}
       className="p-2 md:p-4 border-[#9385da] text-sm md:text-xl  border-2 border-solid rounded-md text- font-semibold">
       START JOURNEY
       </motion.button>
       </div>
    </div>

    <div className="grid grid-cols-1 gap-y-2">

        <motion.div
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
         className="relative">
        <div className="z-0">
        <img src={image} className="h-40 w-40 md:h-52 md:w-56 rounded-md " />
        </div>
        <div className="absolute z-10 top-0 lg:top-4 right-0 xl:right-28 p-2 lg:p-4 text-white bg-[#a295e2] rounded-md">How To Get Job in Google ?</div>
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
         className="flex justify-end relative">
        <div className="z-0">
        <img src={Mentorship}  className=" h-52 w-56 rounded-md" />
        </div>
        <div className="absolute z-10 top-0 lg:top-8 left-0 xl:left-28 p-2 lg:p-4 text-white bg-[#9f94d4] rounded-md">DSA Practice and Learn Skills.</div>

        </motion.div>
    </div>
  </div>



    </section>

        
    )
}

export default Mentor;


