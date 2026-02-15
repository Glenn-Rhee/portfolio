import Container from "@/components/Container";
import Highlight from "@/components/projects/Highlight";
import OtherProject from "@/components/projects/OtherProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariel | Projects",
  keywords: ["Ariel projects", "Ariel project", "Project Ariel"],
};

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden space-y-5">
      <Container className="flex-col gap-y-3 md:gap-y-0 py-10 h-[calc(10dvh-2rem)] mt-14">
        <Highlight />
      </Container>
      <Container
        id="other"
        className="flex-col gap-y-3 md:gap-y-0 py-10 h-[calc(10dvh-2rem)] mt-14"
      >
        <OtherProject />
      </Container>
    </div>
  );
}
