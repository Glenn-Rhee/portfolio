import Container from "@/components/Container";
import ChallangeProject from "@/components/projects/detail/ChallangeProject";
import HeroSection from "@/components/projects/detail/HeroSection";
import KeyFeatures from "@/components/projects/detail/KeyFeatures";
import ProjectOverview from "@/components/projects/detail/ProjectOverview";
import RelatedProjects from "@/components/projects/detail/RelatedProjects";
import TechStack from "@/components/projects/detail/TechStack";
import { buttonVariants } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectDetail() {
  return (
    <div className="overflow-hidden space-y-5">
      <Container className="flex-col items-start gap-y-8 lg:px-20 md:gap-y-18 py-10 text-black-primary mt-14">
        <HeroSection />
        <ProjectOverview />
        <KeyFeatures />
        <ChallangeProject />
        <TechStack />
        <div className="w-full flex justify-between items-center py-2 px-4 bg-slate-300/50 rounded-lg border border-slate-500/30">
          <div className="flex items-center gap-x-2">
            <ArrowUpRight className="size-5 hidden md:block" />
            <div className="flex flex-col gap-y-1">
              <span className="text-base md:text-lg font-medium">
                Interested in working together?
              </span>
              <span className="text-xs md:text-sm">
                Feel free to reach out if you have a project in mind or just
                want to say hi!
              </span>
            </div>
          </div>
          <Link href={"/?to=2750"} className={buttonVariants()}>
            Contact Me <ArrowRight className="size-5 hidden md:block" />
          </Link>
        </div>
        <RelatedProjects />
      </Container>
    </div>
  );
}
