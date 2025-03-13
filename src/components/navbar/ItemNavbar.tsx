import clsx from "clsx";

export default function ItemNavbar({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <li
      className={clsx(
        "after:block cursor-pointer after:content-[''] after:duration-150 after:mt-1 hover:after:w-full after:w-0 after:mx-auto after:transition-all after:h-[2px] after:bg-slate-900",
        isActive ? "after:w-full" : "after:w-0"
      )}
    >
      {children}
    </li>
  );
}
