"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { variantsText } from "../MainPage";
import { useNavbar } from "@/store/NavbarStore";
import { useEffect, useState } from "react";

export default function WhoAmI() {
  const { gapFromTop } = useNavbar();
  const [isShow, setIsShow] = useState(gapFromTop >= 0 && gapFromTop <= 570);

  useEffect(() => {
    if (gapFromTop > 570) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [gapFromTop]);

  return (
    <>
      <motion.h3
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
        className="text-black-primary mt-6 ms-2 md:ms-0 font-bold text-3xl md:text-4xl text-start"
      >
        Who Am I?
      </motion.h3>
      <div className="grid grid-cols-1 w-full md:grid-cols-2">
        <div className="flex flex-col text-center md:text-start justify-center gap-y-4 md:gap-y-6 md:pe-8 lg:pe-20">
          <div className="w-full flex">
            <div className="grid grid-cols-2 gap-x-4 mx-auto">
              <div className="flex flex-col gap-y-4 place-items-center">
                <motion.div
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0,
                  }}
                  animate={isShow ? "show" : "hide"}
                  variants={{
                    show: {
                      y: 0,
                      opacity: 1,
                    },
                    hide: {
                      y: 80,
                      opacity: 0,
                    },
                  }}
                >
                  <Image
                    src={"/pict-1.jpg"}
                    alt="Ariel picture"
                    width={200}
                    height={200}
                    className="aspect-square w-[150px] md:w-[200px] object-cover shadow rounded-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.4,
                  }}
                  animate={isShow ? "show" : "hide"}
                  variants={{
                    show: {
                      y: 0,
                      opacity: 1,
                    },
                    hide: {
                      y: 80,
                      opacity: 0,
                    },
                  }}
                >
                  <Image
                    src={"/pict-1.jpg"}
                    alt="Ariel picture"
                    width={200}
                    height={200}
                    className="object-cover w-[150px] md:w-[200px] shadow rounded-lg"
                  />
                </motion.div>
              </div>
              <div className="w-full flex items-center justify-center">
                <motion.div
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.8,
                  }}
                  animate={isShow ? "show" : "hide"}
                  variants={{
                    show: {
                      y: 0,
                      opacity: 1,
                    },
                    hide: {
                      y: 80,
                      opacity: 0,
                    },
                  }}
                >
                  <Image
                    src={"/pict-1.jpg"}
                    alt="Ariel picture"
                    width={200}
                    height={200}
                    className="object-cover w-[150px] md:w-[200px] shadow rounded-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-10 mt-8 md:mt-0 flex flex-col justify-center">
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
            className="text-black-primary font-bold text-2xl lg:text-4xl"
          >
            Ariel Rizki Muhtamad Bakri
          </motion.span>
          <motion.p
            initial={{
              x: -40,
              opacity: 0,
            }}
            variants={variantsText}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.7,
            }}
            className="text-justify mt-3 text-md text-slate-600 md:text-lg"
          >
            Hallo, I’m Ariel Rizki Muhtamad Bakri, a tech enthusiast and
            aspiring Web Developer. Originating from Jakarta, Indonesia, I’m
            currently embarking on a fascinating journey at Gunadarma
            University. Where I’m pursuing my degree in Information System. My
            passion for technology and coding knows no bounds. Let’s connect and
            explore this ever-evolving world of tech together!
          </motion.p>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.8,
            }}
            animate={isShow ? "show" : "hide"}
            variants={{
              show: {
                y: 0,
                opacity: 1,
              },
              hide: {
                y: 80,
                opacity: 0,
              },
            }}
            className="w-full mt-4 py-3 px-4 border border-slate-500 rounded-lg bg-white flex items-center gap-x-10"
          >
            <Image
              src={"/spotify.png"}
              alt="Spotify picture"
              width={50}
              height={50}
            />
            <span className="text-md lg:text-xl font-semibold text-black-primary">
              Currently offline
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
}
