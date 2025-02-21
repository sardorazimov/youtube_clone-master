import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";
import AuthButton from "../auth/auth-button";

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 flex items-center px-2 pr-5 bg-white/10 z-50">
      <div className="flex items-center gap-4 w-full">
        {/*  */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href={"/"} className="">
            <div className="p-4 flex items-center gap-2 cursor-pointer">
              <Image src="/favicon.png" width={40} height={40} alt="logo" />
              <p className="font-bold text-xl">MyTube</p>
            </div>
          </Link>
        </div>
        {/*  */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput/>
        </div>
        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
// Compare this snippet from app/modules/ui/components/navbars/index.tsx: