'use client'
import Link from 'next/link'
import { Button } from "./UI/Button.js"
import MenuButton from "./UI/MenuButton.js"
import { useEffect, useState } from "react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (newState) => {
    setIsMenuOpen(newState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return <header className="w-full fixed z-20 top-0 left-0 bg-black">
    <div className="r-container py-4 relative">
      <div className="w-full flex items-center justify-between">
        <div className="max-w-[35px] md:max-w-[47.97px]">
          <Link href="/" onClick={handleLinkClick}>
            <img src="/assets/logo.svg" className="w-full h-full object-cover" alt="" />
          </Link>
        </div>

        <nav className="items-center gap-8 hidden md:flex">
          <Link href="/" className="font-medium font-futura text-lg text-white hover:text-opacity-90 duration-200">Home</Link>
          <Link href="/about-us" className="font-medium font-futura text-lg text-white hover:text-opacity-90 duration-200">About Us</Link>
          <Link href="/careers" className="font-medium font-futura text-lg text-white hover:text-opacity-90 duration-200">Careers</Link>
          <Link href="/" className="font-medium font-futura text-lg text-white hover:text-opacity-90 duration-200">Contact</Link>
          <Button>
            <div className="flex items-center gap-2">
              <span className="uppercase text-white font-medium text-base">GET STARTED</span>
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
        </nav>
        <div className="md:hidden">
          <div className="z-50 relative">
            <MenuButton menuOpen={isMenuOpen} onToggle={handleMenuToggle} />
          </div>

          <div className={`absolute z-40 top-0 right-0 w-full h-screen bg-black transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <div className="flex flex-col justify-center items-center h-full gap-8 p-6">
              <Link href="/" onClick={handleLinkClick} className="font-medium font-futura text-lg text-white hover:text-opacity-90 duration-200">
                Home
              </Link>
              <Link href="/about-us" onClick={handleLinkClick} className="font-medium font-futura text-lg text-white hover:text-opacity-90 duration-200">
                About Us
              </Link>
              <Link href="/careers" onClick={handleLinkClick} className="font-medium font-futura text-lg text-white hover:text-opacity-90 duration-200">
                Careers
              </Link>
              <Link href="/" onClick={handleLinkClick} className="font-medium font-futura text-lg text-white hover:text-opacity-90 duration-200">
                Contact
              </Link>
              <Button onClick={handleLinkClick}>
                <div className="flex items-center gap-2">
                  <span className="uppercase text-white font-medium text-base">GET STARTED</span>
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
  </header>
}