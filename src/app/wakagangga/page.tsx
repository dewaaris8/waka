"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VillasTab from "@/components/VillasTab";
import WeddingsTab from "@/components/WeddingsTab";
import DiningTab from "@/components/DiningTab";
import FacilitiesSpaTab from "@/components/FacilitiesSpaTab";
import PhotoGalleryTab from "@/components/wakasailing/PhotoGalleryTab";
import logoWaka from "@/public/img/wakaGangga/logo.png";
import SmoothScroll from "@/components/SmoothScroll";
export default function WakaGanggaVillasPremium() {
  const [activeTab, setActiveTab] = useState("Villas");
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const lenisRef = useRef<any>(null);

  const IMAGES = [
    "/img/wakaGangga/hero1.jpg",
    "/img/wakaGangga/hero2.jpg",
    "/img/wakaGangga/hero3.jpg",
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

  

  const tabs = [
    "Villas",
    "Weddings",
    "Dining",
    "Facilities & Spa",
    "Photo Gallery",
  ];

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    const contentArea = document.getElementById("tab-navigation-bar");
    if (contentArea) {
      // Otomatis scroll pas ke batas menu sticky biar tidak tenggelam
      const offsetPosition =
        contentArea.getBoundingClientRect().top + window.scrollY - 70;
      lenisRef.current?.scrollTo(offsetPosition);
    }
  };

  return (
    <>
      {/* LOADER - Align dengan warna dasar bersih kemewahan lookbook */}
      <SmoothScroll>
      <div
        className={`fixed inset-0 z-100 bg-[#556b2f] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
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
            WAKA <span className="italic font-normal text-white">GANGGA</span>
          </h2>
          <div className="w-24 h-[1px] bg-neutral-300 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-[#556b2f] w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>

      {/* LIGHTBOX FOR IMAGES */}
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

      <div className="min-h-screen bg-[#fcfcfb] text-[#1c1a19] font-sans antialiased selection:bg-[#2c4e65]/10 overflow-x-hidden">
        <Header
          logoSrc={logoWaka.src} // Mengambil string URL dari hasil import
          logoAlt="Waka Group Bali Logo"
          logoWidth={160}
          logoHeight={50}
        />

        {/* HERO SECTION BRIGHT LUXURY LOOK */}
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
              Authentic Balinese Resort Architecture
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.15em] font-light uppercase leading-tight">
              Waka <span className="italic font-normal">Gangga</span>
            </h1>
          </div>
        </section>

        {/* PENJELASAN AWAL / INTRO RESORT */}
        <section className="max-w-4xl mx-auto text-center px-6 pt-24 pb-16 space-y-4">
          <span className="text-[9px] tracking-[0.3em] text-[#556b2f] font-mono font-bold uppercase block">
            “FRAMED BY A GLITTERING BLACK SAND BEACH AND SET AMIDST TABANAN’S
            ICONIC RICE TERRACE”
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light  tracking-wider text-[#556b2f] uppercase">
            Authentic Balinese Resort Architecture
          </h2>
          <div className="w-12 h-[1px] bg-neutral-300 mx-auto my-2" />
          <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Escape the crowds and immerse yourself in the peaceful charm of
            WakaGangga. Surrounded by breathtaking landscapes and authentic
            Balinese heritage, our exclusive villas provide the perfect setting
            to unwind, reconnect, and experience Bali beyond the ordinary.
          </p>
        </section>

        {/* STICKY TAB NAVIGATION BAR - Mengganti Hijau Lumut dengan Signature Luxury Indigo-Blue */}
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
          {activeTab === "Villas" && (
            <VillasTab setLightboxImage={setLightboxImage} />
          )}
          {activeTab === "Weddings" && (
            <WeddingsTab setLightboxImage={setLightboxImage} />
          )}
          {activeTab === "Dining" && (
            <DiningTab setLightboxImage={setLightboxImage} />
          )}
          {activeTab === "Facilities & Spa" && (
            <FacilitiesSpaTab setLightboxImage={setLightboxImage} />
          )}
          {activeTab === "Photo Gallery" && <PhotoGalleryTab />}

          {/* Fallback untuk tab lain */}
          {activeTab !== "Villas" &&
            activeTab !== "Weddings" &&
            activeTab !== "Dining" &&
            activeTab !== "Photo Gallery" &&
            activeTab !== "Facilities & Spa" && (
              <div className="max-w-2xl mx-auto text-center py-24 space-y-4 bg-white border border-neutral-100 p-12 shadow-3xs rounded-xs">
                <h3 className="font-serif text-2xl font-light text-neutral-800 uppercase tracking-wider">
                  {activeTab}{" "}
                  <span className="italic font-normal">Interface</span>
                </h3>
                <p className="text-xs text-neutral-400 font-light">
                  The framework is active. Binding sub-modules are being
                  calibrated.
                </p>
              </div>
            )}
        </main>

        <Footer
          title="Waka Gangga"
          subtitle=""
          backgroundColor="bg-[#556b2f]"
          copyrightName="Waka Hotel & Resorts"
        />
      </div>
      </SmoothScroll>
    </>
  );
}
