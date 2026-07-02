"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { variantsText } from "../MainPage";
import Image from "next/image";
import { useRef, useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    iconHref: "/skills/web-development.png",
    iconAlt: "Frontend Development icon",
    blurb: "Membangun antarmuka yang responsif, cepat, dan enak dipakai.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "ReactJs",
      "NextJs",
      "TailwindCSS",
      "Bootstrap",
    ],
  },
  {
    id: "restapi",
    name: "Rest API",
    iconHref: "/skills/rest-api.png",
    iconAlt: "Rest API icon",
    blurb: "Merancang dan mengonsumsi API yang rapi, aman, dan terdokumentasi.",
    stack: ["ExpressJs", "NodeJs", "Postman", "Firebase", "Supabase"],
  },
  {
    id: "backend",
    name: "Backend Development",
    iconHref: "/skills/backend.png",
    iconAlt: "Backend Development icon",
    blurb: "Mengelola logika server, database, dan skalabilitas sistem.",
    stack: [
      "NodeJs",
      "ExpressJs",
      "Golang",
      "PHP",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Supabase",
    ],
  },
];

const tools = ["VsCode", "Git", "Github", "Figma", "Postman", "Docker"];

// Gabungan semua teknologi unik untuk tampilan default (belum ada yang diklik)
const allTechCloud = Array.from(
  new Set(skillCategories.flatMap((c) => c.stack)),
);

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isShow = useInView(ref, {
    amount: 0.3,
  });

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeCategory = skillCategories.find((c) => c.id === activeId);

  const handleSelect = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center md:gap-y-24 lg:gap-y-28 gap-y-16 justify-center"
    >
      {/* Skills & Expertise */}
      <div className="flex mx-auto flex-col gap-y-3 w-full">
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
            Click a category to see the technologies I use within it.
          </span>
        </motion.div>

        {/* Kategori skill (clickable) */}
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
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 gap-x-6 w-full max-w-3xl mx-auto mt-8"
        >
          {skillCategories.map((skill) => {
            const isActive = activeId === skill.id;
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => handleSelect(skill.id)}
                aria-pressed={isActive}
                className={`group flex items-center flex-col gap-y-2 rounded-2xl border px-4 py-5 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 border-slate-900 shadow-lg shadow-black-primary/20 scale-[1.03]"
                    : "bg-white border-slate-200 hover:border-slate-400 hover:-translate-y-1"
                }`}
              >
                <Image
                  src={skill.iconHref}
                  alt={skill.iconAlt}
                  width={44}
                  height={44}
                  className={`mx-auto transition-all duration-300 ${
                    isActive ? "brightness-0 invert" : ""
                  }`}
                />
                <span
                  className={`text-center text-sm md:text-base font-semibold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-black-primary"
                  }`}
                >
                  {skill.name}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Panel hasil klik (atau default cloud) */}
        <div className="w-full max-w-3xl mx-auto mt-8 min-h-[9rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeCategory ? (
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 flex flex-col items-center gap-y-4"
              >
                <p className="text-slate-600 text-sm md:text-base text-center">
                  {activeCategory.blurb}
                </p>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {activeCategory.stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.05,
                        ease: "easeOut",
                      }}
                      className="px-4 py-1.5 rounded-full bg-white border border-slate-300 text-black-primary text-sm md:text-base font-semibold shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default-cloud"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full flex flex-col items-center gap-y-4"
              >
                <span className="text-slate-800 text-xs md:text-sm uppercase font-bold tracking-[0.3em]">
                  All Technologies
                </span>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {allTechCloud.map((tech, i) => (
                    <motion.span
                      key={tech}
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 2.6 + (i % 4) * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i % 6) * 0.15,
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs md:text-sm font-semibold"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tools */}
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        variants={{
          show: { y: 0, opacity: 1 },
          hide: { y: 30, opacity: 0 },
        }}
        animate={isShow ? "show" : "hide"}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0.3,
        }}
        className="space-y-4 flex flex-col items-center"
      >
        <span className="text-slate-800 text-xs md:text-sm uppercase font-bold tracking-[0.3em]">
          Tools
        </span>
        <div className="flex flex-wrap justify-center gap-2.5">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 2.6 + (i % 4) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 6) * 0.15,
              }}
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs md:text-sm font-semibold"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
