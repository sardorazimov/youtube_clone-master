"use client"
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, Menu, Bell, User, ThumbsUp, ThumbsDown, Share, Download, MoreVertical } from 'lucide-react'
import UserChanel from '@/components/shared/detalis/userchanell'

interface Video {
  id: string
  title: string
  channel: string
  views: string
  timestamp: string
  thumbnail: string
  videoUrl?: string
  likes: number
  dislikes: number
}

interface Comment {
  id: string
  user: string
  avatar: string
  content: string
  likes: number
  timestamp: string
}

const dummyVideos: Video[] = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React and TypeScript',
    channel: 'Uzmir',
    views: '100K views',
    timestamp: '2 days ago',
    thumbnail: '/poralab.jpg',
    videoUrl: '',
    likes: 5000,
    dislikes: 50,
  },
  {
    id: '2',
    title: 'TypeScript Tips and Tricks for Beginners',
    channel: 'TS Guru',
    views: '50K views',
    timestamp: '1 week ago',
    thumbnail: '/poralab.jpg',
    likes: 2500,
    dislikes: 30,
  },
  {
    id: '3',
    title: 'React Hooks Explained',
    channel: 'React Ninjas',
    views: '200K views',
    timestamp: '3 days ago',
    thumbnail: '/poralab.jpg',
    likes: 10000,
    dislikes: 100,
  },
]

const dummyComments: Comment[] = [
  {
    id: '1',
    user: 'Alice Johnson',
    avatar: '/vercel.jpeg',
    content: 'Great tutorial! This helped me understand YouTube clones better.',
    likes: 15,
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    user: 'Bob Smith',
    avatar: './lena.jpeg',
    content: 'Could you make a follow-up video on advanced TypeScript features?',
    likes: 7,
    timestamp: '1 day ago',
  },
]

export default function EnhancedYouTubeClone() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(dummyVideos[0])
  const [comments, setComments] = useState<Comment[]>(dummyComments)
  const [newComment, setNewComment] = useState('')

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: String(comments.length + 1),
        user: 'Current User',
        avatar: '/placeholder.svg?height=40&width=40',
        content: newComment,
        likes: 0,
        timestamp: 'Just now',
      }
      setComments([comment, ...comments])
      setNewComment('')
    }
  }

  return (
    <div className="flex flex-col min-h-screen  w-full">
      {/* <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <Menu className="w-6 h-6 mr-4 cursor-pointer" />
            <h1 className="text-xl font-bold text-red-600">YouTube</h1>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-full"
              />
              <Search className="absolute top-2 right-3 w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 cursor-pointer" />
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header> */}

      <main className="flex-1 flex flex-col md:flex-row w-full ">
        <div className="flex-1 p-4">
          {selectedVideo && (
            <div className="mb-4">
              <UserChanel />
              {/* <div className="aspect-w-16 aspect-h-9 mb-4">
                <video muted autoPlay controls
                className='w-full h-full rounded-xl' 
                src="/poralab.mp4"></video>
              </div> */}
              {/* <h2 className="text-xl font-semibold mb-2">{selectedVideo.title}</h2> */}
              {/* <div className="flex items-center justify-between mb-4">
                <div>
                  <a href='/channels'  className="0">{selectedVideo.channel}</a>
                  <p className="text-sm ">
                    {selectedVideo.views} • {selectedVideo.timestamp}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{selectedVideo.likes}</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <ThumbsDown className="w-4 h-4" />
                    <span>{selectedVideo.dislikes}</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div> */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                <div className="flex items-start space-x-2 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Current User" />
                    <AvatarFallback>CU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full mb-2"
                    />
                    <Button onClick={handleAddComment}>Comment</Button>
                  </div>
                </div>
                {comments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-2 mb-4">
                    <Avatar>
                      <AvatarImage src={comment.avatar} alt={comment.user} />
                      <AvatarFallback>{comment.user[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{comment.user} <span className="font-normal text-sm text-gray-500">{comment.timestamp}</span></p>
                      <p>{comment.content}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{comment.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">Reply</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="w-full md:w-80 p-4 ">
          <h3 className="font-semibold mb-4">Recommended Videos</h3>
          <div className="space-y-4">
            {dummyVideos.map((video) => (
              <div
                key={video.id}
                className="flex space-x-2 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <img src={video.thumbnail} alt={video.title} className="w-40 h-24 object-cover rounded" />
                <div>
                  <h4 className="font-semibold text-sm line-clamp-2">{video.title}</h4>
                  <p className="text-xs text-gray-600">{video.channel}</p>
                  <p className="text-xs text-gray-500">
                    {video.views} • {video.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  )
}