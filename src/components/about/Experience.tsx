"use client";
import { motion, useInView } from "framer-motion";
import Timeline from "./Timeline";
import { useRef } from "react";
import { variantsText } from "../MainPage";

const dataProfessExperience = [
  {
    title: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    position: "Course Assistant",
    type: "Part-time",
    description:
      "Asisted students during computer laboratory sessions by providing guideance on programming concepts, monitoring attendance, and ensuring practicum activities ran smoothly",
    startDate: "September 2024",
    endDate: "Present",
    location: "Depok, Indonesia",
  },
  {
    title: "Kementerian Kelautan dan Perikanan",
    position: "Full Stack Developer",
    type: "Internship",
    description:
      "I develop and maintain both frontend and backend systems while implementing scalable, secure, and efficient solutions using modern frameworks. In addition, I conduct user research and testing to continuously improve usability, accessibility, and the overall product experience.",
    startDate: "August 2025",
    endDate: "October 2025",
    location: "Jakarta, Indonesia",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isShow = useInView(ref, {
    amount: 0.3,
  });

  return (
    <div ref={ref} className="space-y-4 w-full">
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
        className="text-black-primary mt-6 font-bold text-3xl md:text-4xl text-start"
      >
        Profesional Experience
      </motion.h3>
      <div className="w-full relative">
        <div className="w-full relative flex flex-col gap-y-14">
          <Timeline isShow={isShow} />

          {dataProfessExperience.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.title}
                className={`relative w-full flex ${
                  isLeft ? "lg:justify-start" : "lg:justify-end"
                } justify-center`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  animate={isShow ? "show" : "hide"}
                  variants={{ show: { opacity: 1 }, hide: { opacity: 0 } }}
                  className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 items-center justify-center"
                >
                  <span className="w-4 h-4 rounded-full bg-slate-900 ring-4 ring-white shadow-md" />
                </motion.span>

                <div
                  className={`w-full lg:w-[45%] flex flex-col ${
                    isLeft
                      ? "items-center lg:items-end"
                      : "items-center lg:items-start"
                  }`}
                >
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
                    animate={isShow ? "show" : "hide"}
                    variants={{
                      show: { y: 0, opacity: 1 },
                      hide: { y: 80, opacity: 0 },
                    }}
                    className="flex text-center md:text-start items-start md:items-center rounded-lg md:gap-x-8 px-4 md:px-8 py-1.5 w-fit bg-slate-900"
                  >
                    <div className="flex text-white flex-col items-center justify-center">
                      <span className="font-medium md:font-bold text-sm md:text-base">
                        {item.startDate}
                      </span>
                      <span className="md:font-medium text-sm text-white/80">
                        Start
                      </span>
                    </div>
                    <div className="flex text-white flex-col items-center justify-center">
                      <span className="font-medium md:font-bold text-sm md:text-base">
                        {item.endDate}
                      </span>
                      <span className="md:font-medium text-sm text-white/80">
                        End
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-medium text-white/80 md:font-bold text-sm md:text-base">
                        {item.location}
                      </span>
                      <span className="md:font-medium text-sm text-white/90">
                        Location
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                    animate={isShow ? "show" : "hide"}
                    variants={{
                      show: { y: 0, opacity: 1 },
                      hide: { y: 80, opacity: 0 },
                    }}
                    className="bg-white shadow-xl shadow-black-primary/20 mt-3 rounded-xl px-6 py-3 max-w-[38rem]"
                  >
                    <h4 className="text-black-primary font-semibold text-lg">
                      {item.title}
                    </h4>
                    <span className="text-black-primary/80 font-semibold">
                      {item.position}{" "}
                      <span className="text-sm font-normal ms-1">
                        {item.type}
                      </span>
                    </span>
                    <p className="mt-3 text-slate-700">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
}
