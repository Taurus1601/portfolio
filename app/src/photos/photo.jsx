import React, { useState } from "react";

import "./photos.css";

function Photos() {
 const handlechanges=()=>{}
  
  return (
    <>
      <h1 className="mt-5 font-mono font-semibold text-4xl ml-3">Photos</h1>
      
      <main className="grid grid-cols-2 gap-0 mt-5  ml-2">
        <div className="grid-div1 ">
          <img src={"/public/IMG_0371.jpeg"} alt="" className="" />
        </div>

        <div className="grid-div2 "></div>
        <div className="grid-div2 "></div>

        <div className="grid-div1">
          <img src="/public/IMG_0918.jpeg" className="" alt="" />
        </div>

        <div className="grid-div1">
          <img src="/public/IMG_0922.jpeg"  className="" alt="" />
        </div>

        <div className="grid-div2"></div>
        <div className="grid-div2 "></div>

        <div className="grid-div1 select-grid">
          <span className='span1'>
            <img src="/small/1.jpeg" />
            <img src="/small/2.jpeg" />
            <img src="/small/6.jpeg" />
            <img src="/small/7.jpeg" />
            <img src="/small/5.jpeg" />
            <img src="/small/3.jpeg" />
            <img src="/small/4.jpeg" />
          </span>
          <div
            className="absolute z-[100] rounded-lg  text-center font-sans font-medium text-2xl text-white top-0
           hover:bg-black/50 w-[100%] h-[100%] duration-500" onFocus={handlechanges}
          >
            <p
              className=" m-14 w-[40vw] pl-[56px] pt-[130px]
             h-[40vh] text-transparent hover:text-white
              hover:scale-125 duration-500" onMouseEnter={handlechanges} onMouseLeave={handlechanges}
            >
              click here to see full gallery - &gt;
            </p>
          </div>
         
        </div>
      </main>
    </>
  );
}

export default Photos;
