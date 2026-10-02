import { Lightbulb } from "lucide-react";

export default function ChallangeProject() {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h4 className="font-bold text-2xl flex items-center gap-x-1.5">
        <Lightbulb className="size-5" /> Challange & Solutions
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        <div className="flex flex-col gap-y-1 bg-slate-300/20 border border-slate-500/20 rounded-lg p-4">
          <span className="font-semibold">The Challange</span>
          <p className="text-sm text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nobis sequi. Distinctio optio, quod animi aliquam aspernatur
            adipisci dicta eligendi repudiandae vero praesentium sit neque
            consequuntur quos veniam eaque itaque voluptatum quaerat deserunt
            numquam nisi perspiciatis placeat consectetur suscipit? Harum quasi
            aliquid odit quae quod consequuntur eveniet repudiandae id ad.
          </p>
        </div>
        <div className="flex flex-col gap-y-1 bg-slate-300/20 border border-slate-500/20 rounded-lg p-4">
          <span className="font-semibold">The Solutions</span>
          <p className="text-sm text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nobis sequi. Distinctio optio, quod animi aliquam aspernatur
            adipisci dicta eligendi repudiandae vero praesentium sit neque
            consequuntur quos veniam eaque itaque voluptatum quaerat deserunt
            numquam nisi perspiciatis placeat consectetur suscipit? Harum quasi
            aliquid odit quae quod consequuntur eveniet repudiandae id ad.
          </p>
        </div>
      </div>
    </div>
  );
}
