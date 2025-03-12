"use client";
import Separator from "./Separator";
import { useNavbar } from "@/store/NavbarStore";

export default function HumbergerMenu() {
  const { toggle } = useNavbar();

  return (
    <button
      onClick={toggle}
      className="cursor-pointer relative z-10 p-3 space-y-2 block lg:hidden"
    >
      <Separator />
      <Separator isSecond />
    </button>
  );
}
