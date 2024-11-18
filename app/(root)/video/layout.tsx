import Navbar from "@/components/shared/Navbar"

interface VideoLayoutProps{
    children: React.ReactNode
}

const VideoLayout = ({children}:VideoLayoutProps) => {
  return (
    <main className="flex flex-col min-h-screen">
        <Navbar />
        {children}
    </main>
  )
}

export default VideoLayout