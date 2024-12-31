import { HeroSection } from "@/components/partials/careers/HeroSection";
import { FirstSection } from "@/components/partials/careers/FirstSection";



export const metadata = {
    title: 'Careers - My Website',
    description: 'Welcome to my website! Explore our amazing content.',
};


export default function Home() {
    return (
        <>
            <HeroSection />
            <FirstSection />
        </>
    );
}
