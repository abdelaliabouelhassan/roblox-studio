'use client'


export function ThirdSection() {


    return (
        <section className="relative">
            <div className=" absolute w-full top-0 left-0 ">
                <img src="/assets/home/ThirdSection-bg.png" className=" w-full max-h-[1025px] h-full " />
            </div>
            <div className=" relative z-10 r-container py-20 space-y-[60px]">
                <div className=" w-full flex flex-wrap items-start justify-center md:justify-between gap-10 md:gap-4">
                    <div className=" flex flex-col items-start gap-1">
                        <span className=" text-white font-bold text-4xl sm:text-5xl text-effect">20+</span>
                        <span className=" text-white text-base sm:text-lg font-semibold">Titles</span>
                    </div>
                    <div className=" flex flex-col items-start gap-1">
                        <span className=" text-white font-bold text-4xl sm:text-5xl text-effect">3.6B</span>
                        <span className=" text-white text-base sm:text-lg font-semibold">Plays</span>
                    </div>
                    <div className=" flex flex-col items-start gap-1">
                        <span className=" text-white font-bold text-4xl sm:text-5xl text-effect">88%</span>
                        <span className=" text-white text-base sm:text-lg font-semibold">Average rating</span>
                    </div>
                    <div className=" flex flex-col items-start gap-1">
                        <span className=" text-white font-bold text-4xl sm:text-5xl text-effect">17M+</span>
                        <span className=" text-white text-base sm:text-lg font-semibold">Game favorites</span>
                    </div>
                    <div className=" flex flex-col items-start gap-1">
                        <span className=" text-white font-bold text-4xl sm:text-5xl text-effect">8.2M+</span>
                        <span className=" text-white text-base sm:text-lg font-semibold">Community Members</span>
                    </div>
                </div>

                <div className=" w-full relative rounded-[30px] border border-white border-opacity-[11%] h-[400px] sm:h-[500px] md:h-[650px] overflow-hidden">
                    <img src="/assets/home/video.png" className=" w-full h-full object-cover" />

                    <div className=" absolute top-0 left-0 w-full  h-full flex">
                        <button className=" m-auto">
                            <svg
                                width={117}
                                height={117}
                                viewBox="0 0 117 117"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width={117}
                                    height={117}
                                    rx={58.5}
                                    fill="#F04438"
                                    fillOpacity={0.3}
                                />
                                <rect
                                    x={20.8928}
                                    y={20.8929}
                                    width={75.2143}
                                    height={75.2143}
                                    rx={37.6071}
                                    fill="#F04438"
                                />
                                <path
                                    d="M41.786 58.5v-7.438c0-9.234 6.54-13.016 14.541-8.399l6.456 3.72L69.24 50.1c8.002 4.617 8.002 12.18 0 16.798l-6.456 3.719-6.456 3.719c-8.002 4.617-14.541.835-14.541-8.4V58.5z"
                                    fill="#fff"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}