import { Video, User } from 'lucide-react'
import VideoItem from './VideoItem'
import { videos } from '@/constants/category'

interface VideoThumbnail {
  id: string
  title: string
  thumbnail: string
  channel: string
  views: string
  postedAgo: string
  duration?: string
  isLive?: boolean
}



export default function YouTubeVideoGrid() {
  return (
    <div className=" text-neutral-400 p-4 ">
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-5 pb-6">
            {videos.map((video) => (
              <VideoItem key={video.id} video={video} />
            ))}
          </div>
    </div>
  )
}