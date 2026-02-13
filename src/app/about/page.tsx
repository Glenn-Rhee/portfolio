import Education from "@/components/about/Education";
import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";
import WhoAmI from "@/components/about/WhoAmI";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariel | About",
  keywords: ["Tentang Ariel", "Ariel about"],
};

export default async function AboutPage() {
  return (
    <div>
      <Container className="flex-col px-2 pt-14 items-start justify-start gap-y-10 md:gap-y-6 overflow-y-hidden">
        <WhoAmI />
      </Container>
      <Container className="flex-col px-2 pt-14 items-start justify-start gap-y-10 md:gap-y-6 ">
        <Skills />
      </Container>
      <Container className="flex-col !h-fit px-2 !pt-2 pb-14 items-start justify-start gap-y-10 md:gap-y-6">
        <Experience />
      </Container>
      <Container className="flex-col px-2 pt-14 items-start justify-start gap-y-10 md:gap-y-6">
        <Education />
      </Container>
    </div>
  );
}
