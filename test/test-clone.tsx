import React, { useState } from 'react'
import { Search, Menu, Bell, User, ThumbsUp, ThumbsDown, Share, Download } from 'lucide-react'

interface Video {
  id: string
  title: string
  channel: string
  views: string
  timestamp: string
  thumbnail: string
}

const dummyVideos: Video[] = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React and TypeScript',
    channel: 'Code Masters',
    views: '100K views',
    timestamp: '2 days ago',
    thumbnail: '/placeholder.svg?height=120&width=200',
  },
  {
    id: '2',
    title: 'TypeScript Tips and Tricks for Beginners',
    channel: 'TS Guru',
    views: '50K views',
    timestamp: '1 week ago',
    thumbnail: '/placeholder.svg?height=120&width=200',
  },
  {
    id: '3',
    title: 'React Hooks Explained',
    channel: 'React Ninjas',
    views: '200K views',
    timestamp: '3 days ago',
    thumbnail: '/placeholder.svg?height=120&width=200',
  },
]

export default function YouTubeClone() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <Menu className="w-6 h-6 mr-4 cursor-pointer" />
            <h1 className="text-xl font-bold text-red-600">YouTube</h1>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute top-2 right-3 w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex">
        <aside className="w-64 bg-white p-4 hidden md:block">
          <nav>
            <ul className="space-y-2">
              <li className="font-semibold">Home</li>
              <li>Trending</li>
              <li>Subscriptions</li>
              <li>Library</li>
              <li>History</li>
            </ul>
          </nav>
        </aside>

        <div className="flex-1 p-4">
          {selectedVideo ? (
            <div className="mb-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{selectedVideo.title}</h2>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600">{selectedVideo.channel}</p>
                  <p className="text-sm text-gray-500">
                    {selectedVideo.views} • {selectedVideo.timestamp}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-1">
                    <ThumbsUp className="w-5 h-5" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <ThumbsDown className="w-5 h-5" />
                    <span>Dislike</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <Share className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dummyVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.channel}</p>
                    <p className="text-xs text-gray-500">
                      {video.views} • {video.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}