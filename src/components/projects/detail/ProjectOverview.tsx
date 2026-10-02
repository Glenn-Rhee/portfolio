export default function ProjectOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <div className="flex flex-col gap-y-4">
        <h4 className="font-semibold text-xl">Project Overview</h4>
        <p className="text-sm leading-relaxed text-slate-700 md:pe-10">
          This project is a responsive landing page developed for a client to
          establish their online presence and present their services in a clear
          and engaging way. The website is designed to be modern, clean, and
          easy to navigate across all devices.
        </p>
      </div>
      <div className="flex flex-col gap-y-4 h-full">
        <h4 className="font-semibold text-xl">
          My Role <span className="text-sm">(Frontend Developer)</span>
        </h4>
        <p className="text-sm leading-relaxed text-slate-700 md:pe-10">
          I designed and developed the landing page from the initial layout to
          the final implementation, including responsive design and interactive
          components.
        </p>
      </div>{" "}
    </div>
  );
}
