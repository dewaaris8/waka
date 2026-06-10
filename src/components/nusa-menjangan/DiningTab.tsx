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
        <span className="font-serif text-sm tracking-wide text-neutral-800 group-hover:text-[#3e80a2] transition-colors duration-300">
          {title}
        </span>
        <span
          className={`text-xs transform transition-transform duration-500 text-neutral-400 ${isOpen ? "rotate-180 text-[#3e80a2]" : ""}`}
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

interface DiningTabProps {
  setLightboxImage: (img: string) => void;
}

export default function DiningTab({ setLightboxImage }: DiningTabProps) {
  // Menggunakan data tunggal Waka Bar & Restaurant sesuai teks mentah Anda
  const diningData = [
    {
      id: "waka-bar-restaurant",
      title: "Waka Bar & Restaurant",
      tagline: "Beachside Antique Joglo Pavilion",
      description:
        "The beach side Waka Bar & Restaurant is an antique “Joglo” pavilion with carved teak wood pillars and beams, overlooking the white sand beach and turquoise blue ocean. Fresh seafood, Western and traditional Indonesian dishes offer guests a range of delicious flavors to choose from.",
      heroImage: "img/nusaBay/resto1.jpg",
      gallery: ["img/nusaBay/resto2.jpg", "img/nusaBay/resto3.jpg"],
      infos: [
        { label: "Opening Hours", value: "07:00 – 23:00 WITA (Daily)" },
        {
          label: "Cuisine Type",
          value:
            "Fresh Seafood, Western Classics & Traditional Indonesian Dishes",
        },
        {
          label: "Atmosphere",
          value: "Overlooking the white sand beach and turquoise blue ocean",
        },
      ],
      signatures: [
        "Fresh Seafood Catch – Charcoal-grilled ocean selection sourced daily.",
        "Traditional Indonesian Rice – Authentic regional recipe served with authentic side dishes.",
        "Western Culinary Selection – Curated modern international dishes prepared by the beach.",
      ],
      dietary:
        "Vegetarian, Vegan, and custom dietary accommodations are available upon pre-order request.",
    },
  ];

  return (
    <div className="space-y-32">
      {diningData.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-neutral-200/50 pb-24 last:border-0 last:pb-0"
        >
          {/* LEFT SIDE: EDITORIAL VISUALS */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden group/img cursor-zoom-in">
              <img
                src={item.heroImage}
                alt={item.title}
                onClick={() => setLightboxImage(item.heroImage)}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-103"
              />
            </div>

            {/* Horizontal Swipe Mini-Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar snap-x snap-mandatory">
              {item.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(imgSrc)}
                  className="w-[30%] min-w-[130px] aspect-[4/3] bg-neutral-100 shrink-0 snap-start relative overflow-hidden cursor-zoom-in"
                >
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: NARRATIVE & SPECIFICATIONS */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-40">
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#3e80a2] uppercase block">
                {item.tagline}
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-neutral-900 font-light tracking-wide">
                {item.title}
              </h3>
            </div>

            <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
              {item.description}
            </p>

            {/* CTA BUTTON: VIEW MENU */}
            <div className="pt-2">
              <a
                href="/menus/waka-bar-menu.pdf" // Sesuaikan path tautan PDF menu Anda
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-3 bg-neutral-900 hover:bg-[#3e80a2] text-white text-xs font-mono tracking-widest uppercase transition-colors duration-300 rounded-2xs group"
              >
                <span>View Dining Menu</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="pt-2">
              {/* ACCORDION 1: OPENING HOURS & INFO */}
              <Accordion title="Opening Hours & Information">
                <div className="grid grid-cols-1 gap-y-3.5 bg-neutral-50 p-4 border border-neutral-200/60 rounded-2xs">
                  {item.infos.map((info, hIdx) => (
                    <div
                      key={hIdx}
                      className="space-y-0.5 border-b border-neutral-200/40 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[8px] font-mono uppercase tracking-wider text-neutral-400 block">
                        {info.label}
                      </span>
                      <span className="text-[11px] font-medium text-neutral-700">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Accordion>

              {/* ACCORDION 2: SIGNATURE DISHES */}
              <Accordion title="Signature Dishes">
                <ul className="grid grid-cols-1 gap-y-3 text-[11px] font-light pl-1 pt-1">
                  {item.signatures.map((dish, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-2.5 pb-1 border-b border-neutral-100 last:border-none"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3e80a2]/60 shrink-0 mt-1" />
                      <span className="text-neutral-600 leading-relaxed">
                        {dish}
                      </span>
                    </li>
                  ))}
                </ul>
              </Accordion>

              {/* ACCORDION 3: DIETARY OPTIONS */}
              <Accordion title="Dietary Accommodation">
                <div className="pl-1 pt-1 text-[11px]">
                  <p className="text-neutral-500 font-light leading-relaxed italic">
                    {item.dietary}
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
