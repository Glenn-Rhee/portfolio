import Aboutme from "@/components/Aboutme";
import ContactMe from "@/components/ContactMe";
import Container from "@/components/Container";
import MainPage from "@/components/MainPage";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <Container id="home">
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
