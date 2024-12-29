import { FirstSection } from "@/components/partials/home/FirstSection.js";
import { HeroSection } from "@/components/partials/home/HeroSection.js";


export const metadata = {
    title: 'Careers - My Website',
    description: 'Welcome to my website! Explore our amazing content.',
};


export default function Home() {
    return (
        <>
            <HeroSection />
        </>
    );
}
