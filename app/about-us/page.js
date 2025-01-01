import { FirstSection } from "@/components/partials/about/FirstSection";
import { HeroSection } from "@/components/partials/about/HeroSection";




export const metadata = {
    title: 'About - My Website',
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
