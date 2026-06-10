"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function BambooForestRestaurantPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const IMAGES = [
    "img/bambooForest/hero1.jpg", // Contoh gambar 3
    "img/bambooForest/hero2.jpg", // Contoh gambar 3
    "img/bambooForest/hero3.jpg", // Contoh gambar 3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Ganti angka 5000 (5 detik) sesuai keinginan

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({
      x: (clientX - window.innerWidth / 2) * 0.015,
      y: (clientY - window.innerHeight / 2) * 0.015,
    });
  };

  // Efek Simulasi Preloader Mewah Khas WHM Resorts
  useEffect(() => {
    const handleThreshold = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(handleThreshold);
  }, []);

  // Data Menu Kuliner Premium
  const culinaryMenus = [
    {
      category: "Lunch Exploration",
      title: "Traditional Megibung",
      price: "IDR 350K",
      desc: "An authentic Balinese sharing feast served on traditional platters, highlighting slow-roasted heritage meats, locally foraged jungle ferns, and hand-ground sambals.",
    },
    {
      category: "Lunch Exploration",
      title: "Batukaru Forest Barbecue",
      price: "IDR 280K",
      desc: "Fresh highland ingredients and locally sourced proteins grilled over aromatic bamboo charcoal, infused with wild lemongrass oil.",
    },
    {
      category: "Rainforest High Tea",
      title: "Artisanal Balinese Sweet Set",
      price: "IDR 150K",
      desc: "A curated collection of traditional lakeside delicacies, served alongside freshly harvested organic herbal infusions and wild mountain honey.",
    },
  ];

  // Data Gambar untuk Editorial Gallery Grid
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800",
      tag: "Architecture",
      title: "Sustainable Bamboo Pavilion",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
      tag: "Ambiance",
      title: "Mist-Shrouded Dining",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
      tag: "Gastronomy",
      title: "Highland Sourced Ingredients",
    },
    {
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800",
      tag: "Excursion",
      title: "The Sanctuary Overlook",
    },
  ];

  // Data Promo Kustom sebagai pengganti komponen PromoCards yang hilang
  const exclusiveOffers = [
    {
      tag: "Limited Venture",
      title: "Rainforest Gastronomy Package",
      desc: "Combine a guided jungle walk on Mount Batukaru with our signatures traditional Megibung lunch experience.",
      action: "Reserve Package",
    },
    {
      tag: "Sunset Ritual",
      title: "Highland Tea & Wellness",
      desc: "Complimentary access to the rainforest deck yoga deck when booking our traditional Balinese High Tea set.",
      action: "Book Experience",
    },
  ];

  return (
    <>
      {/* A. ULTRA-LUXURY PRELOADER (RAINFOREST RESORT STYLE) */}
      <SmoothScroll>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-50 bg-[#828b4c] flex flex-col items-center justify-center"
          >
            <div className="text-center space-y-4">
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/80 block animate-pulse">
                Gastronomy Sanctuary
              </span>
              <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
                BAMBOO{" "}
                <span className="italic font-normal text-white">FOREST</span>
              </h2>
              <div className="w-24 h-[1px] bg-neutral-400/30 mx-auto relative overflow-hidden">
                <div className="absolute h-full bg-white w-1/2 animate-[shimmer_1.5s_infinite_linear]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* B. MAIN WEBSITE CONTENT LAYOUT */}
      <div
        className={`min-h-screen bg-[#fcfcfb] text-[#1f2421] font-sans antialiased selection:bg-[#828b4c]/10 selection:text-[#828b4c] overflow-x-hidden  transition-all duration-1000 ${
          isLoading ? "opacity-0 scale-98" : "opacity-100 scale-100"
        }`}
      >
        {/* HEADER / NAVBAR */}
        <Header />

        <main>
          {/* 1. HERO SECTION SINEMATIK */}
          <section
            className="relative w-full h-[75vh] bg-neutral-950 overflow-hidden flex items-center justify-center"
            onMouseMove={handleMouseMove}
          >
            {/* Container Gambar dengan Parallax Effect */}
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out scale-105"
              style={{
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              }}
            >
              {/* Map gambar agar proses transisi fade-in-out terasa smooth */}
              {IMAGES.map((img, index) => (
                <div
                  key={img}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? "opacity-65" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url('${img}')` }}
                />
              ))}
            </div>

            {/* Sisanya tetap persis sama seperti kode awalmu */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#828b4c]" />
            <div className="relative text-center z-10 space-y-4 px-4 max-w-4xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/90 font-mono block">
                Welcome to our unique Bamboo Forest Restaurant by WHM
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide leading-tight">
                Bamboo Forest Restaurant
              </h1>
            </div>
          </section>

          {/* 2. CULINARY INTRODUCTION STATEMENT */}
          <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center space-y-6">
            <span className="text-[9px] md:text-[10px] text-[#828b4c] font-sans tracking-[0.4em] uppercase font-bold block">
              Rainforest Dining Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 tracking-wide font-light leading-tight">
              A True Sensory Escape
            </h2>
            <div className="w-16 h-[1px] bg-[#828b4c]/30 mx-auto my-2" />

            <div className="space-y-6 text-xs md:text-sm text-neutral-500 font-light leading-relaxed font-serif pt-4">
              <p>
                Nestled within an undiscovered tropical rainforest, the dining
                pavilion blends organically into the protected mountain canopy.
                Here, the culinary journey highlights fresh ingredients sourced
                directly from surrounding highlands and traditional local
                estates.
              </p>
            </div>
          </section>

          {/* 3. EXCLUSIVE GASTRONOMY MENUS */}
          <section className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-200/40">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#828b4c] font-bold block">
                  The Culinary Art
                </span>
                <h4 className="text-2xl md:text-3xl font-serif font-light text-neutral-900">
                  Curated Highland Menus
                </h4>
              </div>

              {/* Menu List */}
              <div className="space-y-10 text-left">
                {culinaryMenus.map((menu, index) => (
                  <div
                    key={index}
                    className="group border-b border-neutral-100 pb-8 last:border-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono tracking-widest text-neutral-400 group-hover:text-[#828b4c] transition-colors uppercase block">
                          {menu.category}
                        </span>
                        <h5 className="font-serif text-base md:text-lg text-neutral-800 font-light group-hover:text-neutral-950 transition-colors">
                          {menu.title}
                        </h5>
                      </div>
                      <span className="font-mono text-xs md:text-sm font-medium text-[#828b4c] shrink-0">
                        {menu.price}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed mt-2 max-w-2xl">
                      {menu.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="bg-transparent text-neutral-800 border border-neutral-300 hover:border-neutral-900 text-[10px] font-mono uppercase tracking-widest text-center px-8 py-3.5 rounded-none transition-colors">
                  Download Full Menu (PDF)
                </button>
              </div>
            </div>
          </section>

          {/* 4. EDITORIAL PHOTO GALLERY GRID */}
          <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 border-t border-neutral-200/40">
            <div className="text-center space-y-2 mb-12">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#828b4c] font-bold block">
                Visual Sanctuary
              </span>
              <h4 className="text-2xl md:text-3xl font-serif font-light text-neutral-900">
                Media Gallery
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {galleryImages.map((img, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  key={index}
                  className={`relative overflow-hidden group rounded-2xs shadow-2xs bg-neutral-100 ${
                    index === 0 || index === 3
                      ? "md:col-span-7"
                      : "md:col-span-5"
                  } aspect-[16/10] md:aspect-auto md:h-[400px]`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-[8px] font-mono tracking-widest text-neutral-950 px-2.5 py-1 uppercase rounded-xs">
                      {img.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h5 className="font-serif text-lg text-white font-light tracking-wide">
                      {img.title}
                    </h5>
                    <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Explore Space ✦
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 5. OPERATIONAL DETAILS */}
          <section className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-neutral-200/40 text-xs md:text-sm text-neutral-500 font-light">
            <div className="md:col-span-4 space-y-4 border-l-2 border-[#828b4c]/30 pl-6 h-fit text-left">
              <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-[10px]">
                Hours of Operation
              </h4>
              <div className="space-y-3 font-serif">
                <div className="flex justify-between items-center py-1 border-b border-neutral-100">
                  <span className="text-neutral-400 font-sans text-xs">
                    Lunch Service
                  </span>
                  <span className="text-neutral-800 font-medium">
                    11:00 AM - 15:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-neutral-400 font-sans text-xs">
                    Afternoon Tea
                  </span>
                  <span className="text-neutral-800 font-medium">
                    15:00 PM - 18:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-[10px]">
                Culinary Highlights & Guest Benefits
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
                {[
                  "Immersive open-air dining structure built completely using sustainable wild bamboo.",
                  "Panoramic viewing deck over looking the preserved Mount Batukaru rainforest.",
                  "Curated farm-to-table menu utilizing organic produce from Jatiluwih farms.",
                  "Traditional Balinese high tea paired with locally harvested herbal infusions.",
                  "Dedicated shuttle pick-up points from selected Waka Hotels & Resorts properties.",
                ].map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs leading-relaxed text-neutral-500"
                  >
                    <span className="text-[#828b4c] text-xs mt-0.5 select-none">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. INLINE EXCLUSIVE OFFERS PANEL (PENGGANTI PROMOCARDS YANG ERROR) */}
          <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12 border-t border-neutral-200/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {exclusiveOffers.map((offer, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200/60 p-8 text-left space-y-4 rounded-2xs relative overflow-hidden group hover:border-neutral-400 transition-all duration-300"
                >
                  <span className="text-[8px] font-mono tracking-widest text-[#828b4c] uppercase font-bold block">
                    {offer.tag}
                  </span>
                  <h4 className="font-serif text-xl font-light text-neutral-900">
                    {offer.title}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {offer.desc}
                  </p>
                  <div className="pt-2">
                    <button className="text-[10px] font-mono uppercase tracking-widest border-b border-neutral-900 pb-1 text-neutral-900 hover:text-[#828b4c] hover:border-[#828b4c] transition-colors">
                      {offer.action} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* 7. MINIMALIST NEWSLETTER INVITATION SECTION */}
        <section className="bg-white py-24 text-center border-t border-b border-neutral-200/50 my-16">
          <div className="max-w-md mx-auto px-6 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-neutral-900 font-light tracking-wide">
                Sign up for updates
              </h2>
              <p className="text-xs text-neutral-400 font-light">
                Join our mailing list to receive exclusive culinary offers and
                sensory seasonal event invitations.
              </p>
            </div>
            <div className="flex items-center border-b border-neutral-300 bg-transparent py-2 transition-all duration-300 focus-within:border-neutral-900 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-2 py-1 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent font-light"
              />
              <button className="text-[#828b4c] hover:text-neutral-900 text-[10px] font-bold uppercase tracking-[0.2em] pl-4 transition-colors shrink-0 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* 8. CLEAN LUXURY AWARDS ACCREDITATIONS BADGES */}
        {/* <section className="bg-transparent pb-24">
          <div className="max-w-3xl mx-auto px-6 flex items-center justify-center gap-12 md:gap-20 opacity-40 hover:opacity-75 transition-all duration-500">
            <div className="h-14 md:h-16 flex items-center justify-center">
              <img
                src="https://www.tripadvisor.com/img/cdsi/img2/awards/v2/tchv4_yellow_bg_lrg-11900-2.gif"
                alt="TripAdvisor Excellence"
                className="h-full object-contain filter grayscale"
              />
            </div>
            <div className="h-10 px-5 flex items-center justify-center border border-neutral-300 rounded-none bg-white">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-neutral-500 font-sans uppercase">
                CHSE Certified
              </span>
            </div>
          </div>
        </section> */}

        {/* FOOTER */}
        <Footer
          title="Bamboo Forest Restaurant"
          subtitle=""
          backgroundColor="bg-[#828b4c]"
          copyrightName="Waka Hotel & Resorts"
        />
      </div>

      {/* GLOBAL CSS KEYFRAMES */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
      </SmoothScroll>
    </>
  );
}
