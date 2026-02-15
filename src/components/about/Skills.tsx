"use client";
import { motion, useInView } from "framer-motion";
import { variantsText } from "../MainPage";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useNavbar } from "@/store/NavbarStore";
const skills = [
  {
    name: "Frontend Development",
    iconHref: "/skills/web-development.png",
    iconAlt: "Frontend Development icon",
  },
  {
    name: "Rest API",
    iconHref: "/skills/rest-api.png",
    iconAlt: "Rest API icon",
  },
  {
    name: "Backend Development",
    iconHref: "/skills/backend.png",
    iconAlt: "Backend Development icon",
  },
  {
    name: "Testing & Debugging",
    iconHref: "/skills/testing.png",
    iconAlt: "Testing & Debugging icon",
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isShow = useInView(ref, {
    amount: 0.3,
  });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center md:gap-y-24 lg:gap-y-28 gap-y-16 justify-center"
    >
      {/* Skills & Expertise */}
      <div className="flex mx-auto flex-col gap-y-3">
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
          className="space-y-3 text-center"
        >
          <h4 className="font-bold text-black-primary text-xl md:text-2xl lg:text-3xl">
            Skills and Expertise
          </h4>
          <span className="text-slate-700 text-sm md:text-base lg:text-lg">
            Explore some skills I&apos;m proficient in to deliver high-quality
            solutions.
          </span>
        </motion.div>

        {/* Items skills */}
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
          className="grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-4 gap-x-20 w-full mt-8"
        >
          {skills.map((skill, i) => (
            <div key={i} className="flex  items-center flex-col">
              <Image
                src={skill.iconHref}
                alt={skill.iconAlt}
                width={50}
                height={50}
                className="mx-auto"
              />
              <span className="text-black-primary text-center text-sm md:text-base lg:text-lg font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Language & Frameworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
          className="space-y-4 flex flex-col items-center"
        >
          <h5 className="uppercase text-center text-lg md:text-xl lg:text-xl text-black-primary tracking-[0.4em]">
            Language & Framework
          </h5>
          <span className="md:font-semibold text-slate-800 text-center">
            <span className="font-semibold md:font-bold text-black-primary">
              HTML
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              CSS
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              JavaScript
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              Typescript
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              ReactJs
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              NextJs
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              TailwindCSS
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              Bootstrap
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              NodeJs
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              ExpressJs
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              MySQL
            </span>{" "}
            |
            <span className="font-semibold md:font-bold text-black-primary">
              {" "}
              MongoDB
            </span>{" "}
            | firebase | Golang | PHP
          </span>
        </motion.div>
        <motion.div
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
            duration: 0.4,
            ease: "easeOut",
            delay: 0.4,
          }}
          className="space-y-4 flex flex-col items-center"
        >
          <h5 className="uppercase text-center text-lg md:text-xl lg:text-xl text-black-primary tracking-[0.4em]">
            Tools
          </h5>
          <span className="font-semibold md:font-bold text-black-primary text-center">
            VsCode | Git | Github |{" "}
            <span className="text-slate-800 font-normal md:font-semibold">
              Figma
            </span>{" "}
            | Postman
          </span>
        </motion.div>
      </div>
    </div>
  );
}
