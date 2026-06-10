"use client";

import React, { useState } from "react";

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-neutral-200/70 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 focus:outline-none group cursor-pointer"
      >
        <span className="font-serif text-sm tracking-wide text-neutral-800 group-hover:text-[#2b4c3f] transition-colors duration-300">
          {title}
        </span>
        <span
          className={`text-xs transform transition-transform duration-500 text-neutral-400 ${isOpen ? "rotate-180 text-[#2b4c3f]" : ""}`}
        >
          {isOpen ? "✕" : "＋"}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pt-4 pb-2 opacity-90">{children}</div>
      </div>
    </div>
  );
}

interface FacilitiesSpaTabProps {
  setLightboxImage: (img: string) => void;
}

export default function FacilitiesSpaTab({
  setLightboxImage,
}: FacilitiesSpaTabProps) {
  // Konten asli murni 100% tanpa modifikasi kalimat
  const facilitiesData = [
    {
      id: "bar-restaurant",
      title: "Bar & Restaurant",
      description:
        "Waka Bar & Restaurant set along the white sandy of the Kotal beach affords beautiful sunrise and ocean views throughout the day. The All-Day Dining menu selection consists of Western, Pan-Asian and traditional Indonesian dishes offering guests a range of delicious flavors to suit all kinds of palates.",
      heroImage: "img/nusaBay/resto1.jpg",
      gallery: ["img/nusaBay/resto2.jpg", "img/nusaBay/resto3.jpg"],
    },
    {
      id: "swimming-pool",
      title: "Swimming Pool",
      description:
        "Set in the center of the resort, blending in with nature, the semi circular main swimming pool is a quiet spot for sun-bathing, relaxing and interacting with some shy animals that occasionally visit the pool deck. The pool deck has sun-loungers and Balinese temple umbrellas for shade. Chilled beverages, tropical cocktails and light meal are available throughout the day.",
      heroImage: "img/nusaBay/pool1.jpg",
      gallery: [],
    },
    {
      id: "library",
      title: "Library",
      description:
        "Library Lounge has reference books and a work station for emails and complimentary internet access.",
      heroImage:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200",
      gallery: [],
    },
    {
      id: "dive-centre",
      title: "Dive Centre",
      description:
        "The resort’s Dive Centre is operated by a PADI certified operator – Blue Corner Dive.",
      heroImage: "img/nusaBay/diving1.jpg",
      gallery: ["img/nusaBay/diving2.jpg", "img/nusaBay/diving3.jpg"],
    },
  ];

  return (
    <div className="space-y-40">
      {/* 1. SEKSI FASILITAS UTAMA (LAYOUT BERGANTIAN KIRI-KANAN) */}
      {facilitiesData.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between group lg:even:flex-row-reverse"
        >
          {/* ELEMEN VISUAL */}
          <div className="w-full lg:w-[55%] space-y-4 shrink-0">
            <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden rounded-sm cursor-zoom-in">
              {/* Ghost Index Number */}
              <div className="absolute top-4 left-6 z-10 font-mono text-sm font-light text-white/40 tracking-widest select-none">
                0{index + 1}
              </div>
              <img
                src={item.heroImage}
                alt={item.title}
                onClick={() => setLightboxImage(item.heroImage)}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-102"
              />
            </div>

            {item.gallery.length > 0 && (
              <div className="flex gap-4 overflow-x-auto pb-2 pt-1 no-scrollbar snap-x snap-mandatory">
                {item.gallery.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(imgSrc)}
                    className="w-[28%] min-w-[120px] aspect-[4/3] bg-neutral-100 shrink-0 rounded-2xs relative overflow-hidden cursor-zoom-in"
                  >
                    <img
                      src={imgSrc}
                      alt=""
                      className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ELEMEN TEKS EDITORIAL */}
          <div className="w-full lg:max-w-md text-left space-y-4">
            <h3 className="font-serif text-2xl lg:text-3xl text-neutral-950 font-light tracking-wide uppercase">
              {item.title}
            </h3>
            <div className="w-12 h-[1px] bg-[#2b4c3f]/40" />
            <p className="text-xs md:text-[13px] text-neutral-500 font-serif font-light leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}

      {/* 2. SEKSI KHUSUS: COMPLIMENTARY RESORT SERVICES (LAYOUT 2 KOLOM SEIMBANG) */}
      <div className="border-t border-neutral-200/60 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* KOLOM KIRI: TEKS UTAMA & TIMELINE JADWAL BOAT */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl lg:text-3xl text-neutral-950 font-light tracking-wide uppercase">
              Complimentary Resort Services
            </h3>
            <div className="w-12 h-[1px] bg-[#2b4c3f]/40" />
          </div>

          <p className="text-xs md:text-[13px] text-neutral-500 font-serif font-light leading-relaxed">
            Boat transfer for check-in and check-out from Labuan Lalang harbour
            jetty on mainland to NusaBay Menjangan jetty takes approximately 20
            minutes across Tanjung Kotal Bay. Boat transfers operate between
            07.00 am and 10.00 pm as per following schedule:
          </p>

          <div className="pt-4">
            <Accordion title="View Daily Boat Schedule">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-serif bg-neutral-50/70 p-6 border border-neutral-200/50 rounded-sm">
                {/* Jadwal Pergi */}
                <div className="space-y-3">
                  <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#2b4c3f] block border-b border-neutral-200 pb-1.5">
                    From Labuan Lalang harbor to NusaBay Menjangan
                  </span>
                  <ul className="space-y-2 font-sans text-neutral-700 text-[11px] font-medium tracking-wide pl-1">
                    <li>09.15 AM</li>
                    <li>12.15 AM</li>
                    <li>14.15 PM*</li>
                    <li>17.30 PM</li>
                  </ul>
                </div>

                {/* Jadwal Pulang */}
                <div className="space-y-3">
                  <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#2b4c3f] block border-b border-neutral-200 pb-1.5">
                    From NusaBay Menjangan to Labuan Lalang harbor
                  </span>
                  <ul className="space-y-2 font-sans text-neutral-700 text-[11px] font-medium tracking-wide pl-1">
                    <li>09.50 AM</li>
                    <li>12.50 PM</li>
                    <li>15.05 PM*</li>
                    <li>18.05 PM</li>
                  </ul>
                </div>

                {/* Catatan Kaki Jadwal */}
                <div className="col-span-1 sm:col-span-2 pt-2 border-t border-neutral-200/60 font-sans text-[10px] text-neutral-400 italic">
                  *In certain condition the boat will be based on sharing basis
                  with our team / supply boat
                </div>
              </div>
            </Accordion>
          </div>
        </div>

        {/* KOLOM KANAN: DAFTAR LAYANAN GRATIS LAINNYA */}
        <div className="lg:col-span-5 bg-neutral-50/40 p-8 border border-neutral-200/40 rounded-sm text-left lg:sticky lg:top-40">
          <ul className="space-y-5 text-xs md:text-[13px] text-neutral-600 font-serif font-light leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#2b4c3f] font-sans text-xs mt-0.5">•</span>
              <span>Daily Indonesian afternoon tea</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2b4c3f] font-sans text-xs mt-0.5">•</span>
              <span>Valet parking at Labuan Lalang Harbour transit area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2b4c3f] font-sans text-xs mt-0.5">•</span>
              <span>Laundry and dry cleaning service</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2b4c3f] font-sans text-xs mt-0.5">•</span>
              <span>Medical doctor on call</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2b4c3f] font-sans text-xs mt-0.5">•</span>
              <span>
                Activity centre for ocean recreation activities: sea kayaks and
                snorkeling gear for snorkeling at the house reef
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
