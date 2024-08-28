import React from "react";
import Paragraph from "./paragraph";
import Word from "./Word";

const para =
              "Framer Motion 3D is a simple yet powerful animation library for React Three Fiber. It offers most of the same functionality as Framer Motion for\
 declarative 3D scenes. This guide will help you create animations with Motion 3D, but assumes you know the basics of both Framer Motion and React Three Fiber.";

 function Wordlist({childern}){
  return(
      <span className='text-5xl text-white font-sans'>
          {childern}
      </span>
  );

};

function Home() {
  return (
    <>
    <div className="h-[100vh] bg-black"></div>
      <Paragraph value ={para}/>
    <div className="h-[100vh] bg-black"></div>
    <Wordlist>
      <h1>hello</h1>
    </Wordlist>
    </>
  );
}

export default Home;
