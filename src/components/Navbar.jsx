import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  //gsap hook
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 w-full mix-blend-difference z-30"
      >
        <div className="main-container py-6 flex justify-between items-center">
          <button onClick={scrollToTop} className="block">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </button>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-transform duration-200 ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-transform duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>

      {/* full screen menu */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 md:gap-12 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500`}
      >
        <button
          onClick={() => {
            scrollToTop();
            setMenuOpen(false);
          }}
          className="menu-link"
        >
          Home
        </button>
        <a href="#about" className="menu-link">
          About
        </a>
        {/* <a href="" className="menu-link">
          Experience
        </a> */}
        <a href="#projects" className="menu-link">
          Projects
        </a>
        <a href="#services" className="menu-link">
          Services
        </a>
        <a href="#footer" className="menu-link">
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
