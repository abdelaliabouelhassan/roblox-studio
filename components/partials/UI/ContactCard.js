export function ContactCard() {
    return <div className=" w-full rounded-2xl md:rounded-[44px] overflow-hidden h-44 md:h-fit relative">
        <img src="/assets/contactCard.png" className=" w-full h-full object-cover" />
        <div className=" w-full h-full absolute top-0 left-0 px-5 md:p-20 lg:p-[100px] z-10">
            <div className=" w-full h-full flex items-center md:flex-row flex-col justify-center gap-5 md:justify-between">
                <h3 className=" text-center md:text-start text-white font-semibold text-lg sm:text-2xl md:text-5xl lg:text-[56px] lg:leading-[64px]">
                    Connect with us <br /> for gamING update.
                </h3>

                <button className=" p-3 md:p-[21px] border-[2px] rounded-[12px] bg-black border-white flex items-center gap-2 md:gap-4 hover:scale-105 duration-150 hover:bg-opacity-85">
                    <span className=" text-white font-medium text-xs sm:text-sm md:text-base">CONTACT NOW</span>

                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8225 4.85083L15.375 9.40333L10.8225 13.9558" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.625 9.40332H15.2475" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>
            </div>
        </div>
    </div>
}