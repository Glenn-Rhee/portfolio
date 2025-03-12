import Image from "next/image";

export default function MainPage() {
  return (
    <div className="grid grid-cols-[65%_1fr] z-50 gap-x-4 w-[100%]">
      <div className="flex flex-col justify-center gap-y-6">
        <h4 className="text-gray-700 font-semibold tracking-widest text-2xl">
          Ariel Rizki Muhtamad Bakri
        </h4>
        <h2 className="text-8xl -m-1 font-bold text-black-primary">
          Full Stack Developer
        </h2>
        <p className="text-xl text-gray-600">
          A junior fullstack developer who currently focused on Web Development.
          Other than that, I also interested in Mobile Development. I love to
          learn new things and always open to new opportunities.
        </p>
        <button className="text-slate-900 transition-all hover:bg-slate-900 hover:text-white duration-150 hover:border-transparent bg-transparent cursor-pointer border-2 border-slate-700 rounded-2xl w-[10rem] py-2">
          Contact Me
        </button>
      </div>
      <Image
        src={"/profile.jpg"}
        width={400}
        height={600}
        alt="Ariel Rizki Profile Picture"
        className="rounded-xl"
      />
    </div>
  );
}
