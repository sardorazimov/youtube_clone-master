import MobileFooter from '@/components/shared/detalis/MobileFooter'
import Navbar from '@/components/shared/Navbar'
import Sidebar from '@/components/shared/SideBar'
import React from 'react'

const Rootlayout = ({children}:{children: React.ReactNode}) => {
  return (
  <main className='relative'>
   <Navbar /> 
   <div className='flex'>
     <div className='lg:w-[264px] lg:flex hidden'><Sidebar /></div>
     <section className='flex min-h-screen flex-1 flex-col  pb-6 pt-20'>
       <div className='w-full'>
         {children}
         <MobileFooter />
       </div>
     </section>
   </div>
 </main>
  )
}

export default Rootlayout