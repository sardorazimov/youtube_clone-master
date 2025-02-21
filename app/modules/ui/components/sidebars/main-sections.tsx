"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { items } from "@/constants";
import { useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";

const MainSections = () => {
  const clerk = useClerk();
  const {isSignedIn} = useAuth()
  return (
    <SidebarGroup>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={(e) => {
                if(!isSignedIn && item.auth){
                  e.preventDefault()
                   return clerk.openSignIn()
                }
                }}
              >
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon  size={25}/>
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </SidebarGroup>
  );
};

export default MainSections;
