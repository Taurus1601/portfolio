import React, { useState } from "react";

import "./photos.css";

function Photos() {
  const statc ='rotate-0 scale-[0.65]' ;
  const statc2 = 'rotate-12 scale-[0.45]';
  const [effect , setEffect ]= useState('rotate-0 scale-[0.60]');
  const [effect1 , setEffect1 ]= useState('rotate-12 scale-[0.3]');
  const [appear , setAppear] = useState("hidden");

 const handlechanges=()=>{
  {
      setEffect('rotate-6 scale-[0.65]');
      setEffect1('rotate-12 scale-[0.40]');
      console.log("hello");
      setAppear("visbile animate-pulse");
  }
 }
 function handlechangesleave(){
  setEffect('rotate-0 scale-[0.60]');
  setEffect1('rotate-12 scale-[0.3]');
  setAppear("");
 }
  
  return (
    <>
   
      

   <h1 className=" font-mono font-semibold text-4xl fixed top-0 bg-white h-[15vh] pt-10 px-10 pb-10 w-[100vw]">Photos</h1>

      <main className="flex flex-rows w-[100vw] h-[100vh] translate-y-20 mt-10 overflow-x-hidden">
        <div className="basis-1/2">
          <div > <img src={"/public/IMG_0371.jpeg"} alt="" className="w-[100%]" /></div>
          <div className=" h-[66vh]"></div>
          <div >  <img src="/public/IMG_0922.jpeg"  className="w-[100%]" alt="" /></div>
          <div className={`  text-center ${appear} translate-y-80`}>
            Check My Collection 👉🏻<button className="p-3 mx-5  rounded bg-zinc-200">
Click Here
            </button>
          </div>


        </div>
        <div className="basis-1/2">
          <div className=" h-[53vh]"></div>
        <div > <img src="/public/IMG_0918.jpeg" className="w-[100%]" alt="" /></div>
        <div className=" h-[49.5vh] "></div>
        <div className="-m-3  h-[53vh] relative " onMouseEnter={handlechanges} onMouseLeave={handlechangesleave} >
        <span className='flex relative  '>
            <img src="/small/1.jpeg" className={`absolute  rounded-md -translate-x-[100px] -translate-y-12 rotate-0 z-10 ${effect} duration-500`}/>
            <img src="/small/2.jpeg" className={`absolute  rounded-md translate-x-[248px] -translate-y-12 rotate-0 z-10 ${effect} duration-500`}/>
            <img src="/small/6.jpeg" className={`absolute  rounded-md -translate-x-[100px] translate-y-40 rotate-0 z-10 ${effect} duration-500`}/>
            <img src="/small/7.jpeg" className={`absolute  rounded-md translate-x-[250px] translate-y-40 rotate-0 z-10 ${effect} duration-500`}/>
            <img src="/small/5.jpeg" className={`absolute  rounded-md translate-x-16 translate-y-0 rotate-0 z-50 scale-[.5] hover:rotate-3 duration-500`}/>
            <img src="/small/3.jpeg" className={`absolute rounded-md -translate-x-24 -translate-y-48 -rotate-12 z-10 ${effect1} duration-500`}/>
            <img src="/small/4.jpeg" className={`absolute rounded-md translate-x-56 -translate-y-44 rotate-12 z-10 ${effect1} duration-500`}/>
          </span>


         
        </div>
        </div>
      </main>
    </>
  );
}

export default Photos;
