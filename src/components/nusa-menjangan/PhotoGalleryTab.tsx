"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  rowLayout: string; // Mengontrol ekspresi baris agar dinamis tapi rapi
}

export default function PhotoGalleryTab() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryData: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Marvelous Ocean Front Sanctuary",
      location: "Villas & Suites",
      image: "img/nusaBay/diving1.jpg",
      rowLayout: "md:col-span-2 aspect-[16/10]", // Gambar melebar premium
    },
    {
      id: "gal-2",
      title: "The Sunset Deck Gastronomy",
      location: "Culinary Heritage",
      image: "img/nusaBay/hero1.jpg",
      rowLayout: "md:col-span-1 aspect-square md:aspect-auto", // Gambar pelengkap yang presisi
    },
    {
      id: "gal-3",
      title: "Deep Wall Dive Expedition",
      location: "Adventures",
      image: "img/nusaBay/resto1.jpg",
      rowLayout: "md:col-span-1 aspect-square md:aspect-auto",
    },
    {
      id: "gal-4",
      title: "Mangrove Wellness Pavilion",
      location: "Healing & Spa",
      image: "img/nusaBay/pool1.jpg",
      rowLayout: "md:col-span-2 aspect-[16/10]",
    },
    {
      id: "gal-5",
      title: "Koko Beach Romantic Dinner",
      location: "Dining Experiences",
      image: "img/nusaBay/room1.jpg",
      rowLayout: "md:col-span-3 aspect-[21/9] hidden md:block", // Banner panoramik megah khusus desktop
    },
    {
      id: "gal-6",
      title: "The Savanna Monsoon Forest",
      location: "Sanctuary Perimeter",
      image: "img/nusaBay/diving2.jpg",
      rowLayout: "md:col-span-1 aspect-square",
    },
    {
      id: "gal-7",
      title: "Wild Fauna Observation",
      location: "Sanctuary Perimeter",
      image: "img/nusaBay/hero2.jpg",
      rowLayout: "md:col-span-1 aspect-square",
    },
    {
      id: "gal-8",
      title: "Private Wooden Jetty Sunset",
      location: "Resort Grounds",
      image: "img/nusaBay/resto2.jpg",
      rowLayout: "md:col-span-1 aspect-square",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      {/* CINEMATIC STRUCTURED GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryData.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => setActiveImage(item.image)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className={`group relative w-full overflow-hidden bg-neutral-950 rounded-2xs cursor-zoom-in shadow-xs ${item.rowLayout}`}
          >
            {/* Image Layer: Melakukan zoom out perlahan ke posisi normal saat di-hover */}
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-[1.4s] ease-out filter grayscale-20 group-hover:grayscale-0"
            />

            {/* Premium Dark Velvet Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

            {/* Border Frame Overlay: Garis tepi halus yang menyala tipis saat hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 m-3 transition-all duration-700 pointer-events-none" />

            {/* Text Context - Animasi Slide Up & Fade In */}
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-1 z-10">
              <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-white/50 group-hover:text-[#4a7a65] uppercase block transition-colors duration-500">
                {item.location}
              </span>
              <h4 className="font-serif text-base lg:text-lg text-white font-light tracking-wide leading-tight max-w-xs transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                {item.title}
              </h4>
              {/* Garis aksen minimalis di bawah teks */}
              <div className="w-0 h-[1px] bg-white/30 group-hover:w-12 transition-all duration-700 ease-out delay-100" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* IMMERSIVE FULL-SCREEN LIGHTBOX OVERLAY (Murni Gambar Tanpa Teks) */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-8">
            {/* Backdrop Gelap Pekat Sinematik */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="absolute inset-0 bg-neutral-950/95 cursor-zoom-out"
            />

            {/* Tombol Close Mengambang Mewah */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-8 right-8 z-20 text-white/40 hover:text-white transition-colors duration-300 cursor-pointer group flex items-center gap-2"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Close
              </span>
              <span className="text-xl font-light">✕</span>
            </button>

            {/* Kontainer Gambar Utama Skala Penuh */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full md:w-fit md:h-fit md:max-w-6xl md:max-h-[85vh] overflow-hidden z-10 flex items-center justify-center pointer-events-none"
            >
              <img
                src={activeImage}
                alt="Expanded View"
                className="w-full h-full object-contain md:rounded-3xs shadow-2xl selection:bg-transparent"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
