"use client";
import Separator from "./Separator";
import { useNavbar } from "@/store/NavbarStore";

export default function HumbergerMenu() {
  const { toggle } = useNavbar();

  return (
    <button
      onClick={() => {
        toggle();
        const classLists = document.body.classList;
        if (classLists.contains("overflow-y-hidden")) {
          classLists.remove("overflow-y-hidden");
        } else {
          classLists.add("overflow-y-hidden");
        }
      }}
      className="cursor-pointer relative z-30 p-3 space-y-2 block lg:hidden"
    >
      <Separator />
      <Separator isSecond />
    </button>
  );
}
