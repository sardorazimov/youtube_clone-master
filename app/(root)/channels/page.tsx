'use client'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, Bell, User, ThumbsUp, ThumbsDown, Share, Play } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Video {
  id: string
  title: string
  views: string
  timestamp: string
  thumbnail: string
}

interface Short {
  id: string
  title: string
  views: string
  thumbnail: string
}

interface Channel {
  name: string
  subscribers: string
  avatar: string
  banner: string
  description: string
}

const channelData: Channel = {
  name: 'Uzmir',
  subscribers: '1.2M subscribers',
  avatar: '/poralab.jpg',
  banner: '/banner.jpg',
  description: 'Welcome to TechMasters! We create content about the latest in technology, programming, and web development. Join us on our journey to master the digital world!',
}

const videosData: Video[] = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React and TypeScript',
    views: '100K views',
    timestamp: '2 days ago',
    thumbnail: '/poralab.jpg',
  },
  {
    id: '2',
    title: 'TypeScript Tips and Tricks for Beginners',
    views: '50K views',
    timestamp: '1 week ago',
    thumbnail: '/poralab.jpg',
  },
  {
    id: '3',
    title: 'React Hooks Explained',
    views: '200K views',
    timestamp: '3 days ago',
    thumbnail: '/poralab.jpg',
  },
  {
    id: '4',
    title: 'Next.js 13 Crash Course',
    views: '75K views',
    timestamp: '5 days ago',
    thumbnail: '/poralab.jpg',
  },
]

const shortsData: Short[] = [
  {
    id: '1',
    title: 'Quick Tip: CSS Grid in 60 Seconds',
    views: '500K',
    thumbnail: '/lena.jpeg',
  },
  {
    id: '2',
    title: 'JavaScript One-Liner: Array Shuffle',
    views: '750K',
    thumbnail: '/lena.jpeg',
  },
  {
    id: '3',
    title: 'React useState Hook Explained',
    views: '1M',
    thumbnail: '/lena.jpeg',
  },
  {
    id: '4',
    title: 'Git Commit Best Practices',
    views: '250K',
    thumbnail: '/lena.jpeg',
  },
]

export default function ChannelPage() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <div className="flex flex-col min-h-screen  items-center">
      {/* <header className=" shadow-sm">
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

      <main className="flex-1">
        <div className="relative">
          <img src={channelData.banner} alt="Channel Banner" className="w-full h-48 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={channelData.avatar} alt={channelData.name} />
                <AvatarFallback>{channelData.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">{channelData.name}</h2>
                <p className="text-gray-600">{channelData.subscribers}</p>
              </div>
            </div>
            <Button
              variant={isSubscribed ? "outline" : "default"}
              onClick={() => setIsSubscribed(!isSubscribed)}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </Button>
          </div>
          <p className="mb-6">{channelData.description}</p>
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className='bg-white/5'>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="shorts">Shorts</TabsTrigger>
              <TabsTrigger value="playlists">Playlists</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videosData.map((video) => (
                  <div key={video.id} className=" rounded-lg shadow overflow-hidden">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm text-gray-600">{video.views} • {video.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shorts">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {shortsData.map((short) => (
                  <div key={short.id} className=" rounded-lg shadow overflow-hidden">
                    <div className="relative">
                      <img src={short.thumbnail} alt={short.title} className="w-full h-80 object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-2">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2">{short.title}</h3>
                      <p className="text-xs text-gray-600">{short.views} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="playlists">
              <div className="flex flex-col w-full h-screen">
                <div className='flex items-center justify-center'>
                    <div className='border border-white/10 w-96 h-96 rounded-xl'>
                     <Avatar>

                     </Avatar>
                    </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="community">
              <div className="text-center py-8">
                <p className="text-gray-600">Community posts coming soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}