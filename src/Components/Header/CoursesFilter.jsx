import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import Filterbox from "../Allcousre/Filterbox";

function Allcourses () {
    const [open, setOpen] = useState(false);

      const openBox = () => {
        if (open == true) {
            setOpen(false)
        }
        else{
            setOpen(true);

        }
      }

    return(
        <div className='hidden md:flex ml-2 px-1  border-solid border-2 border-[#DBDBDC] rounded-lg  items-center'>
        <button className=' flex font-bold border-none border-[#DBDBDC] text-[#535353] dark:text-[#7862e4] hover:none'  onClick={()=> openBox()} > All Courses
           <FaAngleDown className=' text-xl text-[#563AE0]' />
        </button>
        {
            open &&  (<Filterbox />)

        }

       </div>
    )
}

export default Allcourses;