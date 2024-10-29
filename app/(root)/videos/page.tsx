"use client"
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, Menu, Bell, User, ThumbsUp, ThumbsDown, Share, Download, MoreVertical } from 'lucide-react'


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

export const page = () => {
  return (
    <div>page</div>
  )
}
