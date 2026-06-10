"use client";

import React from "react";
import { motion } from "framer-motion";

// ==========================================
// DATA DICTIONARIES (100% MATCH WITH MENJANGAN TEXT)
// ==========================================
const menjanganInclusions = [
  "Exclusive Wedding Venue Rental",
  "Sound System @ 3000watt + Professional Musician and Musical Instrument",
  "Standard Wedding Decorations: 1 set Wedding Arch & Altar Table decorated",
  "Elegant Standing Flowers, Aisle Markers & Petal Path",
  "2 pcs Traditional Balinese Flags in White",
  "Fresh Flower Confetti for up to 15 Pax",
  "Exquisite Hand Bouquet for Bride & Boutonniere for Groom",
  "Wedding Celebrant (English / Indonesian speaking)",
  "Couple’s Wedding Toast – 2 Glasses of White/Pink Sparkling Local Wine",
  "Official Commemorative Wedding Certificate",
  "One-time Romantic Candlelit Dinner for the Couple",
  "One-time 90 Minutes Blissful Spa Treatment for the Couple",
  "1 Night Luxury Stay in Ocean Lanai Cottage",
  "Professional Rain Stopper (Pawang Hujan) Service Included",
  "Return Boat Transfer: Labuan Lalang – NusaBay Menjangan for Invitees, Luggage, Wedding Decorations, and all associated Equipment.",
];

