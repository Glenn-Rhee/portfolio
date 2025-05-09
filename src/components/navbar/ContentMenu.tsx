"use client";
import { useNavbar } from "@/store/NavbarStore";
import clsx from "clsx";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function ContentMenu() {
  const { isOpen, setIsOpen, gapFromTop } = useNavbar();
  const pathName = usePathname();
  const router = useRouter();
  const menues = [
    {
      title: "Home",
      min: -1,
      max: 570,
    },
    {
      title: "About",
      min: 570,
      max: 1300,
    },
    {
      title: "Projects",
      min: 1300,
      max: 1900,
    },
    {
      title: "Contact",
      min: 1900,
      max: 2500,
    },
  ];

  return (
    <motion.div
      animate={isOpen ? "open" : "close"}
      initial={{
        top: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        x: "100vh",
      }}
      variants={{
        open: {
          x: 0,
          width: "100vw",
          opacity: 0.9,
        },
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex flex-col gap-y-4 fixed justify-center items-center bg-slate-600 lg:hidden"
    >
      {isOpen ? (
        <>
          <motion.h3
            initial={{
              x: -40,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
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
            <motion.span
              onClick={() => {
                setIsOpen(false);
              }}
              initial={{
                x: -40,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: +("0.4" + i + 9),
              }}
              key={i}
              className={clsx(
                "text-gray-100 cursor-pointer text-xl font-semibold after:block after:content-[''] after:duration-150 after:mt-1 hover:after:w-full after:w-0 after:mx-auto after:transition-all after:h-[2px] after:bg-white",
                (pathName === "/" &&
                  gapFromTop > v.min! &&
                  gapFromTop <= v.max!) ||
                  pathName === `/${v.title.toLowerCase()}`
                  ? "after:w-full"
                  : "after:w-0"
              )}
            >
              <a
                href={`#${v.title.toLowerCase()}`}
                onClick={(e) => {
                  setIsOpen(false);
                  e.preventDefault();
                  const scrollTo =
                    i === 0
                      ? v.min
                      : i === menues.length - 1
                      ? v.max - 50
                      : v.min + 300;
                  const tes = document.querySelector(
                    "#" + v.title.toLowerCase()
                  ) as HTMLDivElement;
                  if (pathName !== "/") {
                    router.push("/?to=" + scrollTo);
                  }

                  if (pathName === "/") {
                    window.scrollTo({
                      behavior: "smooth",
                      top: tes.offsetTop,
                    });
                  }
                }}
              >
                {v.title}
              </a>
            </motion.span>
          ))}
        </>
      ) : null}
    </motion.div>
  );
}
