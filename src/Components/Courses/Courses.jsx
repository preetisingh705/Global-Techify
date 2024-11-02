import { IoArrowForward } from "react-icons/io5";
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import {Link} from 'react-router-dom';
import { coursname } from "./coursname";
import { IoStar } from "react-icons/io5";


function Courses () {
 
  
    return (
    <section id='courses' className='p-4 md:p-10 dark:bg-black bg-zinc-100 overflow-hidden  ' >

    {/* Courses Heading name */}
      <div className='grid font-poppins justify-center items-center mt-4 '>
      <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}>
          <p className="text-[25px] md:text-[35px]  text-[#7862e4]  font-semibold leading-none">Our Courses</p>
      </motion.div>     
      </div>


      {/* Browse */}
    <div className="flex  flex-col gap-y-4 justify-center items-center mt-4">
    <motion.p
    variants={fadeIn('up',0.4)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.7}}
     className="text-[23px] md:text-4xl lg:text-5xl font-bold">Browse Our Best Courses</motion.p>
    <motion.p variants={fadeIn('up',0.4)}
     initial='hidden'
     whileInView={'show'}
     viewport={{once: false, amount: 0.7}}
      className="text-lg text-center"> 100+ videos and Live Classes with Books , Notes of Our Best Teachers</motion.p>

    </div>


       {/*Card of courses  */}

       < div className=' grid  grid-cols-1 gap-y-6 md:grid-cols-3   px-2 md:gap-x-3 lg:px-20  justify-center items-center mt-6  '>
       {coursname.map( (d) => (
       <div className="bg-white rounded-xl  text-black md:p-4 p-2 shadow-md border-b-2 border-solid ">
         <div className="  md:border-slate-500 flex  justify-center  items-center rounded-xl    ">
         <img src={d.url} alt="img" className=" center rounded-xl" />
        </div>

        <div className="flex  flex-col   gap-y-3 ">
         <p className="text-xl font-bold flex justify-center  text-[#7862e4] items-center">{d.title}</p>
         <div className="flex flex-row justify-between">
         <p className="sm:text-justify flex   font-semibold">{d.description}</p>
         <div className="flex gap-x-2 text-yellow-300"><IoStar  /><IoStar /><IoStar /><IoStar /></div>
         </div>
        </div>

      </div>
       ))}
 
        </div>

      {/* View All Button */}

      <Link to='/allcourses'>
      <div className='flex  mt-6 justify-center items-center    text-[#563AE0] font-poppins font-semibold  '>
      <button className='flex border-2 border-solid px-2 border-[#563AE0]  rounded-md text-[20px] lg:text-[25px]'> All Courses <IoArrowForward className='m-2 text-[20px]  lg:text-[25px] text-[#563AE0]' /> 
      </button>  
      </div>
      </Link>

    </section>

        
    )
}

export default Courses;


