"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import Modular Components Tab
import ResidenceTab from "@/components/wakaresidences/ResidenceTab";
import MasterplanTab from "@/components/wakaresidences/MasterplanTab";
import FeatureTab from "@/components/wakaresidences/FeatureTab";
import TeamTab from "@/components/wakaresidences/TeamTab";
import MarketingTab from "@/components/wakaresidences/MarketingTab";

type TabType = "residence" | "masterplan" | "feature" | "team" | "marketing";

export default function WakaResidencesUltraLuxuryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("residence");
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const IMAGES = [
    "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1600",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [IMAGES.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({
      x: (clientX - window.innerWidth / 2) * 0.015,
      y: (clientY - window.innerHeight / 2) * 0.015,
    });
  };

  // 1. Luxury Preloader
  useEffect(() => {
    const handleThreshold = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(handleThreshold);
  }, []);

  // 2. Lenis Smooth Scroll Interaction + Auto Resize Observer
  useEffect(() => {
    if (isLoading) return;
    let animationFrameId: number;
    let resizeObserver: ResizeObserver;

    const initLenis = async () => {
      const LenisModule = await import("lenis");
      const Lenis = LenisModule.default;

      const lenis = new Lenis({
        duration: 1.2,
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: true,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };
      animationFrameId = requestAnimationFrame(raf);

      // Otomatis paksa Lenis hitung ulang tinggi halaman SETIAP KALI isi kontainer berubah tinggi
      if (containerRef.current) {
        resizeObserver = new ResizeObserver(() => {
          lenis.resize();
        });
        resizeObserver.observe(containerRef.current);
        // Trigger resize pertama kali setelah inisialisasi
        setTimeout(() => lenis.resize(), 100);
      }
    };

    initLenis();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisRef.current) lenisRef.current.destroy();
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [isLoading]);

  const tabs = [
    { id: "residence", label: "The Residence" },
    { id: "masterplan", label: "Master Plan" },
    { id: "feature", label: "Owner Features" },
    { id: "team", label: "The Team" },
    { id: "marketing", label: "Marketing Partners" },
  ];

  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId);

    // Berikan jeda super kecil agar DOM berubah baru lakukan smooth scroll via Lenis
    setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.resize();
        const targetElement = document.getElementById("residences-tab-content");
        if (targetElement) {
          const offset = 140;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementRect - bodyRect - offset;
          lenisRef.current.scrollTo(offsetPosition, { duration: 1 });
        }
      }
    }, 50);
  };

  return (
    <>
      {/* A. ULTRA-LUXURY PRELOADER */}
      <div
        className={`fixed inset-0 z-50 bg-[#1e352f] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible scale-102"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-amber-200/60 block animate-pulse">
            Exclusive Estate
          </span>
          <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
            WAKA{" "}
            <span className="italic font-normal text-amber-100">
              RESIDENCES
            </span>
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-amber-400 w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>

      {/* B. MAIN WEBSITE CONTENT LAYOUT */}
      {/* Ditambahkan ref={containerRef} agar ResizeObserver memantau tinggi seluruh halaman ini */}
      <div
        ref={containerRef}
        className={`min-h-screen bg-[#fcfcfb] text-[#1f2421] font-sans antialiased selection:bg-[#1e352f]/10 transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header logoSrc="" />

        {/* 1. IMMERSIVE HERO BACKGROUND CAROUSEL */}
        <section
          className="relative w-full h-[75vh] bg-neutral-950 overflow-hidden flex items-center justify-center"
          onMouseMove={handleMouseMove}
        >
          <div
            className="absolute inset-0 transition-transform duration-300 ease-out scale-105"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            }}
          >
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

          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#1e352f]" />
          <div className="relative text-center z-10 space-y-4 px-4 max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/90 font-mono block">
              Tranquil Beachfront Oasis
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide leading-tight">
              Waka Residences
            </h1>
          </div>
        </section>

        {/* 2. EDITORIAL CTA SECTION */}
        <section className="max-w-6xl mx-auto px-6 lg:px-16 mt-[-150px] pb-16">
          <div className="bg-white border border-neutral-200/70 rounded-xs border-b-[#1e352f] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#1e352f] group-hover:h-full transition-all duration-700 ease-out" />

            <div className="space-y-4 max-w-xl text-left">
              <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#1e352f] uppercase block">
                Waka Residences
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide leading-tight">
                Invest in Tranquil Luxury at Waka Residences
              </h2>
              <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                WakaBeachClub, Lembongan Island, the brand new leisure spot on
                Jungut Batu beach operated by Waka Hotels & Resorts, offers the
                ultimate white sandy beach island setting – sunloungers,
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
                className="bg-[#1e352f] text-white text-[11px] font-mono uppercase tracking-widest text-center px-8 py-4 rounded-2xs shadow-xs hover:bg-[#1a3140] transition-colors"
              >
                Book Now
              </motion.a>
            </div>
          </div>
        </section>

        {/* 3. DYNAMIC SUB-MENU NAVIGATION */}
        <nav className="sticky top-[73px] z-40 bg-[#fcfcfb]/90 backdrop-blur-md border-b border-neutral-200/60 transition-all duration-300">
          <div className="max-w-5xl mx-auto flex justify-start md:justify-center gap-6 md:gap-8 px-6 pt-6 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as TabType)}
                className={`text-xs font-mono tracking-[0.2em] uppercase transition-all pb-3 relative cursor-pointer bg-transparent border-none focus:outline-none shrink-0 ${
                  activeTab === tab.id
                    ? "text-[#1e352f] font-bold"
                    : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1e352f]"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* 4. DYNAMIC TAB PANELS CONTAINER */}
        <main
          id="residences-tab-content"
          className="max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-24 min-h-[50vh] overflow-hidden scroll-mt-36"
        >
          <AnimatePresence
            mode="wait"
            onExitComplete={() => lenisRef.current?.resize()}
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "residence" && <ResidenceTab />}
              {activeTab === "masterplan" && <MasterplanTab />}
              {activeTab === "feature" && <FeatureTab />}
              {activeTab === "team" && <TeamTab />}
              {activeTab === "marketing" && <MarketingTab />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer
          title="Waka Residences"
          subtitle=""
          backgroundColor="bg-[#1e352f]"
          copyrightName="Waka Hotel & Resorts"
        />
      </div>

      {/* KRASIAL: PENGATURAN CSS UTUK FIX LENIS */}
      <style jsx global>{`
        /* WAJIB MATIKAN SMOOTH BEHAVIOR BAWAAN BROWSER AGAR TIDAK TABRAKAN DENGAN LENIS */
        html {
          scroll-behavior: auto !important;
        }

        html,
        body {
          height: auto !important;
          min-height: 100% !important;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </>
  );
}
