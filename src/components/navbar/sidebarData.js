import React from "react";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { RiPlayListLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { BiTimeFive, BiHistory } from "react-icons/bi";
export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <MdOutlineExplore />,
  },
  {
    title: "Playlist",
    path: "/playlist",
    icon: <RiPlayListLine />,
  },
  {
    title: "Watch later",
    path: "/watch-later",
    icon: <BiTimeFive />,
  },
  {
    title: "Liked Videos",
    path: "/liked-videos",
    icon: <AiOutlineLike />,
  },
  {
    title: "History",
    path: "/history",
    icon: <BiHistory />,
  },
];
