import { div } from 'framer-motion/client'
import { Home, Play, Plus, Users, User } from 'lucide-react'

export default function MobileFooter() {
  return (
    <div className='fixed'>
    <nav className="lg:hidden sm:flex bg-black text-white p-4 fixed bottom-0 left-0 right-0">
      <ul className="flex justify-between items-center">
        <li className="flex flex-col items-center">
          <Home size={24} className='hover:bg-white/20 ' />
          <span className="text-xs mt-1">Asosiy</span>
        </li>
        <li className="flex flex-col items-center">
          <Play size={24} className='hover:bg-white/20 ' />
          <span className="text-xs mt-1">Shorts</span>
        </li>
        <li>
          <button className="bg-white text-black rounded-full p-3">
            <Plus size={24} className='hover:bg-white/20 ' />
          </button>
        </li>
        <li className="flex flex-col items-center relative">
          <Users size={24} className='hover:bg-white/20 ' />
          <span className="text-xs mt-1">Obunalar</span>
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
        </li>
        <li className="flex flex-col items-center">
          <User size={24} className='hover:bg-white/20 ' />
          <span className="text-xs mt-1">Siz</span>
        </li>
      </ul>
    </nav>
    </div>
  
  )
}