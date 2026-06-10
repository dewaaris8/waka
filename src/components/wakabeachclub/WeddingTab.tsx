"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WeddingTab() {
  const weddingFeatures = [
    {
      title: "Oceanfront Vows",
      desc: "Exchange your vows against the backdrop of a breathtaking sunset over the pristine Lembongan sea, curated with elegant tropical floral setups.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    },
    {
      title: "Bespoke Banquets",
      desc: "From intimate beachfront dynamic tables to formal sit-down epicurean dinners crafted meticulously by our culinary master team.",
      image:
        "https://images.unsplash.com/photo-1546193430-c2d20e15987a?q=80&w=800",
    },
  ];

  return (
    <div className="space-y-24 text-left">
      {/* SECTION 1: HERO CAPACITIES (EDITORIAL BLOCK) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-16 border border-neutral-200/70 rounded-xs shadow-2xs relative overflow-hidden">
        {/* Decorative subtle texture/accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#bca986]/5 rounded-bl-full pointer-events-none" />

        <div className="lg:col-span-5 space-y-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#bca986] font-bold block">
            Coastal Matrimony
          </span>
          <h4 className="text-3xl md:text-4xl font-serif font-light text-neutral-900 leading-tight">
            An Unforgettable Island Romance
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
            Celebrate your sacred union where golden sands meet refined coastal
            hospitality. WakaBeachClub offers an exclusive, tailored canvas for
            both intimate ceremonies and grand beachfront wedding receptions.
          </p>
        </div>

        {/* STATS CAPACITY CARDS */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 border-l-0 lg:border-l border-neutral-200/80 pl-0 lg:pl-12">
          <div className="space-y-3 bg-neutral-50/50 p-6 border border-neutral-100 rounded-2xs group hover:border-[#bca986]/30 transition-colors">
            <h6 className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-[#bca986] transition-colors font-mono font-bold">
              Cocktails & Canapés
            </h6>
            <div className="space-y-1">
              <p className="font-serif text-3xl md:text-4xl text-neutral-800 font-light">
                200
              </p>
              <p className="text-xs text-neutral-500 font-light font-mono">
                Maximum Guest Capacity
              </p>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed pt-2 border-t border-neutral-200/40">
              Perfect for modern standing sunset soirées and high-end social
              gatherings.
            </p>
          </div>

          <div className="space-y-3 bg-neutral-50/50 p-6 border border-neutral-100 rounded-2xs group hover:border-[#bca986]/30 transition-colors">
            <h6 className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-[#bca986] transition-colors font-mono font-bold">
              Lunch & Dinner Receptions
            </h6>
            <div className="space-y-1">
              <p className="font-serif text-3xl md:text-4xl text-neutral-800 font-light">
                150
              </p>
              <p className="text-xs text-neutral-500 font-light font-mono">
                Maximum Seating Capacity
              </p>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed pt-2 border-t border-neutral-200/40">
              Designed for curated multi-course banquet dining or premium custom
              buffet arrangements.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: VISUAL INSPIRATION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {weddingFeatures.map((feat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group space-y-4"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-2xs border border-neutral-200/40 relative">
              <img
                src={feat.image}
                alt={feat.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="space-y-2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
