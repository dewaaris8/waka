"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivateCharterTab() {
  const charterOptions = [
    {
      id: "regular-charter",
      title: "Regular Charter",
      price: "USD 450",
      unit: "/ Land Rover",
      capacity: "Maximum 4 persons",
      taxNote: "",
      inclusions: [
        "Return transfer by Land Rovers",
        "Flexible departure time from hotel until 10 AM",
        "Mineral water during the journey",
        "Visit to an ancient sand stone quarry & traditional Balinese farm house",
        "Option for 30 minutes soft trekking through the rice fields",
        "Interactive session learning to make 'canang'",
        "Trip high into the mountains through the UNESCO-recognized rice terraces of Jatiluwih",
        "Excursion visit to Batukaru temple",
        "Morning tea/coffee & traditional Balinese snacks at a Bali farm house",
        "Memorable photos with the Balinese family",
        "Lunch with Balinese specialties (inc. complimentary soft drinks, wines, beer, tea or Balinese coffee) at Bamboo Forest Restaurant on the slopes of Mt. Batukaru",
        "Comprehensive insurance coverage by CHUBB Insurance",
      ],
    },
    {
      id: "intimate-journey",
      title: "Intimate Journey to The Secret Soul of Bali",
      price: "USD 375",
      unit: "/ Land Rover",
      capacity: "Exclusively for Couples",
      taxNote: "Subject to 21% tax and service charge",
      inclusions: [
        "Return transfer by Land Rovers",
        "Flexible departure time from hotel until up to 10 AM",
        "Mineral water during the journey",
        "Visit to an ancient sand stone quarry & traditional Balinese farm house",
        "Option for 30 minutes soft trekking through the rice fields",
        "Interactive session learning to make 'canang'",
        "Trip high into the mountains through the UNESCO-recognized rice terraces of Jatiluwih",
        "Excursion visit to Batukaru temple",
        "Morning tea/coffee & traditional Balinese snacks at Balinese farm house",
        "Memorable picture with the Balinese family",
        "Lunch with Balinese specialties (inc. complimentary soft drinks, wines, beer, tea or Balinese coffee) at Bamboo Forest Restaurant on the slopes of Mt. Batukaru",
        "A bottle of local wine served during lunch time",
        "Exclusive Cruise Memento",
        "Complimentary German or French speaking guide (Subject to availability on the day of journey)",
        "Comprehensive insurance coverage by CHUBB Insurance",
      ],
    },
  ];

  return (
    <div className="space-y-24 max-w-6xl mx-auto py-4">
      {/* SECTION 1: EDITORIAL HEADER */}
      <section className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#2b4c3f] uppercase block">
          Bespoke Expeditions
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 tracking-wide leading-tight">
          Private Charter Services
        </h2>
        <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed max-w-xl mx-auto">
          Command your own legendary four-wheel drive vessel. Step completely
          outside the traditional tourist grid and chart the uncharted paths of
          Bali at your own pace.
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
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#2b4c3f] transition-colors duration-500" />

            <div className="space-y-6">
              {/* Header Card */}
              <div className="space-y-2 border-b border-neutral-100 pb-5">
                <h3 className="font-serif text-xl md:text-2xl font-light text-neutral-900 tracking-wide min-h-[56px] flex items-center">
                  {option.title}
                </h3>

                {/* Pricing Block */}
                <div className="pt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-mono font-medium text-neutral-900">
                    {option.price}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {option.unit}
                  </span>
                </div>

                {/* Capacity & Tax Badges */}
                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#2b4c3f] font-semibold">
                    {option.capacity}
                  </span>
                  {option.taxNote && (
                    <span className="text-[9px] font-mono text-neutral-400 italic">
                      * {option.taxNote}
                    </span>
                  )}
                </div>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3">
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  Package Inclusions:
                </h4>
                <ul className="space-y-3.5 pl-1">
                  {option.inclusions.map((inclusion, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-neutral-600 font-light leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-[#2b4c3f] font-semibold text-sm leading-none mt-[2px]">
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
                className="w-full bg-neutral-900 text-white text-[10px] font-mono uppercase tracking-widest text-center py-3.5 rounded-2xs hover:bg-[#2b4c3f] transition-colors duration-300"
              >
                Inquire This Charter
              </motion.button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
