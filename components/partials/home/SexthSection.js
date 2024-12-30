'use client'


export function SexthSection() {


    return (
        <section className="relative">
            <div className=" absolute w-full top-0 left-0 ">
                <img src="/assets/home/sexth-bg.png" className=" w-full max-h-[822px] h-full " />
            </div>


            <div className=" r-container relative z-10 pb-10 pt-20">
                <div className=" w-full grid col-span-3 md:grid-cols-4 lg:grid-cols-5 gap-[30px]">
                    <div className=" w-full col-auto md:col-span-3 rounded-[16px] p-[30px] bg-primary space-y-4">
                        <span className=" text-lg font-medium text-white">OUR PORTFOLIO</span>
                        <h4 className=" text-white font-bold text-4xl lg:text-5xl">Discover What We Offer</h4>
                        <p className=" text-white text-lg font-normal">
                            Explore a diverse range of carefully crafted experiences designed to meet your needs. Our collection is filled with unique and innovative solutions, waiting for you to dive in and discover what’s possible.
                        </p>
                    </div>
                    <div className=" w-full col-auto md:col-span-1 lg:col-span-2  relative rounded-[16px] overflow-hidden max-h-[273.75px]">
                        <img src="/assets/home/sexth-1.png" className=" w-full h-full object-cover" />
                        <div className=" absolute w-full h-full top-0 left-0 flex">
                            <button className=" m-auto hover:rotate-45 duration-200">
                                <svg
                                    width={58}
                                    height={59}
                                    viewBox="0 0 58 59"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"

                                >
                                    <g clipPath="url(#clip0_66064_819)">
                                        <ellipse
                                            cx={28.8727}
                                            cy={29.487}
                                            rx={28.8727}
                                            ry={29.0834}
                                            fill="#00A8FF"
                                        />
                                        <path
                                            d="M57.245 29.487c0 15.79-12.706 28.583-28.372 28.583C13.206 58.07.5 45.277.5 29.487S13.206.904 28.873.904c15.666 0 28.372 12.793 28.372 28.583z"
                                            stroke="#fff"
                                            strokeOpacity={0.11}
                                        />
                                        <path
                                            d="M35.83 32.801a.765.765 0 01-.55.218.778.778 0 01-.762-.784l.119-8.08-8.08-.118a.778.778 0 01-.761-.784.778.778 0 01.784-.762l8.852.13a.778.778 0 01.762.784l-.13 8.852a.765.765 0 01-.234.544z"
                                            fill="#fff"
                                        />
                                        <path
                                            d="M35.83 24.07L23.38 36.164a.78.78 0 01-1.094-.016.78.78 0 01.016-1.094l12.452-12.092a.779.779 0 011.093.016c.295.303.288.799-.016 1.094z"
                                            fill="#fff"
                                        />
                                        <ellipse
                                            cx={10.3997}
                                            cy={49.0948}
                                            rx={7.42556}
                                            ry={14.298}
                                            transform="rotate(-40.6 10.4 49.095)"
                                            fill="#fff"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_66064_819">
                                            <rect y={0.40332} width={58} height={58} rx={29} fill="#fff" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className=" w-full relative rounded-[16px] overflow-hidden max-h-[298px] col-auto md:col-span-1 lg:col-span-2">
                        <img src="/assets/home/sexth-2.png" className=" w-full h-full object-cover" />
                    </div>
                    <div className=" w-full relative rounded-[16px] overflow-hidden max-h-[298px] col-auto md:col-span-2">
                        <img src="/assets/home/sexth-3.png" className=" w-full h-full object-cover" />
                    </div>
                    <div className=" w-full relative rounded-[16px] overflow-hidden max-h-[298px] col-auto md:col-span-1">
                        <img src="/assets/home/sexth-4.png" className=" w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}