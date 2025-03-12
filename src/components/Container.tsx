import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export default function Container(props: ContainerProps) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "h-screen w-screen py-3 px-10 bg-red-900 relative -z-40",
        className
      )}
    >
      {children}
    </div>
  );
}
