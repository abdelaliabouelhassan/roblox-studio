import Link from "next/link";

export function Footer() {
    return <footer className=" r-container pt-20 md:pt-40 pb-10">
        <div className=" w-full flex sm:flex-row flex-col items-center sm:justify-between gap-10 sm:gap-0 ">
            <div className=" space-y-5">
                <span className=" text-white font-semibold text-2xl">Quick Links</span>
                <div className=" flex flex-col items-center sm:items-start gap-2">
                    <Link href="/about-us" className=" font-medium font-futura text-lg text-white text-opacity-70 hover:text-opacity-90 duration-200">About Us</Link>
                    <Link href="/careers" className=" font-medium font-futura text-lg text-white text-opacity-70 hover:text-opacity-90 duration-200">Careers</Link>
                    <Link href="/" className=" font-medium font-futura text-lg text-white text-opacity-70 hover:text-opacity-90 duration-200">Game</Link>
                </div>
            </div>

            <div className=" flex flex-col items-center gap-[30px] max-w-[288px]">
                <Link href="/">
                    <img src="/assets/logo.svg" className=" w-full h-full object-cover" alt="" />
                </Link>
                <p className=" text-white text-base font-normal text-center">
                    Lorimp ipsam t is a long established fact that a reader will be distracted by the readable content of a page
                </p>

                <div className=" flex items-center gap-1.5">
                    <a href="" target="_blank" className=" w-[33px] h-[33px] rounded-full border border-white border-opacity-[11%] flex">
                        <svg className=" m-auto" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7015 11.7001V7.89111C11.7015 6.01911 11.2985 4.58911 9.11447 4.58911C8.06147 4.58911 7.35947 5.16111 7.07347 5.70711H7.04747V4.75811H4.98047V11.7001H7.13847V8.25511C7.13847 7.34511 7.30747 6.47411 8.42547 6.47411C9.53047 6.47411 9.54347 7.50111 9.54347 8.30711V11.6871H11.7015V11.7001Z" fill="white" />
                            <path d="M1.4707 4.75806H3.6287V11.7001H1.4707V4.75806Z" fill="white" />
                            <path d="M2.54878 1.30005C1.85978 1.30005 1.30078 1.85905 1.30078 2.54805C1.30078 3.23705 1.85978 3.80905 2.54878 3.80905C3.23778 3.80905 3.79678 3.23705 3.79678 2.54805C3.79678 1.85905 3.23778 1.30005 2.54878 1.30005Z" fill="white" />
                        </svg>
                    </a>
                    <a href="" target="_blank" className=" w-[33px] h-[33px] rounded-full border border-white border-opacity-[11%] flex">
                        <svg className=" m-auto" width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.73038 13V6.90002H0.886719V4.70374H2.73038V2.82783C2.73038 1.35372 3.81945 0 6.32887 0C7.3449 0 8.09621 0.085215 8.09621 0.085215L8.03701 2.13617C8.03701 2.13617 7.2708 2.12965 6.43467 2.12965C5.52973 2.12965 5.38475 2.49449 5.38475 3.10004V4.70374H8.10894L7.99041 6.90002H5.38475V13H2.73038Z" fill="white" />
                        </svg>
                    </a>
                    <a href="" target="_blank" className=" w-[33px] h-[33px] rounded-full border border-white border-opacity-[11%] flex">
                        <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" m-auto"
                        >
                            <g clipPath="url(#clip0_66064_952)" fill="#fff">
                                <path d="M9.75 0h-6.5A3.26 3.26 0 000 3.25v6.5A3.26 3.26 0 003.25 13h6.5A3.26 3.26 0 0013 9.75v-6.5A3.26 3.26 0 009.75 0zm2.166 9.75a2.169 2.169 0 01-2.166 2.167h-6.5A2.17 2.17 0 011.083 9.75v-6.5A2.17 2.17 0 013.25 1.083h6.5c1.195 0 2.166.972 2.166 2.167v6.5z" />
                                <path d="M10.021 3.791a.813.813 0 100-1.625.813.813 0 000 1.625zM6.5 3.25a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm0 5.417a2.167 2.167 0 110-4.334 2.167 2.167 0 010 4.334z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_66064_952">
                                    <path fill="#fff" d="M0 0H13V13H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="" target="_blank" className=" w-[33px] h-[33px] rounded-full border border-white border-opacity-[11%] flex">
                        <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" m-auto"
                        >
                            <g clipPath="url(#clip0_66064_963)">
                                <path
                                    d="M7.711 5.505L12.447 0h-1.123L7.213 4.78 3.928 0H.141l4.966 7.228L.14 13h1.122l4.342-5.047L9.073 13h3.788l-5.15-7.495zM6.174 7.29l-.503-.72L1.667.846h1.724l3.23 4.621.504.72 4.2 6.008H9.6L6.174 7.292z"
                                    fill="#fff"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_66064_963">
                                    <path fill="#fff" d="M0 0H13V13H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>

            <div className=" space-y-5 text-center sm:text-end">
                <span className=" text-white font-semibold text-2xl">Contact Us</span>
                <div className=" flex flex-col  items-center sm:items-end gap-4">
                    <div className=" flex items-center gap-1">
                        <div className=" w-[30px] h-[30px] rounded-full border border-white border-opacity-[11%] flex">
                            <svg width="14" height="15" className=" m-auto" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.91675 12.7992H4.08341C1.95425 12.7992 0.729248 11.5742 0.729248 9.44507V5.36173C0.729248 3.23257 1.95425 2.00757 4.08341 2.00757H9.91675C12.0459 2.00757 13.2709 3.23257 13.2709 5.36173V9.44507C13.2709 11.5742 12.0459 12.7992 9.91675 12.7992ZM4.08341 2.88257C2.41508 2.88257 1.60425 3.6934 1.60425 5.36173V9.44507C1.60425 11.1134 2.41508 11.9242 4.08341 11.9242H9.91675C11.5851 11.9242 12.3959 11.1134 12.3959 9.44507V5.36173C12.3959 3.6934 11.5851 2.88257 9.91675 2.88257H4.08341Z" fill="white" />
                                <path d="M6.99979 7.9108C6.50979 7.9108 6.01396 7.75914 5.63479 7.44997L3.80896 5.99164C3.62229 5.83997 3.58729 5.5658 3.73896 5.37914C3.89062 5.19247 4.16479 5.15747 4.35146 5.30914L6.17729 6.76747C6.62062 7.1233 7.37312 7.1233 7.81645 6.76747L9.64229 5.30914C9.82895 5.15747 10.109 5.18664 10.2548 5.37914C10.4065 5.5658 10.3773 5.8458 10.1848 5.99164L8.35896 7.44997C7.98562 7.75914 7.48979 7.9108 6.99979 7.9108Z" fill="white" />
                            </svg>
                        </div>
                        <span className=" text-white text-base font-normal">example1@gmail.com</span>
                    </div>
                    <div className=" flex items-center gap-1">
                        <div className=" w-[30px] h-[30px] rounded-full border border-white border-opacity-[11%] flex">
                            <svg className=" m-auto" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8159 11.0959C12.8159 11.3059 12.7692 11.5217 12.6701 11.7317C12.5709 11.9417 12.4426 12.1401 12.2734 12.3267C11.9876 12.6417 11.6726 12.8692 11.3167 13.0151C10.9667 13.1609 10.5876 13.2367 10.1792 13.2367C9.58425 13.2367 8.94841 13.0967 8.27758 12.8109C7.60675 12.5251 6.93591 12.1401 6.27091 11.6559C5.60008 11.1659 4.96425 10.6234 4.35758 10.0226C3.75675 9.4159 3.21425 8.78007 2.73008 8.11507C2.25175 7.45007 1.86675 6.78507 1.58675 6.1259C1.30675 5.4609 1.16675 4.82507 1.16675 4.2184C1.16675 3.82173 1.23675 3.44257 1.37675 3.09257C1.51675 2.73674 1.73841 2.41007 2.04758 2.1184C2.42091 1.7509 2.82925 1.57007 3.26091 1.57007C3.42425 1.57007 3.58758 1.60507 3.73341 1.67507C3.88508 1.74507 4.01925 1.85007 4.12425 2.00174L5.47758 3.90924C5.58258 4.05507 5.65841 4.18923 5.71091 4.31757C5.76341 4.44007 5.79258 4.56257 5.79258 4.6734C5.79258 4.8134 5.75175 4.9534 5.67008 5.08757C5.59425 5.22173 5.48341 5.36173 5.34341 5.50173L4.90008 5.96257C4.83591 6.02673 4.80675 6.10257 4.80675 6.1959C4.80675 6.24257 4.81258 6.2834 4.82425 6.33007C4.84175 6.37673 4.85925 6.41173 4.87091 6.44673C4.97591 6.63923 5.15675 6.89007 5.41341 7.1934C5.67591 7.49674 5.95591 7.8059 6.25925 8.11507C6.57425 8.42423 6.87758 8.71007 7.18675 8.97257C7.49008 9.22923 7.74091 9.40423 7.93925 9.50923C7.96841 9.5209 8.00341 9.5384 8.04425 9.5559C8.09091 9.5734 8.13758 9.57923 8.19008 9.57923C8.28925 9.57923 8.36508 9.54423 8.42925 9.48007L8.87258 9.04257C9.01841 8.89674 9.15841 8.7859 9.29258 8.7159C9.42675 8.63423 9.56091 8.5934 9.70675 8.5934C9.81758 8.5934 9.93425 8.61673 10.0626 8.66923C10.1909 8.72173 10.3251 8.79757 10.4709 8.89674L12.4017 10.2676C12.5534 10.3726 12.6584 10.4951 12.7226 10.6409C12.7809 10.7867 12.8159 10.9326 12.8159 11.0959Z" stroke="white" strokeMiterlimit="10" />
                            </svg>
                        </div>
                        <span className=" text-white text-base font-normal">+262 331 0023</span>
                    </div>
                    <div className=" flex items-center gap-1">
                        <div className=" w-[30px] h-[30px] rounded-full border border-white border-opacity-[11%] flex">
                            <svg className=" m-auto" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.27832C3.6225 1.27832 0.875 4.02582 0.875 7.40332C0.875 10.7808 3.6225 13.5283 7 13.5283C10.3775 13.5283 13.125 10.7808 13.125 7.40332C13.125 4.02582 10.3775 1.27832 7 1.27832ZM12.145 5.36165H10.0275C9.77667 3.97332 9.28083 2.82999 8.6275 2.10665C10.2375 2.60249 11.5267 3.80999 12.145 5.36165ZM12.5417 7.40332C12.5417 7.91082 12.4658 8.39499 12.3433 8.86165H10.1208C10.1792 8.39499 10.2142 7.91082 10.2142 7.40332C10.2142 6.89582 10.1792 6.41165 10.1208 5.94499H12.3433C12.4717 6.41165 12.5417 6.89582 12.5417 7.40332ZM1.45833 7.40332C1.45833 6.89582 1.53417 6.41165 1.65667 5.94499H3.87917C3.82083 6.41165 3.78583 6.89582 3.78583 7.40332C3.78583 7.91082 3.82083 8.39499 3.87917 8.86165H1.65667C1.52833 8.39499 1.45833 7.91082 1.45833 7.40332ZM4.375 7.40332C4.375 6.90165 4.41 6.41165 4.47417 5.94499H6.70833V8.86165H4.47417C4.41 8.39499 4.375 7.90499 4.375 7.40332ZM9.4325 5.36165H7.29167V1.90249C8.25417 2.14165 9.07083 3.51832 9.4325 5.36165ZM6.70833 1.90249V5.36165H4.5675C4.92333 3.51832 5.74583 2.13582 6.70833 1.90249ZM6.70833 9.44499V12.9042C5.74583 12.665 4.92917 11.2883 4.5675 9.44499H6.70833ZM7.29167 12.9042V9.44499H9.4325C9.07667 11.2883 8.25417 12.6708 7.29167 12.9042ZM7.29167 8.86165V5.94499H9.52583C9.59 6.41165 9.625 6.90165 9.625 7.40332C9.625 7.90499 9.59 8.39499 9.52583 8.86165H7.29167ZM5.3725 2.10665C4.71917 2.82999 4.22333 3.97332 3.9725 5.36165H1.855C2.47333 3.80999 3.76833 2.60249 5.3725 2.10665ZM1.855 9.44499H3.9725C4.22333 10.8333 4.71917 11.9767 5.3725 12.7C3.7625 12.2042 2.47333 10.9967 1.855 9.44499ZM8.6275 12.7C9.28083 11.9767 9.77667 10.8333 10.0275 9.44499H12.145C11.5267 10.9967 10.2317 12.2042 8.6275 12.7Z" fill="white" />
                            </svg>
                        </div>
                        <span className=" text-white text-base font-normal">exasmple.co</span>
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex items-center sm:flex-row flex-col sm:justify-between w-full pt-9  gap-4">
            <p className=" text-sm text-white text-opacity-70">
                Copyright © 2024  all rights reserved.
            </p>

            <div className=" flex sm:items-center sm:flex-row flex-col items-center gap-2">
                <Link href="/" className=" text-sm text-white text-opacity-70">Privacy</Link>
                <Link href="/" className=" text-sm text-white text-opacity-70">Terms & Conditions</Link>
            </div>
        </div>
    </footer>
}