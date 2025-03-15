"use client";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}
export default function Container(props: ContainerProps) {
  const { children, className, id } = props;
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
