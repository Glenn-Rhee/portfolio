import { Sparkles } from "lucide-react";

export default function KeyFeatures() {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h4 className="font-bold text-2xl flex items-center gap-x-1.5">
        <Sparkles className="size-5" /> Key Features
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-3">
        <div className="flex flex-col gap-y-1 bg-slate-300/20 border border-slate-500/20 rounded-lg p-4">
          <span className="font-semibold">Interactive Navigation</span>
          <p className="text-sm text-slate-700">Optimized for all devices</p>
        </div>
        <div className="flex flex-col gap-y-1 bg-slate-300/20 border border-slate-500/20 rounded-lg p-4">
          <span className="font-semibold">Interactive Navigation</span>
          <p className="text-sm text-slate-700">Optimized for all devices</p>
        </div>
        <div className="flex flex-col gap-y-1 bg-slate-300/20 border border-slate-500/20 rounded-lg p-4">
          <span className="font-semibold">Interactive Navigation</span>
          <p className="text-sm text-slate-700">Optimized for all devices</p>
        </div>
        <div className="flex flex-col gap-y-1 bg-slate-300/20 border border-slate-500/20 rounded-lg p-4">
          <span className="font-semibold">Interactive Navigation</span>
          <p className="text-sm text-slate-700">Optimized for all devices</p>
        </div>
      </div>
    </div>
  );
}
