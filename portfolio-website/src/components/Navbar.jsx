import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Resume", href: "#resume", id: "resume" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#02131F]/95 backdrop-blur-lg shadow-[0_4px_30px_rgba(250,204,21,0.15)] py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* Animated Border Bottom */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="group flex items-center gap-3 relative">
              {/* Logo Icon with Animation */}
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all duration-300 group-hover:scale-110">
                  <FaCode className="text-[#02131F] text-lg sm:text-xl" />
                </div>
                {/* Orbiting Dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  Tushar Gupta
                </span>
                <span className="text-xs text-yellow-400/80 font-medium tracking-widest uppercase">
                  Developer
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 p-1.5 rounded-full bg-[#02131F]/60 backdrop-blur-md border border-white/10">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setActiveLink(link.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeLink === link.id
                        ? "text-[#02131F] bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                  >
                    {/* Hover Underline Effect */}
                    <span className="relative z-10">{link.name}</span>
                    {activeLink !== link.id && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 rounded-full group-hover:w-4/5 transition-all duration-300"></span>
                    )}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="ml-6 px-5 py-2.5 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-[#02131F] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#02131F]/60 backdrop-blur-md border border-white/10 text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
              >
                <span
                  className={`absolute transition-all duration-300 ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}
                >
                  <HiMenuAlt3 className="w-6 h-6" />
                </span>
                <span
                  className={`absolute transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}
                >
                  <HiX className="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#02131F]/95 backdrop-blur-xl transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsOpen(false);
                }}
                className={`text-3xl sm:text-4xl font-bold transition-all duration-300 hover:scale-110 ${
                  activeLink === link.id
                    ? "text-yellow-400"
                    : "text-white/80 hover:text-yellow-400"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <span className="relative">
                  {link.name}
                  {activeLink === link.id && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
                  )}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-10 px-8 py-4 bg-yellow-400 text-[#02131F] font-bold text-lg rounded-full shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:scale-105 transition-all duration-300"
            style={{
              transitionDelay: "300ms",
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            ✦ Hire Me ✦
          </a>

          {/* Social Links Hint */}
          <div
            className="absolute bottom-10 flex items-center gap-2 text-gray-500 text-sm"
            style={{
              transitionDelay: "400ms",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <span className="w-8 h-px bg-gray-600"></span>
            <span>Scroll to explore</span>
            <span className="w-8 h-px bg-gray-600"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
