import { Home, PlaySquareIcon,FlameIcon,HistoryIcon,ThumbsUpIcon,ListVideoIcon } from "lucide-react";

export const items = [
   {
    title:'Home',
    url: "/",
    icon: Home,
   },
   {
    title:'Subscription',
    url: "/explore/subscribe",
    icon: PlaySquareIcon,
    auth:true,
   },
   {
    title:'Trending',
    url: "/explore/trending",
    icon: FlameIcon,
    auth:true,
   },
  ];

export const personelsectios = [
  {
    title:'History',
    url: "/playlist/history",
    icon: HistoryIcon,
    auth:true,
   },
   {
    title:'Liked Videos',
    url: "/playlist/liked",
    icon: ThumbsUpIcon,
   },
   {
    title:'All Playlists',
    url: "/playlist/all",
    icon: ListVideoIcon,
    auth:true,
  
  }
]
  
