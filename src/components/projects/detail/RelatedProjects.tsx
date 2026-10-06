"use client";

import Badge from "@/components/ui/Badge";
import { cn } from "@/utils/cn";
import { Calendar, ChevronDown, Folder, FolderOpen, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

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

type Project = (typeof relatedProjects)[number];

function ProjectFolder({
  project,
  defaultOpen = true,
}: {
  project: Project;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const FolderIcon = isOpen ? FolderOpen : Folder;

  return (
    <div className="flex flex-col">
      {/* Tab folder (bisa diklik) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="relative z-10 flex w-fit max-w-[85%] cursor-pointer items-center gap-x-2 rounded-tl-xl bg-slate-100 py-1 pl-4 pr-10 text-sm font-semibold text-slate-900 outline-none [clip-path:polygon(0_0,calc(100%_-_18px)_0,100%_100%,0_100%)] focus-visible:underline"
      >
        <FolderIcon className="size-4 shrink-0 text-slate-600" />
        <span className="truncate">{project.title}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-slate-500 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Badan folder */}
      <div className="rounded-b-xl rounded-tr-xl bg-slate-100 p-2">
        <div
          id={contentId}
          className={cn(
            "grid transition-all duration-500 ease-in-out",
            isOpen
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors duration-300 hover:border-slate-300"
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

              <div className="flex flex-col gap-y-3 p-4">
                <div className="flex items-center gap-x-2 text-xs text-slate-500">
                  <div className="flex items-center gap-x-1.5">
                    <Calendar className="size-3.5" />
                    <span>{project.year}</span>
                  </div>
                  <span
                    className="size-1 rounded-full bg-slate-300"
                    aria-hidden="true"
                  />
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
          </div>
        </div>
      </div>
    </div>
  );
}

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

      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProjects.map((project) => (
          <ProjectFolder key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
