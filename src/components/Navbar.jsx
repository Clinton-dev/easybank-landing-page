import { useState } from "react";
import RequestInviteButton from "./RequestInviteButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* desktop */}
      <nav className="hidden md:flex justify-around py-8 items-baseline bg-neutral-white ">
        <div>
          <img src="./logo.svg" alt="" />
        </div>
        <div>
          <ul className="flex gap-8 text-neutral-grayish-blue">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <RequestInviteButton />
        </div>
      </nav>
      {/* mobile */}
      <nav className="flex justify-between p-8 md:hidden">
        <div>
          <img src="./logo.svg" alt="" />
        </div>
        <div>
          <button onClick={toggleMenu}>
            <img
              src={isOpen ? "./icon-close.svg" : "./icon-hamburger.svg"}
              alt=""
            />
          </button>
        </div>
      </nav>
      {/* mobile menu items */}

      {isOpen && (
        <div className="absolute top-[20%] right-[8%] text-primary-dark-blue bg-neutral-white md:hidden py-8 border rounded w-5/6 drop-shadow-2xl">
          <ul className="flex flex-col gap-8 text-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
