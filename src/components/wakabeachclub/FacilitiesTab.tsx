"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FacilitiesTab() {
  const primaryFacilities = [
    {
      id: "pool",
      label: "Aquatic",
      title: "Swimming Pools",
      desc: "Features a 12m x 5.5m Main Pool with a varying depth of 1.2m to 1.4m, alongside a dedicated circular Children’s Pool with an even, safe depth of 50 cm.",
      image: "img/wakaBeach/beach3.jpg",
      grid: "md:col-span-7",
    },
    {
      id: "treehouse",
      label: "Relaxation",
      title: "Beach Tree House",
      desc: "Perched right on the beach, our traditional Tree House offers an elevated, shaded deck ideal for quiet lounging, reading, or an afternoon nap with an ocean breeze.",
      image: "img/wakaBeach/tree1.jpg",
      grid: "md:col-span-5",
    },
    {
      id: "dining",
      label: "Culinary",
      title: "Restaurant & Bar",
      desc: "Seats 80 guests in a large open-air 3-tiered covered Pavilion, extending to the tropical gardens, pool deck, and a wooden deck overlooking the beach. Features a garden-side open Bar and wood-fired Pizza counter seating 10 guests for intimate cocktails and freshly baked pizzas.",
      image: "img/wakaBeach/resto1.jpg",
      grid: "md:col-span-12",
    },
  ];

  const essentialAmenities = [
    {
      title: "Music & Entertainment",
      desc: "An ever-expanding compilation of genres ranging from the best of 90's to today's hits, including classical and club hits. Balinese dance performances are also available for special events upon request.",
    },
    {
      title: "Showers & Rest Rooms",
      desc: "Conveniently located within the beach club area, offering both refreshing outdoor showers and fully air-conditioned indoor showers and rest rooms for premium guest comfort.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* SECTION 1: PRIMARY VISUAL FACILITIES (GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
        {primaryFacilities.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`${item.grid} group relative overflow-hidden bg-white border border-neutral-100 rounded-xs shadow-2xs hover:shadow-xl transition-all duration-500`}
          >
            <div
              className={`relative ${item.id === "dining" ? "aspect-[21/9]" : "aspect-[4/3]"} overflow-hidden`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors" />
            </div>

            <div className="p-8 text-left space-y-3">
              <span className="text-[9px] font-mono tracking-[0.3em] text-[#bca986] uppercase font-bold">
                {item.label} ✦
              </span>
              <h3 className="font-serif text-2xl font-light text-neutral-900">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SECTION 2: ESSENTIAL AMENITIES (CLEAN LIST) */}
      <div className="border-t border-neutral-200/60 pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[9px] uppercase tracking-[0.3em] text-amber-700 font-bold block">
              Guest Comfort
            </span>
            <h4 className="text-2xl md:text-3xl font-serif font-light text-neutral-900">
              Essential Club Amenities
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {essentialAmenities.map((amenity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="space-y-3"
              >
                <h5 className="font-serif text-lg text-[#bca986] font-light border-b border-neutral-100 pb-2">
                  {amenity.title}
                </h5>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {amenity.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
