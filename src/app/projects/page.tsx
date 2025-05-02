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
    <div>
      <Container className="flex-col lg:pt-24 pe-10 md:px-2 pt-20 md:pt-24 items-start justify-start gap-y-10 md:gap-y-6">
        <Highlight />
      </Container>
      <Container
        id="other"
        className="flex-col pe-10 mt-[18rem] md:mt-[8rem] lg:pt-24 px-2 pt-20 items-start justify-start gap-y-10 md:gap-y-6"
      >
        <OtherProject />
      </Container>
    </div>
  );
}
