import Image from "next/image"
import { MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface VideoProps {
  title: string
  duration: string
  views: string
  timestamp: string
  channel: string
  verified?: boolean
  thumbnail: string
}

interface ShortProps {
  title: string
  views: string
  thumbnail: string
}

export default function LeftSide() {
  const mainVideo: VideoProps = {
    title: "BEN AND ED: BLOOD PARTY / FTFILLIONTA LAYK #28",
    duration: "50:45",
    views: "9,9 ming marta",
    timestamp: "8 soat oldin",
    channel: "FEZOT",
    verified: true,
    thumbnail: "/lena.jpeg"
  }

  const shorts: ShortProps[] = [
    {
      title: "Saruman neden Gandalf gibi geri dönemedi?",
      views: "197 ming marta",
      thumbnail: "/lena.jpeg"
    },
    {
      title: "Cadi Kral'ın Eski Müttefiki",
      views: "797 ming marta",
      thumbnail: "/lena.jpeg"
    },
    {
      title: "Yüce Noldor Kralı",
      views: "10 ming marta",
      thumbnail: "/lena.jpeg"
    }
  ]

  return (
    <div className="w-auto mx-auto p-4 space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Button variant="ghost" size="sm" className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button  className="rounded-full bg-white/5 text-neutral-300 whitespace-nowrap">
          Aloqador
        </Button>
        <Button  className="rounded-full bg-white/5 text-neutral-300 whitespace-nowrap">
          Siz uchun
        </Button>
        <Button  className="rounded-full bg-white/5 text-neutral-300 whitespace-nowrap">
          Yaqinda yukla
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Video */}
      <Card className="relative overflow-hidden w-96 border-none">
        <div className="aspect-video relative w-full h-40 ">
          <Image
            src={mainVideo.thumbnail}
            alt={mainVideo.title}
            className="object-cover rounded"
            fill
          />
          <div className="absolute bottom-2 right-2 bg-black text-white px-1 text-sm rounded">
            {mainVideo.duration}
          </div>
        </div>
        <div className="p-4 flex justify-between">
          <div className="space-y-1">
            <h2 className="font-semibold line-clamp-2">{mainVideo.title}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{mainVideo.channel}</span>
              {mainVideo.verified && (
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{mainVideo.views}</span>
              <span>•</span>
              <span>{mainVideo.timestamp}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Shorts Section */}
      <div className="space-y-4 w-96">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
          >
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" />
          </svg>
          Shorts
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {shorts.map((short, index) => (
            <div key={index} className="space-y-2">
              <div className="aspect-[9/16] relative rounded-xl overflow-hidden">
                <Image
                  src={short.thumbnail}
                  alt={short.title}
                  className="object-cover"
                  fill
                />
              </div>
              <h4 className="font-medium line-clamp-2">{short.title}</h4>
              <p className="text-sm text-muted-foreground">{short.views}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}