"use client";
import { FolderOpenDot, House, Mail, UserRound } from "lucide-react";
import ItemNavbar from "./ItemNavbar";
import HumbergerMenu from "./HumbergerMenu";
import ContentMenu from "./ContentMenu";
import { useNavbar } from "@/store/NavbarStore";
import { motion } from "framer-motion";

export default function Navbar() {
  const { isOpen } = useNavbar();
  return (
    <nav className="h-20 px-10 md:px-16 lg:px-32 fixed top-0 right-0 left-0 flex items-center justify-between lg:justify-self-start w-screen bg-transparent shadow-[0_1px_8px_0_rgba(100,120,255,0.1)] backdrop-blur-[7px]">
      <motion.h1
        animate={isOpen ? "open" : "close"}
        variants={{
          open: {
            color: "white",
          },
          close: {
            color: "#121212",
          },
        }}
        transition={{
          delay: isOpen ? 0.3 : 0,
        }}
        className="relative z-10 text-black-primary text-2xl font-semibold tracking-wider"
      >
        Ariel
      </motion.h1>
      <ul className="lg:flex hidden items-center justify-evenly gap-x-14 min-w-[70%] mx-auto ms-80">
        <ItemNavbar>
          <House size={24} color="oklch(0.208 0.042 265.755)" />
        </ItemNavbar>
        <ItemNavbar>
          <UserRound size={24} color="oklch(0.208 0.042 265.755)" />
        </ItemNavbar>
        <ItemNavbar>
          <FolderOpenDot size={24} color="oklch(0.208 0.042 265.755)" />
        </ItemNavbar>
        <ItemNavbar>
          <Mail size={24} color="oklch(0.208 0.042 265.755)" />
        </ItemNavbar>
      </ul>
      <HumbergerMenu />
      <ContentMenu />
    </nav>
  );
}
