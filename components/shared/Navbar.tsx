import React from 'react'
import { Menu, Search, Cast, Bell, User, Microchip } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const categories = [
    "Hammasi", "Gaming", "Jonli", "Musiqa", "Mikslar", 
    "Jangovar va sarguzasht o'yinlar", "Futbol", "Tabiat", 
    "Yaqinda yuklangan", "Tomosha qilingan", "Siz uchun yangi"
  ]

  return (
    
    <nav className="  border-b border-white/15 fixed z-50 w-full bg-transparent backdrop-blur-3xl px-6 py-4 lg:px-10">
    <header className="bg-transparent shadow-sm w-full backdrop-blur-3xl">
        <div className="flex items-center justify-between px-4 ">
          <div className="flex items-center">
            <div className='lg:hidden flex'>
              {/* <MobileNavbar /> */}
            </div>
            <a href='/' className="text-xl font-bold text-red-600">YouTube</a>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-full focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute top-2 right-3 w-5 h-5 text-gray-500" />
            </div>
           
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </header>
    </nav>
  )
}