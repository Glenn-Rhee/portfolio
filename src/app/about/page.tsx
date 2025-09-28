import Education from "@/components/about/Education";
import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";
import WhoAmI from "@/components/about/WhoAmI";
import Container from "@/components/Container";
import { DataSong } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariel | About",
  keywords: ["Tentang Ariel", "Ariel about"],
};

export default async function AboutPage() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://portfolio-three-azure-71.vercel.app"
      : "http://localhost:3000";
  const response = await fetch(baseUrl + "/api/spotify/now-playing");
  const dataSong = (await response.json()) as DataSong;

  return (
    <div>
      <Container className="flex-col px-2 pt-14 items-start justify-start gap-y-10 md:gap-y-6">
        <WhoAmI dataSong={dataSong} />
      </Container>
      <Container className="flex-col px-2 pt-14 items-start justify-start gap-y-10 md:gap-y-6">
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
