"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const MAIN_NAVIGATION = [
  { name: "Home", href: "/", hasSub: false },
  {
    name: "Accommodation",
    href: "#",
    hasSub: true,
    subItems: [
      { name: "WakaGangga", href: "/wakagangga" },
      { name: "NusaBay Menjangan by WHM", href: "/nusabay-menjangan" },
    ],
  },
  {
    name: "Excursions",
    href: "#",
    hasSub: true,
    subItems: [
      { name: "WakaLandCruise", href: "/wakalandcruise" },
      { name: "WakaSailing", href: "/wakasailing" },
    ],
  },
  {
    name: "Lifestyle",
    href: "#",
    hasSub: true,
    subItems: [
      { name: "Bamboo Forest Restaurant", href: "/bamboo-forest-restaurant" },
      { name: "Waka Restaurant", href: "/wakarestaurant" },
      { name: "WakaBeachClub", href: "/wakabeachclub" },
      { name: "Pasir Putih Campsite", href: "/pasir-putih-campsite" },
      { name: "Waka Residences", href: "/wakaresidences" },
    ],
  },
  {
    name: "Weddings",
    href: "#",
    hasSub: true,
    subItems: [
      { name: "Waka Gangga", href: "/wakagangga/wedding" },
      { name: "NusaBay Menjangan", href: "/nusabay-menjangan/wedding" },
    ],
  },
];

export default function Header({
  logoSrc = "",
  logoAlt = "Resort Logo",
  logoWidth = 140,
  logoHeight = 45,
}: HeaderProps) {
  const [lang, setLang] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  const toggleMobileSub = (name: string) => {
    setActiveMobileSub(activeMobileSub === name ? null : name);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-xs px-4 md:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 1. SISI KIRI: Logo / Fallback Text */}
          <div className="flex-shrink-0 cursor-pointer group flex items-center z-50">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className="object-contain max-h-[45px] md:max-h-[55px] w-auto transition-opacity group-hover:opacity-90"
                priority
              />
            ) : (
              <span className="font-serif text-lg md:text-xl tracking-[0.2em] font-light text-neutral-900 uppercase transition-colors group-hover:text-neutral-600">
                Waka
              </span>
            )}
          </div>

          {/* 2. SISI KANAN: Navigasi Desktop & Actions */}
          <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-12">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[11px] lg:text-xs tracking-[0.12em] uppercase font-medium text-neutral-500">
              {MAIN_NAVIGATION.map((link) => (
                <div key={link.name} className="relative group/nav py-2">
                  <a
                    href={link.href}
                    className="hover:text-neutral-900 transition-colors duration-200 flex items-center gap-1.5 py-1"
                  >
                    <span>{link.name}</span>
                    {link.hasSub && (
                      <span className="text-[8px] text-neutral-400 group-hover/nav:text-neutral-800 transition-transform duration-200 group-hover/nav:rotate-180">
                        ▼
                      </span>
                    )}
                  </a>

                  {/* Desktop Dropdown */}
                  {link.hasSub && link.subItems && link.subItems.length > 0 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 bg-white border border-neutral-100 shadow-xl rounded-md py-2 w-52 text-left opacity-0 pointer-events-none translate-y-2 group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 transition-all duration-250 ease-out z-50">
                      {link.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-[11px] tracking-wide text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors font-normal whitespace-nowrap"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Dropdown Bahasa (Tetap tampil di Desktop & Mobile) */}
            {/* <div className="relative group/lang py-2">
              <div className="text-[10px] md:text-xs tracking-wider uppercase font-medium border border-neutral-200 rounded-md px-3 py-1.5 md:px-3.5 text-neutral-600 cursor-pointer hover:border-neutral-800 hover:text-neutral-900 transition-all bg-white flex items-center gap-1.5">
                <span>{lang}</span>
                <span className="text-[7px] text-neutral-400">▼</span>
              </div>

              <div className="absolute right-0 top-full mt-0 bg-white border border-neutral-100 shadow-xl rounded-md py-1.5 w-28 md:w-32 text-left opacity-0 pointer-events-none translate-y-2 group-hover/lang:opacity-100 group-hover/lang:pointer-events-auto group-hover/lang:translate-y-0 transition-all duration-200 z-50">
                {["English", "Indonesia"].map((language) => (
                  <button
                    key={language}
                    onClick={() => setLang(language)}
                    className={`block w-full px-4 py-2 text-xs text-left transition-colors ${
                      lang === language
                        ? "text-neutral-900 font-bold bg-neutral-50"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Hamburger Button (Hanya Muncul di Mobile/Tablet) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              <span
                className={`h-[1.5px] w-5 bg-neutral-800 rounded-full transition-all duration-300 transform ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-5 bg-neutral-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[1.5px] w-5 bg-neutral-800 rounded-full transition-all duration-300 transform ${
                  isMobileMenuOpen ? "-rotate-45 translate-y-[-7.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE MENU SIDEBAR (DRAWER) */}
      <div
        className={`fixed inset-0 bg-neutral-950/20 backdrop-blur-xs z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-40 shadow-2xl p-6 pt-24 md:hidden flex flex-col justify-between transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Navigation List */}
        <nav className="flex flex-col space-y-1 overflow-y-auto pr-2">
          {MAIN_NAVIGATION.map((link) => {
            const isSubOpen = activeMobileSub === link.name;
            return (
              <div
                key={link.name}
                className="border-b border-neutral-100/70 py-2"
              >
                {link.hasSub ? (
                  <button
                    onClick={() => toggleMobileSub(link.name)}
                    className="w-full flex items-center justify-between text-left text-xs tracking-widest uppercase font-medium text-neutral-600 py-2 focus:outline-none"
                  >
                    <span>{link.name}</span>
                    <span
                      className={`text-[9px] text-neutral-400 transition-transform duration-200 ${isSubOpen ? "rotate-180 text-neutral-900" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xs tracking-widest uppercase font-medium text-neutral-600 hover:text-neutral-900 py-2"
                  >
                    {link.name}
                  </a>
                )}

                {/* Mobile Submenu Items */}
                {link.hasSub && link.subItems && (
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isSubOpen
                        ? "max-h-64 opacity-100 mt-2 pl-3"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col space-y-3 pb-2 border-l border-neutral-100 pl-3">
                      {link.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-[11px] tracking-wide text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Footer Branding */}
        <div className="pt-6 border-t border-neutral-100 text-center">
          <p className="font-serif text-xs tracking-[0.2em] uppercase text-neutral-400">
            Boutique Sanctuaries
          </p>
        </div>
      </div>
    </>
  );
}
