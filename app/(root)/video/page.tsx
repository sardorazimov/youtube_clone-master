import React from 'react'
import LeftSide from './components/leftside'

const page = () => {
  return (
    <section className='mt-14'>
    <div className='w-full flex flex-1 h-auto'>
     <div className='flex w-[1000px] h-[600px] border rounded-3xl border-white/10 mx-10 mt-4'>
     <iframe
      width="928"
      height="522"
      src="https://www.youtube.com/embed/qqob4D3BoZc?list=RDqqob4D3BoZc"
      title="Anne-Marie - Ciao Adios [Official Video]"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      allowTransparency
      className='w-full h-full rounded-3xl'
    ></iframe>
    </div> 
     <div className='flex flex-col'>
        <LeftSide/>
    </div> 
    </div>

     <div className='flex '>channel</div>
    </section>
  )
}

export default page