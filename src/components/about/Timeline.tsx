import { motion } from "framer-motion";
export default function Timeline({ isShow }: { isShow: boolean }) {
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2,
      }}
      animate={isShow ? "show" : "hide"}
      variants={{
        show: {
          y: 0,
          opacity: 1,
        },
        hide: {
          y: 80,
          opacity: 0,
        },
      }}
      className="w-2 hidden lg:block rounded-xs bg-gradient-to-b from-slate-900 via-slate-800 to-transparent h-full absolute left-1/2 -top-1/2 translate-1/2"
    ></motion.div>
  );
}
