"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Menu from "../Navigationbar/menu";
import Zoop from "../Components/AnimatedText/zoop";


function Page() {
  const [letsconnect , setLetsConnect] = React.useState(false);
  const [mailme , setMailMe] = React.useState(false);
  const [menu , setMenu] = React.useState(false)


  

  return (
    <div>
      {<Menu active={menu} />}
          <button className={`bg-[#c9fd74]
          lg:hidden block relative top-[40px]  left-[70%]  z-[1000]
           text-black font-bold py-4 px-6 md:mr-[10%] rounded-full`} onClick={()=>{
          
            setMenu(!menu);
          }}>
           <Zoop>
            Menu
            {/* bg-[#c9fd74]
          lg:hidden block relative top-0 -right-[80%] z-[1000]
           text-black font-bold py-2 px-4 rounded-full */}
            </Zoop> 
            
            </button>
      <h1 className="lg:text-9xl text-[44px] m-5 ml-16 mt-14 lg:m-16 font-black text-neutral-700">
        Get In Touch<span className="text-purple-500">.</span>
      </h1>
      
      <div className="flex flex-col justify-center lg:flex-row gap-5 ">
        <section>
         
       <MailMe active={mailme}/>

          <a href="mailto:sanjanathyady@icloud.com" className="text-2xl lg:text-4xl   ml-16 lg:m-16"
          onMouseEnter={()=>{
            setMailMe(true);
          }}
          onMouseLeave={() => {
            setMailMe(false);
          }}
          >
            sanjanathyady@icloud.com
          </a>
        </section>
        <section>
          <LetsConnect active={letsconnect}/>  
          <div className="flex gap-10 lg:text-4xl lg:m-5 m-14 text-3xl">
            <a
              href="https://www.linkedin.com/in/sanjan-athyady-7bb043236/"
              target="_blank"
              onMouseEnter={() => {
                setLetsConnect(true);
              }}
              onMouseLeave={() => {
                setLetsConnect(false);
              }}
            >
              LinkedIn{" "}
            </a>
            <a href="https://drive.google.com/file/d/1SmNBVSysSV8kBTrVscqztsdVfIkzrMka/view?usp=share_link"
            onMouseEnter={() => {
              setLetsConnect(true);
            }}
            onMouseLeave={() => {
              setLetsConnect(false);
            }}
            > Resume</a>
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default Page;

const LetsConnect = ({active}) => {
  return(
    <>
    {active==true ? <FramedText text={"Lets Connect."} className={"mt-9 m-5"}/> : <h1
    className="lg:text-7xl text-6xl m-14 lg:mt-9 lg:m-5
   
    font-black text-neutral-700">Lets Connect.</h1>}
    </>
  );
}

const MailMe = ({active}) => {
  return(
    
    <>
    {active==true ? <FramedText text={"Mail Me?"} className={"m-16 "}/> : <h1
    className="text-6xl lg:text-7xl lg:m-16 mt-16 m-14
   
    font-black text-neutral-700">Mail Me?</h1>}
    </>
  );

  
}

const FramedText = ({text , className }) => {
  return(
    <motion.h1
    className={`text-7xl ${className} font-black text-neutral-700`}
    initial={{
      background: "linear-gradient(90deg, #22d3ee , #10b981 50%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      
    }}
    animate={{
      background: "linear-gradient(90deg, #ffffff,#06b6d4  20%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }}>
      {text}
    </motion.h1>
  );
}
;