import React from 'react'
import "./about.css";
function About() {
  return (
   
   <>
<h1 className='font-semibold font-mono text-6xl m-10'>
  About
</h1>
   <main className='flex flex-row w-[100vw] h-[80vh] '>
    <div id='details' className=' w-[70vw] h-[80vh]'>
      <main className='grid grid-cols-2 gap-10 m-8 mt-28'>
            <div className="container border rounded  h-32 flex flex-row gap-2" id='language'>
            
            <div id='image' className=' basis-1/3 ml-5 -mr-10'>
            <img className='w-16 mt-5' src="https://img.icons8.com/ios-filled/50/source-code.png" alt="source-code"/>
               </div>

              <div id='details' className=' basis-80'>
                <h1 className='font-semibold font-mono text-3xl m-3 '> Languages</h1>
                <p className='font-sans px-7 
                '>
                Python,C,JavaScript,
                SQL,HTML/CSS,NoSQL.
                </p>
              </div>

            </div>
            <div className="container  border rounded  h-32 pl-5 flex flex-row gap-2" id='framework'>
            
            <div id='image 'className=' basis-1/3 '>
            <img className='w-20 -ml-2 mt-2'
             src="https://img.icons8.com/external-line-lima-studio/64/external-build-coding-line-lima-studio.png" alt="external-build-coding-line-lima-studio"/> </div>

              <div id='details' className=' basis-80 -ml-10'>
                <h1 className='font-semibold font-mono text-3xl m-3 ml'>Frameworks</h1>
                <p className='font-sans px-7'>
                React,NextJs,Tailwind,
                FramerMotion,react-three-fiber.
                </p>
              </div>
            </div>
            <div className="container   border rounded  h-32 pt-5 flex flex-row gap-1" id='Tools'>
            
            <div id='image' className=' basis-1/3 -mr-10 ml-5'><img className='w-14 '
            src="https://img.icons8.com/ios-filled/50/maintenance.png" alt="maintenance"/> </div>

              <div id='details' className=' basis-80 ml-2'>
                <h1 className='font-semibold font-mono text-3xl m-3 -mt-1'>Tools</h1>
                <p className='font-sans px-7'>         Git,MySQL,Figma,Postman
                </p>
              </div>
            </div>
            <div className="container  border rounded  h-32 pt-5 pl-5 flex flex-row gap-2" id='Platform'>
            
            <div id='image' className=' basis-1/3 -mr-4'><img className='w-16' src="https://img.icons8.com/ios-filled/50/virtual-machine.png" alt="virtual-machine"/> </div>

              <div id='details' className=' basis-80 -ml-5'>
                <h1 className='font-semibold font-mono text-3xl m-3 '>Platforms</h1>
                <p className='font-sans px-7'>
                Linux,Windows,Firebase
                </p>
              </div>

            </div>
            <div className="container  border rounded  h-32 pt-5 flex flex-row gap-2" id='soft skill'>
              <div id='image' className=' basis-1/3 ml-5 -mr-10'>
              <img className='w-16' src="https://img.icons8.com/ios-filled/50/communication-skill.png" alt="communication-skill"/> </div>

              <div id='details' className='basis-80 ml-4'>
                <h1 className='font-semibold font-mono text-3xl '>soft skill</h1>
                <p className='font-sans px-6'>
                Leadership,Event Management,Teaching.
                </p>
              </div>

            </div>
            <div className="container  border rounded  h-32 pt-5 pl-5 flex flex-row gap-2" id='experience'>
            <div id='image' className=' basis-1/3 -mr-4'>
              <img className='w-16' src="https://img.icons8.com/ios/50/briefcase-settings.png" alt="briefcase-settings"/> </div>
            
              <div id='details' className=' basis-80 -ml-5' >
                <h1 className='font-semibold font-mono text-3xl m-3'>Experience</h1>
                <p className='font-sans px-7'>
                  Web Developer Intern 
                </p>
              </div>

            </div>
            
      </main>
    </div>
    <div id="image" className='bg-slate-500 basis-1/3 '>

    </div>
   </main>
    <span className=' w-[100vw] h-[24vh] flex flex-col'>
      <div id="resume" className='w-[100vw] h-[12vh] '>
         <p className='top-10 relative text-xl text-center'> Check out my Resume here </p>
         <button className='bg-white p-3  relative left-[80vw] rounded top-1'>Resume →</button>

      </div>
      <div id="projects" className='w-[100vw] h-[12vh] '>
      <p className='top-10 relative text-xl text-center'> Check out my Projects Here</p>
        <button className='bg-zinc-300 p-3 relative left-[80vw] rounded top-1'>Projects →</button>
      </div>
    </span>
        
   </>
  )
}

export default About