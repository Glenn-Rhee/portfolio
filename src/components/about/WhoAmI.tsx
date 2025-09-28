"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { variantsText } from "../MainPage";
import { useNavbar } from "@/store/NavbarStore";
import { useEffect, useState } from "react";
import { DataSong } from "@/types";
import PlayingAnimation from "./PlayingAnimation";
import { BeatLoader } from "react-spinners";
import clsx from "clsx";

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
            className={clsx(
              "w-full mt-4 px-4 border border-slate-500 rounded-lg bg-white flex items-center gap-x-4",
              loading || !dataSong ? "py-5" : "py-3"
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
                  alt="Spotify picture"
                  width={50}
                  height={50}
                />
                {dataSong.isPlaying ? (
                  <div className="w-full flex h-full gap-x-4 items-center">
                    <PlayingAnimation />
                    <span className="text-md lg:text-lg font-semibold text-black-primary">
                      {dataSong.title} -{" "}
                      <span className="text-base lg:text-lg font-normal">
                        {dataSong.artist}
                      </span>
                    </span>
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
