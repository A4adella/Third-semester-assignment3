import { useState } from "react";
import { NavLink } from "react-router-dom";
import iconclose from "/assets/shared/icon-close.svg";
import iconhamburger from "/assets/shared/icon-hamburger.svg";

const navLinks = [
  { id: "00", label: "HOME", to: "/" },
  { id: "01", label: "DESTINATION", to: "/destination" },
  { id: "02", label: "CREW", to: "/crew" },
  { id: "03", label: "TECHNOLOGY", to: "/technology" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between pt-6 md:pt-10">
      {/* Logo */}
      <div className="pl-6 md:pl-10 lg:pl-16">
        <img
          src="/assets/shared/logo.svg"
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </div>

      {/* Divider (desktop only) */}
      <div className="hidden lg:flex flex-1 pl-16 gap-16 items-center">
        <div className="flex-1 h-px bg-white opacity-25" />
      </div>

      {/* Desktop / Tablet Nav */}
      <nav className="hidden md:flex px-10 lg:px-16 bg-white/5 backdrop-blur-2xl gap-8 md:gap-12">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            end
            className={({ isActive }) =>
              `relative h-20 flex items-center gap-3 border-b-[3px] ${
                isActive
                  ? "border-white"
                  : "border-transparent hover:border-white/50"
              }`
            }
          >
            <span className="hidden lg:inline font-bold font-['Barlow Condensed'] tracking-[2.7px]">
              {link.id}
            </span>
            <span className="font-normal font-['Barlow Condensed'] tracking-widest">
              {link.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Hamburger (mobile only) */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden pr-6 text-white"
        aria-label="Open menu"
      >
        <img src={iconhamburger}  />
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-[300px] bg-white/5 backdrop-blur-3xl z-1 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white"
          aria-label="Close menu"
        >
          <img src={iconclose}  />
        </button>

        {/* Nav links */}
        <nav className="mt-24 flex flex-col gap-6 pl-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 border-r-[3px] pr-4 cursor-pointer hover:border-b-2 hover:border-white ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-white/50"
                }`
              }
            >
              <span className="font-bold font-['Barlow_Condensed'] tracking-[2.7px]">
                {link.id}
              </span>
              <span className="font-normal font-['Barlow_Condensed'] tracking-widest">
                {link.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

