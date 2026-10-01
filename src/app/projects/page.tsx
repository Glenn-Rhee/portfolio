import Container from "@/components/Container";
import OtherProject from "@/components/projects/OtherProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariel | Projects",
  keywords: ["Ariel projects", "Ariel project", "Project Ariel"],
};

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden space-y-5">
      <Container
        id="other"
        className="flex-col gap-y-3 md:gap-y-0 py-10 min-h-fit mt-14"
      >
        <OtherProject />
      </Container>
    </div>
  );
}
