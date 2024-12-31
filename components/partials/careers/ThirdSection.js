import { Button } from "../UI/Button";
import { ContactCard } from "../UI/ContactCard";

export function ThirdSection() {
    return <div className=" relative r-container space-y-28 pt-10 sm:pt-40">

        <div className=" p-5 sm:p-10 md:p-[60px] rounded-2xl md:rounded-[30px] bg-white bg-opacity-[6%] overflow-hidden  relative">
            <div className=" absolute -top-[30rem] left-0 h-full w-full flex">
                <svg className=" m-auto"
                    width={1440}
                    height={1878}
                    viewBox="0 0 1440 1878"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_66064_1566)">
                        <circle cx={720} cy={939} r={139} fill="#00A8FF" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_66064_1566"
                            x={-219}
                            y={0}
                            width={1878}
                            height={1878}
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur
                                stdDeviation={400}
                                result="effect1_foregroundBlur_66064_1566"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>


            <div className=" relative z-10">
                <h4 className=" text-white text-3xl sm:text-5xl font-bold text-center text-effect">Work With Us</h4>
                <div className=" space-y-10 pt-10">
                    <div className=" flex flex-col items-start gap-2 w-full">
                        <span className=" text-white">Filters:</span>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] w-full">
                            <select className=" outline-none rounded-md font-normal text-white text-base w-full border border-white border-opacity-[11%] bg-white bg-opacity-[6%] px-5 py-3">
                                <option value=''>Department</option>
                                <option value='topic1'>topic 1</option>
                            </select>
                            <select className=" outline-none rounded-md font-normal text-white text-base w-full border border-white border-opacity-[11%] bg-white bg-opacity-[6%] px-5 py-3">
                                <option value=''>Location</option>
                                <option value='topic1'>topic 1</option>
                            </select>
                            <select className=" outline-none rounded-md font-normal text-white text-base w-full border border-white border-opacity-[11%] bg-white bg-opacity-[6%] px-5 py-3">
                                <option value=''>Employment Type</option>
                                <option value='topic1'>topic 1</option>
                            </select>
                        </div>
                    </div>

                    <div className=" border border-white border-opacity-[6%] h-px"></div>

                    <div className=" flex flex-col items-start gap-4">
                        <h6 className=" font-semibold text-4xl text-white">Engineering</h6>
                        <div className=" w-full flex md:flex-row flex-col md:justify-between items-start sm:items-center bg-white bg-opacity-[6%] border border-white border-opacity-[11%] rounded-[12px] p-4 md:p-[20px]">
                            <div className=" flex flex-col items-start -space-y-3">
                                <span className=" text-white text-2xl  font-semibold">Backend Software Engineer</span>
                                <div className=" flex items-center gap-x-px md:gap-x-2 flex-wrap">
                                    <span className=" font-normal text-white text-base">Engineering</span>
                                    <span className=" text-[#D9D9D9] text-5xl leading-none pb-5">.</span>
                                    <span className=" font-normal text-white text-base">Remote - Canada ; Remote - UK; Remote - Brazil</span>
                                    <span className=" text-[#D9D9D9] text-5xl leading-none pb-5">.</span>
                                    <span className=" font-normal text-white text-base">Full time</span>
                                </div>
                            </div>
                            <Button effect={true}>
                                <div className=" flex items-center gap-2">
                                    <span className=" uppercase text-white font-medium text-sm md:text-base">Apply Now</span>
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
                        <div className=" w-full flex md:flex-row flex-col md:justify-between items-start sm:items-center bg-white bg-opacity-[6%] border border-white border-opacity-[11%] rounded-[12px] p-4 md:p-[20px]">
                            <div className=" flex flex-col items-start -space-y-3">
                                <span className=" text-white text-2xl  font-semibold">Backend Software Engineer</span>
                                <div className=" flex items-center gap-x-px md:gap-x-2 flex-wrap">
                                    <span className=" font-normal text-white text-base">Engineering</span>
                                    <span className=" text-[#D9D9D9] text-5xl leading-none pb-5">.</span>
                                    <span className=" font-normal text-white text-base">Remote - Canada ; Remote - UK; Remote - Brazil</span>
                                    <span className=" text-[#D9D9D9] text-5xl leading-none pb-5">.</span>
                                    <span className=" font-normal text-white text-base">Full time</span>
                                </div>
                            </div>
                            <Button effect={true}>
                                <div className=" flex items-center gap-2">
                                    <span className=" uppercase text-white font-medium text-sm md:text-base">Apply Now</span>
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
                    <div className=" flex flex-col items-start gap-4">
                        <h6 className=" font-semibold text-4xl text-white">Operations</h6>
                        <div className=" w-full flex md:flex-row flex-col md:justify-between items-start sm:items-center bg-white bg-opacity-[6%] border border-white border-opacity-[11%] rounded-[12px] p-4 md:p-[20px]">
                            <div className=" flex flex-col items-start -space-y-3">
                                <span className=" text-white text-2xl  font-semibold">Backend Software Engineer</span>
                                <div className=" flex items-center gap-x-px md:gap-x-2 flex-wrap">
                                    <span className=" font-normal text-white text-base">Engineering</span>
                                    <span className=" text-[#D9D9D9] text-5xl leading-none pb-5">.</span>
                                    <span className=" font-normal text-white text-base">Remote - Canada ; Remote - UK; Remote - Brazil</span>
                                    <span className=" text-[#D9D9D9] text-5xl leading-none pb-5">.</span>
                                    <span className=" font-normal text-white text-base">Full time</span>
                                </div>
                            </div>
                            <Button effect={true}>
                                <div className=" flex items-center gap-2">
                                    <span className=" uppercase text-white font-medium text-sm md:text-base">Apply Now</span>
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
        </div>


        <ContactCard />
    </div>
}