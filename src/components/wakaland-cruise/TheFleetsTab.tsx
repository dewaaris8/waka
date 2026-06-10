"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TheFleetsTab() {
  const [activePolicy, setActivePolicy] = useState<number | null>(null);

  // Data Paket Day Trip
  const dayTrips = [
    {
      id: "jatiluwih",
      title: "Jatiluwih Emerald Expedition",
      tagline: "UNESCO World Heritage Safari",
      description:
        "Traverse deep into the majestic rice terraces of Jatiluwih. Wind through ancient farming villages, witness the traditional Subak irrigation ecosystem, and enjoy an authentic gourmet lunch at our private rainforest outpost.",
      image: "img/wakaLand/hero2.jpg",
      inclusions: [
        "Premium 4x4 Transfer",
        "Local Ricefield Guide",
        "Organic Forest Lunch",
        "All Entrance Credentials",
      ],
    },
    {
      id: "kintamani",
      title: "Kintamani Volcanic Ridge",
      tagline: "Highland & Batur Caldera Cruise",
      description:
        "Ascend toward the dramatic volcanic rim of Mount Batur. Drive along rugged stone quarries, feel the crisp mountain breeze, and explore hidden century-old temples tucked away in the misty Balinese highlands.",
      image: "img/wakaLand/hero3.jpg",
      inclusions: [
        "Private Defender Vessel",
        "Caldera Ridge Trekking",
        "Highland Buffet Dining",
        "Refreshment Basket",
      ],
    },
  ];

  // Data Kebijakan (Policies)
  const policies = [
    {
      title: "Cancellation & Amendment Policy",
      content:
        "Cancellations made up to 48 hours prior to the scheduled departure time will receive a full 100% refund. Cancellations inside 24 to 48 hours are subject to a 50% charge. Regrettably, no-shows or cancellations made less than 24 hours before the cruise departure are non-refundable. Amendments to dates are permitted free of charge subject to vehicle availability.",
    },
    {
      title: "Children & Age Guidelines",
      content:
        "For safety and comfort over off-road terrains, children under 3 years old are recommended for private charter options only. Children aged 3 to 11 receive a tailored junior rate which includes customized child meals and dedicated safety booster seating inside our Land Rover Defenders.",
    },
  ];

  return (
    <div className="space-y-36 max-w-6xl mx-auto py-8">
      {/* SECTION 1: THE FLEETS (Editorial Split Frame) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Aspect: The Iconic Vehicle Image */}
        <div className="lg:col-span-7 relative aspect-[16/10] bg-neutral-900 rounded-2xs overflow-hidden group shadow-xs">
          {/* Ganti dengan gambar Land Rover Defender Waka Land Cruise */}
          <img
            src="img/wakaLand/hero1.jpg"
            alt="Waka Land Rover Defender Fleet"
            className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-[1.5s] ease-out"
          />
        </div>

        {/* Right Aspect: Narrative Copywriting */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#2b4c3f] uppercase block">
              The Vessel Fleet
            </span>
            <h2 className="font-serif text-3xl font-light text-neutral-900 tracking-wide leading-tight">
              The Legendary Land Rover Defenders
            </h2>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
            <p>
              Our fleet consists of the state-of-the-art{" "}
              <strong className="text-neutral-800 font-medium">
                New Land Rover Defender
              </strong>{" "}
              and impeccably restored{" "}
              <strong className="text-neutral-800 font-medium">
                Classic Land Rover Defenders
              </strong>
              , custom-tailored for exclusive day trips and private charters.
            </p>
            <p>
              As the ultimate epitome of ruggedness, strength, and safety, the
              mighty Defender is engineered to reach places standard vehicles
              dare not tread. With three spacious rows of forward-facing seats
              and signature{" "}
              <strong className="text-neutral-800 font-medium">
                ‘skylight’ Alpine-style roof windows
              </strong>
              , intimate groups of families and friends can experience the
              traditional, unvarnished beauty of Bali in absolute comfort.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: DAY TRIPS (Asymmetrical Card Rows) */}
      <section className="space-y-16">
        <div className="text-center space-y-1">
          <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-neutral-400 uppercase block">
            Curated Journeys
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide">
            Signature Day Expeditions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {dayTrips.map((trip) => (
            <div
              key={trip.id}
              className="group bg-white border border-neutral-200/60 rounded-xs overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-500"
            >
              {/* Trip Image Canvas */}
              <div className="aspect-[16/10] overflow-hidden bg-neutral-900 relative">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-103 group-hover:opacity-100 transition-all duration-[1s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent" />
              </div>

              {/* Trip Metadata & Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow text-left space-y-6">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono tracking-wider text-[#2b4c3f] uppercase block font-semibold">
                    {trip.tagline}
                  </span>
                  <h3 className="font-serif text-xl font-light text-neutral-900 tracking-wide group-hover:text-neutral-950 transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed pt-1">
                    {trip.description}
                  </p>
                </div>

                {/* Expedition Inclusions Tags */}
                <div className="pt-4 border-t border-neutral-100 space-y-2">
                  <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 block">
                    Expedition Package Includes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {trip.inclusions.map((inc, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono text-neutral-600 bg-neutral-50 border border-neutral-200/50 px-2.5 py-1 rounded-2xs"
                      >
                        ✓ {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: POLICIES & GUIDELINES (Minimalist Fine-Print Accordion) */}
      <section className="max-w-3xl mx-auto border-t border-neutral-200/60 ">
        <div className="text-left mb-8 space-y-1">
          <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#2b4c3f] uppercase block">
            Terms & Guidelines
          </span>
          <h2 className="font-serif text-xl md:text-2xl font-light text-neutral-900 tracking-wide">
            Expedition Policy Notes
          </h2>
        </div>

        <div className="space-y-2">
          {policies.map((policy, idx) => {
            const isOpen = activePolicy === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200/60 rounded-xs bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActivePolicy(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left p-5 focus:outline-none group cursor-pointer"
                >
                  <span className="font-serif text-sm tracking-wide text-neutral-800 group-hover:text-[#2b4c3f] transition-colors font-medium">
                    {policy.title}
                  </span>
                  <span
                    className={`text-xs transform transition-transform duration-300 text-neutral-400 ${isOpen ? "rotate-45 text-[#2b4c3f]" : ""}`}
                  >
                    ＋
                  </span>
                </button>

                {/* Content Reveal Height Animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[200px] border-t border-neutral-100"
                      : "max-h-0"
                  }`}
                >
                  <div className="p-5 text-xs text-neutral-500 font-light leading-relaxed bg-neutral-50/50">
                    {policy.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
