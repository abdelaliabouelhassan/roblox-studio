import { FirstSection } from "@/components/partials/home/FirstSection";
import { HeroSection } from "@/components/partials/home/HeroSection";
import { SecondSection } from "@/components/partials/home/SecondSection";


export const metadata = {
  title: 'Home - My Website',
  description: 'Welcome to my website! Explore our amazing content.',
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <FirstSection />
      <SecondSection />
    </>
  );
}
