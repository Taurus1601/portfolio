import React from 'react'

function About() {
  return (
   
   <>
<h1 className='font-semibold font-mono text-3xl m-10'>
  About
</h1>
   <main className='flex flex-row w-[100vw] h-[80vh] bg-slate-700'>
    <div id='details' className='bg-sky-500 w-[70vw] h-[80vh]'>
      <main className='grid grid-cols-2 gap-5 m-5 mt-60'>
            <div className="container bg-green-400 h-24 flex flex-row gap-2" id='language'>
            <div id='image' className='bg-zinc-700 basis-1/3'><img src="#" alt="" /> </div>

              <div id='details' className='bg-zinc-200 basis-80'>
                <h1 className='font-semibold font-mono text-3xl m-10'></h1>
                <p className='font-sans'>
                </p>
              </div>

            </div>
            <div className="container bg-green-400 h-24 flex flex-row gap-2" id='framework'>
            <div id='image 'className='bg-zinc-700 basis-1/3'><img src="#" alt="" /> </div>

              <div id='details' className='bg-zinc-200 basis-80'>
                <h1 className='font-semibold font-mono text-3xl m-10'></h1>
                <p className='font-sans'>
                </p>
              </div>
            </div>
            <div className="container bg-green-400 h-24 flex flex-row gap-2" id='Tools'>
            <div id='image' className='bg-zinc-700 basis-1/3'><img src="#" alt="" /> </div>

              <div id='details' className='bg-zinc-200 basis-80'>
                <h1 className='font-semibold font-mono text-3xl m-10'></h1>
                <p className='font-sans'>
                </p>
              </div>
            </div>
            <div className="container bg-green-400 h-24 flex flex-row gap-2" id='Platform'>
            <div id='image' className='bg-zinc-700 basis-1/3'><img src="#" alt="" /> </div>

              <div id='details' className='bg-zinc-200 basis-80'>
                <h1 className='font-semibold font-mono text-3xl m-10'></h1>
                <p className='font-sans'>
                </p>
              </div>

            </div>
            <div className="container bg-green-400 h-24 flex flex-row gap-2" id='soft skill'>
              <div id='image' className='bg-zinc-700 basis-1/3'><img src="#" alt="" /> </div>

              <div id='details' className='bg-zinc-200 basis-80'>
                <h1 className='font-semibold font-mono text-3xl m-10'></h1>
                <p className='font-sans'>
                </p>
              </div>

            </div>
            <div className="container bg-green-400 h-24 flex flex-row gap-2" id='experience'>
            <div id='image' className='bg-zinc-700 basis-1/3'><img src="#" alt="" /> </div>
            
              <div id='details' className='bg-zinc-200 basis-80' >
                <h1 className='font-semibold font-mono text-3xl m-10'></h1>
                <p className='font-sans'>
                </p>
              </div>

            </div>
            
      </main>
    </div>
    <div id="image">

    </div>
   </main>
    <span className='bg-red-400 w-[100vw] h-[24vh] flex flex-col'>
      <div id="resume" className='w-[100vw] h-[12vh] bg-amber-500'>
         <p></p>
         <button className='bg-white p-3  relative left-[80vw] rounded top-6'>Resume →</button>

      </div>
      <div id="projects" className='w-[100vw] h-[12vh] bg-violet-700'>
        <p></p>
        <button className='bg-white p-3 relative left-[80vw] rounded top-6'>Projects →</button>
      </div>
    </span>
        
   </>
  )
}

export default About