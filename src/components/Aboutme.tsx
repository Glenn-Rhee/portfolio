"use client";
import Link from "next/link";
import ShellSection from "./ShellSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { variantsText } from "./MainPage";

export default function Aboutme() {

  return (
    <ShellSection>
      <div className="flex flex-col text-center md:text-start justify-center gap-y-4 md:gap-y-6 md:pe-8 lg:pe-20">
        <motion.h2
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          className="lg:text-8xl md:text-6xl text-3xl md:-m-1 font-bold text-black-primary"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col gap-y-3">
          <div className="w-28 h-[4px] bg-slate-800 rounded-lg" />
          <div className="w-28 h-[4px] bg-slate-800 rounded-lg ms-12" />
        </div>
        <span className="text-sm md:text-xl text-gray-600">
          A brief introduction about me and my interest.
        </span>
        <Link href={"/aboutme"}>
          <button className="text-gray-100 mx-auto md:mx-0 text-base md:text-lg bg-slate-900 cursor-pointer rounded-2xl w-[8rem] md:w-[10rem] py-2">
            Learn More
          </button>
        </Link>
      </div>
      <div className="justify-self-center row-start-1 md:row-start-auto">
        <Image
          src={"/pict-1.jpg"}
          width={400}
          height={600}
          alt="Ariel Rizki Profile Picture"
          className="md:rounded-xl h-[250px] rounded-full object-cover aspect-square md:aspect-auto md:h-auto shadow-md w-[250px] md:w-[300px] lg:w-auto"
        />
      </div>
    </ShellSection>
  );
}
