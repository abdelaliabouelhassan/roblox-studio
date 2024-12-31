import { HeroSection } from "@/components/partials/careers/HeroSection";
import { FirstSection } from "@/components/partials/careers/FirstSection";
import { SecondSection } from "@/components/partials/careers/SecondSection";
import { ThirdSection } from "@/components/partials/careers/ThirdSection";
import { EightSection } from "@/components/partials/home/EightSection";



export const metadata = {
    title: 'Careers - My Website',
    description: 'Welcome to my website! Explore our amazing content.',
};


export default function Home() {
    return (
        <>
            <HeroSection />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <EightSection />
        </>
    );
}
