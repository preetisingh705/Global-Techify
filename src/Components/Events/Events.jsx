import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import data from './data'

function Events() {
    return (
    <section id='events' className='min-h-[50vh] lg:min-h-[95vh] p-8 lg:p-10 dark:text-white  dark:bg-black overflow-hidden  bg-zinc-100' >

      <div className='grid grid-cols-1 mt-4  font-Verdana'>
        {/* Events Name */}
        <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='grid grid-cols-1 md:grid-cols-[40%_60%]  mt-4 lg:mt-6 mb-2 '>
       <div  className='flex flex-col justify-start gap-0 ' >
          <p className="text-[30px] lg:text-[40px] text-[#7862e4]  font-semibold leading-none">EVENTS</p>
          <p className="text-black font-medium text-[22px] dark:text-white">Let's Start Your Practice</p>
       </div>

       {/* contest button */}
      <div className="flex justify-start md:justify-end items-center">
        <button className="text-2xl px-4 font-bold text-[#7862e4] border-2 dark:border-white border-black rounded">Contest</button>
      </div>
      </motion.div>

       {/* Events Box */}
       <div className="flex justify-center items-center mt-8 ">
         <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14'>
       {data.map((d) => (
         <div className=" text-black  ">
          <div className="h-48 lg:w-68 xl:w-80 flex justify-center items-center rounded-t-lg bg-[#aeb3e4]">
          <img src={d.img} alt="img" className="h-40" />
         </div>
        <div className="flex flex-col py-4 px-4 bg-white  rounded-b-xl ">
          <p className="text-2xl font-bold">{d.titel}</p>
          <p className=" "> {d.Time}</p>
        </div>
       </div>
        ))}
       </div>
       </div>


      </div>
    </section>   
    )
}



export default Events;


