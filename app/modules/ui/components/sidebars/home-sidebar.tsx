import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import MainSections from "./main-sections"
import { Separator } from "@/components/ui/separator"
import PersonelSections from "./personel-chanells"

const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
     <SidebarContent className="bg-background" >
       <MainSections/>
       <Separator/>
       <PersonelSections/>
     </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar