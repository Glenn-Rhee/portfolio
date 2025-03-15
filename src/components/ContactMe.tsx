import { Mail } from "lucide-react";
import ShellSection from "./ShellSection";
import Image from "next/image";

export default function ContactMe() {
  const contacts = [
    {
      icon: <Mail size={35} color="#f3f4f6" />,
    },
    {
      icon: (
        <Image
          src={"/github-mark-white.png"}
          width={35}
          height={35}
          alt="Github Icon"
        />
      ),
    },
    {
      icon: (
        <Image
          src={"/instagram.png"}
          width={70}
          height={70}
          alt="Instagram Icon"
        />
      ),
    },
    {
      icon: (
        <Image
          src={"/linked-in.png"}
          width={42}
          height={42}
          alt="Linked in Icon"
        />
      ),
    },
    {
      icon: (
        <Image src={"/discord.png"} width={42} height={42} alt="Discord Icon" />
      ),
    },
  ];

  return (
    <ShellSection>
      <div className="flex flex-col text-center md:text-start justify-center gap-y-4 md:gap-y-6 md:pe-8 lg:pe-20">
        <h2 className="lg:text-8xl hidden md:block md:text-6xl md:-m-1 font-bold text-black-primary">
          Get In Touch
        </h2>
        <div className="flex flex-col justify-start mx-auto md:mx-0 gap-y-2 md:gap-y-3 mt-3 md:mt-0">
          <div className="w-28 h-[4px] bg-slate-800 rounded-lg" />
          <div className="w-28 h-[4px] bg-slate-800 rounded-lg md:ms-10 lg:ms-12 ms-8" />
        </div>
        <span className="text-sm md:text-xl text-gray-600">
          Feel free to contact me if you have any question.
        </span>
        <span className="text-sm md:text-xl text-gray-600">
          arielrizki.fs1@gmail.com
        </span>
        <div className="flex items-center gap-x-4 mx-auto md:mx-0">
          {contacts.map((v, i) => (
            <div
              key={i}
              className="h-14 w-14 md:h-16 md:w-16 bg-slate-800 flex items-center justify-center rounded-full"
            >
              {v.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="relative row-start-1 w-fit mx-auto md:row-start-auto">
        <Image
          src={"/pict-1.jpg"}
          width={400}
          height={600}
          alt="Ariel Rizki Profile Picture"
          className="rounded-xl shadow-md object-contain w-full max-w-[300px] md:max-w-max mx-auto md:w-[300px] lg:w-auto"
        />
        <div className="flex items-center justify-center md:hidden absolute bottom-2 left-2 w-[180px] bg-white/40 rounded-md">
          <h2 className="text-3xl text-black-primary font-semibold">
            Get In Touch
          </h2>
        </div>
      </div>
    </ShellSection>
  );
}
