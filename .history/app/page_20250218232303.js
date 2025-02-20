import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Container >
      <HeroSection />
      </Container>
    </main>
  );
}
