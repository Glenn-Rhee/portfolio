import { useNavbar } from "@/store/NavbarStore";
import { motion } from "framer-motion";

interface SeparatorProps {
  isSecond?: boolean;
}

export default function Separator(props: SeparatorProps) {
  const { isSecond } = props;
  const { isOpen } = useNavbar();

  return (
    <motion.div
      animate={isOpen ? "open" : "close"}
      variants={{
        open: {
          rotate: isSecond ? -45 : 45,
          y: isSecond ? -1 : 10,
          backgroundColor: "#fff",
        },
        close: {
          rotate: 0,
          y: 0,
          backgroundColor: "#0f172b",
        },
      }}
      transition={{
        duration: 0.3,
      }}
      className="w-10 h-[3px] bg-slate-800 rounded-md"
    />
  );
}
