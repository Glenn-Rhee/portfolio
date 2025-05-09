"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { variantsText } from "../MainPage";
import { useEffect, useState } from "react";
import { useNavbar } from "@/store/NavbarStore";

interface Project {
  title: string;
  desc: string;
  techs: string[];
  year: number;
  image: string;
}

const projects: Project[] = [
  {
    title: "Client Landing Page",
    desc: "A landing page website that I created for my client. This website is built using three tech, native (HTML, CSS, JS)",
    techs: ["HTML", "CSS", "JS"],
    year: 2025,
    image: "/projects/p-3.jpg",
  },
  {
    title: "Coffe Shop",
    desc: "A simple coffee ordering app built with NextJs, Typescript, Prisma, shadcnUI, and TailwindCss.",
    techs: ["NextJs", "Typescript", "Prisma", "shadcnUI", "TailwindCss"],
    year: 2024,
    image: "/projects/p-5.png",
  },
  {
    title: "Netflix Landing Page",
    desc: "A landing page website that I created for my study. This website is built using HTML, tailwindCss, and JS",
    techs: ["HTML", "TailwindCss", "JS"],
    year: 2023,
    image: "/projects/p-4.jpg",
  },
  {
    title: "Casecobra",
    desc: "A simple application for adding and managing phone cases. This website uses NextJs, Typescript, Prisma, TailwindCss",
    techs: ["NextJs", "Typescript", "Prisma", "TailwindCss"],
    year: 2024,
    image: "/projects/p-6.jpg",
  },
  {
    title: "Tic Tac Toe Game",
    desc: "A simple tic tac toe game that I created for my study. This website is built using ReactJs, tailwindCss, and JS",
    techs: ["ReactJs", "TailwindCss", "JS"],
    year: 2023,
    image: "/projects/p-7.jpg",
  },
  {
    title: "Landing page",
    desc: "A simple landing page that I created for my study. This website is built using HTML, CSS, and JS",
    techs: ["HTML", "CSS", "JS"],
    year: 2023,
    image: "/projects/p-8.jpg",
  },
];
export default function OtherProject() {
  const { gapFromTop } = useNavbar();
  const [isShow, setIsShow] = useState(gapFromTop > 570);

  useEffect(() => {
    if (gapFromTop > 570) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [gapFromTop]);
  return (
    <div className="ms-2 md:ms-0 pb-10 w-full md:mt-0">
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
        className="font-bold md:text-start text-center text-2xl lg:text-3xl"
      >
        Other Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {projects
          .sort((a, b) => b.year - a.year)
          .map((project, i) => (
            <motion.div
              key={i}
              initial={{
                y: 40,
                opacity: 0,
              }}
              variants={{
                show: { y: 0, opacity: 1 },
                hide: { y: 40, opacity: 0 },
              }}
              animate={isShow ? "show" : "hide"}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4 + i * 0.2,
              }}
              className="relative overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={`Project ${i + 1} Ariel`}
                width={700}
                height={700}
                className="shadow-md"
              />
              <div className="py-2 z-20 px-2 font-semibold text-lg bg-slate-600 text-white absolute top-0 left-0">
                {project.year}
              </div>
              <div className="absolute px-10 hover:opacity-0 transition-all duration-300 top-0 right-0 left-0 bottom-0 bg-gray-400/85 flex flex-col gap-y-1 md:gap-y-3 items-center justify-center">
                <h1 className="text-black-primary text-center text-xl lg:text-3xl font-semibold">
                  {project.title}
                </h1>
                <p className="text-black-primary text-sm lg:text-lg text-center">
                  {project.desc}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center">
                  {project.techs.map((tech, i) => (
                    <div
                      key={i}
                      className="py-1 lg:py-2 px-3 md:font-semibold text-sm  bg-slate-600 text-white"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
