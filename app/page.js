import { FirstSection } from "@/components/partials/home/FirstSection";
import { HeroSection } from "@/components/partials/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FirstSection />
    </>
  );
}
