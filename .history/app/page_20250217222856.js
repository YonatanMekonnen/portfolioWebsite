import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#392f2f] container mx-auto px-12 py-4">
      <HeroSection />
    </main>
  );
}
