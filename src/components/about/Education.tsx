"use client";
import { Medal } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { variantsText } from "../MainPage";
import { useRef } from "react";

const certificates = [
  "Digister Connect Goes to Gunadarma University by Telkom Indonesia",
  "Google Developer Student Clubs | Designing Future With Backend",
  "Dicoding Dasar Pemrograman Web",
  "Dicoding Frontend Web",
  "Certificate of Internship - Kementerian Kelautan & Perikanan",
];

export default function Education() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isShow = useInView(ref, { amount: 0.3 });

  return (
    <div ref={ref} className="mt-40 md:mt-16 w-full pb-[5rem]">
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
        className="space-y-1 md:space-y-2 lg:space-y-3 text-center w-full"
      >
        <h4 className="font-bold text-black-primary text-2xl lg:text-3xl">
          Education
        </h4>
        <span className="text-slate-700 text-base lg:text-xl">
          Get to know more about my educational background.
        </span>
      </motion.div>
      <div className="grid  mt-8 md:mt-12 grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1 md:space-y-2 lg:space-y-3">
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
            className="text-black-primary"
          >
            <h5 className="text-lg md:text-xl font-medium md:font-semibold">
              2023 - Present
            </h5>
            <h4 className="text-xl md:text-2xl font-semibold md:font-bold">
              Gunadarma University
            </h4>
            <span className="md:text-lg md:font-medium">
              S1 Information System | Computer Science
            </span>
          </motion.div>
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
              }}
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                },
                hide: {
                  y: 60,
                  opacity: 0,
                },
              }}
              animate={isShow ? "show" : "hide"}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              <Image
                src={"/education/edu-1.jpg"}
                width={700}
                height={320}
                alt="Ariel's Education"
                className="rounded-lg shadow-md"
              />
            </motion.div>
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
              }}
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                },
                hide: {
                  y: 60,
                  opacity: 0,
                },
              }}
              animate={isShow ? "show" : "hide"}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.6,
              }}
            >
              <Image
                src={"/education/edu-2.jpg"}
                width={700}
                height={320}
                alt="Ariel's Education"
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
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
              delay: 0.5,
            }}
            className="space-y-1 md:space-y-2 lg:space-y-3"
          >
            <p className="text-justify text-slate-800 md:font-medium text-[15px] md:text-[17px]">
              I am studying a bachelor&apos;s degree in computer science at
              Gunadarma University, with the objective to become a web
              developer. I am fascinated by technology and keen to expand my
              knowledge in computer science.
            </p>
            <span className="px-3 py-1 bg-gray-300 rounded-xl text-black-primary text-sm lg:font-semibold">
              GPA: 3.9 out of 4.0
            </span>
          </motion.div>
        </div>
        <div className="space-y-1 md:space-y-2 lg:space-y-3 mt-8 md:mt-8">
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
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.2,
            }}
            animate={isShow ? "show" : "hide"}
            className="text-black-primary flex flex-col justify-end"
          >
            <h4 className="text-xl md:text-2xl font-semibold md:font-bold">
              Certificates
            </h4>
            <span className="md:text-lg md:font-medium">
              Some of my certificates during my study.
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
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.5,
            }}
            animate={isShow ? "show" : "hide"}
            className="flex flex-col gap-y-5 mt-6"
          >
            {certificates.map((cert, i) => (
              <div key={i} className="flex items-center gap-x-3">
                <div className="w-10 h-10 rounded-full text-white aspect-square bg-black-primary flex items-center justify-center">
                  <Medal />
                </div>
                <span className="font-medium text-black-primary md:font-semibold text-base md:text-lg">
                  {cert}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
