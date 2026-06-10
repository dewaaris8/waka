"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface PropertyItem {
  name: string;
  desc: string;
  src: string;
}

interface PropertiesGridProps {
  properties: PropertyItem[];
}

export default function PropertiesGrid({ properties }: PropertiesGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-[#fcfcfb] overflow-hidden select-none">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-8 text-left space-y-3">
          <span className="text-[10px] font-mono text-[#2c4e65] font-bold tracking-[0.4em] uppercase block">
            Exclusive Collection
          </span>
          <h3 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-neutral-900 uppercase">
            Properties <br />& Excursions
          </h3>
          <div className="w-20 h-[1px] bg-[#2c4e65]/40 mt-4" />
        </div>
        <div className="md:col-span-4 md:text-right pt-4 md:pt-0">
          <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs md:ml-auto">
            Hover over each sanctuary to reveal the story, geography, and
            distinct Balinese soul of the destination.
          </p>
        </div>
      </div>

      {/* Interactive Asymmetric Accordion Grid */}
      <div className="w-full px-4 md:px-12">
        <div className="flex flex-col lg:flex-row h-[750px] lg:h-[580px] w-full gap-3 items-stretch">
          {properties.map((item, index) => {
            const isActive = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className="relative overflow-hidden cursor-pointer h-full flex flex-col justify-end bg-neutral-950 will-change-[flex-grow]"
                // Menggunakan animasi Spring yang presisi tanpa efek memantul berlebih (No Bouncing)
                animate={{
                  flexGrow: isActive ? 4.8 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120, // Angka ideal untuk gerakan transisi luxury (lembut dan konstan)
                  damping: 20, // Meredam getaran agar tidak ada efek menyentak di akhir
                  mass: 1,
                }}
              >
                {/* Background Image */}
                <motion.img
                  src={item.src}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover filter will-change-transform opacity-40 group-hover:opacity-50"
                  animate={{
                    scale: isActive ? 1.05 : 1.0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  }}
                />

                {/* Elegant Gradient Protection Line */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-20 pointer-events-none" />

                {/* Vertical Minimalist Title (Hanya muncul saat TIDAK aktif) */}
                <div
                  className={`absolute inset-0 flex items-end p-6 lg:p-8 transition-all duration-500 ease-out pointer-events-none ${
                    isActive
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <h4 className="font-serif text-lg md:text-xl font-light text-white tracking-wide lg:[writing-mode:vertical-lr] lg:rotate-180 text-left whitespace-nowrap">
                    {item.name}
                  </h4>
                </div>

                {/* Expanded Content Wrapper (DIKENDALIKAN AMAN OLEH FRAMER MOTION) */}
                <div className="relative z-10 p-6 md:p-10 text-left w-full overflow-hidden flex flex-col justify-end min-h-[250px]">
                  {/* Kita gunakan conditional rendering biasa (TANPA AnimatePresence) agar transisi layout mengalir natural */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1, // Sedikit jeda agar teks muncul setelah frame mulai melebar
                      }}
                      className="space-y-4 max-w-xl will-change-[transform,opacity]"
                    >
                      {/* Number Indicator */}
                      <span className="text-[10px] font-mono text-[#2c4e65] bg-[#fcfcfb] px-2.5 py-1 rounded-3xs font-bold tracking-widest inline-block">
                        0{index + 1} / 0{properties.length}
                      </span>

                      {/* Title */}
                      <h4 className="font-serif text-2xl md:text-3xl font-light text-white tracking-wide">
                        {item.name}
                      </h4>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed font-sans line-clamp-3 md:line-clamp-none">
                        {item.desc}
                      </p>

                      {/* Decorative Action Call */}
                      <div className="pt-2 flex items-center gap-2 text-white text-[10px] font-mono uppercase tracking-[0.25em]">
                        <span className="w-6 h-[1px] bg-white/50" />
                        <span>Explore Sanctuary</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
