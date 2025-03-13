import Image from "next/image";

export default function MainPage() {
  return (
    <div className="grid -mt-8 md:mt-0 grid-cols-1 md:grid-cols-[55%_1fr] lg:grid-cols-[65%_1fr] z-50 gap-x-4 w-[100%]">
      <div className="flex flex-col text-center md:text-start justify-center gap-y-4 md:gap-y-6 md:pe-8 lg:pe-20">
        <h4 className="text-gray-700 mt-4 md:mt-0 font-semibold tracking-widest text-base md:text-2xl">
          Ariel Rizki Muhtamad Bakri
        </h4>
        <h2 className="lg:text-8xl md:text-6xl text-3xl md:-m-1 font-bold text-black-primary">
          Full Stack Developer
        </h2>
        <p className="text-sm md:text-xl text-gray-600">
          A junior fullstack developer who currently focused on Web Development.
          Other than that, I also interested in Mobile Development. I love to
          learn new things and always open to new opportunities.
        </p>
        <div className="flex mx-auto md:mx-0 items-center gap-x-4">
          <button className="text-gray-100 mx-auto md:mx-0 transition-all hover:bg-slate-900 hover:text-white duration-150 hover:border-transparent bg-slate-900 cursor-pointer rounded-2xl w-[8rem] md:w-[10rem] py-2">
            Contact Me
          </button>
          <button className="text-slate-900 mx-auto md:mx-0 transition-all hover:bg-slate-900 hover:text-white duration-150 hover:border-transparent bg-transparent cursor-pointer border-2 border-slate-700 rounded-2xl w-[8rem] md:w-[10rem] py-2">
            Download CV
          </button>
        </div>
      </div>
      <Image
        src={"/profile.jpg"}
        width={400}
        height={600}
        alt="Ariel Rizki Profile Picture"
        className="md:rounded-xl h-[250px] rounded-full object-cover aspect-square md:aspect-auto md:h-auto shadow-md w-[250px] md:w-[300px] lg:w-auto  justify-self-center row-start-1 md:row-start-auto"
      />
    </div>
  );
}
