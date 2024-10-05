
function Events() {
    return (
    <section id='events' className='min-h-[50vh] lg:min-h-[95vh] p-8 lg:p-16 dark:bg-none overflow-hidden  bg-zinc-100' >



      <div className='grid grid-cols-1 mt-4  '>
        {/* Events Name */}
        <div className='grid grid-cols-[40%_60%]  mt-4 lg:mt-6 mb-2 '>
      <div  className='flex flex-col justify-start gap-0 ' >
          <p className="text-[30px] lg:text-[40px] text-[#563AE0]  font-semibold leading-none">EVENTS</p>
          <p className="text-black font-medium text-[22px]">Let's Start Your Practice</p>
      </div>
      <div className="flex justify-end items-center">
        <button className="text-2xl px-4 font-bold text-[#563AE0] border-2 border-black rounded">Contest</button>
      </div>
      </div>

       {/* Events Box */}
       <div className="flex justify-center items-center mt-8 ">
         < div className='grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14'>
       {data.map((d) => (
         <div className="bg-white  p-4  text-black ">
          <div className=" bg-white flex justify-center items-center  ">
          <img src={d.img} alt="img" className="w-48 " />
         </div>
        <div className="flex flex-col   m-2 ">
          <p className="text-2xl font-bold">{d.titel}</p>
          <p className=" ">{d.detail}</p>
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


const data = [
  {
    img:`../../src/assets/Events/Contest.png`,
    titel:`Upcoming Events`,
    detail:`E-learning, or online learning, is a modern form of education. or online learning, is a modern form of education`,
  },
  {
    img:`../../src/assets/Events/Contest.png`,
    titel:`Live Events`,
    detail:`E-learning, or online learning, is a modern form of education.-learning, or online learning, is a modern form of education `,
  },
  {
    img:`../../src/assets/Events/Contest.png`,
    titel:`Previous Events`,
    detail:`E-learning, or online learning, is a modern form of education.-learning, or online learning, is a modern form of education`,
  },
  {
    img:`../../src/assets/Events/Contest.png`,
    titel:`Prizes`,
    detail:`E-learning, or online learning, is a modern form of education .-learning, or online learning, is a modern form of education`,
  },
  {
    img:`../../src/assets/Events/Contest.png`,
    titel:`Global Rating`,
    detail:`E-learning, or online learning, is a modern form of education .-learning, or online learning, is a modern form of education`,
  },
  {
    img:`../../src/assets/Events/Contest.png`,
    titel:`Mentor Program`,
    detail:`E-learning, or online learning, is a modern form of education .-learning, or online learning, is a modern form of education`,
  }
]