import { FirstSection } from "@/components/partials/about/FirstSection";
import { HeroSection } from "@/components/partials/about/HeroSection";
import { SecondSection } from "@/components/partials/about/SecondSection";




export const metadata = {
    title: 'About - My Website',
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
