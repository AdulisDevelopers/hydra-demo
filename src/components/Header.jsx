import { useState } from "react";
import { HiBars2, BiX } from "react-icons/all";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-50 bg-[#302C42] sticky top-0 left-0 w-full py-3 px-6  uppercase flex items-center justify-between font-semibold">
      <a href="/" className="flex items-center space-x-2">
        <img className="h-10" src="/logo.png" alt="" />
        <img className="h-6" src="/logo_text.png" alt="" />
      </a>

      <div
        className={`p-3 md:p-0 gap-4 grid fixed left-0 transition-all duration-300 ${
          menuOpen ? "-top-0" : "-top-full"
        }  md:flex place-content-start bg-primary-900 md:static w-full md:w-fit`}
      >
        <a className="w-fit transition-all hover:text-white/75" href="#">
          Home
        </a>
        <a className="w-fit transition-all hover:text-white/75" href="#">
          About
        </a>
        <a className="w-fit transition-all hover:text-white/75" href="#">
          Services
        </a>
        <a className="w-fit transition-all hover:text-white/75" href="#">
          Technologies
        </a>
        <a className="w-fit transition-all hover:text-white/75" href="#">
          How To
        </a>
      </div>

      <div className="space-x-3 hidden md:block">
        <a className="border-2 p-3 rounded-full" href="#">
          contact us
        </a>
        <a
          className=" p-3.5 rounded-full text-black bg-gradient-to-r from-primary-700 to-primary-500 "
          href="#"
        >
          join hydra
        </a>
      </div>

      <div
        className="md:hidden text-2xl z-50 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <BiX /> : <HiBars2 />}
      </div>
    </div>
  );
};

export default Header;
