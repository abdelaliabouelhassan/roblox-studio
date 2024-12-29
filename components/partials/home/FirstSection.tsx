import Link from 'next/link'
import { Button } from "../UI/Button";

export function FirstSection() {
    return <div className=" relative">
        <div className=" w-full ">
            <img src="/assets/home/first-bg.webp" className=" w-full h-full absolute top-0 left-0 lg:relative lg:h-[774px] " alt="" />
        </div>
        <div className=" lg:absolute relative py-10 lg:py-0 w-full top-0 left-0 flex flex-col justify-center pr-8 xl:pr-0 h-full z-10">
            <div className=" r-container flex lg:flex-row flex-col justify-between gap-y-28 gap-x-4 lg:gap-x-0 items-center w-full">
                <div className=" max-w-[555px] flex flex-col items-center md:items-start space-y-10">
                    <div className=" w-full space-y-5">
                        <h2 className=" text-white font-bold font-futura text-3xl md:text-5xl text-effect">
                            Unlocking Remarkable Adventures
                        </h2>
                        <svg width="59" height="6" viewBox="0 0 59 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.750977H59L57 5.75098H2L0 0.750977Z" fill="#00A8FF" />
                        </svg>
                    </div>


                    <p className=" text-white text-base font-futura text-opacity-90">
                        Step into a world where every adventure is designed to captivate and thrill. From breathtaking experiences to unforgettable journeys, we create moments that leave a lasting impact. Let us unlock the extraordinary and help you discover adventures that will stay with you forever.
                    </p>

                    <div className=" flex items-center gap-10">
                        <div className=" flex flex-col items-start gap-2">
                            <span className=" font-semibold text-4xl">30k</span>
                            <span className=" font-normal text-lg text-opacity-70 text-white">Member</span>
                        </div>
                        <div className=" flex flex-col items-start gap-2">
                            <span className=" font-semibold text-4xl">12k</span>
                            <span className=" font-normal text-lg text-opacity-70 text-white">NFT</span>
                        </div>
                        <div className=" flex flex-col items-start gap-2">
                            <span className=" font-semibold text-4xl">20k</span>
                            <span className=" font-normal text-lg text-opacity-70 text-white">Artist</span>
                        </div>
                    </div>


                    <div className=" flex md:flex-row flex-col items-center gap-8">
                        <Link href="/">
                            <Button>
                                <div className=" flex items-center gap-2">
                                    <span className=" uppercase text-white font-medium text-sm md:text-base">READ MORE</span>
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
                        </Link>


                        <button className=" flex items-center gap-4">
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
                            <span className=" text-white text-base font-medium">HOW IT WORK</span>
                        </button>
                    </div>
                </div>


                <div className=" relative">
                    <div className=" max-w-[465px] w-full h-[400px] md:h-[457px] relative z-10 ">
                        <img src="/assets/home/remarkable.webp" className=" w-full h-full object-cover" alt="" />
                    </div>

                    <div className=" bg-primary max-w-[462.3px] w-full h-[400px] md:h-[482.64px] rotate-[3.94deg] absolute -top-11 -right-[15px]">

                    </div>
                </div>
            </div>
        </div>
    </div>
}


