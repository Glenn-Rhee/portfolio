import Aboutme from "@/components/Aboutme";
import ContactMe from "@/components/ContactMe";
import Container from "@/components/Container";
import MainPage from "@/components/MainPage";
import Projects from "@/components/Projects";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function HomePage(props: { searchParams: SearchParams }) {
  const params = await props.searchParams;

  return (
    <div className="space-y-16 overflow-hidden">
      <Container
        id="home"
        to={
          params.to
            ? /^\d+$/.test(params.to)
              ? +params.to
              : params.to
            : undefined
        }
        className="h-screen"
      >
        <MainPage />
      </Container>
      <Container className="h-[calc(100dvh-2rem)]" id="about">
        <Aboutme />
      </Container>
      <Container className="h-[calc(100dvh-2rem)]" id="projects">
        <Projects />
      </Container>
      <Container className="h-[calc(100dvh-2rem)]" id="contact">
        <ContactMe />
      </Container>
    </div>
  );
}
