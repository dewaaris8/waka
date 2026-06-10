"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheFleetsTab from "@/components/wakaland-cruise/TheFleetsTab";
import PrivateCharterTab from "@/components/wakaland-cruise/PrivateCharterTab";
import PhotoGalleryTab from "@/components/wakaland-cruise/PhotoGalleryTab";
import logoLand from "@/public/img/wakaLand/logo.png";
import SmoothScroll from "@/components/SmoothScroll";

type TabType = "fleets" | "charter" | "gallery";

export default function WakaLandCruisePage() {
  // Merubah default active tab menjadi "fleets"
  const [activeTab, setActiveTab] = useState<TabType>("fleets");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const IMAGES = [
    "img/wakaLand/hero1.jpg",
    "img/wakaLand/hero2.jpg",
    "img/wakaLand/hero3.jpg",
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <SmoothScroll>
      {/* HEADER / NAVBAR */}
      <Header
        logoSrc={logoLand.src} // Mengambil string URL dari hasil import
        logoAlt="Waka Group Bali Logo"
        logoWidth={160}
        logoHeight={50}
      />

      <div
        className={`fixed inset-0 z-100 bg-[#556b2f] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          isLoading
            ? "opacity-100 visibility-visible"
            : "opacity-0 invisible scale-102"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-white block animate-pulse">
            ADVENTURE
          </span>
          <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
            WAKA LAND
            <span className="italic font-normal text-white">CRUISE</span>
          </h2>
          <div className="w-24 h-[1px] bg-neutral-300 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-[#3e80a2] w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-neutral-50 text-neutral-950 selection:bg-[#2b4c3f]/20 overflow-x-hidden ">
        {/* 1. HERO SECTION SINEMATIK */}
        <section
          className="relative w-full h-[75vh] bg-neutral-950 overflow-hidden flex items-center justify-center"
          onMouseMove={handleMouseMove}
        >
          {/* Container Gambar dengan Parallax Effect */}
          <div
            className="absolute inset-0 transition-transform duration-300 ease-out scale-105"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
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
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#556b2f]" />
          <div className="relative text-center z-10 space-y-4 px-4 max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/90 font-mono block">
              Journeys to The Secret Soul of Bali
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.15em] font-light uppercase leading-tight">
              Waka <span className="italic font-normal">Land Cruise</span>
            </h1>
          </div>
        </section>

        {/* 2. EDITORIAL CTA SECTION */}
        <section className="max-w-6xl mx-auto px-6 lg:px-16 pt-20 pb-12">
          <div className="bg-white border border-neutral-200/70 rounded-xs p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#2b4c3f] group-hover:h-full transition-all duration-700 ease-out" />

            <div className="space-y-4 max-w-xl text-left">
              <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#2b4c3f] uppercase block">
                Waka Land Cruise
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide leading-tight">
                Journeys to The Secret Soul of Bali
              </h2>
              <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                Explore the heart and soul of the mystical island of Bali with
                legendary Land Rover Defenders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#book-expedition"
                className="bg-[#2b4c3f] text-white text-[11px] font-mono uppercase tracking-widest text-center px-8 py-4 rounded-2xs shadow-xs hover:bg-[#1e352c] transition-colors"
              >
                Book Expedition
              </motion.a>
            </div>
          </div>
        </section>

        {/* 3. DYNAMIC SUB-MENU NAVIGATION */}
        <section className="max-w-xl mx-auto mb-16 pt-8 border-b border-neutral-200/60 flex justify-center gap-6 md:gap-10 relative z-10 px-4">
          <button
            onClick={() => setActiveTab("fleets")}
            className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer ${
              activeTab === "fleets"
                ? "text-[#2b4c3f] font-semibold"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            The Fleets
            {activeTab === "fleets" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2b4c3f]"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab("charter")}
            className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer ${
              activeTab === "charter"
                ? "text-[#2b4c3f] font-semibold"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            Private Charter
            {activeTab === "charter" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2b4c3f]"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer ${
              activeTab === "gallery"
                ? "text-[#2b4c3f] font-semibold"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            Journal Gallery
            {activeTab === "gallery" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2b4c3f]"
              />
            )}
          </button>
        </section>

        {/* 4. RENDER KONTEN DINAMIS */}
        <section className="max-w-6xl mx-auto px-6 lg:px-16 pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {activeTab === "fleets" && <TheFleetsTab />}
              {activeTab === "charter" && <PrivateCharterTab />}
              {activeTab === "gallery" && <PhotoGalleryTab />}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* FOOTER */}
      <Footer
          title="Waka Land Cruise"
          subtitle=""
          backgroundColor="bg-[#556b2f]"
          copyrightName="Waka Hotel & Resorts"
        />
        </SmoothScroll>
    </>
  );
}
