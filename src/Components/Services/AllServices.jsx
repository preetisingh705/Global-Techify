import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';



function AllServices() {

  return <section  className=' dark:bg-black overflow-hidden bg-zinc-100 p-4 lg:p-8' >

      <div className='grid grid-cols-1 justify-center items-center font-poppins mt-3 md:mt-0 '>
        
        {/* Services Text */}
      <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='font-poppins flex flex-col  justify-center items-center text-[30px] mt-8 lg:mt-12 mb-2 lg:text-[40px] text-[#7862e4]  font-bold '>
           SERVICES
           
   
      </motion.div>

      <motion.p 
       variants={fadeIn('up',0.4)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.7}}
       className='text-center text-md  md:text-lg font-poppins md:px-4'>Our Services Which Give the best Imapct to the Students to Learn them and growing the skills .
      We are give our best for the students growth and development</motion.p>

     {/* Slider */}
      <div className='flex flex-col justify-center items-center gap-y-4 mt-4 lg:mt-10 lg:px-20'>
      
        {data.map((d) => (
         <div
          className=" p-4 lg:p-8 grid grid-cols-1 md:grid-cols-2  text-black rounded-xl  gap-x-10 bg-white shadow-lg">
         <div className="h-60 bg-[#bbb3e4] flex justify-center items-center shadow-b-xl  rounded-xl  ">
          <img src={d.img} alt="img" className="h-full w-full rounded-md" />
         </div>
        <div className="flex flex-col  gap-4 m-2  font-poppins">
          <p className="text-2xl font-bold">{d.titel}</p>
          <p className=" ">{d.detail}</p>
          <button className="rounded-md w-40 border-solid border-2 border-[#7862e4] text-[#7862e4] text-lg px-1 py-1 "> Start Here</button>
        </div>
         </div>
        ))}
 
           
      </div>

     
     

    </div> 
    
    </section>

}

export default AllServices;

const data = [
  {
    img:`../../src/assets/Services/E-learn.jpg`,
    titel:`Online Courses`,
    detail:`Web design is the process of creating and maintaining a website's visual and structural aspects.
     It involves many skills and disciplines, including: User interface design (UI), User experience design (UX),
      Search engine optimization, Web graphic design, and Authoring.`,
  },
  {
    img:`../../src/assets/Services/Mentor.jpg`,
    titel:`Mentorship`,
    detail:` Web design is the process of creating and maintaining a website's visual and structural aspects.
     It involves many skills and disciplines, including: User interface design (UI), User experience design (UX),
      Search engine optimization, Web graphic design, and Authoring.`,
  },
  {
    img:`../../src/assets/Events/business.jpg`,
    titel:`Business Plan`,
    detail:`Web design is the process of creating and maintaining a website's visual and structural aspects.
     It involves many skills and disciplines, including: User interface design (UI), User experience design (UX),
      Search engine optimization, Web graphic design, and Authoring.`,
  },
  {
    img:`../../src/assets/Events/app.jpg`,
    titel:`App Design`,
    detail:`Web design is the process of creating and maintaining a website's visual and structural aspects.
     It involves many skills and disciplines, including: User interface design (UI), User experience design (UX),
      Search engine optimization, Web graphic design, and Authoring. `,
  },
  {
    img:`../../src/assets/Events/ai.jpg`,
    titel:`Artificial Intelligence`,
    detail:`Web design is the process of creating and maintaining a website's visual and structural aspects.
     It involves many skills and disciplines, including: User interface design (UI), User experience design (UX),
      Search engine optimization, Web graphic design, and Authoring. `,
  },
  {
    img:`../../src/assets/Events/web.jpg`,
    titel:`Web Designing`,
    detail:`Web design is the process of creating and maintaining a website's visual and structural aspects.
     It involves many skills and disciplines, including: User interface design (UI), User experience design (UX),
      Search engine optimization, Web graphic design, and Authoring. `,
  },
  {
    img:`../../src/assets/Events/ml.jpg`,
    titel:`Machine Learning`,
    detail:`Web design is the process of creating and maintaining a website's visual and structural aspects.
     It involves many skills and disciplines, including: User interface design (UI), User experience design (UX),
      Search engine optimization, Web graphic design, and Authoring. `,
  },

 
]


