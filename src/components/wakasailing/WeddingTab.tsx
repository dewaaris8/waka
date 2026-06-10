"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WeddingTab() {
  // Data Paket Pernikahan WakaSailing Terupdate dengan Image Asli
  const weddingPackages = [
    {
      id: "wedding-ceremony",
      label: "The Union",
      title: "Wedding Ceremony",
      desc: "An unforgettable wedding ceremony on board the luxury WakaSailing Catamaran, surrounded by the beautiful views of Benoa Harbour.",
      price: "USD 3,000",
      unit: " NET",
      heroImage: "img/wakaSailing/wedding1.jpg",
      gallery: ["img/wakaSailing/wedding2.jpg", "img/wakaSailing/wedding4.jpg"],
      features: [
        "2 Hours sailing around Benoa Harbour for up to 20 guests",
        "Elegant boat setup and specialized wedding decorations",
        "Hand bouquet and boutonniere for the bride and groom",
        "Romantic flower shower tradition",
        "Live music: Keyboardist & a singer / choir / acoustic guitar",
        "Dedicated wedding assistant, priest, or celebrant",
        "Commemorative wedding certificate & special toast for the couple",
        "Premium selection of tailored canapés",
        "Onboard F&B: Welcome drink, free flow beers, wine, and soft drinks",
        "Welcome board for the guests & exclusive WakaSailing signature cruise memento",
        "Return ground transfers from hotels in South Bali to Benoa Harbour",
      ],
    },
    {
      id: "pre-wedding-photoshoot",
      label: "Visual Journal",
      title: "Pre-Wedding Photoshoot",
      desc: "Capture unforgettable pre-wedding photographs for 3 hours on our luxurious catamaran, featuring the blue ocean and a colorful Bali sunset as your backdrop.",
      price: "USD 500",
      unit: " – USD 1,200",
      heroImage: "img/wakaSailing/wedding3.jpg",
      gallery: ["img/wakaSailing/wedding1.jpg", "img/wakaSailing/wedding1.jpg"],
      features: [
        "Marina Shoot (USD 500) – Photo shoot on our Catamaran, moored at Waka Marina, Benoa Harbor.",
        "Harbor Shoot (USD 750) – Photo shoot on the catamaran while sailing around Benoa Harbor, including floral decoration and canapés.",
        "Luxury Ocean Shoot (USD 1,200) – Harbor shoot facilities with a professional photographer, custom photo album, floral decoration, canapés, hand bouquet, and boutonniere.",
      ],
    },
  ];

  return (
    <div className="space-y-32 max-w-6xl mx-auto py-4">
      {/* EDITORIAL HEADER */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#2c4e65] uppercase block">
          Ethereal Unions at Sea
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight">
          Where Forever <br />
          <span className="italic font-normal text-[#2c4e65]">
            Begins on the Waves
          </span>
        </h2>
        <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed max-w-xl mx-auto pt-2">
          From intimate pre-wedding captures to grand sea-bound ceremonies, we
          craft bespoke maritime celebrations that mirror the depth of your
          devotion.
        </p>
      </div>

      {/* WEDDING PACKAGES LAYOUT (GRID 12 COLUMNS) */}
      <div className="space-y-32">
        {weddingPackages.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-neutral-200/50 pb-24 last:border-0 last:pb-0"
          >
            {/* LEFT SIDE: EDITORIAL VISUALS (HERO & MINI GALLERY) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden group/img">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-103"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono tracking-widest text-neutral-800 uppercase">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Mini Gallery Row */}
              <div className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar snap-x snap-mandatory">
                {item.gallery.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="w-[30%] min-w-[130px] aspect-[4/3] bg-neutral-100 shrink-0 snap-start relative overflow-hidden"
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

            {/* RIGHT SIDE: TEXT DETAILS & SPECIFICATIONS */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-40 text-left">
              <div className="space-y-1">
                <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#2c4e65] uppercase block">
                  {item.label} Package
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-neutral-900 font-light tracking-wide">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                {item.desc}
              </p>

              {/* Feature List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  Package Inclusions:
                </h4>
                <ul className="space-y-3.5 pl-1">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs text-neutral-600 font-light leading-relaxed"
                    >
                      <span className="text-[#2c4e65] font-semibold text-sm leading-none mt-[2px]">
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase tracking-widest">
                    Investment
                  </span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xl font-mono font-medium text-neutral-900">
                      {item.price}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {item.unit}
                    </span>
                  </div>
                </div>
                <button className="bg-neutral-900 text-white text-[10px] font-mono uppercase tracking-[0.2em] px-6 py-3.5 rounded-2xs hover:bg-[#2c4e65] transition-colors duration-300">
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ADDITIONAL OPTIONS & WEDDING CAKES SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-neutral-200/60 pt-16"
      >
        {/* OPTIONAL SERVICES */}
        <div className="space-y-4 bg-neutral-50/50 p-6 md:p-8 border border-neutral-200/50 rounded-2xs">
          <h4 className="font-serif text-lg text-neutral-900 font-light tracking-wide border-b border-neutral-200 pb-2">
            Optional Wedding Services
          </h4>
          <ul className="space-y-2.5 text-xs font-light text-neutral-600">
            <li className="flex justify-between border-b border-neutral-100 pb-1.5">
              <span className="max-w-xs">
                Boat-only Rental Fee (Up to 2 hours sailing)
              </span>{" "}
              <span className="font-mono text-neutral-800 font-medium">
                USD 2,000
              </span>
            </li>
            <li className="flex justify-between border-b border-neutral-100 pb-1.5">
              <span>Legal Wedding Document Certification</span>{" "}
              <span className="font-mono text-neutral-800 font-medium">
                USD 600
              </span>
            </li>
            <li className="flex justify-between border-b border-neutral-100 pb-1.5">
              <span>Additional Passenger (inc. F&B Pack)</span>{" "}
              <span className="font-mono text-neutral-800 font-medium">
                USD 50 / pax
              </span>
            </li>
            <li className="flex justify-between border-b border-neutral-100 pb-1.5">
              <span className="max-w-xs">
                Professional Photography (2 Hours / 30-pages book)
              </span>{" "}
              <span className="font-mono text-neutral-800 font-medium">
                USD 785
              </span>
            </li>
            <li className="flex justify-between border-b border-neutral-100 pb-1.5">
              <span>Professional Videography (2 Hours / 30 min edited)</span>{" "}
              <span className="font-mono text-neutral-800 font-medium">
                USD 1,000
              </span>
            </li>
            <li className="flex justify-between border-b border-neutral-100 pb-1.5">
              <span>Violin Soloist Performance</span>{" "}
              <span className="font-mono text-neutral-800 font-medium">
                from USD 265
              </span>
            </li>
            <li className="flex justify-between border-b border-neutral-100 pb-1.5">
              <span>Balloon Release (Minimum of 50 pcs)</span>{" "}
              <span className="font-mono text-neutral-800 font-medium">
                USD 180
              </span>
            </li>
            <li className="flex justify-between pt-0.5">
              <span>Romantic Dove Release (Couple)</span>{" "}
              <span className="font-mono text-neutral-800 font-medium">
                USD 60
              </span>
            </li>
          </ul>
        </div>

        {/* WEDDING CAKES CUSTOMIZATION */}
        <div className="space-y-4 bg-neutral-50/50 p-6 md:p-8 border border-neutral-200/50 rounded-2xs h-full flex flex-col justify-between">
          <div>
            <h4 className="font-serif text-lg text-neutral-900 font-light tracking-wide border-b border-neutral-200 pb-2 mb-3">
              Custom Wedding Cakes
            </h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed mb-4">
              We offer three distinct flavors of artisanal wedding cakes:{" "}
              <span className="font-medium text-neutral-700">
                Fruit Cake, Chocolate Cake, or Sponge Cake
              </span>
              . All choices come complete with sophisticated, elegant, and
              simple icing sugar decorations.
            </p>
            <ul className="space-y-2.5 text-xs font-light text-neutral-600">
              <li className="flex justify-between border-b border-neutral-100 pb-1.5">
                <span>Small Wedding Cake (18 cm)</span>{" "}
                <span className="font-mono text-neutral-800 font-medium">
                  USD 30
                </span>
              </li>
              <li className="flex justify-between border-b border-neutral-100 pb-1.5">
                <span>Medium Wedding Cake (24 cm)</span>{" "}
                <span className="font-mono text-neutral-800 font-medium">
                  USD 45
                </span>
              </li>
              <li className="flex justify-between pt-0.5">
                <span>Large Wedding Cake (30 cm)</span>{" "}
                <span className="font-mono text-neutral-800 font-medium">
                  USD 60
                </span>
              </li>
            </ul>
          </div>
          <div className="text-[10px] font-mono text-neutral-400 italic pt-4 leading-relaxed border-t border-neutral-200/60 mt-4">
            * Note: Document certification rates exclude specific consulate
            fees. Album/DVD delivery options exclude individual shipment fees.
          </div>
        </div>
      </motion.div>

      {/* BOTTOM STATEMENT */}
      <div className="pt-4 text-center">
        <p className="text-[10px] font-light text-neutral-400 italic">
          * All wedding programs and marine voyages are subject to bespoke
          customization. Private consultations with our marriage coordinators
          are available by appointment.
        </p>
      </div>
    </div>
  );
}
