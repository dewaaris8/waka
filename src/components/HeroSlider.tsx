"use client";

import React, { useState } from "react";

const SLIDES = [
  "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1600",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <section className="relative h-[65vh] md:h-[80vh] bg-neutral-900 overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/10 z-20" />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${slide}')` }}
          />
        </div>
      ))}

      {/* Tombol Navigasi Slider */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all border border-white/10 active:scale-95"
      >
        ⟨
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all border border-white/10 active:scale-95"
      >
        ⟩
      </button>

      {/* Titik Indikator Slider */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === current ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
