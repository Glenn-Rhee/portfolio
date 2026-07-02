import { motion } from "framer-motion";

export default function Timeline({ isShow }: { isShow: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      animate={isShow ? "show" : "hide"}
      variants={{ show: { opacity: 1 }, hide: { opacity: 0 } }}
      className="w-1 hidden lg:block rounded-full bg-gradient-to-b from-slate-900 via-slate-800 to-transparent h-full absolute left-1/2 top-0 -translate-x-1/2"
    ></motion.div>
  );
}
