"use client";

import React, { useState, useEffect } from "react";

interface PhotoGalleryTabProps {
  setLightboxImage: (img: string) => void;
}

export default function PhotoGalleryTab({
  setLightboxImage,
}: PhotoGalleryTabProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    "All",
    "Villas",
    "Dining",
    "Weddings",
    "Spa & Activities",
  ];

  // 1. Data untuk Premium Auto-Slider (Highlight Terbaik)
  const sliderHighlights = [
    {
      title: "The Ultimate Horizon Sanctuary",
      subtitle: "Waka Private Pool Villa",
      image: "img/wakaGangga/gallery1.jpg",
    },
    {
      title: "Coastal Culinary Perfection",
      subtitle: "Waka Bar & Restaurant",
      image: "img/wakaGangga/gallery2.jpg",
    },
    {
      title: "Timeless Oceanfront Vows",
      subtitle: "Waka Wedding Altar",
      image: "img/wakaGangga/gallery3.jpg",
    },
  ];

  // 2. Data untuk Grid Main Gallery (Masonry Style)
  const galleryItems = [
    {
      id: 1,
      category: "Villas",
      title: "Private Pool Sanctuary",
      image: "img/wakaGangga/gallery1.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: 2,
      category: "Dining",
      title: "Waka Bar Restaurant View",
      image: "img/wakaGangga/gallery2.jpg",
      aspect: "aspect-[16/10]",
    },
    {
      id: 3,
      category: "Weddings",
      title: "Oceanfront Altar Setup",
      image: "img/wakaGangga/gallery3.jpg",
      aspect: "aspect-square",
    },
    {
      id: 4,
      category: "Spa & Activities",
      title: "Waka Spa Massage Pavilion",
      image: "img/wakaGangga/gallery4.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: 5,
      category: "Villas",
      title: "Garden Terrace View",
      image: "img/wakaGangga/gallery5.jpg",
      aspect: "aspect-[16/10]",
    },
    {
      id: 6,
      category: "Dining",
      title: "Bespoke Candlelit Dinner",
      image: "img/wakaGangga/gallery6.jpg",
      aspect: "aspect-square",
    },
    {
      id: 7,
      category: "Weddings",
      title: "Signature Wedding Elements",
      image: "img/wakaGangga/gallery7.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: 8,
      category: "Spa & Activities",
      title: "Infinity Pool Horizon",
      image: "img/wakaGangga/resto1.jpg",
      aspect: "aspect-[16/10]",
    },
  ];

  // Efek Auto-Play Slider (Berputar setiap 5 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderHighlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderHighlights.length]);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-20 max-w-6xl mx-auto">
      {/* SECTION 1: CINEMATIC AUTO-SLIDER (FEATURED THEATER) */}
      <div className="relative w-full h-[50vh] md:h-[55vh] bg-neutral-900 overflow-hidden rounded-xs border border-neutral-200/30 group/slider">
        {sliderHighlights.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-[0.75]"
              onClick={() => setLightboxImage(slide.image)}
            />
            {/* Bottom-Left Minimal Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="space-y-1 transform translate-y-2 animate-fade-in">
                <span className="text-[9px] font-mono tracking-[0.3em] text-white/70 uppercase block">
                  {slide.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-white font-light tracking-wide max-w-xl">
                  {slide.title}
                </h3>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators (Garis Minimalis Kanan Bawah) */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-10">
          {sliderHighlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] transition-all duration-500 cursor-pointer ${
                index === currentSlide ? "w-8 bg-white" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* SECTION 2: CATEGORY FILTER BAR */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#556b2f] font-mono font-bold block">
            Archived Moments
          </span>
          <h3 className="font-serif text-2xl text-neutral-900 font-light tracking-wide">
            Explore Our Sanctuary Frame by Frame
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-b border-neutral-200/60 pb-6 max-w-2xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`text-[10px] uppercase tracking-[0.15em] px-4 py-2 transition-all duration-300 rounded-sm cursor-pointer focus:outline-none ${
                activeFilter === category
                  ? "bg-[#556b2f] text-white font-medium shadow-xs"
                  : "text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SECTION 3: MASONRY GRID LAYOUT */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item.image)}
              className={`break-inside-avoid relative w-full ${item.aspect} bg-neutral-100 overflow-hidden group rounded-xs border border-neutral-200/40 cursor-zoom-in transition-all duration-500`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out scale-101 group-hover:scale-104 group-hover:brightness-90"
              />

              {/* Elegant Blur & Border Overlay */}
              <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                {/* Top Corner Icon/Detail */}
                <div className="flex justify-end transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] text-white/80 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-2xs font-mono uppercase tracking-wider">
                    ✕ Expand
                  </span>
                </div>

                {/* Bottom Narrative */}
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 space-y-1">
                  <span className="text-[8px] font-mono tracking-widest text-white/80 uppercase block">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-sm text-white tracking-wide font-light">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FALLBACK JIKA KATEGORI KOSONG */}
        {filteredItems.length === 0 && (
          <div className="text-center py-24 bg-neutral-50 border border-neutral-200/40 rounded-xs">
            <p className="text-xs text-neutral-400 font-serif italic">
              No captured frames in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
