"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TheCatamaranTab() {
  // Data spesifikasi asli berdasarkan dokumen yang diunggah
  const specifications = [
    { label: "Boat Name", value: "WAKASAILING" },
    { label: "Type", value: "Twin-Hull Sailing Catamaran" },
    { label: "Flag", value: "Indonesia" },
    { label: "Build On", value: "20 January 2005" },
    { label: "Construction", value: "Fiber Glass" },
    { label: "Gross Tonnage", value: "20 Tons" },
    { label: "Length Over All", value: "16.60 M" },
    { label: "Wide", value: "9.62 M" },
    { label: "Draft", value: "1.90 M" },
    { label: "Power", value: "2 x Steyr 140 HP Engines" },
    { label: "Maximum Speed", value: "18 Knot" },
    { label: "Crew", value: "5 Staffs" },
    { label: "Passengers", value: "35 Persons Max." },
    { label: "Safety Equipment", value: "Comply with ISM-Code" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white p-6 md:p-10 lg:p-12 border border-neutral-200/70 rounded-xs shadow-2xs">
      {/* 1. SISI KIRI: VISUAL HERO & EDITORIAL STATEMENT */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
        <div className="space-y-2 text-left">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#2c4e65] font-bold block">
            Vessel Showcase
          </span>
          <h4 className="text-3xl font-serif font-light text-neutral-900 leading-tight">
            The WakaSailing <br />
            <span className="italic font-normal text-[#2c4e65]">Catamaran</span>
          </h4>
        </div>

        {/* Container Gambar dengan Efek Hover Elegan */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 rounded-2xs group shadow-xs">
          {/* Ganti src dengan path foto kapal Waka Sailing asli Anda */}
          <img
            src="img/wakaSailing/hero2.jpg"
            alt="Waka Sailing Catamaran Ocean Voyage"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          {/* Vignette Overlay gradasi gelap yang halus di bagian bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-90" />

          {/* Teks Ringkas Di Atas Gambar */}
          <div className="absolute bottom-0 left-0 p-6 text-left space-y-1">
            <p className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
              Rigging & Engineering
            </p>
            <p className="font-serif text-lg text-white font-light tracking-wide">
              Crafted for ultimate stability and maritime luxury.
            </p>
          </div>
        </div>
      </div>

      {/* 2. SISI KANAN: TABEL SPESIFIKASI MINIMALIS */}
      <div className="lg:col-span-7 w-full text-left pt-4 lg:pt-0">
        <div className="border border-neutral-100 rounded-2xs divide-y divide-neutral-100">
          {specifications.map((spec, index) => (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              key={spec.label}
              className="grid grid-cols-12 py-3.5 px-4 items-center hover:bg-neutral-50/50 transition-colors group"
            >
              {/* Nama Label Kiri */}
              <div className="col-span-5 md:col-span-4 text-[10px] md:text-xs font-mono tracking-wider text-neutral-400 group-hover:text-[#2c4e65] transition-colors uppercase">
                {spec.label}
              </div>

              {/* Titik Dua Pemisah */}
              <div className="col-span-1 text-neutral-300 font-light text-center">
                :
              </div>

              {/* Nilai Data Kanan */}
              <div className="col-span-6 md:col-span-7 font-serif text-xs md:text-sm text-neutral-800 font-light tracking-wide">
                {spec.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catatan Kaki Tambahan Standar Maritim */}
        <p className="text-[10px] font-light text-neutral-400 mt-4 italic leading-relaxed pl-4">
          * Vessel data is maintained strictly under international safety
          parameters. Annual certificate renewals are managed directly by Waka
          Experience Marinas.
        </p>
      </div>
    </div>
  );
}
