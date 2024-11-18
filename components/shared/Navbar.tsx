'use client'
import React from "react";
import { Menu, Search, Cast, Bell, User, Microchip } from "lucide-react";

import { useScrolled } from "@/hooks/scroll";
import { cn } from "@/lib/utils";

export default function Navbar() {

  const scrolled = useScrolled();


  return (
    <>
      <nav className={cn('fixed w-full py-4', scrolled && "border-b border-white/5 shadow-sm bg-black")}>
        <header className="bg-transparent shadow-sm w-full ">
          <div className="flex items-center justify-between px-4 ">
            <div className="flex items-center">
              <div className="lg:hidden flex">{/* <MobileNavbar /> */}</div>
              <a href="/home" className="flex gap-1">
                <img src="/icon_rgb.png" alt="" className="w-10 h-10" />
                <h2 className="flex font-sans  text-xl items-center  ">Premium</h2>
              </a>
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
    </>
  );
}
