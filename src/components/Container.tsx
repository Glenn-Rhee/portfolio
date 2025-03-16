"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  to?: number | undefined;
}

export default function Container(props: ContainerProps) {
  const { children, className, id, to } = props;
  const pathName = usePathname();

  useEffect(() => {
    if (to && pathName === "/") {
      window.scrollTo({
        behavior: "smooth",
        top: to,
      });
    }
  }, [pathName, to]);
  return (
    <div
      id={id}
      className={clsx(
        "h-screen w-screen flex items-center justify-center pt-0 md:pt-16 lg:pt-20 px-4 md:px-16 lg:px-32 relative z-10",
        className
      )}
    >
      {children}
    </div>
  );
}
