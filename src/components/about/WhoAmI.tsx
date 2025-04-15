import Image from "next/image";

export default function WhoAmI() {
  return (
    <>
      <h3 className="text-black-primary mt-6 ms-2 md:ms-0 font-bold text-3xl md:text-4xl text-start">
        Who Am I?
      </h3>
      <div className="grid grid-cols-1 w-full md:grid-cols-2">
        <div className="flex flex-col text-center md:text-start justify-center gap-y-4 md:gap-y-6 md:pe-8 lg:pe-20">
          <div className="w-full flex">
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex flex-col gap-y-4">
                <Image
                  src={"/pict-1.jpg"}
                  alt="Ariel picture"
                  width={200}
                  height={200}
                  className="aspect-square object-cover shadow rounded-lg"
                />
                <Image
                  src={"/pict-1.jpg"}
                  alt="Ariel picture"
                  width={200}
                  height={200}
                  className="object-cover shadow rounded-lg"
                />
              </div>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/pict-1.jpg"}
                  alt="Ariel picture"
                  width={200}
                  height={200}
                  className="object-cover shadow rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-10 mt-8 md:mt-0 flex flex-col justify-center">
          <span className="text-slate-700 font-bold text-2xl lg:text-4xl">
            Ariel Rizki Muhtamad Bakri
          </span>
          <p className="text-justify mt-3 text-sm text-slate-600 md:text-lg">
            Hallo, I’m Ariel Rizki Muhtamad Bakri, a tech enthusiast and
            aspiring Web Developer. Originating from Jakarta, Indonesia, I’m
            currently embarking on a fascinating journey at Gunadarma
            University. Where I’m pursuing my degree in Information System. My
            passion for technology and coding knows no bounds. Let’s connect and
            explore this ever-evolving world of tech together!
          </p>
          <div className="w-full mt-4 py-3 px-4 border border-slate-500 rounded-lg bg-white flex items-center gap-x-10">
            <Image
              src={"/spotify.png"}
              alt="Spotify picture"
              width={50}
              height={50}
            />
            <span className="text-md lg:text-xl font-semibold text-black-primary">
              Currently offline
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
