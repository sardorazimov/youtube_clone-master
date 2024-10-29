"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

]

export default function NavigationBar() {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll)
      checkScroll() // Initial check
    }
    return () => scrollContainer?.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <div className=" -mt-24  lg:overflow-hidden overflow-y-auto  max-w-full fixed bg-transparent text-white backdrop-blur-3xl  rounded-xl">
      <div className="flex items-center relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 z-10 p-2 bg-white/10 hover:bg-white/20transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 bg-white/10" />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex  scrollbar-hide space-x-4 p-4"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white/10 rounded-full whitespace-nowrap hover:bg-white/20 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 p-2 bg-gray-900 hover:bg-gray-800 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 bg-white/10" />
          </button>
        )}
      </div>
    </div>
  )
}