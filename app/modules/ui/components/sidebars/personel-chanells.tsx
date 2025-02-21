"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { items, personelsectios } from "@/constants";
import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";

const PersonelSections = () => {
  const clerk = useClerk();
  const {isSignedIn} = useAuth()
  return (
    <SidebarGroup>
        <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarContent>
        <SidebarMenu>
          {personelsectios.map((item) => (
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
                  <item.icon />
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

export default PersonelSections;
