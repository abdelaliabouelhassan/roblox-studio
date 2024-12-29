interface ButtonProps {
    children: React.ReactNode;
    hideDecoration?: boolean;  // Optional prop to hide decoration
  }
  

export function Button({ children, hideDecoration = false }: ButtonProps){
    return <div className=" relative group duration-200 w-fit overflow-hidden ">
         <div className=" absolute group-hover:scale-125 duration-200  -left-2.5 -top-2.5 bg-black w-[24px] h-[24px] rounded-full"></div>
         <button className=" duration-200  group-hover:bg-opacity-90 bg-primary px-[30px] py-[16px] rounded-[4px]  ring ring-black">
         {children}
        </button>
        <div className={`absolute -right-3 group-hover:scale-125 duration-200 -bottom-3 bg-black w-[34px] h-[34px] rounded-full
        ${hideDecoration ? 'hidden md:block' : ''}`}></div>
    </div>
}