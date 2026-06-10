"use client";

import React, { useState } from "react";

interface RoomsTabProps {
  setLightboxImage: (img: string) => void;
}

export default function RoomsTab({ setLightboxImage }: RoomsTabProps) {
  // State untuk melacak kamar mana yang sedang di-hover/aktif
  const [activeRoom, setActiveRoom] = useState("lanai-cottage");

  const roomsData = [
    {
      id: "lanai-cottage",
      title: "Lanai Cottage",
      tagline: "Traditional Heritage Cottage",
      description:
        "The 14 stand alone air-conditioned Lanai Cottages offer all modern comforts set in a natural forest environment with magnificent views of the jungle or ocean from the private balcony of each cottage",
      heroImage: "img/nusaBay/room1.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600",
      ],
      specs: [
        // { label: "Bedding Layout", value: "King Bed or Twin Sharing Options" },
        // {
        //   label: "View Frame",
        //   value: "Balcony overlooking the jungle or ocean",
        // },
        // {
        //   label: "Max Occupancy",
        //   value: "2 Adults + 1 Child (under 12 years old)",
        // },
      ],
    },
    {
      id: "beachfront-villa",
      title: "Private Beachfront Villa",
      tagline: "Exclusive Waterfront Sanctuary",
      description:
        "Two beachfront Villas, in addition to Lanai Cottages facilities, have a private courtyard with direct beach access and a Gazebo (Bale) – a traditional pavilion, overlooking the ocean for lounging.",
      heroImage:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
      ],
      specs: [
        // { label: "Bedding Layout", value: "Master King-size Canopy Bed" },
        // {
        //   label: "View Frame",
        //   value: "Direct Beachfront & Menjangan Island Vista",
        // },
        // { label: "Max Occupancy", value: "3 Adults or 2 Adults + 2 Children" },
      ],
    },
  ];

  const coreAmenities = [
    "Balcony overlooking the jungle or ocean",
    "Refrigerated mini bar",
    "Individually controlled air-conditioning",
    "In-room electronic safety box",
    "Bathrobes and slippers",
    "Twice-daily Housekeeping service",
    "No smoking policy in rooms",
    "Mosquito net and repellant",
    "Luggage box",
  ];

  const stayPolicies = [
    { label: "Check-In Time", value: "From 02:00 PM " },
    { label: "Check-Out Time", value: "Until 12:00 PM " },
    {
      label: "Early Arrivals & Late Departures",
      value:
        "Early check in is subject to availability of rooms on the day of arrival and confirmation by the hotel. We shall accommodate the guests’ late departure request until 03.00 PM, free of charge. For departures between 03.00 PM and 06.00 PM 50% of the daily room rate and for departures after 06.00 PM, full day’s room rate will apply.",
    },
    {
      label: "Family & Children Suitability Note",
      value:
        "NusaBay Menjangan by WHM is not considered suitable for families with infants and children below the age of two years, due to the resort’s remote location in a Jungle environment, which can be accessed only by a 25-minute boat ride across Kotal Bay.",
    },
  ];

  const cancellationPolicies = [
    {
      season: "Low Season Period (1st Nov – 24th Dec & 6th Jan – 31st Mar)",
      rules:
        "Cancellation received 3 days prior arrival: fully refunded. Within 2 days: 1-night charge. One day prior or no show: full stay charge.",
    },
    {
      season:
        "Shoulder Season Period (1st Apr – 14th Jul & 25th Aug – 31st Oct)",
      rules:
        "Cancellation received 3 days prior arrival: fully refunded. Within 2 days: 1-night charge. One day prior or no show: full stay charge.",
    },
    {
      season:
        "High Season Period (15th Jul – 24th August & 25th Dec – 5th Jan)",
      rules:
        "Cancellation received 7 days prior arrival: fully refunded. Within 3 to 6 days: 1-night charge. One day prior or no show: full stay charge.",
    },
  ];

  // Mendapatkan data kamar yang sedang aktif di-hover
  const currentActiveRoomData =
    roomsData.find((r) => r.id === activeRoom) || roomsData[0];

  return (
    <div className="max-w-6xl mx-auto space-y-24">
      {/* SECTION 1: INTERACTIVE ROOMS OVERVIEW (HOVER SYSTEM) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: ROOM DETAILS & SPECIFICATIONS */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-2 border-b border-neutral-200 pb-4">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#3e80a2] uppercase">
              Our Sanctuary
            </span>
            <h2 className="font-serif text-3xl text-neutral-900 font-light tracking-wide">
              Accommodations
            </h2>
          </div>

          <div className="space-y-6">
            {roomsData.map((room) => (
              <div
                key={room.id}
                onMouseEnter={() => setActiveRoom(room.id)}
                onClick={() => setActiveRoom(room.id)}
                className={`group cursor-pointer border-l-2 pl-5 transition-all duration-350 ${
                  activeRoom === room.id
                    ? "border-[#3e80a2] bg-neutral-50/80 py-4 rounded-r-xs"
                    : "border-neutral-100 hover:border-neutral-300 py-3"
                }`}
              >
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase block mb-1">
                  {room.tagline}
                </span>
                <h3
                  className={`font-serif text-xl tracking-wide transition-colors ${
                    activeRoom === room.id
                      ? "text-[#3e80a2] font-normal"
                      : "text-neutral-700 group-hover:text-neutral-900"
                  }`}
                >
                  {room.title}
                </h3>

                {activeRoom === room.id && (
                  <div className="mt-3 space-y-4 animate-[fadeIn_0.4s_ease-out_forwards]">
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {room.description}
                    </p>

                    {/* Inline Quick Specs (Bukan Dropdown) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-neutral-200/50">
                      {room.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <span className="text-[8px] font-mono uppercase text-neutral-400 tracking-wider block">
                            {/* {spec.label} */}
                          </span>
                          <span className="text-[10px] text-neutral-700 font-medium block leading-tight">
                            {/* {spec.value} */}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: DYNAMIC FIXED IMAGE VISUAL + GALLERY SUB-CONTAINER */}
        <div className="lg:col-span-6 lg:sticky lg:top-36 space-y-4">
          <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden rounded-2xs group shadow-md">
            <img
              key={currentActiveRoomData.id}
              src={currentActiveRoomData.heroImage}
              alt={currentActiveRoomData.title}
              onClick={() => setLightboxImage(currentActiveRoomData.heroImage)}
              className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-103 animate-[fadeIn_0.5s_ease-out]"
            />
          </div>

          {/* Mini Gallery Track */}
          <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
            {currentActiveRoomData.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(imgSrc)}
                className="w-[24%] min-w-[100px] aspect-[4/3] bg-neutral-100 rounded-3xs relative overflow-hidden cursor-zoom-in group/thumb shadow-2xs shrink-0"
              >
                <img
                  src={imgSrc}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: SERVICES & AMENITIES GRID */}
      <div className="border-t border-neutral-200/60 pt-16">
        <div className="max-w-xl mb-10 space-y-1">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#3e80a2] uppercase block">
            Convenience
          </span>
          <h3 className="font-serif text-2xl text-neutral-900 font-light tracking-wide">
            Services & Amenities
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {coreAmenities.map((amenity, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 py-2 border-b border-neutral-100 last:border-b-0 sm:last:border-b"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e80a2]" />
              <span className="text-xs text-neutral-600 font-light tracking-wide">
                {amenity}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: RESORT POLICIES & RESERVATION RULES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/60 pt-16">
        {/* POLICIES & CHECK-IN */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#3e80a2] uppercase block">
              Stay Guides
            </span>
            <h3 className="font-serif text-2xl text-neutral-900 font-light tracking-wide">
              Check-In / Out & Policies
            </h3>
          </div>

          <div className="space-y-4">
            {stayPolicies.map((policy, pIdx) => (
              <div
                key={pIdx}
                className="p-4 bg-neutral-50/60 border border-neutral-200/40 rounded-2xs space-y-1.5"
              >
                <span className="text-[10px] font-mono font-semibold text-neutral-800 uppercase tracking-wider block">
                  {policy.label}
                </span>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {policy.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RESERVATION GUARANTEE & BANKING DETAILS */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#3e80a2] uppercase block">
              Financial
            </span>
            <h3 className="font-serif text-2xl text-neutral-900 font-light tracking-wide">
              Guarantee & Cancellation
            </h3>
          </div>

          <div className="space-y-4 text-xs text-neutral-500 font-light leading-relaxed">
            <div className="p-4 bg-[#3e80a2] text-neutral-200 rounded-2xs space-y-2">
              <span className="text-[9px] font-mono tracking-widest  uppercase block">
                Reservation Guarantee
              </span>
              <p className="text-xs font-serif italic text-white">
                "One night deposit is required to guarantee all room
                reservations."
              </p>
            </div>

            {/* Seasonal Rules */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-semibold text-neutral-800 uppercase tracking-wider block">
                Cancellation Schedule Rules
              </span>
              {cancellationPolicies.map((item, cIdx) => (
                <div
                  key={cIdx}
                  className="border-l-2 border-neutral-200 pl-3 py-0.5"
                >
                  <h5 className="text-[11px] font-medium text-neutral-700">
                    {item.season}
                  </h5>
                  <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                    {item.rules}
                  </p>
                </div>
              ))}
            </div>

            {/* Bank Transfer Details */}
            <div className="pt-4 border-t border-neutral-200/60 space-y-3">
              <div>
                <span className="text-[10px] font-mono font-semibold text-neutral-800 uppercase tracking-wider block mb-2">
                  Payment Method & Bank Transfer Details
                </span>
                <p className="text-[11px] text-neutral-400 mb-3">
                  We accept payment by VISA, Master Cards, AMEX, and JCB.
                  Alternatively, bank transfer can be sent to:
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 bg-neutral-50 p-4 border border-neutral-100 rounded-2xs font-mono text-[10px]">
                <div>
                  <span className="text-neutral-400 block">Bank Name</span>
                  <span className="text-neutral-700 font-semibold">
                    BANK RAKYAT INDONESIA
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 block">
                    Swift Code / BIC
                  </span>
                  <span className="text-neutral-700 font-semibold">
                    BRINIDJA
                  </span>
                </div>
                <div className="col-span-2 border-t border-neutral-200/40 pt-2 mt-1">
                  <span className="text-neutral-400 block">Bank Address</span>
                  <span className="text-neutral-700 leading-tight block">
                    Jalan Dr. Kusuma Atmaja No. 1 Renon, Denpasar 80226, Bali,
                    Indonesia
                  </span>
                </div>
                <div className="col-span-2 border-t border-neutral-200/40 pt-2 mt-1">
                  <span className="text-neutral-400 block">Account Name</span>
                  <span className="text-neutral-700 font-semibold block">
                    PT. Shorea Barito Wisata
                  </span>
                </div>
                <div className="col-span-2 border-t border-neutral-200/40 pt-2">
                  <span className="text-neutral-400 block">
                    Account Number (IDR)
                  </span>
                  <span className="text-xl tracking-wider text-[#3e80a2] font-bold block mt-0.5">
                    0368-01-000-54-33-09
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
