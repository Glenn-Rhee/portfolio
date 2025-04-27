import Container from "@/components/Container";
import Highlight from "@/components/projects/Highlight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariel | Projects",
  keywords: ["Ariel projects", "Ariel project", "Project Ariel"],
};

export default function ProjectsPage() {
  return (
    <div>
      <Container className="flex-col lg:pt-24 px-2 pt-20 items-start justify-start gap-y-10 md:gap-y-6">
        <Highlight />
      </Container>
    </div>
  );
}
