"use client"

import YouTubeVideoGrid from '@/components/shared/detalis/Hero'
import Hero from '@/components/shared/detalis/Hero'
import NavigationBar from '@/components/shared/Navigation'
import React from 'react'

const page = () => {
  return (
    <div>
       <NavigationBar />
       <YouTubeVideoGrid />
    </div>
  )
}

export default page