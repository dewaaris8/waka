"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheFleetsTab from "@/components/wakaland-cruise/TheFleetsTab";
import PhotoGalleryTab from "@/components/wakasailing/PhotoGalleryTab";
import TheCatamaranTab from "@/components/wakasailing/TheCatamaranTab";
import DayItineraryTab from "@/components/wakasailing/DayItineraryTab";
import PrivateCharterTab from "@/components/wakasailing/PrivateCharterTab";
import WeddingTab from "@/components/wakasailing/WeddingTab";
import logoSail from "@/public/img/wakaSailing/logo.png";
import SmoothScroll from "@/components/SmoothScroll";

// Ditambahkan tipe baru "catamaran" untuk spesifikasi boat
type TabType =
  | "catamaran"
  | "itenerary"
  | "wedding"
  | "fleets"
  | "charter"
  | "gallery";

export default function WakaSailingUltraLuxuryPage() {
  // Mengarahkan default active tab ke spesifikasi boat "The Catamaran" sesuai permintaan
  const [activeTab, setActiveTab] = useState<TabType>("catamaran");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const IMAGES = [
    "img/wakaSailing/hero1.jpg", // Contoh gambar 3
    "img/wakaSailing/hero2.jpg", // Contoh gambar 3
    "img/wakaSailing/hero3.jpg", // Contoh gambar 3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Ganti angka 5000 (5 detik) sesuai keinginan

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({
      x: (clientX - window.innerWidth / 2) * 0.015,
      y: (clientY - window.innerHeight / 2) * 0.015,
    });
  };

  // Efek Simulasi Preloader Mewah Asli Waka Sailing
  useEffect(() => {
    const handleThreshold = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(handleThreshold);
  }, []);

  return (
    <>
    <SmoothScroll>
      {/* A. ULTRA-LUXURY PRELOADER (ASLI WAKA SAILING) */}
      <div
        className={`fixed inset-0 z-50 bg-[#3e80a2] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          isLoading
            ? "opacity-100 visibility-visible"
            : "opacity-0 invisible scale-102"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-white block animate-pulse">
            Sailing Experience
          </span>
          <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
            WAKA <span className="italic font-normal text-white">SAILING</span>
          </h2>
          <div className="w-24 h-[1px] bg-neutral-300 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-[#2c4e65] w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>

      {/* B. MAIN WEBSITE CONTENT LAYOUT */}
      <div
        className={`min-h-screen bg-neutral-50 text-neutral-950 selection:bg-[#2c4e65]/20 overflow-x-hidden transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* HEADER / NAVBAR */}
        <Header
          logoSrc={logoSail.src} // Mengambil string URL dari hasil import
          logoAlt="Waka Group Bali Logo"
          logoWidth={160}
          logoHeight={50}
        />

        <main>
          {/* 1. HERO SECTION SINEMATIK */}
          <section
            className="relative w-full h-[75vh] bg-neutral-300 overflow-hidden flex items-center justify-center"
            onMouseMove={handleMouseMove}
          >
            {/* Container Gambar dengan Parallax Effect */}
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out scale-105"
              style={{
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              }}
            >
              {/* Map gambar agar proses transisi fade-in-out terasa smooth */}
              {IMAGES.map((img, index) => (
                <div
                  key={img}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? "opacity-65" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url('${img}')` }}
                />
              ))}
            </div>

            {/* Sisanya tetap persis sama seperti kode awalmu */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#2c4e65]" />
            <div className="relative text-center z-10 space-y-4 px-4 max-w-4xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/90 font-mono block">
                The Ultimate Marine Venture
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide leading-tight">
                Waka Sailing
              </h1>
            </div>
          </section>
          {/* 2. EDITORIAL CTA SECTION */}
          <section className="max-w-6xl mx-auto px-6 lg:px-16 pt-20 pb-12">
            <div className="bg-white border border-neutral-200/70 rounded-xs p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#2c4e65] group-hover:h-full transition-all duration-700 ease-out" />

              <div className="space-y-4 max-w-xl text-left">
                <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#2c4e65] uppercase block">
                  Waka Sailing
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide leading-tight">
                  Sensational Sailing to Lembongan Island on a Luxury Catamaran
                </h2>
                <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                  The trip from our private Waka Marina at Benoa Harbour to the
                  stunning WakaBeachClub in Lembongan Island takes approximately
                  one hour and forty five minutes depending on the weather
                  conditions. The sailing catamaran takes guests on a leisurely
                  cruise cooled by sea breezes. Coffee, tea, pastries and fresh
                  fruits await guests on board. Indoor and outdoor seating areas
                  allow guests to travel in comfort while enthusiastic fishermen
                  can join the crew throwing lines at the back of the boat.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#book-voyage"
                  className="bg-[#2c4e65] text-white text-[11px] font-mono uppercase tracking-widest text-center px-8 py-4 rounded-2xs shadow-xs hover:bg-[#1a3140] transition-colors"
                >
                  Secure Voyage
                </motion.a>
              </div>
            </div>
          </section>

          {/* 3. DYNAMIC SUB-MENU NAVIGATION */}
          <section className="w-max mx-auto mb-16 pt-8 border-b border-neutral-200/60 flex justify-center gap-4 md:gap-8 relative z-10 px-4 overflow-x-auto no-scrollbar">
            {/* TAB BARU: THE CATAMARAN (BOAT SPECIFICATION) */}
            <button
              onClick={() => setActiveTab("catamaran")}
              className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer bg-transparent border-none focus:outline-none shrink-0 ${
                activeTab === "catamaran"
                  ? "text-[#2c4e65] font-semibold"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              The Catamaran
              {activeTab === "catamaran" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2c4e65]"
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab("itenerary")}
              className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer bg-transparent border-none focus:outline-none shrink-0 ${
                activeTab === "itenerary"
                  ? "text-[#2c4e65] font-semibold"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              Day Trip Itenerary
              {activeTab === "itenerary" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2c4e65]"
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab("charter")}
              className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer bg-transparent border-none focus:outline-none shrink-0 ${
                activeTab === "charter"
                  ? "text-[#2c4e65] font-semibold"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              Private Charter
              {activeTab === "charter" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2c4e65]"
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab("wedding")}
              className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer bg-transparent border-none focus:outline-none shrink-0 ${
                activeTab === "wedding"
                  ? "text-[#2c4e65] font-semibold"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              Wedding
              {activeTab === "wedding" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2c4e65]"
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab("gallery")}
              className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer bg-transparent border-none focus:outline-none shrink-0 ${
                activeTab === "gallery"
                  ? "text-[#2c4e65] font-semibold"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              Journal Gallery
              {activeTab === "gallery" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2c4e65]"
                />
              )}
            </button>
          </section>

          {/* 4. TAB PANELS WITH ANIMATION */}
          <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* RENDER VIEW UNTUK TAB SPECIFICATION "THE CATAMARAN" */}
                {activeTab === "catamaran" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-16 border border-neutral-200/70 rounded-xs shadow-2xs">
                    <div className="lg:col-span-5 space-y-4 text-left">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[#2c4e65] font-bold block">
                        Vessel Specifications
                      </span>
                      <h4 className="text-3xl font-serif font-light text-neutral-900 leading-tight">
                        The Precision Behind The Catamaran
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                        Equipped with state-of-the-art marine navigation
                        devices, modern luxury lounges, open trampolines for
                        sunset viewing, and premium safety equipment audited
                        annually under international maritime codes.
                      </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-left border-l-0 lg:border-l border-neutral-200/80 pl-0 lg:pl-12">
                      <div className="space-y-1 group">
                        <h6 className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-[#2c4e65] transition-colors font-mono">
                          Total Capacity
                        </h6>
                        <p className="font-serif text-base md:text-lg text-neutral-800 font-light">
                          Up to 30 Guests Comfortably
                        </p>
                      </div>
                      <div className="space-y-1 group">
                        <h6 className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-[#2c4e65] transition-colors font-mono">
                          Average Speed
                        </h6>
                        <p className="font-serif text-base md:text-lg text-neutral-800 font-light">
                          15 Knots / Hour
                        </p>
                      </div>
                      <div className="space-y-1 group">
                        <h6 className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-[#2c4e65] transition-colors font-mono">
                          Cruising Area
                        </h6>
                        <p className="font-serif text-base md:text-lg text-neutral-800 font-light">
                          Benoa – Lembongan Strait
                        </p>
                      </div>
                      <div className="space-y-1 group">
                        <h6 className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-[#2c4e65] transition-colors font-mono">
                          Onboard Amenities
                        </h6>
                        <p className="font-serif text-base md:text-lg text-neutral-800 font-light">
                          Sound System, Open Bar, GPS
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "catamaran" && <TheCatamaranTab />}
                {activeTab === "itenerary" && <DayItineraryTab />}
                {activeTab === "fleets" && <TheFleetsTab />}
                {activeTab === "charter" && <PrivateCharterTab />}
                {activeTab === "gallery" && <PhotoGalleryTab />}
                {activeTab === "wedding" && <WeddingTab />}
              </motion.div>
            </AnimatePresence>
          </section>
        </main>

        {/* FOOTER */}
        <Footer
          title="Waka Sailing"
          subtitle=""
          backgroundColor="bg-[#3e80a2]"
          copyrightName="Waka Hotel & Resorts"
        />
      </div>

      {/* GLOBAL CSS ANIMATION KEYFRAMES */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      </SmoothScroll>
    </>
  );
}
