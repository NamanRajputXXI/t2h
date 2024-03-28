import React from "react";
import { IoIosCall } from "react-icons/io";
const NavButton = () => {
  return (
    <>
      <button class="bg-transparent flex items-center justify-center gap-4 duration-300  font-medium hover:text-white transition-all hover:bg-black py-2 px-4 border border-black hover:border-transparent rounded">
        <IoIosCall size={24} /> 01140612834
      </button>
    </>
  );
};

export default NavButton;
