"use client";
import { useNavbar } from "@/store/NavbarStore";
import { motion } from "framer-motion";

export default function ContentMenu() {
  const { isOpen } = useNavbar();
  return (
    <motion.div
      animate={isOpen ? "open" : "close"}
      variants={{
        open: {
          width: "100vw",
          height: "100vh",
          opacity: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 0,
        },
        close: {
          top: 10,
          left: "100vw",
          bottom: 0,
          right: 100,
          width: 0,
          height: 0,
          opacity: 1,
          borderRadius: "50%",
        },
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex fixed bg-slate-600 lg:hidden"
    ></motion.div>
  );
}
