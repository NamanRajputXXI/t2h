"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavButton from "../buttons/NavButton";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        <Image src={"/logo.png"} width={200} height={70} alt="External Image" />
        <div className="hidden lg:flex gap-4 items-center">
          <ul className="flex items-center text-base font-light gap-4">
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/domestic"}>Domestic</Link>
            </li>
            <li>
              <Link href={"/international"}>International</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/giftPage"}>Gift an Experience</Link>
            </li>
          </ul>
          <NavButton />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="fixed top-8 right-4 z-50">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-40 flex gap-4 flex-col justify-center items-center transition-all duration-300">
          <ul className="flex flex-col items-center text-base font-light gap-4">
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/domestic"}>Domestic</Link>
            </li>
            <li>
              <Link href={"/international"}>International</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/giftPage"}>Gift an Experience</Link>
            </li>
          </ul>
          <NavButton />
        </div>
      )}
    </>
  );
};

export default Navbar;
