"use client";

import React, { useState } from "react";

interface FacilitiesSpaTabProps {
  setLightboxImage: (img: string) => void;
}

export default function FacilitiesSpaTab({
  setLightboxImage,
}: FacilitiesSpaTabProps) {
  // Mengatur default tab aktif ke fasilitas pertama
  const [activeTab, setActiveTab] = useState("waka-spa");

  const facilitiesData = [
    {
      id: "waka-spa",
      title: "Waka Spa",
      tagline: "Island Spa Culture",
      description:
        "Waka Spa reflects the timeless tradition of the island’s spa culture. Atmospheric and fragrant, the spa offers a host of holistic treatments with elements of the earth, the sand and the sea.",
      image: "img/wakaGangga/spa1.jpg",
    },
    {
      id: "waka-bar-restaurant",
      title: "Waka Bar & Restaurant",
      tagline: "Oceanfront Culinary Venue",
      description:
        "Situated directly on Gangga Beach with uninterrupted ocean views, the restaurant seats 60 guests for Breakfast, Lunch and Dinner. Open daily from 7 am to 11 pm.",
      image: "img/wakaGangga/resto1.jpg",
    },
    {
      id: "main-swimming-pool",
      title: "Main Swimming Pool",
      tagline: "Beachfront Infinity Edge",
      description:
        "Settled on the manicured beachfront lawn, the resort 20 meter long main swimming pool offers beautiful sea view at Gangga Beach, Tabanan, Bali. The pool deck has sun-loungers and Balinese temple umbrellas for shade. Chilled beverages, tropical cocktails and light meal are available throughout the day.",
      image: "img/wakaGangga/pool1.jpg",
    },
    {
      id: "gymnasium",
      title: "Gymnasium",
      tagline: "24-Hour Wellness Hub",
      description:
        "Gym 24 hours access located in the Waka Spa, the Gymnasium is equipped with a treadmill, a cross trainer, a bicycle, a weight training station, dumb-bells and floor exercise mats.",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200",
    },
    {
      id: "amphitheatre",
      title: "Amphitheatre",
      tagline: "Beachfront Cultural Pavilion",
      description:
        "At the open-air Amphitheatre situated on the beachfront, Balinese traditional dance performances are frequently held for the resort guest. This is also a popular venue for intimate weddings and receptions with colorful Balinese sunsets and the rolling surf on the beach as the backdrop.",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200",
    },
    {
      id: "waka-gallery",
      title: "Waka Gallery",
      tagline: "Curated Resort Boutique",
      description:
        "Waka Gallery is a lifestyle boutique in the resort for resort wear, local handicrafts, jewelry, and gift items.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    },
    {
      id: "library-lounge",
      title: "Library Lounge",
      tagline: "Quiet Intellectual Space",
      description:
        "Library Lounge for reference books, board games and a work station for emails and internet access.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200",
    },
    {
      id: "beachfront-lawn",
      title: "Beachfront Lawn",
      tagline: "Peaceful Coastal Oasis",
      description:
        "The resort’s lush green lawn, dotted with coconut trees, offers a peaceful oasis between the swimming pool and the beach for sun-bathing, reading and re-charging with relaxing sound of the crashing surf on the beach.",
      image: "img/wakaGangga/beach1.jpg",
    },
  ];

  const complimentaryServices = [
    "Daily shuttle service to Tanah Lot temple, Echo beach and Seminyak / Petitenget areas",
    "Daily Balinese afternoon tea with local snacks at Waka Bar & Restaurant",
    "Library of books",
    "Access to fully-equipped gymnasium with stunning ocean views",
    "WiFi internet access throughout the resort",
    "Concierge services",
    "Balinese cultural activities of making “canang” – temple offerings and kites",
    "Late check-out until 6pm, subject to availability",
  ];

  // Mencari data item yang sedang aktif berdasarkan id
  const activeItem =
    facilitiesData.find((item) => item.id === activeTab) || facilitiesData[0];

  return (
    <div className="max-w-6xl mx-auto space-y-24">
      {/* CREATIVE DYNAMIC INTERACTIVE LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: LIST & DESCRIPTION */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2 border-b border-neutral-200 pb-4">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#556b2f] uppercase">
              Resort Experience
            </span>
            <h2 className="font-serif text-3xl text-neutral-900 font-light tracking-wide">
              Sanctuary & Facilities
            </h2>
          </div>

          <div className="space-y-4">
            {facilitiesData.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)} // Berubah saat kursor lewat
                onClick={() => setActiveTab(item.id)} // Berubah saat di-klik (untuk Mobile/Tablet)
                className={`group cursor-pointer border-l-2 pl-4 transition-all duration-350 ${
                  activeTab === item.id
                    ? "border-[#556b2f] bg-neutral-50/70 py-3"
                    : "border-neutral-100 hover:border-neutral-300 py-2"
                }`}
              >
                <span className="text-[9px] font-mono tracking-wider text-neutral-400 uppercase block mb-0.5">
                  {item.tagline}
                </span>
                <h4
                  className={`font-serif text-base tracking-wide transition-colors ${
                    activeTab === item.id
                      ? "text-[#556b2f] font-medium"
                      : "text-neutral-700 group-hover:text-neutral-900"
                  }`}
                >
                  {item.title}
                </h4>

                {/* Deskripsi otomatis terbuka hanya pada item yang di-hover */}
                {activeTab === item.id && (
                  <p className="text-xs text-neutral-500 font-light mt-2 leading-relaxed animate-[fadeIn_0.4s_ease-out]">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: SINGLE STICKY DYNAMIC IMAGE */}
        <div className="lg:col-span-7 lg:sticky lg:top-36">
          <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden rounded-2xs group shadow-md transition-all duration-500">
            {/* 
              Penggunaan 'key={activeItem.id}' di bawah ini wajib agar React 
              merender ulang tag <img> dan memicu animasi fade-in setiap kali gambar berganti.
            */}
            <img
              key={activeItem.id}
              src={activeItem.image}
              alt={activeItem.title}
              onClick={() => setLightboxImage(activeItem.image)}
              className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 ease-out group-hover:scale-103 animate-[fadeIn_0.5s_ease-out_forwards]"
            />

            {/* Label tipis estetis di pojok kanan bawah gambar */}
            <div className="absolute bottom-4 right-4 bg-neutral-900/60 backdrop-blur-xs px-3 py-1.5 rounded-3xs border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
              <p className="text-[9px] font-mono text-white tracking-widest uppercase">
                Click to expand visual
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION: COMPLIMENTARY RESORT SERVICES GRID */}
      <div className="border-t border-neutral-200/60 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#556b2f] uppercase block">
            Inclusions
          </span>
          <h3 className="font-serif text-2xl text-neutral-900 font-light tracking-wide">
            Complimentary Resort Services
          </h3>
          <p className="text-xs text-neutral-400 font-light">
            Thoughtful details crafted to ensure a seamless and enriching
            Balinese holiday experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complimentaryServices.map((service, index) => (
            <div
              key={index}
              className="p-5 border border-neutral-100 rounded-2xs bg-neutral-50/50 hover:bg-white hover:shadow-xs transition-all duration-300 flex items-start gap-3.5 group"
            >
              <div className="w-5 h-5 rounded-full bg-[#556b2f]/10 flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-[#556b2f]">
                <svg
                  className="w-2.5 h-2.5 text-[#556b2f] transition-colors group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-xs text-neutral-600 font-light leading-relaxed group-hover:text-neutral-900 transition-colors">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
