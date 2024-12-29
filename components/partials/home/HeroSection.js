import { Button } from "../UI/Button.js";


export function HeroSection() {
    return (
        <div className=" w-full relative">
            <div className=" w-full">
                <img src="/assets/home/hero-bg.webp" className=" w-full h-[450px] sm:h-[500px] md:h-[645px] lg:h-full lg:object-cover" alt="" />
            </div>
            <div className=" h-full  w-full gradient-background  absolute top-0 left-0">
                <div className=" r-container h-full flex flex-col justify-center">
                    <div className=" max-w-[300px] md:max-w-[444px] space-y-6 md:space-y-10">
                        <h1 className=" text-white font-bold font-futura text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-effect">
                            The Ultimate Gaming Nexus
                        </h1>
                        <p className=" font-normal font-futura text-base md:text-lg text-white text-opacity-90">
                            Your gateway to epic gaming experiences, offering endless adventures and a community built for gamers.
                        </p>
                        <Button hideDecoration={true}>
                            <div className=" flex items-center gap-2">
                                <span className=" uppercase text-white font-medium text-sm md:text-base">GET STARTED</span>
                                <svg
                                    width={18}
                                    height={19}
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.822 4.65l4.553 4.552-4.553 4.552M2.625 9.202h12.623"
                                        stroke="#fff"
                                        strokeWidth={1.5}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

