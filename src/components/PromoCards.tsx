"use client";

import React from "react";

const PROMOS = [
  {
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600",
    title: "Honeymoon Package",
    desc: "A romantic Balinese getaway tailored just for you.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
    title: "Spa Relaxation Journey",
    desc: "Rejuvenate your body and mind in absolute paradise.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600",
    title: "Waka Anniversary Escape",
    desc: "Celebrate milestones with unforgettable exclusive treatments.",
  },
];

export default function PromoCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {PROMOS.map((promo, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center group cursor-pointer p-4 bg-white hover:bg-neutral-50 transition rounded-sm border border-transparent hover:border-gray-100 hover:shadow-lg"
          >
            <div className="shadow-md group-hover:shadow-lg transition-all duration-500 mb-6 overflow-hidden w-full aspect-[3/4] rounded-sm bg-neutral-100">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-103"
                style={{ backgroundImage: `url('${promo.image}')` }}
              />
            </div>
            <div className="space-y-2.5 max-w-xs">
              <h3 className="text-base tracking-wide font-serif text-gray-800 group-hover:text-waka-dark transition-colors font-bold">
                {promo.title}
              </h3>
              <p className="text-xs text-gray-500 font-medium px-4 leading-relaxed">
                {promo.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
