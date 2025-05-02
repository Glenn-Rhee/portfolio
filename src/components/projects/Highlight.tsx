"use client";
import { useNavbar } from "@/store/NavbarStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variantsText } from "../MainPage";

export default function Highlight() {
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
    <div className="ms-2 md:ms-0 text-black-primary w-full">
      <motion.h3
        initial={{
          x: -40,
          opacity: 0,
        }}
        variants={variantsText}
        animate={isShow ? "show" : "hide"}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0,
        }}
        className="font-bold md:text-start text-center text-2xl lg:text-3xl tracking-widest"
      >
        Highlight
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 mt-6 w-full">
        <motion.div
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          animate={isShow ? "show" : "hide"}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.4,
          }}
          className="flex flex-col gap-y-4 justify-center"
        >
          <Image
            src={"/projects/p-1.jpg"}
            alt="Project 1 Ariel"
            width={500}
            height={500}
            className="rounded-lg shadow-md self-center md:self-start"
          />
          <Image
            src={"/projects/p-2.jpg"}
            alt="Project 2 Ariel"
            width={500}
            height={500}
            className="rounded-lg shadow-md self-center md:self-start"
          />
        </motion.div>
        <div className="flex flex-col justify-center gap-y-3 mt-6 md:mt-4">
          <motion.h5
            initial={{
              x: 40,
              opacity: 0,
            }}
            variants={{
              show: {
                x: 0,
                opacity: 1,
              },
              hide: {
                x: 40,
                opacity: 0,
              },
            }}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="text-black-primary font-semibold md:font-bold text-xl md:text-3xl"
          >
            Addorama Store
          </motion.h5>
          <motion.p
            initial={{
              x: 40,
              opacity: 0,
            }}
            variants={{
              show: {
                x: 0,
                opacity: 1,
              },
              hide: {
                x: 40,
                opacity: 0,
              },
            }}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-slate-600 font-medium text-lg text-justify"
          >
            I developed the Addorama Store project, a platform focused on the
            sale of electronic goods. Through its main website, users can easily
            purchase a wide range of electronic products. In addition, users can
            also register as sellers through the seller domain, which provides a
            dashboard to monitor daily, weekly, monthly, and yearly sales data.
            In developing this project, I utilized Next.js, TypeScript, Express,
            JWT, and Prisma to ensure a responsive, secure, and efficient
            system.
          </motion.p>
          <motion.div
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
              duration: 0.5,
              ease: "easeOut",
              delay: 0.55,
            }}
            className="flex items-center gap-x-4"
          >
            <button
              onClick={() => {
                const element = document.querySelector(
                  "#other"
                ) as HTMLDivElement;
                element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-slate-800 text-white w-22 py-1.5 transition-all hover:bg-slate-900 duration-150 rounded-lg font-semibold cursor-pointer"
            >
              More
            </button>
            <a
              href="https://addorama.vercel.app/"
              target="_blank"
              className="hover:underline"
            >
              Preview
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
