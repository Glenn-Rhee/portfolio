import Image from "next/image";

export default function Highlight() {
  return (
    <div className="ms-2 md:ms-0 text-black-primary w-full">
      <h3 className="font-semibold md:font-bold text-xl md:text-2xl lg:text-3xl tracking-widest">
        Highlight
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 w-full">
        <div className="flex flex-col gap-y-4 self-center">
          <Image
            src={"/projects/p-1.jpg"}
            alt="Project 1 Ariel"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
          <Image
            src={"/projects/p-2.jpg"}
            alt="Project 1 Ariel"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center gap-y-3">
          <h5 className="text-black-primary font-semibold md:font-bold text-lg md:text-3xl">
            Addorama Store
          </h5>
          <p className="text-slate-600 font-medium text-lg text-justify">
            I developed the Addorama Store project, a platform focused on the
            sale of electronic goods. Through its main website, users can easily
            purchase a wide range of electronic products. In addition, users can
            also register as sellers through the seller domain, which provides a
            dashboard to monitor daily, weekly, monthly, and yearly sales data.
            In developing this project, I utilized Next.js, TypeScript, Express,
            JWT, and Prisma to ensure a responsive, secure, and efficient
            system.
          </p>
          <div className="flex items-center gap-x-4">
            <button className="bg-slate-800 text-white w-22 py-1 transition-all hover:bg-slate-900 duration-150 rounded-lg font-semibold cursor-pointer">
              More
            </button>
            <a href="https://addorama.vercel.app/" target="_blank" className="hover:underline">Preview</a>
          </div>
        </div>
      </div>
    </div>
  );
}
