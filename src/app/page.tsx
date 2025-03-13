import Aboutme from "@/components/Aboutme";
import Container from "@/components/Container";
import MainPage from "@/components/MainPage";

export default function HomePage() {
  return (
    <>
      <Container id="home">
        <MainPage />
      </Container>
      <Container id="about">
        <Aboutme />
      </Container>
    </>
  );
}
