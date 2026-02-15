"use client";
import { motion, useInView } from "framer-motion";
import Timeline from "./Timeline";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isShow = useInView(ref, {
    amount: 0.3,
  });
  return (
    <div ref={ref} className="space-y-4 w-full">
      <motion.h3 className="text-black-primary mt-6 font-bold text-3xl md:text-4xl text-start">
        Profesional Experience
      </motion.h3>
      <div className="gap-x-3 w-full">
        <div className="w-full relative">
          <Timeline />

          <div className="max-w-[38rem] flex items-end flex-col">
            <div className="flex text-center md:text-start items-start md:items-center rounded-lg md:gap-x-8 px-4 md:px-8 py-1.5 w-fit bg-slate-900">
              <div className="flex text-white flex-col items-center justify-center">
                <span className="font-medium md:font-bold text-sm md:text-base">
                  August 2025
                </span>
                <span className="md:font-medium text-sm text-white/80">
                  Start
                </span>
              </div>
              <div className="flex text-white flex-col items-center justify-center">
                <span className="font-medium md:font-bold text-sm md:text-base">
                  October 2025
                </span>
                <span className="md:font-medium text-sm text-white/80">
                  End
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-medium text-white/80 md:font-bold text-sm md:text-base">
                  Jakarta, Indonesia
                </span>
                <span className="md:font-medium text-sm text-white/90">
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
    </div>
  );
}
