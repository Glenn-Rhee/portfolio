import Aboutme from "@/components/Aboutme";
import ContactMe from "@/components/ContactMe";
import Container from "@/components/Container";
import MainPage from "@/components/MainPage";
import Projects from "@/components/Projects";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function HomePage(props: { searchParams: SearchParams }) {
  const params = await props.searchParams;

  return (
    <>
      <Container id="home" to={params.to ? +params.to : undefined}>
        <MainPage />
      </Container>
      <Container id="about">
        <Aboutme />
      </Container>
      <Container id="projects">
        <Projects />
      </Container>
      <Container id="contact">
        <ContactMe />
      </Container>
    </>
  );
}
