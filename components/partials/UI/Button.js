

export function Button({ children, hideDecoration = false, effect = false, bg = 'bg-black' }) {
  return <div className=" relative group duration-200 w-fit overflow-hidden ">
    <div className={`${effect ? 'btn-effect' : bg} absolute group-hover:scale-125 duration-200  -left-2.5 -top-2.5  w-[24px] h-[24px] rounded-full`}></div>
    <button className=" duration-200  group-hover:bg-opacity-90 bg-primary px-[30px] py-[16px] rounded-[4px]  ring ring-black">
      {children}
    </button>
    <div className={`absolute -right-3 group-hover:scale-125 duration-200 -bottom-3  w-[34px] h-[34px] rounded-full
      ${effect ? 'btn-effect' : bg}  ${hideDecoration ? 'hidden md:block' : ''}`}></div>
  </div>
}