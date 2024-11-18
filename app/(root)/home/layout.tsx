import MobileFooter from "@/components/shared/detalis/MobileFooter"
import Navbar from "@/components/shared/Navbar"
import NavigationBar from "@/components/shared/Navigation"
import Sidebar from "@/components/shared/SideBar"

interface HomeLayoutProps{
    children: React.ReactNode
}

const HomeLayout = ({children}:HomeLayoutProps) => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <div className="w-64 h-full lg:flex hidden">
        <Sidebar/>
      </div>
      {/* <Navbar/> */}
      <div className="lg:pl-72"> <NavigationBar/></div>
      {/* Todo */}
      <section className="mt-20 lg:pl-72">
        {children}
         <MobileFooter/>
      </section>
        
    </main>
  )
}

export default HomeLayout


