import clsx from "clsx";

export default function ShellSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "grid -mt-8 md:mt-0 grid-cols-1 md:grid-cols-[55%_1fr] lg:grid-cols-[65%_1fr] z-50 gap-x-4 w-[100%]",
        className
      )}
    >
      {children}
    </div>
  );
}
