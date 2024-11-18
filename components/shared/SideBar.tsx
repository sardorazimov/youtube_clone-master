"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Zap,
  PlaySquare,
  Music2,
  Clock,
  ListVideo,
  Video,
  History,
  ThumbsUp,
  Download,
  ChevronRight,
} from "lucide-react";
import { channels, sidebarLinks, yoursetting } from "@/constants/index";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <ScrollArea>
      <section className=" fixed  mt-[74px]  h-screen w-fit flex-col  justify-between  text-neutral-400 max-sm:hidden lg:w-[264px] ">
        <div className="flex flex-1 flex-col gap-1 border-b border-white/10 text-sm font-sans ">
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  "flex gap-4 items-center p-2 rounded-lg hover:bg-white/10 w-full ",
                  {
                    "bg-white/5": isActive,
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
          <div className=" border-t border-white/10 ">
            <h1 className="font-bold text-xl py-1">Your </h1>
            {yoursetting.map((your) => {
              const isActive =
                pathname === your.route ||
                pathname.startsWith(`${your.route}/`);
              return (
                <Link
                  href={your.route}
                  key={your.label}
                  className={cn(
                    "flex gap-4 items-center p-2 rounded-lg hover:bg-white/10 justify-start ",
                    {
                      //'bg-white/10': isActive,
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
              );
            })}
          </div>
          <div className=" border-t border-white/10">
            <h1 className="font-bold py-1">Chanels {} </h1>
            {channels.map((your) => {
              const isActive =
                pathname === your.route ||
                pathname.startsWith(`${your.route}/`);
              return (
                <Link
                  href={your.route}
                  key={your.label}
                  className={cn(
                    "flex gap-4 items-center p-2 px-2 rounded-lg hover:bg-white/10 justify-start ",
                    {
                      "bg-white/10": isActive,
                    }
                  )}
                >
                  <Image
                    src={your.imgURL}
                    alt={your.label}
                    width={30}
                    height={30}
                    className="rounded-[100%] object-contain"
                  />
                  <p className="text-lg font-semibold max-lg:hidden">
                    {your.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollArea>
  );
};

export default Sidebar;
