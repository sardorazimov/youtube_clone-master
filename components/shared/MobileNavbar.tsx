"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import React from 'react'
import { usePathname } from "next/navigation"
import { channels, sidebarLinks, yoursetting } from "@/constants"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

const MobileNavbar = () => {
    const pathname = usePathname();
  return (
    <div className="sm:w-56 flex  flex-col">
     <Sheet >
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-56">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col w-full h-screen ">
        <section className=" fixed  mt-10 overflow-auto overflow-y-auto  l flex h-screen  flex-col  justify-between p-6 text-white  ">
      <div className="flex flex-1 flex-col gap-1 border-b border-white/10">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg hover:bg-white/10 justify-start ',
                {
                  'bg-white/5': isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
        <div className=' border-t border-white/10'>
        <h1 className='font-bold py-1'>Your {'>'} </h1>
        {yoursetting.map((your) =>{
          const isActive = pathname === your.route || pathname.startsWith(`${your.route}/`);
        return (
          <Link
          href={your.route}
          key={your.label}
          className={cn(
            'flex gap-4 items-center p-4 rounded-lg hover:bg-white/10 justify-start ',
            {
              // 'bg-white/10': isActive,
            }
          )}
        >
          <Image
            src={your.imgURL}
            alt={your.label}
            width={24}
            height={24}
          />
          <p className="text-lg font-semibold max-lg:hidden">
            {your.label}
          </p>
        </Link> 
        )
        })}
        </div>
        <div className=' border-t border-white/10'>
        <h1 className='font-bold py-1'>Chanels {} </h1>
        {channels.map((your) =>{
          const isActive = pathname === your.route || pathname.startsWith(`${your.route}/`);
        return (
          <Link
          href={your.route}
          key={your.label}
          className={cn(
            'flex gap-4 items-center p-4 rounded-lg hover:bg-white/10 justify-start ',
            {
              // 'bg-white/10': isActive,
            }
          )}
        >
          <Image
            src={your.imgURL}
            alt={your.label}
            width={24}
            height={24}
            className='rounded-full'
          />
          <p className="text-lg font-semibold max-lg:hidden">
            {your.label}
          </p>
        </Link> 
        )
        })}
        </div>
      </div>
    </section>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>

    </div>
  )
}

export default MobileNavbar