"use client";
import { Mail } from "lucide-react";
import ShellSection from "./ShellSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { variantsText } from "./MainPage";
import { useEffect, useState } from "react";

export default function ContactMe() {
  const [isShow, setIsShow] = useState(true);
  const contacts = [
    {
      icon: <Mail size={35} color="#f3f4f6" />,
      href: "mailto:arielrizki.fs1@gmail.com",
    },
    {
      icon: (
        <Image
          src={"/github-mark-white.png"}
          width={35}
          height={35}
          alt="Github Icon"
        />
      ),
      href: "https://github.com/Glenn-Rhee",
    },
    {
      icon: (
        <Image
          src={"/instagram.png"}
          width={70}
          height={70}
          alt="Instagram Icon"
        />
      ),
      href: "https://www.instagram.com/aaarrl.r/",
    },
    {
      icon: (
        <Image
          src={"/linked-in.png"}
          width={42}
          height={42}
          alt="Linked in Icon"
        />
      ),
      href: "https://www.linkedin.com/in/ariel-rizki-21b032287/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1900) {
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
          Get In Touch
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
          Feel free to contact me if you have any question.
        </motion.span>
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
            delay: 0.6,
          }}
          className="text-sm md:text-xl text-gray-600"
        >
          arielrizki.fs1@gmail.com
        </motion.span>
        <div className="flex overflow-hidden items-center justify-center md:justify-start w-full gap-x-4 mx-auto md:mx-0">
          {contacts.map((v, i) => (
            <motion.a
              target="_blank"
              initial={{
                y: 80,
                opacity: 0,
              }}
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.7 + +("0." + i + 1),
                  },
                },
                hide: {
                  y: 80,
                  opacity: 0,
                  transition: {
                    delay: 0,
                  },
                },
              }}
              animate={isShow ? "show" : "hide"}
              transition={{
                ease: "easeOut",
              }}
              href={v.href}
              key={i}
            >
              <button className="h-14 cursor-pointer hover:bg-slate-700 active:bg-slate-900 transition-all duration-200 aspect-square w-14 md:h-16 md:w-16 bg-slate-800 flex items-center justify-center rounded-full">
                {v.icon}
              </button>
            </motion.a>
          ))}
        </div>
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
          delay: 0.1,
        }}
        className="relative row-start-1 w-fit mx-auto md:row-start-auto"
      >
        <Image
          src={"/pict-1.jpg"}
          width={400}
          height={600}
          alt="Ariel Rizki Profile Picture"
          className="rounded-xl shadow-md object-contain w-full max-w-[300px] md:max-w-max mx-auto md:w-[300px] lg:w-auto"
        />
        <div className="flex items-center justify-center md:hidden absolute bottom-2 left-2 w-[180px] bg-white/40 rounded-md">
          <h2 className="text-3xl text-black-primary font-semibold">
            Get In Touch
          </h2>
        </div>
      </motion.div>
    </ShellSection>
  );
}
