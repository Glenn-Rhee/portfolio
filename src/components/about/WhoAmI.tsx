"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { variantsText } from "../MainPage";
import { useNavbar } from "@/store/NavbarStore";
import { useEffect, useState } from "react";
import { DataSong } from "@/types";
import PlayingAnimation from "./PlayingAnimation";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function WhoAmI() {
  const { gapFromTop } = useNavbar();
  const [dataSong, setDataSong] = useState<DataSong | null>(null);
  const [loading, setLoading] = useState(true);
  const [isShow, setIsShow] = useState(gapFromTop >= 0 && gapFromTop <= 570);

  useEffect(() => {
    if (gapFromTop > 570) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [gapFromTop]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/spotify/now-playing");
      const dataResponse = (await response.json()) as DataSong;
      setDataSong(dataResponse);
      setLoading(false);
    };

    fetchData();

    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, []);

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
                    src={"/profile.jpg"}
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
                    src={"/pict-3.jpg"}
                    alt="Ariel picture"
                    width={200}
                    height={200}
                    className="object-cover w-[150px] shadow rounded-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:px-10 mt-8 md:mt-0 flex flex-col justify-center">
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
            Hallo, I&apos;m Ariel Rizki Muhtamad Bakri, a tech enthusiast and
            aspiring Web Developer. Originating from Jakarta, Indonesia, I’m
            currently embarking on a fascinating journey at Gunadarma
            University. Where I&apos;m pursuing my degree in Information System.
            My passion for technology and coding knows no bounds. Let&apos;s
            connect and explore this ever-evolving world of tech together!
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
            className={cn(
              "w-full mt-4 px-4 border border-slate-500 rounded-lg bg-white flex items-center md:gap-x-2 overflow-hidden",
              loading || !dataSong ? "py-5" : "py-3",
              dataSong && dataSong.isPlaying
                ? "justify-between"
                : "justify-start",
            )}
          >
            {loading || !dataSong ? (
              <div className="h-full w-full flex items-center justify-center">
                <BeatLoader color="#121212" />
              </div>
            ) : (
              <>
                <Image
                  src={
                    dataSong.isPlaying ? dataSong.albumImageUrl : "/spotify.png"
                  }
                  alt={dataSong.isPlaying ? dataSong.album : "Spotify Logo"}
                  width={50}
                  height={50}
                  className={cn(dataSong.isPlaying ? "rounded-md" : "")}
                />
                {dataSong.isPlaying ? (
                  <div className="w-full flex h-full md:gap-x-4 items-center">
                    <div className="flex items-center px-4 h-full gap-x-2 shrink-0">
                      <span className="text-sm lg:text-md font-medium md:font-semibold text-black-primary">
                        Now Playing
                      </span>
                      <PlayingAnimation />
                    </div>
                    <div className="flex flex-col min-w-0 flex-1 w-0 overflow-hidden">
                      <Link
                        href={dataSong.songUrl}
                        className="text-sm lg:text-base font-semibold text-black-primary truncate block"
                      >
                        {dataSong.title}
                      </Link>
                      <span className="text-xs lg:text-[13px] font-medium text-slate-800/60 truncate block">
                        {dataSong.artist}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-md lg:text-xl font-semibold text-black-primary">
                    Currently offline
                  </span>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
