import Skills from "@/components/about/Skills";
import WhoAmI from "@/components/about/WhoAmI";
import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <div>
      <Container className="flex-col pt-14 items-start justify-start gap-y-10 md:gap-y-6">
        <WhoAmI />
      </Container>
      <Container className="flex-col pt-14 items-start justify-start gap-y-10 md:gap-y-6">
        <Skills />
      </Container>
    </div>
  );
}
