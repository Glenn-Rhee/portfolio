"use client";
import Link from "next/link";
import ShellSection from "./ShellSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { variantsText } from "./MainPage";
import { useEffect, useState } from "react";

export default function Aboutme() {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 570 && window.scrollY <= 1300) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ShellSection>
      <div className="flex flex-col text-center md:text-start justify-center gap-y-4 md:gap-y-6 md:pe-8 lg:pe-20">
        <motion.h2
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          animate={isShow ? "show" : "hide"}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0,
          }}
          className="lg:text-8xl hidden md:block md:text-6xl md:-m-1 font-bold text-black-primary"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col justify-start mx-auto md:mx-0 gap-y-2 md:gap-y-3 mt-3 md:mt-0">
          <motion.div
            initial={{
              x: -40,
              opacity: 0,
            }}
            variants={variantsText}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="w-28 h-[4px] bg-slate-800 rounded-lg"
          />
          <motion.div
            initial={{
              x: -40,
              opacity: 0,
            }}
            variants={variantsText}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="w-28 h-[4px] bg-slate-800 rounded-lg md:ms-10 lg:ms-12 ms-8"
          />
        </div>
        <motion.span
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          animate={isShow ? "show" : "hide"}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="text-sm md:text-xl text-gray-600"
        >
          A brief introduction about me and my interest.
        </motion.span>
        <Link href={"/about"}>
          <motion.button
            initial={{
              y: 40,
              opacity: 0,
            }}
            variants={{
              show: {
                y: 0,
                opacity: 1,
              },
              hide: {
                y: 40,
                opacity: 0,
              },
            }}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.7,
            }}
            className="text-gray-100 text-base md:text-lg hover:bg-gradient-to-br active:scale-95 hover:from-slate-700 hover:to-slate-900 bg-slate-900 cursor-pointer rounded-2xl w-[8rem] md:w-[10rem] py-2"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
      <motion.div
        initial={{
          x: -40,
          opacity: 0,
        }}
        variants={variantsText}
        animate={isShow ? "show" : "hide"}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0,
        }}
        className="relative row-start-1 w-fit mx-auto md:row-start-auto"
      >
        <Image
          src={"/pict-3.jpg"}
          width={400}
          height={600}
          alt="Ariel Rizki Profile Picture"
          className="rounded-xl shadow-md object-contain w-full max-w-[300px] md:max-w-max mx-auto md:w-[300px] lg:w-auto"
        />
        <div className="flex items-center justify-center md:hidden absolute bottom-2 left-2 w-[180px] bg-white/40 rounded-md">
          <h2 className="text-3xl text-black-primary font-semibold">
            About me
          </h2>
        </div>
      </motion.div>
    </ShellSection>
  );
}
