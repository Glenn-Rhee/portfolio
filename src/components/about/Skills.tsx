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
    <div className="w-full flex mt-40 flex-col items-center justify-center lg:flex-row lg:items-center">
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
    </div>
  );
}
