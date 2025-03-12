export default function ItemNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="after:block cursor-pointer after:content-[''] after:duration-150 after:mt-1 hover:after:w-full after:w-0 after:mx-auto after:transition-all after:h-[2px] after:bg-slate-900">
      {children}
    </li>
  );
}
