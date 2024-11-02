import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import img from "../../assets/About/image.png"
import img1 from "../../assets/About/image1.png"

function About() {
    return (
    <section  className=' p-4 md:p-8 dark:bg-black overflow-hidden  bg-zinc-100 dark:text-white' >

      <div className='grid grid-cols-1  gap-y-6 mt-4  font-poppins'>
        {/* Events Name */}
      <motion.div
       variants={fadeIn('up',0.4)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.7}} 
      className='grid  mt-4 lg:mt-6 justify-center items-center '>
          <p className="text-[25px] md:text-[35px] text-[#7862e4]  font-semibold leading-none">What We Are?</p>
      </motion.div>



        <div className="grid grid-col-1 xl:grid-cols-2 gap-x-4 gap-y-4  lg:p-8">

        <div className='grid grid-cols-2 gap-x-2'>
         <div className='border-b-2  shadow-md ' > 
          <img src={img} alt="" className='h-full w-full ' />
         </div>
         <div  className='border-b-2  shadow-md '> 
          <img src={img1} alt="" className='h-full w-full' />
         </div>
        </div>

      <div className='lg:p-4 flex flex-col gap-y-8'>

        <p className="">Global Techify virtual E-Learning platform to upskills the coding and programming journey of Students. We pride on our Teacher and Mentors to teaching  the stuents in a new method and their determination to Stand By students to help in upskilling </p>
         <p className='text-xl font-semibold text-center text-[#7862e4]'>Our aim to provide accessible & affordable courses to everybody who exticed to Learn it.</p>
      
      <div className='flex gap-x-4'>

        <div className='flex flex-col'>
        <p className='text-md font-semibold text-[#7862e4]'>Teachers 30+</p>

        <p>Highly Qualified Teachers</p>
        </div>

        <div className='flex flex-col'>
        <p className='text-md font-semibold text-[#7862e4]'>Programs 20+</p>

        <p>High Qualility Videos & Materials</p>


        </div>

        <div className='flex flex-col'>
          <p className='text-md font-semibold text-[#7862e4]'>Mentors 25+</p>
        <p>Top Companies Mentors</p></div>
      </div>
      
      <div className='flex gap-x-8 justify-center'>
      <button className='text-lg p-3 rounded-md border-2 border-solid border-[#7862e4] text-[#7862e4]'>
       Explore Us
      </button>
     <button className='text-md bg-[#7862e4] p-4 rounded-md text-white font-semibold'>
      Join Us
      </button>
      </div>
      
      </div>

      </div>

      </div>
    </section>   
    )
}



export default About;


