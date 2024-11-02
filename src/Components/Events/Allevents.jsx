

import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import data from './data'
import { FaHandPointRight } from "react-icons/fa";


function Allevents() {
    return (
    <section id='events' className='p-4 md:p-8  dark:text-white  dark:bg-black overflow-hidden  bg-zinc-100' >

      <div className='grid grid-cols-1 mt-4 gap-y-4 font-poppins'>
      <div className='grid poppins justify-center items-center mt-10  '>
      <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}>
          <p className="text-[25px] md:text-[35px]  text-[#7862e4]  font-semibold leading-none"> Events</p>
      </motion.div>     
      </div>

      <div className="flex flex-col  md:flex-row justify-center gap-x-4 md:gap-y-0 gap-y-4 items-center">
      <motion.p variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
         className='text-lg font-semibold'>Start Here Plane A Events To Embarks Your Coding Journey With Global - Techify 
      </motion.p>
          {/* contest button */}
     <motion.div variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
         className="flex justify-end items-center gap-x-3">
     <FaHandPointRight className='text-4xl text-[#7862e4]' />

        <button className="text-2xl px-4 font-bold text-[#7862e4] border-2 dark:border-white border-black rounded">Join Now</button>
      </motion.div>
      </div>


       {/* Events Box */}
       <div className="flex justify-center items-center mt-8 ">
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-10 lg:gap-6 md:mx-10 xl:mx-20'>
       {data.map((d) => (
         <div className=" text-black shadow-md border-b-2 border-solid rounded-lg bg-white  ">
          <div className="flex justify-center items-center rounded-t-lg ">
          <img src={d.img} alt="img" className="center h-40 w-full rounded-t-lg" />
         </div>
        <div className="flex flex-col py-4 px-4 border-t-[1px] border-black  border-solid rounded-b-lg ">
          <p className="text-2xl font-bold">{d.titel}</p>
          <p className=" "> {d.detail}</p>
        </div>
       </div>
        ))}
       </div>
       </div>


      </div>
    </section>   
    )
}



export default Allevents;


