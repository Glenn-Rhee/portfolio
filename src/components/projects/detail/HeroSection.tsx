import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { CalendarDaysIcon, ExternalLink, Github, Tag } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-y-8">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Client Landing Page
          </h1>
          <p className="text-base leading-relaxed text-slate-700 md:pe-10 md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            animi adipisci culpa eaque ea ab similique perspiciatis officia
            nulla neque!
          </p>

          <div className="flex items-center gap-x-4 text-sm text-slate-700">
            <div className="flex items-center gap-x-2">
              <CalendarDaysIcon className="size-5" />
              <span>2025</span>
            </div>
            <span className="h-4 w-px bg-slate-300" aria-hidden="true" />
            <div className="flex items-center gap-x-2">
              <Tag className="size-5" />
              <span>Frontend</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" className="font-medium">
              Live Demo <ExternalLink className="size-4" />
            </Button>
            <Button size="sm" variant="outline" className="font-medium">
              View Code <Github className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-slate-100">
          <Image
            className="object-cover"
            fill
            priority
            sizes="(min-width: 768px) 50vdw, 100vdw"
            src="/projects/p-1.jpg"
            alt="Project picture"
          />
        </div>
      </div>
    </section>
  );
}
