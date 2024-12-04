import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import cont from "../../assets/contact/contact2.png"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";


function Contact() {
    return (
    <section id='contact' className=' px-4   dark:bg-black overflow-hidden py-10' >

        <div  className='mt-4  flex justify-center items-center'>
        <p className="text-[25px] md:text-[40px] text-[#7862e4]  font-semibold leading-none">Contact Us</p>
    </div>

      <div className='text-md md:text-lg font-poppins dark:text-white flex justify-center items-center p-4 lg:px-40 mt-2 md:mt-6 text-center'><p>
        Got any questions about courses or mentorship program ? 
        We're here to help. Chat to our friendly team available 24X7 and get onboard in less than 5 mintues .</p>
        </div>

  
          <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center  ">
        <div className='flex justify-center items-center  '>
          <img src={cont} className='w-[80%] ' />
        </div>

        <div className='flex flex-col gap-y-6'>
          
        <div className=' p-4 bg-white dark:bg-neutral-900 border dark:border-neutral-400 dark:text-white 
         w-full flex flex-col   gap-4 rounded-md shadow-lg'>
          <p className='text-2xl font-poppins text-[#7862e4]'>Subscribe Now</p>

          <form className='flex flex-col  gap-y-2 font-poppins '>
            <div className='flex flex-col gap-2 w-full'> 
            <input placeholder='Enter Your Email' className='p-2 rounded-md border-[1px] border-solid
             dark:bg-neutral-900 dark:border-neutral-400 placeholder:black dark:placeholder-white'/>
            </div>
            <div className='flex justify-center items-center'>
            <button className='py-2  px-6 rounded-lg bg-[#9383e0] text-xl text-white hover:text-[#9383e0] 
            hover:bg-white hover:border-[#9383e0] hover:border'>Subscribe</button>
            </div>
          </form>
          
         </div>
         

           <div className='grid grid-cols-1 md:grid-cols-3 p-2 bg-[#F4F3FF] dark:bg-neutral-800 rounded-md shadow-md    justify-center  '>
           <div className='  flex flex-col gap-y-1 hover:scale-105  '>
           <p className='text-black text-xl font-poppins text-center dark:text-white'>Visit Us</p>
           <div className='flex flex-col  justify-center items-center '>
            
           <div className='p-3 bg-white dark:bg-neutral-900 border dark:border-neutral-400 rounded-full 
           justify-center items-center'>
              <FaLocationDot className='text-2xl text-[#7862e4]'/>
               </div>

                <div >
          <p className='text-xl text-bold text-[#7862e4] text-center'>Location</p>
               <p className=' dark:text-white text-center'>Uttar Pradesh,India</p>
           </div>
             </div>

             </div>

          <div  className='  flex flex-col gap-y-1 hover:scale-105'>
            <p className='text-xl font-poppins text-center dark:text-white'>Call Us</p>
           <div className='flex flex-col  justify-center items-center '>
        <div className='p-3 bg-white dark:bg-neutral-900 border dark:border-neutral-400 rounded-full'>
        <IoCall className='text-2xl text-[#7862e4]' />
           </div>
           <div>
          <p className='text-xl text-bold text-[#7862e4] text-center'>Phone</p>
        <p className='dark:text-white text-center'>+919651609214</p>
        </div>
          </div>
          </div>

          <div className=' flex flex-col gap-y-1 hover:scale-105'>
            <p className='text-xl text-center font-poppins dark:text-white'>Send Email</p>
           <div className='flex flex-col justify-center items-center  '>
            <div className='p-3 bg-white dark:bg-neutral-900 border dark:border-neutral-400 rounded-full'>
          <MdEmail className='text-3xl text-[#7862e4]'/> 
          </div>
          <div>
        <p className='text-xl text-bold text-[#7862e4] text-center'>Email</p>
         <p className='dark:text-white text-center '>global.techify.info@gmail.com</p>
           </div>
           </div>
           </div>

           </div>
           </div> 

          

         
    </div>


      
    </section>
    )

}

export default Contact;