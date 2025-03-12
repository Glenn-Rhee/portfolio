import { FolderOpenDot, House, Mail, UserRound } from "lucide-react";
import ItemNavbar from "./ItemNavbar";

export default function Navbar() {
  return (
    <nav className="h-20 px-32 fixed top-0 right-0 left-0 flex items-center w-screen bg-transparent shadow-[0_1px_8px_0_rgba(100,120,255,0.1)] backdrop-blur-[7px]">
      <h1 className="text-black-primary text-2xl font-semibold tracking-wider">
        Ariel
      </h1>
      <ul className="flex items-center justify-evenly gap-x-14 min-w-[70%] mx-auto ms-96">
        <ItemNavbar>
          <House size={24} color="oklch(0.208 0.042 265.755)" />
        </ItemNavbar>
        <ItemNavbar>
          <UserRound size={24} color="oklch(0.208 0.042 265.755)" />
        </ItemNavbar>
        <ItemNavbar>
          <FolderOpenDot size={24} color="oklch(0.208 0.042 265.755)" />
        </ItemNavbar>
        <ItemNavbar>
          <Mail size={24} color="oklch(0.208 0.042 265.755)" />
        </ItemNavbar>
      </ul>
    </nav>
  );
}