export default function NusaBayMenjanganWeddingPage() {
  const handleReservation = () => {
    window.open("https://www.nusabaymenjangan.com", "_blank"); // Integrasi link reservasi fungsional
  };

  return (
    <div className="min-h-screen bg-[#fcfcfb] text-[#1c1a19] font-sans antialiased selection:bg-[#2c4e65]/10 overflow-x-hidden">
      {/* 1. TOP NAVBAR BRANDING */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex flex-col text-left">
            <span className="font-serif text-base tracking-[0.2em] font-light text-neutral-900 uppercase">
              NusaBay{" "}
              <span className="font-normal italic text-neutral-700">
                Menjangan
              </span>
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">
            <span className="hover:text-neutral-900 cursor-pointer">
              The Resort
            </span>
            <span className="hover:text-neutral-900 cursor-pointer">
              Villas & Cottages
            </span>
            <span className="hover:text-neutral-900 cursor-pointer">
              Nature Sanctuary
            </span>
            <span className="text-[#3e80a2] cursor-pointer">Weddings</span>
            <span className="hover:text-neutral-900 cursor-pointer">
              Offers
            </span>
          </nav>
          <div className="text-[10px] uppercase tracking-widest border border-neutral-200 px-3 py-1.5 text-neutral-500 font-medium rounded-2xs">
            English ▾
          </div>
        </div>
      </header>

      <main>
        {/* 2. BRIGHT CINEMATIC HERO SECTION */}
        <section className="relative h-[70vh] w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1600"
              alt="NusaBay Menjangan Oceanfront Ceremony"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfb] via-neutral-950/10 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-4">
            <span className="text-[10px] tracking-[0.5em] text-white/95 uppercase block font-mono">
              EXCLUSIVE ISLAND WILDERNESS WEDDING
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-light tracking-[0.15em] uppercase leading-tight">
              Standard Wedding <br />
              <span className="italic font-normal">Package</span>
            </h1>
            <p className="text-xs text-white/90 tracking-widest uppercase">
              West Bali National Park &bull; Indonesia
            </p>
          </div>
        </section>

        {/* 3. PRIMARY CALL TO ACTION FLOATING CARD */}
        <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
          <div className="bg-white border border-neutral-100 shadow-xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-xs">
            <div className="md:col-span-8 space-y-2 text-left">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#3e80a2]">
                Intimate National Park Sanctuary
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 font-light tracking-wide">
                USD 3,200{" "}
                <span className="text-sm font-sans tracking-widest text-neutral-400 font-medium">
                  ++
                </span>
              </h2>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Experience an elite private beach celebration completely
                surrounded by untouched nature. Tailored precisely for intimate
                groups up to 30 curated attendees.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-2 w-full justify-end">
              <button
                onClick={handleReservation}
                className="bg-[#2c4e65] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-3.5 px-6 hover:bg-[#1b3445] transition-colors"
              >
                BOOK RESERVATION NOW
              </button>
              <button className="bg-white border border-neutral-200 text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em] py-3.5 px-6 hover:bg-neutral-50 transition-colors">
                DOWNLOAD ENQUIRY FORM
              </button>
            </div>
          </div>
        </section>

        {/* 4. LOOKBOOK COLLAGE GALLERY (RICH IMAGES VISUALS) */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 text-left space-y-4">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#3e80a2] block">
                LOGISTICAL EXCELLENCE
              </span>
              <h3 className="font-serif text-3xl font-light text-neutral-900 uppercase tracking-wider">
                Where Nature <br />
                <span className="italic font-normal">Meets Perfection</span>
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                To facilitate absolute seamless execution on your sacred day,
                our pricing includes comprehensive **return boat transfers from
                Labuan Lalang to NusaBay Menjangan** for all your invitees,
                luggage, wedding decorations, and technical hardware
                infrastructure.
              </p>
            </div>

            {/* Overlapping Images Gallery Grid */}
            <div className="md:col-span-7 grid grid-cols-12 gap-4 relative">
              <div className="col-span-7 aspect-[4/5] rounded-xs overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800"
                  alt="Menjangan Beach Decor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 aspect-[3/4] rounded-xs overflow-hidden shadow-md self-end translate-y-8">
                <img
                  src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600"
                  alt="Romantic Coastal Setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. IMMERSIVE INCLUSIONS LISTING GRID */}
        <section className="bg-[#f5f4f0] py-24 mt-12 border-y border-neutral-200/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 space-y-2">
              <span className="text-[#3e80a2] text-[10px] font-bold uppercase tracking-widest">
                PREMIUM ASSETS
              </span>
              <h3 className="font-serif text-4xl font-light">
                The Wedding <span className="italic">Inclusions Portfolio</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {menjanganInclusions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 border border-neutral-200/60 rounded-xs shadow-3xs flex gap-4 items-start"
                >
                  <span className="font-mono text-xs text-[#3e80a2] font-bold bg-neutral-100 px-2 py-0.5 rounded-3xs">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs text-neutral-700 font-light leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. EXTENDED IMAGES GALLERY SECTION */}
        <section className="py-20 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-xs overflow-hidden shadow-3xs">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ae6ce6db874?q=80&w=600"
                alt="Spa Ritual"
                className="w-full h-full object-cover hover:scale-105 duration-700 transition-transform"
              />
            </div>
            <div className="aspect-[4/3] rounded-xs overflow-hidden shadow-3xs">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600"
                alt="Cottage stay"
                className="w-full h-full object-cover hover:scale-105 duration-700 transition-transform"
              />
            </div>
            <div className="aspect-[4/3] rounded-xs overflow-hidden shadow-3xs">
              <img
                src="https://images.unsplash.com/photo-1535254973040-607b474cb80d?q=80&w=600"
                alt="Candlelit Dinner"
                className="w-full h-full object-cover hover:scale-105 duration-700 transition-transform"
              />
            </div>
          </div>
        </section>

        {/* 7. RESORT ENVIRONMENT & CORKAGE MANAGEMENT */}
        <section className="py-16 max-w-6xl mx-auto px-6 text-left border-t border-neutral-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#3e80a2] font-bold block">
                RESTAURANT & VENDORS
              </span>
              <h3 className="font-serif text-2xl font-light text-neutral-900 uppercase">
                Catering & Corkage Rules
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Outside catering vendors coordinated for specialized individual
                dietary requirements are welcomed and will be subject to a
                localized resort corkage fee structure.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 border border-neutral-200 bg-white rounded-xs space-y-3">
                <h4 className="font-bold tracking-wider text-neutral-800 uppercase text-[10px] border-b pb-1.5">
                  BEVERAGE CORKAGE SYSTEM
                </h4>
                <div className="space-y-1.5 text-neutral-600 font-light">
                  <div className="flex justify-between">
                    <span>&bull; Champagne</span>
                    <span className="font-mono text-neutral-900 font-medium">
                      USD 20 net/bottle
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>&bull; Wine</span>
                    <span className="font-mono text-neutral-900 font-medium">
                      USD 15 net/bottle
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>&bull; Spirit (750ml – 1000ml)</span>
                    <span className="font-mono text-neutral-900 font-medium">
                      USD 25 net/bottle
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-neutral-400 italic pt-1">
                  *Spirit context include premium mixer: soft drink, tonic
                  water, soda water, and ice cubes.
                </p>
              </div>

              <div className="p-5 border border-neutral-200 bg-white rounded-xs space-y-2">
                <h4 className="font-bold tracking-wider text-neutral-800 uppercase text-[10px] border-b pb-1.5">
                  AMENITY UPGRADES
                </h4>
                <p className="text-neutral-500 font-light leading-relaxed">
                  Additional elite styling accessories such as specialized live
                  entertainment, photo/videography packages, customized extra
                  fairy lights, modern bulbs, and ambient lanterns can be
                  seamlessly organized by our coordinators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINANCIAL TRANSACTION NETWORKS & GUARANTEES */}
        <section className="py-20 max-w-6xl mx-auto px-6 border-t bg-[#fcfcfb] text-left text-xs font-light">
          <div className="space-y-3 mb-12 text-center">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#3e80a2] block">
              BILLING ESCROW DEPOSITS
            </span>
            <h3 className="font-serif text-3xl font-light uppercase text-neutral-900">
              Reservation Confirmation & Guarantees
            </h3>
            <p className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
              To secure the wedding venue reservation, a **30% deposit** from
              the total invoice is required. The second installment of **35%**
              is due 2 months prior to the wedding, and the final balance
              payment of **35%** must be cleared exactly 1 month prior to your
              event date.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* BANK DETAILS BOX */}
            <div className="p-5 border border-neutral-200 bg-white rounded-xs space-y-1.5 lg:col-span-2">
              <span className="text-[9px] font-bold text-[#3e80a2] tracking-wider block mb-1">
                BANK ACCOUNT WIRE CHANNELS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-500">
                <div className="space-y-1">
                  <p>
                    Bank Name:{" "}
                    <span className="text-neutral-800 font-medium">
                      Bank Rakyat Indonesia (BRI)
                    </span>
                  </p>
                  <p>
                    Address:{" "}
                    <span className="text-neutral-800">
                      Jl. Dr. Kusuma Atmaja no. 1, Renon
                    </span>
                  </p>
                  <p>
                    Swift Code:{" "}
                    <span className="text-neutral-800 font-mono font-medium">
                      BRINIDJA
                    </span>
                  </p>
                </div>
                <div className="space-y-1">
                  <p>
                    Account Number:{" "}
                    <span className="text-neutral-900 font-mono font-bold">
                      0368-01-000-54-33-09
                    </span>
                  </p>
                  <p>
                    Beneficiary Name:{" "}
                    <span className="text-neutral-800 font-medium">
                      PT. Shorea Barito Wisata
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* CREDIT CARD & GATEWAY CAPACITIES */}
            <div className="p-5 border border-neutral-200 bg-white rounded-xs space-y-3">
              <span className="text-[9px] font-bold text-neutral-400 tracking-wider block mb-1">
                CREDIT CARD TRANSFERS
              </span>
              <p className="text-neutral-500 leading-relaxed">
                Credit card operations can be flawlessly executed via the
                private **DOKU link gateway** provided explicitly by NusaBay
                Menjangan coordinators.
              </p>
              <div className="bg-neutral-50 p-2.5 rounded-2xs text-[11px] text-neutral-400 font-light border space-y-0.5">
                <div>
                  &bull; Maximum venue capacity:{" "}
                  <span className="font-medium text-neutral-800">
                    30 Pax Max
                  </span>
                </div>
                <div>
                  &bull; Music curfew limitation:{" "}
                  <span className="font-medium text-neutral-800">
                    18:30 (6:30 PM)
                  </span>
                </div>
                <div className="italic text-[#3e80a2]">
                  &bull; *Please allow 3 working days for system clearance.
                </div>
              </div>
            </div>
          </div>

          {/* FINAL FUNCTIONAL RESERVATION CALL TO ACTION */}
          <div className="pt-16 text-center">
            <button
              onClick={handleReservation}
              className="bg-[#2c4e65] text-white font-bold text-[11px] uppercase tracking-[0.3em] py-4 px-12 hover:bg-[#1b3445] transition-all shadow-md"
            >
              FOR RESERVATION PLEASE CLICK HERE
            </button>
          </div>
        </section>
      </main>

      {/* 9. WAKA RESORT OCEAN BLUE FOOTER SYSTEM */}
      <footer className="bg-[#2c4e65] text-white/90 py-16 px-6 text-center text-xs font-light tracking-wide relative">
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif tracking-[0.25em] text-white font-light uppercase">
              NusaBay<span className="italic font-normal">Menjangan</span>
            </h2>
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              WEST BALI NATIONAL PARK &bull; PT SHOREA BARITO WISATA &bull;
              LUXURY ECO SANCTUARY
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-white/60">
            {[
              "ABOUT US",
              "CONSERVATION",
              "ACCOMMODATION",
              "CONTACT US",
              "SITEMAP",
              "PRESS RELEASES",
              "CAREERS",
            ].map((link) => (
              <span
                key={link}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {link}
              </span>
            ))}
          </div>
          <div className="w-full h-[1px] bg-white/10 my-4" />
          <p className="text-[10px] text-white/40 tracking-wide">
            &copy; 2026 NusaBay Menjangan Resort & Ecosystem. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
