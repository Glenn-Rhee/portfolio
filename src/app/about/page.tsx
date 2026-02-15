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
    <div className="overflow-hidden space-y-5">
      <Container className="flex-col gap-y-3 md:gap-y-0 py-10 h-[10dvh-2rem]">
        <WhoAmI />
      </Container>
      <Container className="flex-col gap-y-3 md:gap-y-0 py-10 min-h-[100dvh-2rem]">
        <Skills />
      </Container>
      <Container className="justify-start gap-y-3 md:gap-y-0 py-10 px-10">
        <Experience />
      </Container>
      <Container className="flex-col gap-y-3 md:gap-y-0 py-10">
        <Education />
      </Container>
    </div>
  );
}
