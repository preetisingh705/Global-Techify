
import { Typography } from "@material-tailwind/react";
import Logo from '../../assets/Header/logo.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
 

 
const currentYear = new Date().getFullYear();
 
function Footer() {
  return (
    <footer id="contact" className="relative w-full dark:bg-black bg-white p-4 md:p-6 ">

      <div className="mx-auto w-full max-w-7xl md:px-6 font-poppins ">

        <div className="grid grid-cols-1 justify-between md:grid-cols-[40%_60%] gap-x-10">
        
        <div  className="mb-4   dark:text-white  flex flex-col gap-y-2">
         <div className='flex justify-start items-center gap-x-4 '>
         <img src={Logo} className='w-10 md:w-14 '  />
           <p className=" text-2xl lg:text-3xl  items-center font-bold text-[#563AE0] ">Global Techify</p>
         </div>

         <div>
         <p className="font-medium" >Global Techify is the plateform for providing the best courses to the students. And oraganise Events to give a new techology journey to the students. </p>
         </div>
         <a  className="text-[#563AE0] text-xl" >Click here for 24*7 Support</a>

          <div className='flex flex-col gap-y-4'>
          <p className='text-2xl font-semibold'> Follow Us On</p>
          <div className='flex gap-x-4'>
            <FaLinkedin  className='text-4xl text-[#8471e2]'/>
            <FaInstagramSquare  className='text-4xl text-[#8471e2]' />
            <FaFacebookSquare  className='text-4xl text-[#8471e2]' />
            <BsThreadsFill  className='text-4xl text-[#8471e2]' />
            <FaGithubSquare  className='text-4xl text-[#8471e2]' />
          </div>
        </div>
          
          </div>
         

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-poppins  gap-x-6 gap-y-4">
              <ul className="flex flex-col gap-y-1" >
                <p
                
                  className="font-bold text-xl md:text-2xl text-[#563AE0]  mt-4 lg:mt-0 dark:text-white"
                >
                  USEFUL LINKS
                </p>
                  <li >
                    <p
                    
                      className="py-1 text-xl  transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Home
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      About Us
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Services
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Contact Us
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl font-normal  hover:text-blue-gray-900 dark:text-white"> 
                      Events
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl font-normal  hover:text-blue-gray-900 dark:text-white"> 
                      Mentorship
                    </p>
                  </li>
              </ul>
              <ul  className="flex flex-col gap-y-1">
                <p
                
                  className="text-[#563AE0] font-bold text-xl md:text-2xl  dark:text-white"
                >
                   EVENTS
                </p>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Business Plan
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Artificiall Intelligence
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Machine Learning
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      App Development
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Web Development
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1  text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Entrepreneurship
                    </p>
                  </li>
              </ul>
              <ul  className="flex flex-col gap-y-1">
                <p  className=" text-[#563AE0] text-xl md:text-2xl font-bold  mt-4 lg:mt-0 dark:text-white" >
                
                COURSES
                </p>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Full Stack
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Data Structure
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Languages
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      Html,Css
                    </p>
                  </li>
                  <li >
                    <p
                      className="py-1 text-xl  font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                      JavaScript
                    </p>
                  </li>
              </ul>
          </div>
          
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center font-poppins  border-t border-blue-gray-50 py-4 md:flex-row ">
          <Typography
            variant="small"
            className=" text-center  text-md md:text-xl text-blue-gray-900 dark:text-white"
          >
             Copyrights &copy; {currentYear} All Right Reserved <a >Global Techify</a>
          </Typography>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
