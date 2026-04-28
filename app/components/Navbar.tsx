"use client";

import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const navLinks = [
    { href: "#services", label: "About" },
    { href: "#about", label: "Programs" },
    { href: "#stories", label: "Who It's For" },
    { href: "#pricing", label: "Products" },
  ];

  const glassActiveStyle = "text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex h-[90px] items-center justify-between px-[50px]">
      <div className="flex items-center gap-10">
        <div className="relative flex h-[100px] w-[150px] items-center gap-3">
          <Image
            src="/nav-logo.png"
            alt="Joyzen"
            fill
            sizes="150px"
            className="object-contain"
          />
        </div>
      </div>
      <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveLink(link.href)}
            className={`hover:text-white hover:border hover:border-white/30 hover:bg-white/10 hover:backdrop-blur-sm hover:rounded-full hover:px-3 hover:py-1.5 transition-all ${
              activeLink === link.href ? glassActiveStyle : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#get-started"
          className="flex gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          Book Clarity Call
           <Image
            src="/nav-cta.svg"
            alt="Joyzen"
            width={15}
            height={15}
            className="h-auto w-auto"
          />
        </a>
      </div>
    </nav>
  );
}
