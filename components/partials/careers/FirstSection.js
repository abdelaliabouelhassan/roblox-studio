import { Button } from "../UI/Button";

export function FirstSection() {
    return <div className=" r-container pt-20">
        <div className=" flex lg:items-start lg:flex-row flex-col justify-center items-center lg:justify-between w-full gap-20 lg:gap-4">
            <div className=" space-y-[40px]">
                <div className=" max-w-[555px] w-full space-y-4">
                    <h2 className=" font-bold text-3xl sm:text-5xl text-white text-effect">Commit to a Lasting Journey</h2>
                    <p className=" text-base sm:text-lg text-white font-normal">
                        Our company, we have a passion for creating unique and artistically interesting games that captivate players with immersive worlds and engaging stories. When we hire, we hire for the long-term, and consider each hire a long-term investment. Come join us in making artistically interesting games.
                    </p>
                </div>
                <div className=" max-w-[555px] w-full space-y-4">
                    <h2 className=" font-bold text-3xl sm:text-5xl text-white text-effect">Visuals and Stories</h2>
                    <p className=" text-base sm:text-lg text-white font-normal">
                        We're constantly balancing the need to make both art and content. We believe there is space to do both, where games can both create properity for our us, and also fullfil the artistic need to create.
                    </p>
                </div>

                <div>
                    <Button>
                        <div className=" flex items-center gap-2">
                            <span className=" uppercase text-white font-medium text-sm md:text-base">EXPLORE OUR WORK</span>
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

            <div className=" max-w-[460px]">
                <img src="/assets/careers/avatar.png" className=" w-full h-full object-cover" />
            </div>
        </div>
    </div>
}