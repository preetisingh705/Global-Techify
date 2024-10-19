import { useEffect } from "react";
import { getCourses} from '../../redux/action/coursesAction.js'
import { useDispatch, useSelector } from 'react-redux';

function Card () {
    const { courses } = useSelector(state => state.getCourses);

    const dispatch = useDispatch();
    
    useEffect (() => {
      dispatch(getCourses())
    },[dispatch])

    return (
        < div className='grid  grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-x-16 '>

        {/* Courses Card */}
      {courses.map( (d) => (

        <div className="bg-white rounded-xl  text-black p-4">
         <div className=" md: border-slate-500 flex  justify-center  items-center  bg-slate-400 rounded-xl  ">
         <img src={d.url} alt="img" className=" center rounded-xl" />
        </div>

       <div className="flex  flex-col justify-start  gap-y-4">
         <p className="text-2xl font-bold">{d.title.shortTitle}</p>
         <p className="sm:text-justify flex justify-center items-center font-semibold">Special Discount Prices</p>

         <div className="flex gap-x-2 md:gap-x-8 lg:gap-x-0 xl:gap-x-8 justify-center items-center">
           <del>₹ {d.price.cost}</del>
           <p className="font-bold text-xl">₹ {d.price.mrp}</p>
           <div className="bg-green-500 text-white rounded-xl px-2 flex justify-center items-center">{d.price.discount}off
         </div>
         </div>
         <div className="flex flex-row gap-2 items-center justify-center">
         <button className=" text-[#7862e4] text-lg px-3 py-1 rounded-lg" ><u>..View More</u></button>
         <button className="bg-[#7862e4] text-white text-lg px-3 py-1 rounded-lg font-Arial">Buy Now</button>

           </div>
       </div>
      </div>

       ))}
      </div>

    )
}

export default Card;