import Card from "./Card.jsx";
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients.jsx';
import {React , useState} from "react";
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";

function AllCourses () {

   
    return (
        <section id='courses' className='min-h-[55vh] lg:min-h-[95vh] p-8 lg:p-16 dark:bg-black bg-zinc-100 overflow-hidden ' >

    {/* Courses Heading name */}
      <div className='grid grid-cols-1 gap-4  font-poppins  justify-center items-center mt-6'>
      <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
          className='flex flex-col justify-center items-center gap-0 ' >
          <p className="text-[25px] md:text-[35px] text-[#7862e4]  font-semibold leading-none">Courses</p>
          <p className="text-black dark:text-white font-medium text-[22px]">Improve Your Skills</p>
      </motion.div>
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-8 mt-4">
        
       <div className="relative flex rounded-3xl w-full bg-white   max-w-lg min-w-[200px] lg:w-full ">
       <FcSearch class="absolute text-[20px] w-6 h-6 top-2.5 left-2.5 "/>
       <input type="type" class="font-poppins w-full pl-10 md:pl-14  py-2 bg-transparent placeholder:text-black text-black placeholder:text-sm lg:placeholder:text-lg text-lg border border-none  transition duration-300 ease focus:outline-none"
        placeholder="Find Your All Courses here ...." />
       </div>

       <button className="flex justify-center items-center ">
       <IoFilter className="text-4xl dark:text-white" />
       </button>

      </div>

      <div className="flex flex-col gap-y-8 mt-8 font-poppins">
       <Card title="Web Development" />
       <Card title="Data Structure" />

       <Card title="Programming Languages" />

       </div>
   </section>
    )
}

export default AllCourses;