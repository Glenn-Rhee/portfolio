"use client";
import {
  ChevronLeft,
  ChevronUp,
  FolderOpenDot,
  House,
  Mail,
  UserRound,
} from "lucide-react";
import ItemNavbar from "./ItemNavbar";
import HumbergerMenu from "./HumbergerMenu";
import ContentMenu from "./ContentMenu";
import { useNavbar } from "@/store/NavbarStore";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, gapFromTop, setGapFromTop } = useNavbar();

  function goToElement(top: number | string) {
    if (pathname !== "/") {
      router.push("/?to=" + top);
    }

    if (pathname === "/" && typeof top === "number") {
      window.scrollTo({
        behavior: "smooth",
        top,
      });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setGapFromTop(window.scrollY);
    };
    setGapFromTop(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setGapFromTop]);

  return (
    <>
      <nav className="h-18 z-[70] lg:h-20 px-10 md:px-16 lg:px-32 fixed top-0 right-0 left-0 flex items-center justify-between lg:justify-self-start w-screen bg-transparent shadow-[0_1px_8px_0_rgba(100,120,255,0.1)] backdrop-blur-[7px]">
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
          className={cn(
            "relative z-50 flex items-center gap-x-4 text-black-primary text-2xl font-semibold tracking-wider",
            {
              "-ms-6": pathname !== "/",
            },
          )}
        >
          {pathname !== "/" ? (
            <button onClick={() => router.back()} className="cursor-pointer">
              <ChevronLeft size={24} color="oklch(0.208 0.042 265.755)" />
            </button>
          ) : null}
          Ariel
        </motion.h1>
        <ul className="lg:flex hidden items-center justify-evenly gap-x-14 min-w-[70%] mx-auto ms-80">
          <ItemNavbar
            isActive={pathname === "/" && gapFromTop >= 0 && gapFromTop <= 570}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                goToElement(0);
              }}
            >
              <House size={24} color="oklch(0.208 0.042 265.755)" />
            </a>
          </ItemNavbar>
          <ItemNavbar
            isActive={
              (pathname === "/" && gapFromTop > 570 && gapFromTop <= 1300) ||
              pathname === "/about"
            }
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/") {
                  const element = document.querySelector(
                    "#about",
                  ) as HTMLDivElement;
                  goToElement(element.offsetTop);
                } else {
                  goToElement("about");
                }
              }}
            >
              <UserRound size={24} color="oklch(0.208 0.042 265.755)" />
            </a>
          </ItemNavbar>
          <ItemNavbar
            isActive={
              (pathname === "/" && gapFromTop > 1300 && gapFromTop <= 1900) ||
              pathname === "/projects"
            }
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/") {
                  const element = document.querySelector(
                    "#projects",
                  ) as HTMLDivElement;
                  goToElement(element.offsetTop);
                } else {
                  goToElement("projects");
                }
              }}
            >
              <FolderOpenDot size={24} color="oklch(0.208 0.042 265.755)" />
            </a>
          </ItemNavbar>
          <ItemNavbar isActive={pathname === "/" && gapFromTop > 1900}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goToElement(2750);
              }}
            >
              <Mail size={24} color="oklch(0.208 0.042 265.755)" />
            </a>
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
          className="w-12 h-12 cursor-pointer z-40 active:bg-slate-900 transition-all duration-200 aspect-square fixed bottom-5 right-10 flex items-center justify-center rounded-full bg-slate-800 text-gray-100 font-semibold"
        >
          <ChevronUp color="#ffffff" size={24} />
        </button>
      ) : null}
    </>
  );
}
