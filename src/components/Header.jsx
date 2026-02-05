
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const headerRef = useRef(null);
  
  useGSAP(() => {
    // Start invisible to prevent FOUC, then animate in
    // Using .to() ensures we go from current (set by class) to final state
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 0.5
    });
  }, { scope: headerRef });

  const handleClick = () => setShowNav(!showNav);

  const menuItems = [
    { title: "Home", to: "home" },
    { title: "About", to: "about" },
    { title: "Skills", to: "skills" },
    { title: "Portfolio", to: "works" },
    { title: "Contact", to: "contact" },
  ];

  return (
    // Added opacity-0 and -translate-y-full to initial class state
    <div ref={headerRef} className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-black/30 border-b border-white/10 opacity-0 -translate-y-full">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="z-10 cursor-pointer group">
          <h1 className="text-3xl font-bold font-heading tracking-tighter mix-blend-difference text-white">
            SY<span className="text-primary group-hover:text-white transition-colors duration-300">.</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group overflow-hidden">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={700}
                  className="font-medium text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative z-10">{item.title}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden z-20 cursor-pointer text-white hover:text-primary transition-colors"
        >
          {showNav ? (
            <i className="fa-solid fa-times text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`${
            showNav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden z-10`}
        >
          <ul className="flex flex-col space-y-8 text-center">
            {menuItems.map((item, index) => (
              <li key={index} className="overflow-hidden">
                <Link
                  onClick={handleClick}
                  to={item.to}
                  smooth={true}
                  duration={700}
                  className="text-4xl font-bold text-zinc-400 hover:text-white hover:text-stroke-primary transition-colors cursor-pointer uppercase tracking-tighter"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
