import { Medal } from "lucide-react";
import Image from "next/image";

export default function Education() {
  return (
    <div className="mt-40 md:mt-16 w-full pb-[100rem]">
      <div className="space-y-1 md:space-y-2 lg:space-y-3 text-center w-full">
        <h4 className="font-bold text-black-primary text-2xl lg:text-3xl">
          Education
        </h4>
        <span className="text-slate-700 text-base lg:text-xl">
          Get to know more about my educational background.
        </span>
      </div>
      <div className="grid  mt-8 md:mt-12 grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1 md:space-y-2 lg:space-y-3">
          <div className="text-black-primary">
            <h5 className="text-lg md:text-xl font-medium md:font-semibold">
              2023 - Present
            </h5>
            <h4 className="text-xl md:text-2xl font-semibold md:font-bold">
              Gunadarma University
            </h4>
            <span className="md:text-lg md:font-medium">
              S1 Information System | Computer Science
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/education/edu-1.jpg"}
              width={700}
              height={320}
              alt="Ariel's Education"
              className="rounded-lg shadow-md"
            />
            <Image
              src={"/education/edu-2.jpg"}
              width={700}
              height={320}
              alt="Ariel's Education"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-1 md:space-y-2 lg:space-y-3">
            <p className="text-justify text-slate-800 md:font-medium text-[15px] md:text-[17px]">
              I am studying a bachelor&apos;s degree in computer science at
              Gunadarma University, with the objective to become a web
              developer. I am fascinated by technology and keen to expand my
              knowledge in computer science.
            </p>
            <span className="px-3 py-1 bg-gray-300 rounded-xl text-black-primary text-sm lg:font-semibold">
              GPA: 3.9 out of 4.0
            </span>
          </div>
        </div>
        <div className="space-y-1 md:space-y-2 lg:space-y-3 mt-8 md:mt-8">
          <div className="text-black-primary flex flex-col justify-end">
            <h4 className="text-xl md:text-2xl font-semibold md:font-bold">
              Certificates
            </h4>
            <span className="md:text-lg md:font-medium">
              Some of my certificates during my study.
            </span>
          </div>
          <div className="flex flex-col gap-y-5 mt-6">
            <div className="flex items-center gap-x-3">
              <div className="w-10 h-10 rounded-full text-white aspect-square bg-black-primary flex items-center justify-center">
                <Medal />
              </div>
              <span className="font-medium text-black-primary md:font-semibold text-base md:text-lg">
                Digister Connect Goes to Gunadarma University by Telkom
                Indonesia
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-10 h-10 rounded-full text-white aspect-square bg-black-primary flex items-center justify-center">
                <Medal />
              </div>
              <span className="font-medium text-black-primary md:font-semibold text-base md:text-lg">
                Google Developer Student Clubs | Designing Future With Backend
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-10 h-10 rounded-full text-white aspect-square bg-black-primary flex items-center justify-center">
                <Medal />
              </div>
              <span className="font-medium text-black-primary md:font-semibold text-base md:text-lg">
                Dicoding Dasar Pemrograman Web
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-10 h-10 rounded-full text-white aspect-square bg-black-primary flex items-center justify-center">
                <Medal />
              </div>
              <span className="font-medium text-black-primary md:font-semibold text-base md:text-lg">
                Dicoding Frontend Web
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
