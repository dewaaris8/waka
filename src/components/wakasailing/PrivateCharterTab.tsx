"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivateCharterTab() {
  // Data WakaSailing Private Charter Terupdate
  const charterOptions = [
    {
      id: "full-day-charter",
      title: "Full Day Private Charter",
      subtitle: "Exclusive Catamaran Excursion",
      price: "USD 4,200",
      unit: " (up to 30 persons)",
      additionalPrice: "USD 3,150",
      additionalUnit: " (Family Charter: up to 10 persons)",
      taxNote: "Rates are subject to change without prior notice.",
      inclusions: [
        "Return land transfers from your hotel to Benoa Harbour (Nusa Dua, Sanur, Jimbaran, Kuta, Legian, Seminyak, Uluwatu and Pecatu areas)",
        "On board: Free flow drinks on the catamaran (orange juice, soft drinks, mineral water, tea and coffee)",
        "On board: Complimentary pastries and seasonal fruits",
        "At Lembongan Island: Use of swimming pool, sun loungers and pool towels at WakaBeachClub, Jungut Batu beach",
        "At Lembongan Island: BBQ buffet lunch of garden fresh salads, freshly grilled fish and satay, Balinese and Indonesian specialties",
        "Lunch Beverage: Accompanied by a glass of local wine or beer during lunch, soft drinks, mineral water, tea and bali coffee",
        "At Lembongan Island: Snorkeling and ocean swimming at white sandy Jungut Batu beach",
        "At Lembongan Island: Optional village tour to the famous underground house",
        "Sunset Sail: Sail back into the sunset with a complimentary cocktail, cheese and crackers",
      ],
    },
    {
      id: "half-day-charter",
      title: "Romantic Sunset Cruise",
      subtitle: "Half Day Charter Around Benoa Harbour",
      price: "USD 2,000",
      unit: " NET (up to 10 persons)",
      additionalPrice: null,
      additionalUnit: "",
      taxNote:
        "Rate is subject to change without prior notice. Embarkation: 3.30pm – 7.00pm",
      inclusions: [
        "Sail around Benoa Harbour by the luxury WakaSailing catamaran",
        "Return land transfers from your hotel to Benoa harbor (Nusa Dua, Sanur, Jimbaran, Kuta, Legian, Seminyak, Uluwatu and Pecatu areas)",
        "Premium selection of tailored canapés",
        "A complimentary bottle of fine wine",
        "Free flow of crisp beer, soft drinks, coffee & tea",
        "Live onboard entertainment with an acoustic guitar ensemble",
      ],
    },
  ];

  return (
    <div className="space-y-24 max-w-6xl mx-auto py-4">
      {/* SECTION 1: EDITORIAL HEADER */}
      <section className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#2c4e65] uppercase block">
          Exclusive Sea Celebrations
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 tracking-wide leading-tight">
          Private Yacht Charter
        </h2>
        <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed max-w-xl mx-auto">
          WakaSailing is available for limited and exclusive, luxury private
          charter to celebrate your special occasions: Wedding Anniversary,
          Birthday, a family reunion or a corporate retreat. Time on board is
          entirely tailored to suit you. Our Captain and crew will take care of
          both your safety and comfort on your exclusive private tour.
        </p>
      </section>

      {/* SECTION 2: CHARTER CARDS LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {charterOptions.map((option) => (
          <div
            key={option.id}
            className="group bg-white border border-neutral-200/60 rounded-xs p-8 md:p-10 text-left flex flex-col justify-between h-full hover:shadow-xl hover:border-neutral-300/80 transition-all duration-500 relative overflow-hidden"
          >
            {/* Top Border Indicator Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#2c4e65] transition-colors duration-500" />

            <div className="space-y-6">
              {/* Header Card */}
              <div className="space-y-2 border-b border-neutral-100 pb-5">
                <span className="text-[9px] font-mono tracking-wider text-[#2c4e65] uppercase font-bold block">
                  {option.subtitle}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-light text-neutral-900 tracking-wide flex items-center">
                  {option.title}
                </h3>

                {/* Pricing Block */}
                <div className="pt-2 space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-mono font-medium text-neutral-900">
                      {option.price}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {option.unit}
                    </span>
                  </div>

                  {option.additionalPrice && (
                    <div className="flex items-baseline gap-1 border-t border-neutral-100/60 pt-1.5 mt-1">
                      <span className="text-lg font-mono font-medium text-neutral-800">
                        {option.additionalPrice}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500">
                        {option.additionalUnit}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tax Note */}
                <div className="pt-1">
                  <span className="text-[9px] font-mono text-neutral-400 italic block leading-relaxed">
                    * {option.taxNote}
                  </span>
                </div>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3">
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  Charter Inclusions:
                </h4>
                <ul className="space-y-3.5 pl-1">
                  {option.inclusions.map((inclusion, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-neutral-600 font-light leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-[#2c4e65] font-semibold text-sm leading-none mt-[2px]">
                        •
                      </span>
                      <span>{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button per Card */}
            <div className="mt-10 pt-6 border-t border-neutral-100">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-neutral-900 text-white text-[10px] font-mono uppercase tracking-widest text-center py-3.5 rounded-2xs hover:bg-[#2c4e65] transition-colors duration-300"
              >
                Inquire Private Charter
              </motion.button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
