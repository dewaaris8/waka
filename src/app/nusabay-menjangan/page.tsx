"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomsTab from "@/components/nusa-menjangan/RoomsTab";
import DiningTab from "@/components/nusa-menjangan/DiningTab";
import FacilitiesSpaTab from "@/components/nusa-menjangan/FacilitiesSpaTab";
import ActivitiesTab from "@/components/nusa-menjangan/ActivitiesTab";
import PhotoGalleryTab from "@/components/nusa-menjangan/PhotoGalleryTab";
import SpaPage from "@/components/nusa-menjangan/SpaTab";
import logoNusa from "@/public/img/nusaBay/logo.png";
import SmoothScroll from "@/components/SmoothScroll";

export default function NusaBayMenjanganPremium() {
  const [activeTab, setActiveTab] = useState("Rooms");
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const lenisRef = useRef<any>(null);

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

  const IMAGES = [
    "img/nusaBay/hero1.jpg", // Contoh gambar 3
    "img/nusaBay/hero2.jpg", // Contoh gambar 3
    "img/nusaBay/hero3.jpg", // Contoh gambar 3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Ganti angka 5000 (5 detik) sesuai keinginan

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   if (isLoading) return;
  //   let animationFrameId: number;
  //   const initLenis = async () => {
  //     const LenisModule = await import("lenis");
  //     const lenis = new LenisModule.default({
  //       duration: 1.4,
  //       lerp: 0.06,
  //       smoothWheel: true,
  //     });
  //     lenisRef.current = lenis;
  //     const raf = (time: number) => {
  //       lenis.raf(time);
  //       animationFrameId = requestAnimationFrame(raf);
  //     };
  //     animationFrameId = requestAnimationFrame(raf);
  //   };
  //   initLenis();
  //   return () => {
  //     if (animationFrameId) cancelAnimationFrame(animationFrameId);
  //     if (lenisRef.current) lenisRef.current.destroy();
  //   };
  // }, [isLoading]);

  const tabs = [
    "Rooms",
    "Dining",
    "Facilities & Spa",
    "Activities",
    "Photo Gallery",
    "Spa",
  ];

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    const contentArea = document.getElementById("tab-navigation-bar");
    if (contentArea) {
      const offsetPosition =
        contentArea.getBoundingClientRect().top + window.scrollY - 70;
      lenisRef.current?.scrollTo(offsetPosition);
    }
  };

  return (
    <>
      {/* LOADER - Bright Luxury Style */}
      <SmoothScroll>
      <div
        className={`fixed inset-0 z-100 bg-[#3e80a2] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
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
            NUSABAY{" "}
            <span className="italic font-normal text-white">MENJANGAN</span>
          </h2>
          <div className="w-24 h-[1px] bg-neutral-300 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-[#3e80a2] w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>

      {/* LIGHTBOX GLOBAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-w-full max-h-[85vh] object-contain shadow-2xl transition-transform duration-300"
          />
        </div>
      )}

      <div className="h-max bg-[#fcfcfb] text-[#1c1a19] font-sans antialiased selection:bg-[#2c4e65]/10 overflow-x-hidden">
        <Header
          logoSrc={logoNusa.src} // Mengambil string URL dari hasil import
          logoAlt="Waka Group Bali Logo"
          logoWidth={300}
          logoHeight={400}
        />

        {/* HERO SECTION SINEMATIK - Terang & Bersih */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#3e80a2]" />
          <div className="relative text-center z-10 space-y-4 px-4 max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/90 font-mono block">
              A SERENE BALINESE ECO-RESORT
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.15em] font-light uppercase leading-tight">
              NUSABAY <span className="italic font-normal">MENJANGAN</span>
            </h1>
          </div>
        </section>

        {/* PENJELASAN AWAL / INTRO NARRATIVE */}
        <section className="max-w-4xl mx-auto text-center px-6 pt-24 pb-16 space-y-4">
          <span className="text-[9px] tracking-[0.3em] text-[#3e80a2] font-mono font-bold uppercase block">
            NusaBay Menjangan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-neutral-900 uppercase">
            A SERENE BALINESE ECO-RESORT
            <br />
            <span className="italic font-normal">Touches of Heritage</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#3e80a2] mx-auto my-2" />
          <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            West Bali National Park’s astoundingly beautiful Prapat Agung
            Peninsula facing the Menjangan Island is undoubtedly one of the most
            significant natural treasures on the island of Bali. Located on
            Kotal Beach within the protected West Bali National Park, the
            NusaBay Menjangan by WHM, with its deserted white sand beaches,
            crystal clear waters, and coral-laden ocean, is a boutique beach
            resort that speaks of sun-filled days and enchanted evenings,
            surrounded by pristine natural beauty.
          </p>
        </section>

        {/* STICKY TAB NAVIGATION BAR - Menggunakan Style Lookbook Minimalis Terang */}
        <nav
          id="tab-navigation-bar"
          className="sticky top-[73px] z-40 bg-white/90 backdrop-blur-md border-b border-neutral-100 shadow-xs transition-all"
        >
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-x-8 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className="py-1 relative cursor-pointer focus:outline-none shrink-0 group transition-colors"
              >
                <span
                  className={
                    activeTab === tab
                      ? "text-neutral-900 font-bold border-b-2 border-[#2c4e65] pb-2"
                      : "hover:text-neutral-900 pb-2 border-b-2 border-transparent hover:border-neutral-200 transition-all"
                  }
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* DYNAMIC CONTENT CONTAINER */}
        <main className="max-w-7xl mx-auto h-max px-6 lg:px-16 py-16">
          {activeTab === "Rooms" && (
            <RoomsTab setLightboxImage={setLightboxImage} />
          )}
          {activeTab === "Dining" && (
            <DiningTab setLightboxImage={setLightboxImage} />
          )}
          {activeTab === "Facilities & Spa" && (
            <FacilitiesSpaTab setLightboxImage={setLightboxImage} />
          )}
          {activeTab === "Activities" && <ActivitiesTab />}
          {activeTab === "Spa" && <SpaPage />}
          {activeTab === "Photo Gallery" && <PhotoGalleryTab />}
        </main>

        <Footer
          title="Nusa Bay Menjangan"
          subtitle=""
          backgroundColor="bg-[#3e80a2]"
          copyrightName="Waka Hotel & Resorts"
        />
      </div>
      </SmoothScroll>
    </>
  );
}
