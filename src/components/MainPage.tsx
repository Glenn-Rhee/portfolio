"use client";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import ShellSection from "./ShellSection";

export const variantsText: Variants = {
  show: {
    x: 0,
    opacity: 1,
  },
  hide: {
    x: -40,
    opacity: 0,
  },
};
export default function MainPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isShow = useInView(ref, {
    amount: 0.3,
  });

  return (
    <ShellSection ref={ref}>
      <div className="flex flex-col text-center md:text-start justify-center gap-y-4 md:gap-y-6 md:pe-8 lg:pe-20">
        <motion.h4
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
          className="text-gray-700 opacity mt-4 md:mt-0 font-semibold tracking-widest text-base md:text-2xl"
        >
          Ariel Rizki Muhtamad Bakri
        </motion.h4>
        <motion.h2
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          animate={isShow ? "show" : "hide"}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="lg:text-8xl md:text-6xl text-3xl md:-m-1 font-bold text-black-primary"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          animate={isShow ? "show" : "hide"}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="text-sm md:text-xl text-gray-600"
        >
          A junior fullstack developer who currently focused on Web Development.
          Other than that, I also interested in Mobile Development. I love to
          learn new things and always open to new opportunities.
        </motion.p>
        <motion.div
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          animate={isShow ? "show" : "hide"}
          transition={{
            duration: 0.4,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="flex mx-auto md:mx-0 items-center gap-x-4"
        >
          <a href="#contact">
            <button className="text-gray-100 mx-auto md:mx-0 text-base md:text-lg hover:bg-gradient-to-br active:scale-95 hover:from-slate-700 hover:to-slate-900 bg-slate-900 cursor-pointer rounded-2xl w-[8rem] md:w-[10rem] py-2">
              Contact Me
            </button>
          </a>
          <a href="/CV.pdf" download={"Ariel-Rizki-CV.pdf"}>
            <button className="text-slate-900 mx-auto md:mx-0 transition-all hover:bg-slate-900 hover:text-white duration-150 hover:border-transparent bg-transparent cursor-pointer border-2 border-slate-700 rounded-2xl w-[8rem] md:w-[10rem] py-2">
              Download CV
            </button>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{
          x: -40,
          opacity: 0,
        }}
        animate={isShow ? "show" : "hide"}
        variants={variantsText}
        transition={{
          duration: 0.4,
          delay: 0.4,
          ease: "easeOut",
        }}
        className="justify-self-center row-start-1 md:row-start-auto"
      >
        <Image
          src={"/profile.jpg"}
          width={400}
          height={600}
          alt="Ariel Rizki Profile Picture"
          className="md:rounded-xl h-[250px] rounded-full object-cover aspect-square md:aspect-auto md:h-auto shadow-md w-[250px] md:w-[300px] lg:w-auto"
        />
      </motion.div>
    </ShellSection>
  );
}
