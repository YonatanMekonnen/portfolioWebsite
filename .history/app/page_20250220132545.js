import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import na

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
