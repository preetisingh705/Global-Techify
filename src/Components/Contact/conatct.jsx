import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import cont from "../../assets/contact/contact.png"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";


function Contact() {
    return (
    <section  className=' p-4 md:p-8 lg:p-4 dark:bg-black overflow-hidden   bg-zinc-100 pb-8' >

    <div className='grid grid-cols-1 gap-y-4 md:gap-y-16  font-poppins'>

      {/* Events Name */}
    <motion.div
     variants={fadeIn('up',0.4)}
     initial='hidden'
     whileInView={'show'}
     viewport={{once: false, amount: 0.7}} 
    className='grid  mt-4 lg:mt-6 justify-center items-center '>
        <p className="text-[25px] md:text-[35px] text-[#7862e4]  font-semibold leading-none">Get In Touch</p>
    </motion.div>

    <div className="flex flex-col-reverse xl:flex-row gap-x-4 gap-y-4 justify-center items-center">

        <div className='flex flex-col justify-center items-center gap-4'>
        <p className='text-2xl md:text-4xl font-bold dark:text-white'> Have a Questions? </p>
        
        <div className='bg-white p-4 lg:px-10 flex flex-col justify-center items-center gap-4 rounded-md shadow-lg'>
          <p className='text-2xl font-bold text-[#7862e4]'>Send Quaries</p>
          <form className='flex flex-col gap-y-4 '>
            <div className='flex flex-col gap-2 w-full'> 
              <label>Your Name</label>
            <input placeholder='Enter Your Name' className='p-3 rounded-md border-[1px] border-solid border-black'/>
            </div>
            <div className='flex flex-col gap-2 w-full'> 
              <label>Your Email</label>
            <input placeholder='Enter Your Email' className='p-3 rounded-md border-[1px] border-solid border-black'/>
            </div>
            <div className='flex flex-col gap-2'> 
              <label>Your Queries</label>
            <textarea cols={3} placeholder='Enter Your Name' className='p-3 rounded-md border-[1px] border-solid border-black'/>
            </div>
            <button className='p-3 rounded-md bg-[#9383e0] text-lg text-white'>Send</button>
          </form>
        </div>

         </div>


      <div className='flex flex-col p-4 gap-y-4 justify-center items-center'>
        <div className='w-60 md:w-80 flex justify-center items-center '>
          <img src={cont} className='h-full w-full ' />
        </div>

        <div className='flex flex-col md:flex-row  gap-y-4 gap-x-4 '>
          <div className='flex flex-col justify-center items-center p-4 lg:p-6 shadow-lg bg-white rounded-md gap-y-1 '>
            <FaLocationDot className='text-4xl'/>
            <p className='text-xl text-bold text-[#7862e4]'>Address</p>
            <p className='text-center'>Ballia</p>
            <p className='text-center'>Uttar Pradesh,India</p>
          </div>

          <div className='flex flex-col justify-center items-center p-4 lg:p-6 shadow-md bg-white rounded-md gap-y-1'>
            <IoCall className='text-4xl' />
          <p className='text-xl text-bold text-[#7862e4]'>Phone</p>
            <p>+919651609214</p>
          </div>
          <div className='flex flex-col justify-center items-center p-4 lg:p-6 shadow-md bg-white rounded-md gap-y-1'>
            <MdEmail className='text-4xl'/> 
          <p className='text-xl text-bold text-[#7862e4]'>Email</p>
            <p>global.techify.info@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <p className='text-xl md:text-2xl font-semibold dark:text-white'> Other Mehtods To Connect With Us.</p>
          <div className='flex gap-x-4 justify-center items-center'>
            <FaLinkedin  className='text-4xl text-[#8471e2]'/>
            <FaInstagramSquare  className='text-4xl text-[#8471e2]' />
            <FaFacebookSquare  className='text-4xl text-[#8471e2]' />
            <BsThreadsFill  className='text-4xl text-[#8471e2]' />
            <FaGithubSquare  className='text-4xl text-[#8471e2]' />
          </div>
        </div>

      </div>

    </div>

    </div>
    </section>
    )

}

export default Contact;