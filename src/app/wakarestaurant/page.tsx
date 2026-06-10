"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function WakaRestaurantPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const IMAGES = [
    "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1600",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600", // Contoh gambar 2
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600", // Contoh gambar 3
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
  // Mengintegrasikan smooth scroll Lenis agar konsisten dengan halaman sebelumnya
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfb] text-[#1c1a19] font-sans antialiased selection:bg-[#828b4c] selection:text-[#828b4c] overflow-x-hidden">
      {/* 1. Header Global */}
      <Header />

      <div
        className={`fixed inset-0 z-100 bg-[#556b2f] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          isLoading
            ? "opacity-100 visibility-visible"
            : "opacity-0 invisible scale-102"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-white block animate-pulse">
            Oceanfront Culinary Escape
          </span>
          <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
            WAKA{" "}
            <span className="italic font-normal text-white">RESTAURANT</span>
          </h2>
          <div className="w-24 h-[1px] bg-neutral-300 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-[#3e80a2] w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>

      <section
        className="relative w-full h-[75vh] bg-neutral-950 overflow-hidden flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out scale-105"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
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

        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#828b4c]" />
        <div className="relative text-center z-10 space-y-4 px-4 max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/90 font-mono block">
            Oceanfront Culinary Escape
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide leading-tight">
            Waka Restaurant
          </h1>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* 4. Editorial Introduction Text Section */}
        <section className="pt-24 pb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[9px] md:text-[10px] text-[#828b4c] font-sans tracking-[0.4em] uppercase font-bold block">
            Beachfront Gastronomy
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 tracking-wide font-light uppercase leading-tight">
            Waka Bar & <br />
            <span className="italic font-normal lowercase">restaurant</span>
          </h2>
          <div className="space-y-6 text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto pt-4 text-center font-serif">
            <p>
              Indulge in a culinary journey like no other at Waka Bar &
              Restaurant, situated along the picturesque shores of Waka Gangga
              in Tabanan. Where the rhythmic melodies of the ocean harmonize
              with the exquisite flavors crafted by our talented chefs, inviting
              you to savor each moment amidst the tranquil beauty of the coastal
              paradise.
            </p>
          </div>
        </section>

        {/* EXTRA EDITORIAL LAYOUT: Menambahkan double image grid agar seirama dengan halaman wedding */}
        <section className="pb-20 max-w-5xl mx-auto grid grid-cols-12 gap-4 items-center opacity-90">
          <div className="col-span-7 aspect-[16/10] rounded overflow-hidden shadow-sm border border-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
              alt="Restaurant Ambience"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 aspect-[4/5] rounded overflow-hidden shadow-sm border border-neutral-100 translate-y-8">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600"
              alt="Signature Dish"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 5. Culinary Media Gallery Grid */}
        {/* ========================================================================= */}
        {/* 5. MINIMALIST HORIZONTAL GALLERY SLIDER                                  */}
        {/* ========================================================================= */}
        <section
          className="py-24 bg-white overflow-hidden"
          id="culinary-gallery"
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-0">
            {/* Header dengan Kontrol Navigasi Minimalis */}
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-1 text-left">
                <span className="text-[#828b4c] text-[9px] font-bold uppercase tracking-[0.4em] block">
                  Visual Portfolio
                </span>
                <h3 className="font-serif text-2xl font-light text-neutral-900 uppercase tracking-wide">
                  Our Culinary Gallery
                </h3>
              </div>

              {/* Tombol Navigasi Manual Slider (Gunakan ikon Chevron) */}
              <div className="flex gap-3 text-neutral-400 pb-1">
                <button className="p-1 hover:text-neutral-900 transition-colors cursor-pointer text-xs uppercase tracking-widest font-sans font-medium">
                  ← Prev
                </button>
                <span className="text-neutral-200">/</span>
                <button className="p-1 hover:text-neutral-900 transition-colors cursor-pointer text-xs uppercase tracking-widest font-sans font-medium">
                  Next →
                </button>
              </div>
            </div>

            {/* Slider Container (Mengalir keluar batas max-width di sebelah kanan untuk kesan lapang) */}
            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth -mr-6 pr-6 lg:-mr-32 lg:pr-32">
              {/* Slide 1 */}
              <div className="w-[300px] md:w-[420px] shrink-0 group cursor-pointer">
                <div className="aspect-[16/11] overflow-hidden bg-neutral-50 rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800"
                    alt="Seared Catch of the Day"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                </div>
                <div className="mt-3 flex justify-between items-baseline px-1">
                  <h4 className="font-serif text-sm font-light text-neutral-800">
                    Seared Catch of the Day
                  </h4>
                  <span className="text-[9px] font-sans tracking-wider text-neutral-400 uppercase">
                    Signature
                  </span>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="w-[300px] md:w-[420px] shrink-0 group cursor-pointer">
                <div className="aspect-[16/11] overflow-hidden bg-neutral-50 rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800"
                    alt="Sambal Matah Lobster"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                </div>
                <div className="mt-3 flex justify-between items-baseline px-1">
                  <h4 className="font-serif text-sm font-light text-neutral-800">
                    Sambal Matah Lobster
                  </h4>
                  <span className="text-[9px] font-sans tracking-wider text-neutral-400 uppercase">
                    Local Twist
                  </span>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="w-[300px] md:w-[420px] shrink-0 group cursor-pointer">
                <div className="aspect-[16/11] overflow-hidden bg-neutral-50 rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800"
                    alt="Tranquil Tide Cocktails"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                </div>
                <div className="mt-3 flex justify-between items-baseline px-1">
                  <h4 className="font-serif text-sm font-light text-neutral-800">
                    Tranquil Tide Cocktails
                  </h4>
                  <span className="text-[9px] font-sans tracking-wider text-neutral-400 uppercase">
                    Mixology
                  </span>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="w-[300px] md:w-[420px] shrink-0 group cursor-pointer">
                <div className="aspect-[16/11] overflow-hidden bg-neutral-50 rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800"
                    alt="Valrhona Chocolate Textures"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                </div>
                <div className="mt-3 flex justify-between items-baseline px-1">
                  <h4 className="font-serif text-sm font-light text-neutral-800">
                    Valrhona Chocolate Textures
                  </h4>
                  <span className="text-[9px] font-sans tracking-wider text-neutral-400 uppercase">
                    Dessert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. EDITORIAL QUICK FACTS & HOURS                                         */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-neutral-100 px-6 lg:px-0">
          {/* Opening Hours */}
          <div className="space-y-5 text-left">
            <h4 className="font-sans font-bold text-neutral-900 uppercase tracking-widest text-[10px]">
              Opening Hours
            </h4>
            <div className="space-y-4 font-serif text-sm">
              <div className="flex justify-between pb-2 border-b border-neutral-100">
                <span className="text-neutral-500">Breakfast</span>
                <span className="text-neutral-800 font-sans text-xs">
                  07:00 AM - 10:30 AM
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-neutral-100">
                <span className="text-neutral-500">All-Day Dining</span>
                <span className="text-neutral-800 font-sans text-xs">
                  11:00 AM - 23:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4 text-left">
            <h4 className="font-sans font-bold text-neutral-900 uppercase tracking-widest text-[10px]">
              Highlights
            </h4>
            <ul className="space-y-3 text-xs text-neutral-500 font-light font-serif leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#828b4c] font-sans">•</span> Beachfront
                dining platform overlooking the ocean.
              </li>
              <li className="flex gap-3">
                <span className="text-[#828b4c] font-sans">•</span> Seafood
                selections sourced daily from local fishermen.
              </li>
              <li className="flex gap-3">
                <span className="text-[#828b4c] font-sans">•</span> Curated wine
                list and signature tropical cocktails.
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 8. MINIMALIST NEWSLETTER                                                 */}
      {/* ========================================================================= */}
      <section className="bg-[#fcfcfb] py-24 text-center border-t border-neutral-100">
        <div className="max-w-md mx-auto px-6 space-y-4">
          <div className="space-y-1">
            <span className="text-[#828b4c] text-[9px] font-bold uppercase tracking-widest block">
              Newsletter
            </span>
            <h2 className="font-serif text-xl text-neutral-900 tracking-wide uppercase">
              Sign up for updates
            </h2>
          </div>
          <div className="flex items-center border-b border-neutral-200 py-2 max-w-sm mx-auto focus-within:border-neutral-800 transition-colors">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-2 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent font-light tracking-wide"
            />
            <button className="text-[#828b4c] hover:text-neutral-900 text-[10px] font-bold uppercase tracking-widest pl-4 transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* 10. Footer Global */}
      <Footer
          title="Waka Restaurant"
          subtitle=""
          backgroundColor="bg-[#828b4c]"
          copyrightName="Waka Hotel & Resorts"
        />
    </div>
  );
}
