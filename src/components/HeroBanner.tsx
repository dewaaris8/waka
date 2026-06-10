"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Daftar gambar latar belakang premium untuk brand resor mewah Waka Group
const backgroundSlides = [
  {
    id: 1,
    image: "img/wakaBeach/hero1.jpg",
  },
  {
    id: 2,
    image: "img/wakaGangga/hero3.jpg",
  },
  {
    id: 3,
    image: "img/wakaSailing/hero3.jpg",
  },
];

export default function HeroSliderBanner() {
  const [current, setCurrent] = useState(0);

  // Mekanisme Autoplay Gambar (Berganti setiap 6 detik secara otomatis)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-[85vh] w-full bg-neutral-950 flex items-center overflow-hidden text-left select-none">
      {/* 1. LAYER DEKORATIF & GRADIENT PROTECTION */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-[#fcfcfb] z-10" />
      <div className="absolute inset-y-0 left-0 w-full md:w-[50%] bg-gradient-to-r from-neutral-950/40 via-neutral-950/10 to-transparent z-10 pointer-events-none" />

      {/* 2. CINEMATIC CROSS-FADE IMAGE SLIDER (Hanya Foto yang Berganti) */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
            className="w-full h-full absolute inset-0 will-change-[transform,opacity]"
          >
            <img
              src={backgroundSlides[current].image}
              alt="Waka Hotels & Resorts Sanctuary Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. STATIC CONTENT TEXT AREA (Teks Tetap Diam & Kokoh Tanpa Efek Kedip) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="space-y-4 max-w-xl">
          {/* Tagline / Subtitle */}
          <span className="text-[10px] font-mono font-bold tracking-[0.45em] text-white/90 uppercase block">
            Waka Hotels & Resorts
          </span>

          {/* Garis Pembatas Mewah */}
          <div className="w-12 h-[1px] bg-white/40" />

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-serif tracking-wide text-white font-light uppercase leading-none">
            About Us
          </h1>

          {/* Deskripsi Narasi Resmi Waka Group */}
          <p className="text-[11px] md:text-xs text-white/75 font-light font-sans tracking-wide leading-relaxed">
            Discovering the pristine essence of Bali through raw natural
            preservation. We offer unique boutique sanctuaries thoughtfully
            designed off the beaten track, blending modern luxury with a genuine
            Balinese soul.
          </p>
        </div>
      </div>

      {/* 4. SLIDER NAVIGATION INDICATORS (DOTS) */}
      <div className="absolute bottom-8 right-6 lg:right-16 z-20 flex items-center gap-3">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group relative p-2 focus:outline-none cursor-pointer"
            aria-label={`Go to background scene ${index + 1}`}
          >
            {/* Garis Horizontal Minimalis sebagai Penunjuk Slide Latar Belakang */}
            <div
              className={`h-[2px] transition-all duration-500 rounded-full ${
                current === index
                  ? "w-8 bg-white"
                  : "w-4 bg-white/30 group-hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
