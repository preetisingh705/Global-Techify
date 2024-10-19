// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"
import data from './data'



function CenterMode() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow:2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow:1,
        slidesToScroll: 1,
        arrows: false
        
        }
      },
      {
        breakpoint:480,
        settings:{
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots:true
        
        }
      },
    
    ]
  };
  return (
    <div className="w-5/6  m-auto">
    <div className="mt-4  ">
      <Slider {...settings}>
        {data.map((d) => (
         <div className="bg-white p-2 h-[380px] md:h-[400px]  text-black rounded-xl ">
         <div className="h-48 bg-[#bbb3e4] flex justify-center items-center shadow-b-xl  rounded-xl  ">
          <img src={d.img} alt="img" className=" w-50 " />
         </div>
        <div className="flex flex-col justify-center items-center gap-4 m-2  font-Verdana">
          <p className="text-2xl font-bold">{d.titel}</p>
          <p className="text-center ">{d.detail}</p>
          <button className="border-solid border-b-4 border-[#7862e4] text-[#7862e4] text-lg px-1 py-1 ">Read More</button>
        </div>
         </div>
        ))}
 
      </Slider>
    </div>
    </div>
  );
}

export default CenterMode;

