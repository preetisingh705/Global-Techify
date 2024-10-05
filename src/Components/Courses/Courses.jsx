import { IoArrowForward } from "react-icons/io5";
import Search from "./Search";


function Courses () {
    return (
    <section id='courses' className='min-h-[55vh] lg:min-h-[95vh] p-8 lg:p-16 bg-zinc-100 overflow-hidden ' >

    {/* Coueses Heading name */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-[40%_60%]  mt-4 lg:mt-6  '>
      <div  className='flex flex-col justify-start gap-0 ' >
          <p className="text-[30px] lg:text-[40px] text-[#563AE0]  font-semibold leading-none">COURSES</p>
          <p className="text-black font-medium text-[22px]">Improve Your Skills</p>
      </div>
      <div className=" ">
        <Search />
      </div>
      </div>

        <div className="flex justify-center items-center mt-8">
         < div className='grid  grid-cols-1 gap-10 '>

         {/* Couses Card */}
       {data.map((d) => (
         <div className="bg-white p-4  text-black flex flex-col md:flex-row justify-start gap-3">
          <div className="w-48 md:border-r-4 md: border-[#563AE0] flex  justify-center lg:justify-start items-center  ">
          <img src={d.img} alt="img" className=" center w-36 " />
         </div>
        <div className="flex flex-col justify-start  gap-2">
          <p className="text-2xl font-bold">{d.titel}</p>
          <p className="sm:text-justify">{d.detail}</p>
          <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-indigo-500 text-white text-lg px-3 py-1 rounded-sm" >Explore Here</button>
          <button className="bg-indigo-500 text-white text-lg px-3 py-1 rounded-sm">Buy Now</button>

            </div>
        </div>
       </div>
        ))}
       </div>
       </div>


      {/* View All Button */}

       <div className='flex  mt-10 justify-center items-center text-[25px]  lg:text-[30px] text-[#563AE0]  font-semibold dark:text-white'>
      <button className='flex'> View All <IoArrowForward className='m-2 text-[20px]  lg:text-[35px] text-[#563AE0]' /> 
      </button>  
      </div>

    
   
    </section>

        
    )
}

export default Courses;

const data = [
  {
    img:`../../src/assets/Services/Learning.png`,
    titel:`Full Stack Web Development Courses`,
    detail:`E-learning, or online learning, is a modern form of education. E-learning, or online learning, is a modern form of education.E-learning, or online learning, is a modern form of education`,
  },
  {
    img:`../../src/assets/Services/Mentoship.png`,
    titel:`DSA Complete Courses`,
    detail:`E-learning, or online learning, is a modern form of education .E-learning, or online learning, is a modern form of education.E-learning, or online learning, is a modern form of education`,
  },
  {
    img:`../../src/assets/Services/Learning.png`,
    titel:`Core Java Courses`,
    detail:`E-learning, or online learning, is a modern form of education. E-learning, or online learning, is a modern form of education. E-learning, or online learning, is a modern form of education`,
  },
 
]
