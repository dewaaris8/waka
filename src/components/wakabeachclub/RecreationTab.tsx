"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RecreationTab() {
  const inclusions = [
    "Return land hotel transport (Sanur, Nusa Dua, Legian, Seminyak, Denpasar)",
    "Return fast boat transfer from Sanur Beach to Lembongan Island (30 mins)",
    "Ocean activities: Snorkeling, Banana Boat & Donut Rides",
    "Island tour to Devil’s Tears & Dream Beach",
    "Beachfront BBQ lunch with 1 soft drink & pouring water at WakaBeachClub",
    "Welcome drink, towel, shower and toilet facilities access",
    "Insurance coverage",
  ];

  return (
    <div className="space-y-24 text-left">
      {/* SECTION 1: SUN TANNING & OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#bca986] font-bold block">
            Leisure & Relaxation
          </span>
          <h3 className="text-3xl font-serif font-light text-neutral-900 leading-tight">
            Sun Tanning & Coastal Serenity
          </h3>
          <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
            The pristine tropical gardens and expansive wooden decks surrounding
            our swimming pool, paired with the powdery white sands of Jungut
            Batu Beach, provide the perfect, idyllic setting for sun tanning and
            soaking up the island warmth.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[250px] md:h-[320px]">
          <div className="rounded-xs overflow-hidden bg-neutral-100">
            <img
              src="img/wakaBeach/hero1.jpg"
              alt="Sun tanning deck"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xs overflow-hidden bg-neutral-100 translate-y-6">
            <img
              src="img/wakaBeach/hero2.jpg"
              alt="Jungut Batu Beach view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: DAY TRIP PACKAGE */}
      <div className="border-t border-neutral-100 pt-16 space-y-12">
        <div className="max-w-3xl">
          <span className="text-[9px] uppercase tracking-[0.3em] text-amber-700 font-bold block mb-2">
            Exclusive Experience
          </span>
          <h3 className="text-3xl font-serif font-light text-neutral-900 leading-tight">
            Getaway Day Trip to Lembongan Island
          </h3>
          <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed mt-3">
            Embark on a short, scenic 30-minute fast boat journey from Sanur
            Beach to Jungut Batu. Enjoy thrilling ocean adventures including
            snorkeling, banana boat, and donut rides, followed by a guided
            island excursion to the iconic Devil’s Tears and Dream Beach. Spend
            your afternoon swimming at WakaBeachClub while a sumptuous
            beachfront BBQ lunch is served in our open-air tiered Joglo
            restaurant.
          </p>
        </div>

        {/* PRICING & INCLUSIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SISI KIRI: CARDS HARGA & INCLUSIONS */}
          <div className="lg:col-span-8 space-y-8">
            {/* Rates Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-6 rounded-xs border border-neutral-200/50">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono block">
                  Adult Rate
                </span>
                <span className="text-2xl font-serif text-[#bca986] mt-1 block">
                  IDR 950,000{" "}
                  <span className="text-xs text-neutral-400 font-sans">
                    / pax
                  </span>
                </span>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xs border border-neutral-200/50">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono block">
                  Children Rate
                </span>
                <span className="text-2xl font-serif text-[#bca986] mt-1 block">
                  IDR 700,000{" "}
                  <span className="text-xs text-neutral-400 font-sans">
                    / pax
                  </span>
                </span>
              </div>
            </div>

            {/* Inclusions List */}
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-widest text-neutral-800 font-bold">
                Package Inclusions:
              </h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {inclusions.map((inc, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs text-neutral-600 font-light leading-normal"
                  >
                    <span className="text-[#bca986] mt-0.5">✦</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SISI KANAN: POLICY & TERMS */}
          <div className="lg:col-span-4 bg-neutral-50 border border-neutral-100 p-6 md:p-8 rounded-xs space-y-6 text-[11px] md:text-xs">
            <div className="space-y-3">
              <h5 className="uppercase tracking-wider font-bold text-neutral-800 border-b border-neutral-200 pb-1.5">
                Terms & Conditions
              </h5>
              <ul className="space-y-2 text-neutral-500 font-light list-disc pl-4 leading-relaxed">
                <li>1 day prior booking required.</li>
                <li>The price includes 17% tax & service charge.</li>
                <li>Not combinable with other promotions or special offers.</li>
                <li>
                  Government’s Lembongan Island Visitor’s Levy will be paid
                  directly by the guests upon arrival.
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h5 className="uppercase tracking-wider font-bold text-neutral-800 border-b border-neutral-200 pb-1.5">
                Cancellation Policy
              </h5>
              <div className="space-y-2 text-neutral-500 font-light leading-relaxed">
                <p>
                  <strong className="font-medium text-neutral-700">FIT:</strong>{" "}
                  50% charge for cancellation within 1 day before; full charge
                  applies for no-shows.
                </p>
                <p>
                  <strong className="font-medium text-neutral-700">
                    Group:
                  </strong>{" "}
                  50% charge for cancellation within 3 days before; full charge
                  applies for no-shows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
