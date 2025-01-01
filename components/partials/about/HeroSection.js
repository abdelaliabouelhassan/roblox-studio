import Link from "next/link";

export function HeroSection() {
    return <section className=" relative bg-primary">
        <div>
            <img src="/assets/hero-bg.png" className=" w-full h-full" />
        </div>
        <div className=" absolute w-full h-full top-0 left-0  flex">
            <div className=" m-auto flex flex-col items-center gap-5">
                <h1 className="text-white font-bold text-4xl sm:text-[56px] text-effect">About Us</h1>
                <div className=" flex items-center gap-2">
                    <Link href="/" className=" text-white text-base sm:text-lg font-normal hover:text-opacity-65 duration-200">Home</Link>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.3681 7.4868C14.6507 7.76939 14.6507 8.23064 14.3681 8.51324L8.83276 14.0484C8.54973 14.3315 8.08932 14.3315 7.80632 14.0484L7.4967 13.7388C7.21341 13.4555 7.21335 12.9954 7.49666 12.712L11.6957 8.51336C11.9791 8.23008 11.9791 7.76983 11.6957 7.48655L7.4967 3.28786C7.21335 3.00455 7.21338 2.54443 7.49673 2.26111L7.80635 1.95149C8.08895 1.66889 8.5502 1.66889 8.83279 1.95149L14.3681 7.4868ZM2.96994 1.95143C2.68707 1.66852 2.22623 1.66855 1.94335 1.95143L1.63373 2.26105C1.35098 2.5438 1.35094 3.00505 1.63373 3.28783L5.83257 7.48655C6.11588 7.76986 6.11588 8.23005 5.83257 8.51336L1.6337 12.7121C1.35082 12.9949 1.35085 13.456 1.6337 13.7388L1.94332 14.0485C2.22632 14.3315 2.68691 14.3315 2.96991 14.0485L8.0136 9.00461C9.42841 10.418 9.07054 10.0596 8.01463 9.00358L8.50495 8.51324C8.78773 8.23046 8.7877 7.76955 8.50495 7.48677L2.96994 1.95143Z" fill="white" />
                        </g>
                    </svg>
                    <span className=" text-base sm:text-lg text-white font-normal text-opacity-70">About Us</span>
                </div>
            </div>
        </div>
    </section>
}