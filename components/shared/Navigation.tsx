"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiYoutubeshorts } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/scroll";

const categories = [
  "Musiqa",
  "Gaming",
  "Mikslar",
  "Jonli",
  "Basketbol",

  "Animatsion film",
  "Futbol",
  "Rep aytish",
  "Yaqinda yuklangan",
  "Tomosha qilish",
];

export default function NavigationBar() {
  const scrolled = useScrolled()
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
    }
    return () => scrollContainer?.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className={cn(" flex  mt-[72px]    max-w-full fixed  text-neutral-400", scrolled && "bg-black")}>
      <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
        <a href="/">
          <div className="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border border-sky-800/10 bg-sky-500/10 text-sky-800">
            <div className="truncate text-xs font-semibold">All</div>
          </div>
        </a>
        <a href="/?categoryId=ab14dd46-b1c9-4b86-9ba8-f94c6d35f265">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Next.js</div>
          </div>
        </a>
        <a href="/?categoryId=3139de85-9272-4476-8c5d-f223aab36df9">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">React.js</div>
          </div>
        </a>
        <a href="/?categoryId=f96f7b08-7fd8-4aec-a06b-7ac254cc229d">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">MySQL</div>
          </div>
        </a>
        <a href="/?categoryId=0bad1c37-dd21-49a8-b285-9ce8e674b457">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">MongoDB</div>
          </div>
        </a>
        <a href="/?categoryId=c10b45f3-aef8-4f84-bdbd-14404866a9b6">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Prisma</div>
          </div>
        </a>
        <a href="/?categoryId=16ce7bac-e500-407d-a3a8-4261b9baf8de">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Tailwind</div>
          </div>
        </a>
        <a href="/?categoryId=ed253e2b-0490-4fce-8e11-c60e5a5b5125">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Node.js</div>
          </div>
        </a>
        <a href="/?categoryId=c3edfe48-4c41-441d-a532-40f57e1ce7fb">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Supabase</div>
          </div>
        </a>
        <a href="/?categoryId=0609ab4e-2fee-4ab1-b82a-760ce8a460ff">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Convex</div>
          </div>
        </a>
        <a href="/?categoryId=e48e52bb-464a-4cad-bf8d-e0f336c14c0c">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Next Auth</div>
          </div>
        </a>
         <a href="/?categoryId=9c7d12a2-9a9f-4af6-8fbc-463ee4163e53">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">PostgreSQL</div>
          </div>
        </a>
        <a href="/?categoryId=fc84cf84-a556-4611-b99d-fcce9c7b6b71">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Astro</div>
          </div>
        </a>
        <a href="/?categoryId=a0bd943e-7b44-4480-99a7-6997ba1262f2">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Drizzle</div>
          </div>
        </a>
        <a href="/?categoryId=cc22c82a-2f7a-4ff8-b1bd-7cafd69ee77c">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Hono</div>
          </div>
        </a>
        <a href="/?categoryId=cc22c82a-2f7a-4ff8-b1bd-7cafd69ee77c">
          <div className="py-2 px-3 text-sm bg-white/10 rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border">
            <div className="truncate text-xs font-semibold">Hono</div>
          </div>
        </a>
      </div>
    </div>
  );
}
