"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
const navItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "COURSES", href: "#" },
  { label: "PAGES", href: "#", hasDropdown: true },
  { label: "CONTACT", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 pl-6 pr-10">
          {/* <span className="bg-[#06bbcc] text-white p-1 text-xs font-bold">
            e
          </span> */}
          {/* <Image src="/logo.png" alt="Logo" width={80} height={40} /> */}

          <span className="text-[#06bbcc] font-extrabold text-2xl tracking-tight">
            ENGLY
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 font-bold text-xs text-[#181d38] tracking-widest">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-0.5 px-4 py-2 hover:text-[#06bbcc] transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={13} />}
            </a>
          ))}
        </nav>

        {/* Join Now Button */}
        <a
          href="#"
          className="hidden md:flex items-center gap-2 ml-auto bg-[#06bbcc] hover:bg-[#05a5b5] text-white font-bold text-sm px-8 h-full transition-colors"
        >
          Join Now <ArrowRight size={16} />
        </a>

        {/* Mobile Hamburger */}
        <button
          className="ml-auto md:hidden text-[#181d38] p-4"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col font-bold text-sm text-[#181d38] tracking-widest">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-6 py-4 border-b border-gray-100 hover:text-[#06bbcc] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
            <a
              href="#"
              className="mx-6 my-4 bg-[#06bbcc] text-white text-center font-bold py-3 hover:bg-[#05a5b5] transition-colors flex items-center justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              Join Now <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
