"use client";
import { useEffect } from "react";
import Separator from "./Separator";
import { useNavbar } from "@/store/NavbarStore";

export default function HumbergerMenu() {
  const { toggle, isOpen } = useNavbar();

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-y-hidden");
    else document.body.classList.remove("overflow-y-hidden");
  }, [isOpen]);

  return (
    <button
      onClick={() => {
        toggle();
      }}
      className="cursor-pointer relative z-30 p-3 space-y-2 block lg:hidden"
    >
      <Separator />
      <Separator isSecond />
    </button>
  );
}
