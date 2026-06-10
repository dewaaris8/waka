"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import komponen tab asli milik beach club Anda di sini
import PhotoGalleryTab from "@/components/wakabeachclub/PhotoGalleryTab";
import FacilitiesTab from "@/components/wakabeachclub/FacilitiesTab";
import WeddingTab from "@/components/wakabeachclub/WeddingTab";
import RecreationTab from "@/components/wakabeachclub/RecreationTab";
import logoBeach from "@/public/img/wakaBeach/logo.png";
import SmoothScroll from "@/components/SmoothScroll";

type TabType =
  | "beachclub"
  | "itinerary"
  | "culinary"
  | "private"
  | "gallery"
  | "facilities"
  | "wedding"
  | "recreation";

export default function WakaBeachClubUltraLuxuryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("beachclub");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const IMAGES = [
    "img/wakaBeach/hero1.jpg", // Contoh gambar 3
    "img/wakaBeach/hero2.jpg", // Contoh gambar 3
    "img/wakaBeach/hero3.jpg", // Contoh gambar 3
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

  // Luxury Preloader Simulation
  useEffect(() => {
    const handleThreshold = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(handleThreshold);
  }, []);

  return (
    <>
    <SmoothScroll>
      {/* A. ULTRA-LUXURY PRELOADER (TEMA WAKA BEACH CLUB) */}
      <div
        className={`fixed inset-0 z-50 bg-[#bca986] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible scale-105"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-white block animate-pulse">
            Beachfront Sanctuary
          </span>
          <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
            WAKA{" "}
            <span className="italic font-normal text-white">BEACH CLUB</span>
          </h2>
          <div className="w-24 h-[1px] bg-white/30 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-white w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>

      {/* B. MAIN WEBSITE CONTENT LAYOUT */}
      <div
        className={`min-h-screen bg-neutral-50 text-neutral-400 selection:bg-[#bca986]/20 overflow-x-hidden transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* HEADER / NAVBAR */}
        <Header
          logoSrc={logoBeach.src} // Mengambil string URL dari hasil import
          logoAlt="Waka Group Bali Logo"
          logoWidth={160}
          logoHeight={50}
        />

        <main>
          {/* 1. CINEMATIC HERO SECTION */}
          <section
            className="relative w-full h-[75vh] bg-neutral-950 overflow-hidden flex items-center justify-center"
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
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#bca986]" />
            <div className="relative text-center z-10 space-y-4 px-4 max-w-4xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/90 font-mono block">
                Tranquil Beachfront Oasis
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide leading-tight">
                Waka Beach Club
              </h1>
            </div>
          </section>

          {/* 2. EDITORIAL CTA SECTION */}
          <section className="max-w-6xl mx-auto px-6 lg:px-16 mt-[-150px]  pb-16">
            <div className="bg-white border border-neutral-200/70 rounded-xs border-b-[#bca986]  p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#bca986] group-hover:h-full transition-all duration-700 ease-out" />

              <div className="space-y-4 max-w-xl text-left">
                <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#bca986] uppercase block">
                  The Beach Club
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide leading-tight">
                  Escape to Paradise at Waka Beach Club
                </h2>
                <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                  WakaBeachClub, Lembongan Island, the brand new leisure spot on
                  Jungut Batu beach operated by Waka Hotels & Resorts, offers
                  the ultimate white sandy beach island setting – sunloungers,
                  umbrellas, a unique tree house, chilled tropical cocktails and
                  alfresco dining in an atmospheric “Joglo” with tiered seating
                  and stunning views of sparkling white sand and blue ocean.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#book-daypass"
                  className="bg-[#bca986] text-white text-[11px] font-mono uppercase tracking-widest text-center px-8 py-4 rounded-2xs shadow-xs hover:bg-[#1a3140] transition-colors"
                >
                  Book Now
                </motion.a>
              </div>
            </div>
          </section>

          {/* 3. DYNAMIC SUB-MENU NAVIGATION */}
          <section className="max-w-4xl mx-auto mb-12 pt-4 border-b border-neutral-200/60 flex justify-start md:justify-center gap-6 md:gap-8 relative z-10 px-6 overflow-x-auto no-scrollbar">
            {[
              { id: "beachclub", label: "The Beach Club" },
              { id: "facilities", label: "Facilities" },
              { id: "wedding", label: "Wedding" },
              { id: "gallery", label: "Gallery Journal" },
              { id: "recreation", label: "Recreation" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer bg-transparent border-none focus:outline-none shrink-0 ${
                  activeTab === tab.id
                    ? "text-[#bca986] font-semibold"
                    : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#bca986]"
                  />
                )}
              </button>
            ))}
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
                className="space-y-12"
              >
                {/* DEFAULT BEACH CLUB SPECIFICATION LAYOUT */}
                {activeTab === "beachclub" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-6 md:p-12 lg:p-16 border border-neutral-200/70 rounded-xs shadow-2xs">
                    {/* SISI KIRI: DATA & SPESIFIKASI */}
                    <div className="lg:col-span-5 space-y-8 text-left order-2 lg:order-1">
                      <div className="space-y-4">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#bca986] font-bold block">
                          The Beach Club
                        </span>
                        <h4 className="text-3xl font-serif font-light text-neutral-900 leading-tight">
                          WakaBeachClub
                        </h4>
                        <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                          Located in Bali’s neighboring Lembongan Island with
                          crystal clear ocean for swimming and recreation
                          activities. Set in 1,800 sqm beautifully landscaped
                          tropical gardens, the beach club features a swimming
                          pool, bar, restaurant, pool and beach decks, and
                          naturally cooled spaces designed to blend into the
                          island environment.
                        </p>
                      </div>

                      {/* GRID DATA SPESIFIKASI */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 pt-4 border-t border-neutral-100">
                        {[
                          {
                            title: "Operational Time",
                            desc: "10:00 AM – 07:00 PM Daily",
                          },
                          {
                            title: "Total Area Size",
                            desc: "1,800 sqm Tropical Garden",
                          },
                          {
                            title: "Menu Highlights",
                            desc: "Wood-fired Pizzas, Fresh Seafood",
                          },
                          {
                            title: "Access / Transit",
                            desc: "Fast Boat (Sanur) / WakaSailing",
                          },
                        ].map((spec, idx) => (
                          <div key={idx} className="space-y-1 group">
                            <h6 className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-[#bca986] transition-colors font-mono">
                              {spec.title}
                            </h6>
                            <p className="font-serif text-sm md:text-base text-neutral-800 font-light">
                              {spec.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SISI KANAN: VISUAL COMPOSITION EDITORIAL */}
                    <div className="lg:col-span-7 order-1 lg:order-2 relative w-full h-[350px] md:h-[450px] flex items-center justify-center">
                      {/* Bingkai Belakang */}
                      <div className="absolute inset-0 bg-neutral-100/50 rounded-2xs translate-x-3 translate-y-3 -z-10" />

                      {/* Gambar Utama (Lembongan Beachfront Pool) */}
                      <div className="w-full h-full rounded-2xs overflow-hidden border border-neutral-200/50 relative group">
                        <img
                          src="img/wakaBeach/beach2.jpg"
                          alt="WakaBeachClub Infinity Pool"
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Gambar Kedua Overlap (Lembongan Island Marine / WakaSailing Ambience) */}
                      <div className="absolute -bottom-6 -left-6 w-1/3 h-2/5 hidden md:block rounded-2xs overflow-hidden border-4 border-white shadow-md z-10 group/mini">
                        <img
                          src="img/wakaBeach/beach1.jpg"
                          alt="WakaBeachClub Tropical Garden & Deck"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/mini:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB COMPONENTS RENDERER */}
                {/* {activeTab === "beachclub" && <TheBeachClubTab />}
                {activeTab === "itinerary" && <DayPassItineraryTab />}
                {activeTab === "culinary" && <CulinaryExperienceTab />}
                {activeTab === "private" && <BeachFrontPrivateTab />} */}
                {activeTab === "facilities" && <FacilitiesTab />}
                {activeTab === "gallery" && <PhotoGalleryTab />}
                {activeTab === "wedding" && <WeddingTab />}
                {activeTab === "recreation" && <RecreationTab />}
              </motion.div>
            </AnimatePresence>
          </section>
        </main>

        {/* FOOTER */}
        <Footer
          title="Waka Residences"
          subtitle=""
          backgroundColor="bg-[#bca986]"
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
