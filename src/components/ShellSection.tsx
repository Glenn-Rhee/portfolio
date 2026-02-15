import { cn } from "@/utils/cn";
import { Ref } from "react";

export default function ShellSection({
  children,
  className,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-[55%_1fr] lg:grid-cols-[65%_1fr] z-50 gap-x-4 w-[100%]",
        className,
      )}
    >
      {children}
    </div>
  );
}
