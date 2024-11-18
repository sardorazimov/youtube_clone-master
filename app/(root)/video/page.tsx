import React from "react";
import LeftSide from "./components/leftside";
import Channel from "./components/channel";
import Image from "next/image";
import Link from "next/link";
import {
  MoreVertical,
  ThumbsUp,
  Share,
  Download,
  DotIcon as DotsHorizontal,
  ThumbsDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <section className="w-full min-h-screen mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        {/* Video */}
        <div className="lg:col-span-2 space-y-4">
          <div className="aspect-video  rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/K4C0C3loKkU"
              title="UZmir - Foydalandim (MooD video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl font-semibold">
              NextJS 15 & Socket.io | MERN Stack | Real Time Video Upload |
              YouTube clone
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/me.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">Sardor Azimov</h2>
                  <p className="text-sm text-muted-foreground">
                    22.3k subscribers
                  </p>
                </div>
                <Button className="bg-white/10 text-neutral-200 hover:bg-white/5 border-white/20">
                  Subscribe
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-white/5  flex py-2 px-6 rounded-3xl">
                  <span className="flex  px-3 border-r border-white cursor-pointer ">
                    <ThumbsUp /> <h1>1212</h1>
                  </span>
                  <span className="flex  p">
                    <ThumbsDown />
                  </span>
                </div>
                <div className="lg:flex hidden">
                  <Button className="bg-white/10 text-neutral-200 hover:bg-white/5 border-white/20">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button className="bg-white/10 text-neutral-200 hover:bg-white/5 border-white/20">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <LeftSide />
      </div>
    </section>
  );
};

export default page;
