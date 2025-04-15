import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "Frontend Development",
      iconHref: "/skills/web-development.png",
      iconAlt: "Frontend Development icon",
    },
    {
      name: "Rest API",
      iconHref: "/skills/rest-api.png",
      iconAlt: "Rest API icon",
    },
    {
      name: "Backend Development",
      iconHref: "/skills/backend.png",
      iconAlt: "Backend Development icon",
    },
    {
      name: "Testing & Debugging",
      iconHref: "/skills/testing.png",
      iconAlt: "Testing & Debugging icon",
    },
  ];
  return (
    <div className="w-full flex mt-40 md:mt-16 flex-col items-center gap-y-28 justify-center">
      {/* Skills & Expertise */}
      <div className="flex mx-auto flex-col gap-y-3">
        <div className="space-y-3 text-center">
          <h4 className="font-bold text-black-primary text-xl md:text-2xl lg:text-3xl">
            Skills and Expertise
          </h4>
          <span className="text-slate-700 text-sm md:text-base lg:text-lg">
            Explore some skills I&apos;m proficient in to deliver high-quality
            solutions.
          </span>
        </div>

        {/* Items skills */}
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-4 gap-x-20 w-full mt-8">
          {skills.map((skill, i) => (
            <div key={i} className="flex  items-center flex-col">
              <Image
                src={skill.iconHref}
                alt={skill.iconAlt}
                width={50}
                height={50}
                className="mx-auto"
              />
              <span className="text-black-primary text-center text-sm md:text-base lg:text-lg font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Language & Frameworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4 flex flex-col items-center">
          <h5 className="uppercase text-center text-lg md:text-xl lg:text-xl text-black-primary tracking-[0.4em]">
            Language & Framework
          </h5>
          <span className="font-semibold text-slate-800 text-center">
            <span className="font-bold text-black-primary">HTML</span> |
            <span className="font-bold text-black-primary"> CSS</span> |
            <span className="font-bold text-black-primary"> JavaScript</span> |
            <span className="font-bold text-black-primary"> Typescript</span> |
            <span className="font-bold text-black-primary"> ReactJs</span> |
            <span className="font-bold text-black-primary"> NextJs</span> |
            <span className="font-bold text-black-primary"> TailwindCSS</span> |
            <span className="font-bold text-black-primary"> Bootstrap</span> |
            <span className="font-bold text-black-primary"> NodeJs</span> |
            <span className="font-bold text-black-primary"> ExpressJs</span> |
            <span className="font-bold text-black-primary"> MySQL</span> |
            <span className="font-bold text-black-primary"> MongoDB</span> |
            firebase | Golang | PHP
          </span>
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <h5 className="uppercase text-center text-lg md:text-xl lg:text-xl text-black-primary tracking-[0.4em]">
            Tools
          </h5>
          <span className="font-bold text-black-primary text-center">
            VsCode | Git | Github |{" "}
            <span className="text-slate-800 font-semibold">Figma</span> |
            Postman
          </span>
        </div>
      </div>
    </div>
  );
}
