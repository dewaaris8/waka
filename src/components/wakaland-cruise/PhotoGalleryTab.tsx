"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PhotoGalleryTab() {
  const images = [
    {
      id: 1,
      src: "img/wakaLand/hero2.jpg",
      title: "",
      location: "",
      // Grid utama horizontal yang mendominasi baris pertama
      gridClass: "md:col-span-2 aspect-video md:aspect-auto md:h-full",
    },
    {
      id: 2,
      src: "img/wakaLand/hero3.jpg",
      title: "",
      location: "",
      // Penyeimbang baris pertama di sisi kanan
      gridClass: "md:col-span-1 aspect-square md:aspect-auto md:h-full",
    },
    {
      id: 3,
      src: "img/wakaLand/hero4.jpg",
      title: "",
      location: "",
      // Kotak kiri di baris kedua
      gridClass: "md:col-span-1 aspect-square md:aspect-auto md:h-full",
    },
    {
      id: 4,
      src: "img/wakaLand/hero1.jpg",
      title: "",
      location: "",
      // Kotak tengah di baris kedua
      gridClass: "md:col-span-1 aspect-square md:aspect-auto md:h-full",
    },
    {
      id: 5,
      src: "img/wakaLand/gallery1.jpg",
      title: "",
      location: "",
      // Kotak kanan di baris kedua
      gridClass: "md:col-span-1 aspect-square md:aspect-auto md:h-full",
    },
    {
      id: 6,
      src: "img/wakaLand/gallery3.jpg",
      title: "",
      location: "",
      // Grid utama horizontal yang mendominasi baris pertama
      gridClass: "md:col-span-3 aspect-video md:aspect-auto md:h-full",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Editorial Header - Super Clean & Balanced */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200/60 pb-6 text-left gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#2b4c3f] uppercase block">
            Visual Journal
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide">
            Waka Land Cruise{" "}
            <span className="italic font-serif text-neutral-500">Archives</span>
          </h2>
        </div>
        <p className="text-[11px] text-neutral-500 font-light leading-relaxed max-w-sm md:text-right">
          Curated photographic journeys through the volcanic highlands, emerald
          rice terraces, and timeless rural landscapes of Bali aboard Waka Land
          Cruise.
        </p>
      </div>

      {/* Structured Bento Grid Layout */}
      {/* Menggunakan grid 3 kolom dengan tinggi baris yang dikunci rata (320px) pada desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[320px]">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            className={`group relative overflow-hidden bg-neutral-900 rounded-2xs border border-neutral-200/40 shadow-xs cursor-pointer ${img.gridClass}`}
          >
            {/* Image Container with Exact Fill */}
            <div className="w-full h-full relative">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-102 brightness-[0.95] group-hover:brightness-[0.85]"
              />
            </div>

            {/* Subtle Elegant Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Micro Layout Elements - Static Index Number */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[9px] font-mono text-white/50 bg-neutral-950/20 backdrop-blur-xs px-2 py-0.5 rounded-3xs border border-white/5">
                0{index + 1}
              </span>
            </div>

            {/* Clean Typography Block (Slide up on hover) */}
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end text-left z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <span className="text-[9px] font-mono tracking-[0.15em] text-[#a3b899] uppercase block mb-0.5">
                {img.location}
              </span>
              <h3 className="font-serif text-base md:text-lg font-light text-white tracking-wide leading-tight">
                {img.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
