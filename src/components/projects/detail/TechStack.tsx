import { Code2 } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h4 className="font-bold text-2xl flex items-center gap-x-1.5">
        <Code2 className="size-5" /> Tech Stack
      </h4>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-y-3 border border-slate-900/20 rounded-lg items-center justify-center bg-slate-300/20 py-6"
          >
            <Image
              src={"/spotify.png"}
              width={40}
              height={80}
              alt="HTML Icon"
            />
            <span className="font-medium text-sm">HTML</span>
          </div>
        ))}
      </div>
    </div>
  );
}
