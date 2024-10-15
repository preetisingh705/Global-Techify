  
function About() {
    return (
    <section id='events' className='min-h-[50vh] lg:min-h-[95vh] p-8 lg:p-10 dark:bg-none overflow-hidden  bg-zinc-100' >

      <div className='grid grid-cols-1 mt-4  font-Verdana'>
        {/* Events Name */}
        <div 
       
        className='grid grid-cols-1 md:grid-cols-[40%_60%]  mt-4 lg:mt-6 mb-2 '>
       <div  className='flex flex-col justify-start gap-0 ' >
          <p className="text-[30px] lg:text-[40px] text-[#7862e4]  font-semibold leading-none">EVENTS</p>
          <p className="text-black font-medium text-[22px]">Let's Start Your Practice</p>
       </div>

       {/* contest button */}
      <div className="flex justify-start md:justify-end items-center">
        <button className="text-2xl px-4 font-bold text-[#7862e4] border-2 border-black rounded">Contest</button>
      </div>
      </div>

      </div>
    </section>   
    )
}



export default About;


