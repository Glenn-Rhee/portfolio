"use client";
import { useNavbar } from "@/store/NavbarStore";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function ContentMenu() {
  const { isOpen } = useNavbar();
  const menues = ["Home", "About", "Projects", "Contact"];
  return (
    <motion.div
      animate={isOpen ? "open" : "close"}
      variants={{
        open: {
          width: "100vw",
          height: "100vh",
          opacity: 0.8,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 0,
        },
        close: {
          top: 0,
          bottom: 0,
          right: 0,
          opacity: 0.8,
          width: 0,
          height: 0,
        },
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col gap-y-4 fixed justify-center items-center bg-slate-600 lg:hidden"
    >
      {isOpen ? (
        <>
          <motion.h3
            animate={["open", "opened"]}
            variants={{
              open: {
                x: -100,
              },
              opened: {
                x: 0,
              },
            }}
            transition={{
              duration: 0.3,
              delay: 0.4,
            }}
            className={clsx("font-bold text-gray-100 text-5xl mb-4")}
          >
            Menu
          </motion.h3>
          {menues.map((v, i) => (
            <span
              key={i}
              className="text-gray-100 cursor-pointer text-xl font-semibold"
            >
              {v}
            </span>
          ))}
        </>
      ) : null}
    </motion.div>
  );
}
