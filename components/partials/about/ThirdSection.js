
import { ContactCard } from "../UI/ContactCard";

export function ThirdSection() {
    return <div className=" relative r-container space-y-28 pt-10 sm:pt-40">
        <div className=" w-full space-y-[60px]">
            <h3 className=" text-white font-bold text-5xl text-effect text-center">Active Team Members</h3>
            <div className=" w-full grid grid-c md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                <div className=" w-full bg-white bg-opacity-[6%] p-[30px] relative rounded-[20px] border border-white border-opacity-[11%] overflow-hidden">
                    <div className=" absolute top-0 left-0 w-full ">
                        <img src="/assets/about/vecror-bg.png" className=" w-full object h-fit sm:h-60 md:h-fit" />
                    </div>

                    <div className=" flex flex-col items-center relative z-10 gap-[20px] ">
                        <div className=" size-[178px] avatar-effect overflow-hidden rounded-full" >
                            <img src="/assets/about/user1.png" className=" w-full h-full object-cover" />
                        </div>

                        <div className=" flex flex-col items-center">
                            <span className=" text-white text-2xl font-semibold text-effect">Shakh Danial</span>
                            <span className=" text-white text-lg font-normal ">Developer</span>
                        </div>
                    </div>
                </div>
                <div className=" w-full bg-white bg-opacity-[6%] p-[30px] relative rounded-[20px] border border-white border-opacity-[11%] overflow-hidden">
                    <div className=" absolute top-0 left-0 w-full ">
                        <img src="/assets/about/vecror-bg.png" className=" w-full object h-fit sm:h-60 md:h-fit" />
                    </div>

                    <div className=" flex flex-col items-center relative z-10 gap-[20px] ">
                        <div className=" size-[178px] avatar-effect overflow-hidden rounded-full" >
                            <img src="/assets/about/user2.png" className=" w-full h-full object-cover" />
                        </div>

                        <div className=" flex flex-col items-center">
                            <span className=" text-white text-2xl font-semibold text-effect">Shakh Danial</span>
                            <span className=" text-white text-lg font-normal ">Developer</span>
                        </div>
                    </div>
                </div>
                <div className=" w-full bg-white bg-opacity-[6%] p-[30px] relative rounded-[20px] border border-white border-opacity-[11%] overflow-hidden">
                    <div className=" absolute top-0 left-0 w-full ">
                        <img src="/assets/about/vecror-bg.png" className=" w-full object h-fit sm:h-60 md:h-fit" />
                    </div>
                    <div className=" flex flex-col items-center relative z-10 gap-[20px] ">
                        <div className=" size-[178px] avatar-effect overflow-hidden rounded-full" >
                            <img src="/assets/about/user3.png" className=" w-full h-full object-cover" />
                        </div>

                        <div className=" flex flex-col items-center">
                            <span className=" text-white text-2xl font-semibold text-effect">Shakh Danial</span>
                            <span className=" text-white text-lg font-normal ">Developer</span>
                        </div>
                    </div>
                </div>
                <div className=" w-full bg-white bg-opacity-[6%] p-[30px] relative rounded-[20px] border border-white border-opacity-[11%] overflow-hidden">
                    <div className=" absolute top-0 left-0 w-full ">
                        <img src="/assets/about/vecror-bg.png" className=" w-full object h-fit sm:h-60 md:h-fit" />
                    </div>
                    <div className=" flex flex-col items-center relative z-10 gap-[20px] ">
                        <div className=" size-[178px] avatar-effect overflow-hidden rounded-full" >
                            <img src="/assets/about/user4.png" className=" w-full h-full object-cover" />
                        </div>

                        <div className=" flex flex-col items-center">
                            <span className=" text-white text-2xl font-semibold text-effect">Shakh Danial</span>
                            <span className=" text-white text-lg font-normal ">Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <ContactCard />
    </div>
}