"use client";
import { ChevronUp, FolderOpenDot, House, Mail, UserRound } from "lucide-react";
import ItemNavbar from "./ItemNavbar";
import HumbergerMenu from "./HumbergerMenu";
import ContentMenu from "./ContentMenu";
import { useNavbar } from "@/store/NavbarStore";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Navbar() {
  const { isOpen, gapFromTop, setGapFromTop } = useNavbar();

  useEffect(() => {
    const handleScroll = () => {
      setGapFromTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setGapFromTop]);

  return (
    <>
      <nav className="h-18 lg:h-20 px-10 md:px-16 lg:px-32 fixed top-0 z-30 right-0 left-0 flex items-center justify-between lg:justify-self-start w-screen bg-transparent shadow-[0_1px_8px_0_rgba(100,120,255,0.1)] backdrop-blur-[7px]">
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
          <ItemNavbar isActive={gapFromTop >= 0 && gapFromTop <= 570}>
            <a href="#home">
              <House size={24} color="oklch(0.208 0.042 265.755)" />
            </a>
          </ItemNavbar>
          <ItemNavbar isActive={gapFromTop > 570}>
            <a href="#about">
              <UserRound size={24} color="oklch(0.208 0.042 265.755)" />
            </a>
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
      {gapFromTop > 570 ? (
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="w-12 h-12 cursor-pointer z-50 active:bg-slate-900 transition-all duration-200 aspect-square fixed bottom-5 right-5 flex items-center justify-center rounded-full bg-slate-800 text-gray-100 font-semibold"
        >
          <ChevronUp color="#ffffff" size={24} />
        </button>
      ) : null}
    </>
  );
}
