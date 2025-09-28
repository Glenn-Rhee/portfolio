"use client";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <>
      <motion.h3 className="text-black-primary mt-6 ms-2 md:ms-0 font-bold text-3xl md:text-4xl text-start">
        Profesional Experience
      </motion.h3>
      <div className="gap-x-3 w-full">
        <div className="w-full relative">
          <Timeline />

          <div className="max-w-[38rem] flex items-end flex-col">
            <div className="flex relative items-center rounded-lg gap-x-8 px-8 py-1.5 bg-slate-900">
              <div className="flex text-white flex-col items-center justify-center">
                <span className="font-bold">August 2025</span>
                <span className="font-medium text-sm text-white/80">Start</span>
              </div>
              <div className="h-full bg-white w-[1px]" />
              <div className="flex text-white flex-col items-center justify-center">
                <span className="font-bold">Present</span>
                <span className="font-medium text-sm text-white/80">End</span>
              </div>
              <div className="h-full bg-white w-[1px]" />
              <div className="flex flex-col items-center justify-center">
                <span className="font-bold text-white/80">
                  Jakarta, Indonesia
                </span>
                <span className="font-medium text-sm text-white/90">
                  Location
                </span>
              </div>
            </div>
            <div className="bg-white shadow-xl shadow-black-primary/20 mt-3 rounded-xl px-6 py-3">
              <h4 className="text-black-primary font-semibold text-lg">
                Kementerian Kelautan dan Perikanan
              </h4>
              <span className="text-black-primary/80 font-semibold">
                Sumber Daya Manusia{" "}
                <span className="text-sm font-normal ms-1">Internship</span>
              </span>
              <p className="mt-3 text-slate-700 text-justify">
                I develop and maintain both frontend and backend systems while
                implementing scalable, secure, and efficient solutions using
                modern frameworks. In addition, I conduct user research and
                testing to continuously improve usability, accessibility, and
                the overall product experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
