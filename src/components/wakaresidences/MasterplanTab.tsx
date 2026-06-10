"use client";

import React from "react";

export default function MasterplanTab() {
  const plans = [
    {
      title: "1 & 2-Bedroom Sanctuaries",
      meta: "Part of the Masterplan",
      desc: "The one and two-bedroom villas of the Waka Residences continue the blend of rustic and contemporary in signature Waka style. Outdoor areas blend with indoor spaces all open to the spectacular views. With a leading interior designer working on the fittings and furnishings, these villas offer space, luxury and a contemporary vision of Bali living.",
      subDesc:
        "The outdoor areas of the residences are designed to embrace the surrounds and blend seamlessly with the interiors. Private pools, decks and tropical gardens blur the lines between living spaces and adjoining nature.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
    },
    {
      title: "The Ocean-Front 3-Bedroom Estate",
      meta: "Premium Panoramic Blueprint",
      desc: "The spectacular ocean-front three-bedroom villa features luxurious, spacious interiors with expansive views across the ocean and the rice fields. Designed to incorporate the traditional indoor/outdoor living concept, stylish interiors blend into outdoor terraces, gardens and a private pool area.",
      subDesc:
        "Folding glass doors enclose the interiors for comfort and privacy while still allowing panoramic views from every room.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto h-max space-y-10 text-left py-4">
      {/* 1. HERO TITLE SECTION */}
      <div className="space-y-2">
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-amber-600 block">
          Architectural Blueprint
        </span>
        <h3 className="font-serif text-3xl font-light text-neutral-900 tracking-wide uppercase">
          The Layout Master Plan
        </h3>
      </div>

      {/* 2. DYNAMIC MASTERPLAN FLOW */}
      <div className="space-y-12">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="space-y-6 border-t border-neutral-100 pt-8 first:border-t-0 first:pt-0"
          >
            {/* Metadata & Sub-title */}
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">
                {plan.meta}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                Option 0{i + 1}
              </span>
            </div>

            {/* Title */}
            <h4 className="font-serif text-xl font-light text-neutral-900 uppercase tracking-wider">
              {plan.title}
            </h4>

            {/* Dedicated Image Container */}
            <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden shadow-sm rounded-xs">
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent" />
            </div>

            {/* Content Descriptions */}
            <div className="space-y-4">
              <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                {plan.desc}
              </p>

              <p className="text-xs text-neutral-700 font-light leading-relaxed bg-gradient-to-r from-amber-text-amber-600/5 to-transparent p-4 border-l-2 border-amber-text-amber-600 italic">
                {plan.subDesc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTNOTE NOTIFICATION */}
      <p className="text-[10px] text-neutral-400 italic font-light pt-4 border-t border-neutral-100 leading-relaxed">
        * Specifications, structural blueprints, and interior layouts are
        managed systematically to align with premium property standards.
      </p>
    </div>
  );
}
