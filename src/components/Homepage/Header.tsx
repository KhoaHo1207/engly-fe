"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { authService } from "@/services/auth.service";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "COURSES", href: "#" },
  { label: "PAGES", href: "#", hasDropdown: true },
  { label: "CONTACT", href: "#" },
];

const getInitials = (email?: string) => {
  if (!email) return "?";
  const name = email.split("@")[0];
  return name.slice(0, 2).toUpperCase();
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const raw = localStorage.getItem("user");
    if (token && raw) {
      try {
        setUserEmail(JSON.parse(raw));
      } catch {
        setUserEmail(raw);
      }
    }
    setAuthChecked(true);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 pl-6 pr-10">
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

        {/* Desktop: Avatar or Join Now */}
        {authChecked && (userEmail ? (
          <div ref={dropdownRef} className="hidden md:flex items-center ml-auto pr-6 relative">
            <button
              onClick={() => setDropdownOpen((p) => !p)}
              className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-1 rounded-md transition-all duration-200"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold tracking-tight bg-[#111111] text-white border border-[#EAEAEA] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  {getInitials(userEmail)}
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#346538] border-2 border-white" />
              </div>
              <span
                className={`w-0 h-0 border-l-4 border-r-4 border-t-[5px] border-l-transparent border-r-transparent border-t-[#787774] transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-60 bg-white border border-[#EAEAEA] rounded-lg py-1 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {/* User info */}
                <div className="px-4 py-3 border-b border-[#EAEAEA]">
                  <p className="text-[11px] text-[#787774] m-0 uppercase tracking-widest font-medium">
                    Signed in as
                  </p>
                  <p className="text-sm text-[#2F3437] font-semibold m-0 mt-1 truncate">
                    {userEmail}
                  </p>
                </div>

                {/* Links */}
                <div className="py-1">
                  <Link
                    href="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#2F3437] no-underline transition-colors duration-200 hover:bg-[#F7F6F3]"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded bg-[#E1F3FE]">
                      <span className="w-2 h-2 rounded-full bg-[#1F6C9F]" />
                    </span>
                    My Profile
                  </Link>

                  <Link
                    href="/course-selection"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#2F3437] no-underline transition-colors duration-200 hover:bg-[#F7F6F3]"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded bg-[#FBF3DB]">
                      <span className="w-2 h-2 rounded-full bg-[#956400]" />
                    </span>
                    My Courses
                  </Link>

                  <Link
                    href="/settings"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#2F3437] no-underline transition-colors duration-200 hover:bg-[#F7F6F3]"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded bg-[#EDF3EC]">
                      <span className="w-2 h-2 rounded-full bg-[#346538]" />
                    </span>
                    Settings
                  </Link>
                </div>

                {/* Logout */}
                <div className="border-t border-[#EAEAEA] pt-1">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      authService.logout();
                    }}
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-[#9F2F2D] cursor-pointer bg-transparent border-none text-left transition-colors duration-200 hover:bg-[#FDEBEC]"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded bg-[#FDEBEC]">
                      <span className="w-2 h-2 rounded-full bg-[#9F2F2D]" />
                    </span>
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 ml-auto bg-[#06bbcc] hover:bg-[#05a5b5] text-white font-bold text-sm px-8 h-full transition-colors"
          >
            Join Now <ArrowRight size={16} />
          </Link>
        ))}

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
            <Link
              href="/login"
              className="mx-6 my-4 bg-[#06bbcc] text-white text-center font-bold py-3 hover:bg-[#05a5b5] transition-colors flex items-center justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              Join Now <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
