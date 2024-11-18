import Image from "next/image";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

interface VideoProps {
  title: string;
  duration: string;
  views: string;
  timestamp: string;
  channel: string;
  verified?: boolean;
  thumbnail: string;
}

interface ShortProps {
  title: string;
  views: string;
  thumbnail: string;
}

export default function LeftSide() {
  const mainVideo: VideoProps = {
    title: "BEN AND ED: BLOOD PARTY / FTFILLIONTA LAYK #28",
    duration: "50:45",
    views: "9,9 ming marta",
    timestamp: "8 soat oldin",
    channel: "FEZOT",
    verified: true,
    thumbnail: "/lena.jpeg",
  };

  const shorts: ShortProps[] = [
    {
      title: "Saruman neden Gandalf gibi geri dönemedi?",
      views: "197 ming marta",
      thumbnail: "/lena.jpeg",
    },
    {
      title: "Cadi Kral'ın Eski Müttefiki",
      views: "797 ming marta",
      thumbnail: "/lena.jpeg",
    },
    {
      title: "Yüce Noldor Kralı",
      views: "10 ming marta",
      thumbnail: "/lena.jpeg",
    },
  ];

  return (
    <div className="  ">
      {/* Navigation */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Recommended videos</h3>

        {/* Shorts Section */}
        <div className="mb-6">
          <h4 className="text-red-500 font-semibold mb-4 flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Shorts"
              width={24}
              height={24}
            />
            Shorts
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="aspect-[9/16] bg-muted rounded-lg relative overflow-hidden"
              >
                <Image
                  src="/me.jpg"
                  alt={`Short ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Regular Recommendations */}
        {[1, 2, 3, 4].map((index) => (
          <Link href="#" key={index} className="flex gap-2 group">
            <div className="relative w-40 aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
              
                src="https://www.youtube.com/embed/K4C0C3loKkU"
                title="UZmir - Foydalandim (MooD video)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                4:47
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-500">
                Turn a Figma Design Into a Real Website
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Channel Name</p>
              <p className="text-xs text-muted-foreground">
                15K views • 3 days ago
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100"
            >
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
