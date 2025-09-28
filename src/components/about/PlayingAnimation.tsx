import { motion } from "framer-motion";

export default function PlayingAnimation() {
  return (
    <div className="flex gap-x-1 items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: "0.8rem" }}
          animate={{ height: ["0.8rem", "2rem", "0.8rem"] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          className="w-1 rounded-md bg-slate-800"
        />
      ))}
    </div>
  );
}
