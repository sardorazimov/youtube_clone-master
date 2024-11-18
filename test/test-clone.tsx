import Image from "next/image"
import Link from "next/link"
import { MoreVertical, ThumbsUp, Share, Download, DotIcon as DotsHorizontal } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        {/* Main Video Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              poster="/placeholder.svg?height=720&width=1280"
              controls
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">
              NextJS 15 & Socket.io | MERN Stack | Real time chat application | Telegram clone
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>SB</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">Samar Badriddinov</h2>
                  <p className="text-sm text-muted-foreground">22.3k subscribers</p>
                </div>
                <Button variant="secondary">Subscribe</Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="secondary">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  569
                </Button>
                <Button variant="secondary">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="secondary">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Videos */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Recommended videos</h3>
          
          {/* Shorts Section */}
          <div className="mb-6">
            <h4 className="text-red-500 font-semibold mb-4 flex items-center gap-2">
              <Image src="/placeholder.svg?height=24&width=24" alt="Shorts" width={24} height={24} />
              Shorts
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((index) => (
                <div key={index} className="aspect-[9/16] bg-muted rounded-lg relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=320&width=180"
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
                <Image
                  src="/placeholder.svg?height=90&width=160"
                  alt={`Thumbnail ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                  4:47
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-500">
                  Turn a Figma Design Into a Real Website
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Channel Name</p>
                <p className="text-xs text-muted-foreground">15K views • 3 days ago</p>
              </div>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                <DotsHorizontal className="h-4 w-4" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}