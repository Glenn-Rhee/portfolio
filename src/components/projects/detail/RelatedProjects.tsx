import Badge from "@/components/ui/Badge";
import { Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const relatedProjects = [
  {
    slug: "e-commerce-website",
    title: "E-Commerce Website",
    year: 2025,
    category: "Fullstack",
    image: "/projects/p-1.jpg",
    stacks: ["Next.js", "Tailwind", "Node.js"],
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    year: 2024,
    category: "Frontend",
    image: "/projects/p-1.jpg",
    stacks: ["React", "TypeScript", "Firebase"],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    year: 2024,
    category: "Frontend",
    image: "/projects/p-1.jpg",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
];

export default function RelatedProjects() {
  return (
    <section className="flex w-full flex-col gap-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
          Related Projects
        </h2>
        <p className="text-sm text-slate-500">
          You might also be interested in these projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={project.image}
                alt={project.title}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-y-3 p-5">
              <h3 className="font-semibold text-slate-900">{project.title}</h3>

              <div className="flex items-center gap-x-2 text-xs text-slate-500">
                <div className="flex items-center gap-x-1.5">
                  <Calendar className="size-3.5" />
                  <span>{project.year}</span>
                </div>
                <span className="size-1 rounded-full bg-slate-300" aria-hidden="true" />
                <div className="flex items-center gap-x-1.5">
                  <Tag className="size-3.5" />
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {project.stacks.map((stack) => (
                  <Badge key={stack} variant="soft" size="sm">
                    {stack}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}