"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Data Dummy Promo untuk simulasi interaktif saat menu kiri diklik
const PROMO_DATA = [
  {
    id: "honeymoon",
    title: "HONEYMOON PACKAGE",
    price: "USD 358",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
    inclusions: [
      "3D2N stay in a Villa Garden View for two persons",
      "Daily American breakfast at Waka Bar & Restaurant for two persons",
      "Daily Balinese afternoon tea at Waka Bar & Restaurant for two persons",
      "1x traditional Balinese massage at Waka Spa for two persons",
      "Honeymoon amenities: Honeymoon cake and flower arrangement in room upon check in",
    ],
    terms: [
      "Minimum two nights stay in a Villa Garden view",
      "Valid until 31st March 2027",
      "Upgrade to a Villa with private swimming pool at a surcharge of USD 45 per night",
      "High season surcharge of USD 35 per night applicable from 15th July - 24th August 2026 and 20th December 2026 - 5th January 2027",
      "Rates include 21% tax & service charge",
      "Not combinable with other promotion or special offer",
    ],
  },
  {
    id: "cleansing",
    title: "Cleansing Rituals: A Melukat Escape",
    price: "IDR 3.900.000",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800",
    inclusions: ["Balinese Melukat Ceremony", "Stay at Luxury Villa"],
    terms: ["Valid for Indonesian citizens & KITAS holder"],
  },
  {
    id: "family",
    title: "Family Package",
    price: "USD 450",
    image:
      "https://images.unsplash.com/photo-1505080856163-267d49b30626?q=80&w=800",
    inclusions: ["Extra bed for children", "Daily breakfast for 3 persons"],
    terms: ["Minimum 2 nights stay"],
  },
  {
    id: "fitness",
    title: "Fitness Membership",
    price: "IDR 1.200.000",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    inclusions: ["Gym access", "Pool access"],
    terms: ["Monthly subscription"],
  },
  {
    id: "more-nights",
    title: "More Nights, More Memories",
    price: "USD 500",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800",
    inclusions: ["Stay 4 nights pay 3", "Free airport transfer"],
    terms: ["Non-refundable"],
  },
  {
    id: "spa",
    title: "Spa Indulgence",
    price: "USD 120",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    inclusions: ["2 Hours full body spa treatment"],
    terms: ["Advance booking required"],
  },
];

export default function WakaGanggaPromoPage() {
  // State untuk mengontrol promo mana yang sedang aktif ditampilkan di kanan
  const [activePromo, setActivePromo] = useState(PROMO_DATA[0]);

  return (
    <div className="theme-gangga min-h-screen bg-white text-neutral-800 font-sans antialiased">
      {/* 1. Header Navigation */}
      <Header  />

      {/* 2. Hero Property Banner (Lebih pendek dari Home Page, sesuai gambar) */}
      <section className="relative h-[40vh] md:h-[50vh] bg-neutral-900 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600')`,
          }}
        />
        {/* Sub-property selection inline badges on top of banner */}
        <div className="absolute inset-x-0 bottom-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-white/80 font-medium tracking-wider px-4 text-center">
          <span className="hover:text-white cursor-pointer transition">
            Waka Hotels & Resorts
          </span>
          <span>•</span>
          <span className="text-white font-bold underline decoration-waka-light underline-offset-4">
            WakaGangga
          </span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition">
            WakaNusaBay
          </span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition">
            WakaBeachClub
          </span>
        </div>
      </section>

      {/* 3. Main Split Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* SISI KIRI: Sidebar Pilihan Promo (3/12 Kolon) */}
          <aside className="lg:col-span-4 border-l border-neutral-100 pl-0 lg:pl-2 space-y-0.5">
            <div className="hidden lg:block text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase pb-4 px-3">
              Available Offers
            </div>
            <nav className="flex flex-col">
              {PROMO_DATA.map((promo) => (
                <button
                  key={promo.id}
                  onClick={() => setActivePromo(promo)}
                  className={`w-full text-left px-4 py-3 text-xs md:text-sm tracking-wide border-b border-neutral-100 transition-all duration-200 cursor-pointer ${
                    activePromo.id === promo.id
                      ? "text-waka-dark font-bold bg-neutral-50 border-l-2 border-l-waka-dark pl-5"
                      : "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50/50"
                  }`}
                >
                  {promo.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* SISI KANAN: Detail Paket Konten (8/12 Kolon) */}
          <section className="lg:col-span-8 space-y-8 animate-fadeIn">
            {/* Foto Utama Promo */}
            <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-neutral-50 shadow-sm border border-neutral-100">
              <img
                src={activePromo.image}
                alt={activePromo.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-101"
              />
            </div>

            {/* Header Konten Deskripsi */}
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-xl md:text-2xl font-serif tracking-wide text-neutral-900 uppercase font-normal">
                {activePromo.title}
              </h1>
              <p className="text-lg font-bold text-waka-dark tracking-wide font-sans">
                {activePromo.price}
              </p>
            </div>

            <div className="w-full h-[1px] bg-neutral-100" />

            {/* Bagian Inclusions */}
            <div className="space-y-3 text-xs md:text-sm text-neutral-600 font-light">
              <h3 className="font-bold text-neutral-800 uppercase tracking-wider text-[11px]">
                Inclusions:
              </h3>
              <ul className="space-y-2 pl-1">
                {activePromo.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-waka-dark mt-1 text-[8px] shrink-0">
                      •
                    </span>
                    <span className="leading-relaxed">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bagian Terms & Conditions */}
            <div className="space-y-3 text-xs md:text-sm text-neutral-600 font-light pt-2">
              <h3 className="font-bold text-neutral-800 uppercase tracking-wider text-[11px]">
                Terms & Conditions:
              </h3>
              <ul className="space-y-2 pl-1">
                {activePromo.terms.map((term, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-neutral-400 mt-1 text-[8px] shrink-0">
                      •
                    </span>
                    <span className="leading-relaxed text-neutral-500">
                      {term}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-[1px] bg-neutral-100" />

            {/* Link Aksi Reservasi Sekali Klik */}
            <div className="text-center lg:text-left text-xs md:text-sm pt-2">
              <span className="text-neutral-500 font-light">
                For reservation please click{" "}
              </span>
              <a
                href="#"
                className="text-waka-dark font-bold underline decoration-waka-medium underline-offset-4 hover:text-waka-medium transition-colors"
              >
                here
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* 4. Informasi Footer */}
      <Footer />
    </div>
  );
}
