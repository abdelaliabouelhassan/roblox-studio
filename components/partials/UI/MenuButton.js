import React from 'react';

const MenuButton = ({ menuOpen = false, onToggle }) => {
  const toggleMenu = () => {
    if (onToggle) onToggle(!menuOpen);
  };

  return (
    <button
      onClick={toggleMenu}
      className="w-8 h-8 flex items-center justify-center"
    >
      <div className="w-6 h-[1.125rem] relative">
        {/* Top Line */}
        <div
          className={`transition-all duration-[400ms] ease-linear bg-white rounded-full h-[0.125rem] w-6 absolute top-[0.1875rem] origin-center ${menuOpen ? 'rotate-45 !top-2 !left-0' : ''
            }`}
        ></div>

        {/* Bottom Line */}
        <div
          className={`transition-all duration-[400ms] ease-linear bg-white rounded-full h-[0.125rem] w-5 absolute bottom-[0.1875rem] left-1 origin-center ${menuOpen ? '-rotate-45 !w-6 !left-0 !bottom-2' : ''
            }`}
        ></div>
      </div>
    </button>
  );
};

export default MenuButton;