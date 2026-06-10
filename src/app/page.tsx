"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertiesSlider from "@/components/PropertiesSlider";
import HeroBanner from "@/components/HeroBanner";
import SmoothScroll from "@/components/SmoothScroll";

export default function AboutUs() {
  const containerRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleThreshold = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(handleThreshold);
  }, []);

  // Scroll logic untuk Parallax Effect yang lebih dinamis
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Gambar 1 bergerak ke bawah, Gambar 2 bergerak ke atas (Counter-Movement)
  const imgParallaxLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["-15%", "15%"],
  );
  const imgParallaxRight = useTransform(
    scrollYProgress,
    [0, 1],
    ["15%", "-15%"],
  );

  // Data asli properti dari teks yang diberikan
  const properties = [
    {
      name: "WakaGangga",
      desc: "Beachfront 4* resort in Tabanan, Bali",
      src: "img/wakaGangga/hero1.jpg",
    },
    {
      name: "WakaSailing",
      desc: "Luxury catamaran operating sailing day trips to Nusa Lembongan Island",
      src: "img/wakaSailing/hero1.jpg",
    },
    {
      name: "WakaLandCruise",
      desc: "Day trips by classic Land Rover Defender or Toyota Land Cruiser to Jatiluwih, Kintamani, Ubud and Sangeh",
      src: "img/wakaLand/hero1.jpg",
    },
    {
      name: "WakaBeachClub",
      desc: "Jungut Batu beach, Lembongan Island. All day beachside dining 10 am – 10 pm.",
      src: "img/wakaBeach/hero1.jpg",
    },
    {
      name: "NusaBay Menjangan by WHM",
      desc: "Beachfront 3* charming eco-resort on Kotal Beach in the West Bali National Park",
      src: "img/nusaBay/hero1.jpg",
    },
    {
      name: "Bamboo Forest Restaurant by WHM",
      desc: "A unique restaurant in the middle of tropical rain forest, Jatiluwih, Tabanan, Bali. Open daily for lunch 11 am – 4 pm.",
      src: "img/bambooForest/hero1.jpg",
    },
    {
      name: "Pasir Putih Campsite",
      desc: "Kotal Beach, West Bali National Park",
      src: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1000",
    },
  ];

  return (
    <SmoothScroll>
      <div
        className={`fixed inset-0 z-100 bg-[#4a1525] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible scale-102"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-amber-200/60 block animate-pulse">
            Exclusive Estate
          </span>
          <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
            WAKA HOTEL & {""}
            <span className="italic font-normal text-amber-100">RESORTS</span>
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-amber-400 w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#fcfcfb] text-neutral-900 font-sans antialiased selection:bg-[#4a1525]/10 overflow-x-hidden">
        <Header />

        {/* 1. HERO BANNER */}
        <section className="relative h-[60vh] w-full bg-neutral-950 flex items-center overflow-hidden">
          <HeroBanner />
        </section>

        {/* 2. ABOUT US CONTENT */}
        <section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          <div className="md:col-span-5 space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#4a1525] uppercase block">
              Introduction
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-neutral-900 tracking-wide">
              Waka Group
            </h2>
            <div className="w-12 h-[1px] bg-[#4a1525]/30 pt-2" />
          </div>
          <div className="md:col-span-7 text-xs md:text-sm text-neutral-500 font-light leading-relaxed space-y-5">
            <p>
              Uniquely Balinese, Waka Hotels & Resorts and WHM are headed by the
              former Director of Oberoi Hotels & Resorts Indonesia, Kamal K.
              Kaul, the group’s President & CEO. Waka Group is owned by three
              Balinese brothers, who each bring a unique talent to the group.
            </p>
            <p>
              The two resorts operated by Waka Hotels & Resorts are located in
              the west and north Bali away from the touristy and crowded parts
              of the island. Each resort blends in perfectly with its own
              unspoiled area of the island, offering unique vacation spots for
              the discerning visitors wishing to get away from the busy beaches
              of south Bali. This is in line with the group’s vision to grow
              within the home island of Bali and beyond with focus on off the
              beaten track locations surrounded by natural beauty, offering
              genuine Balinese hospitality.
            </p>
          </div>
        </section>

        {/* 3. PEMBARUAN: INTERACTIVE CAROUSEL SLIDER */}
        <section>
          <PropertiesSlider properties={properties} />
        </section>

        {/* 4. PEMBARUAN: PHILOSOPHY ASYMMETRICAL COUNTER-PARALLAX */}
        <section
          ref={containerRef}
          className="py-28 bg-white border-y border-neutral-200/60 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Side: Text Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#4a1525] uppercase block">
                  Philosophy
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide uppercase">
                  Our Core Values
                </h3>
              </div>
              <div className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed space-y-4">
                <p>
                  The Waka philosophy is based on a deep and enduring love for
                  the natural environment of Bali and the other islands of
                  Indonesia. From this comes a desire to give and to share the
                  essence of Bali with visitors from around the world. This
                  philosophy extends to preserving the environment, the ancient
                  arts and the world famous culture.
                </p>
                <p className="border-l-2 border-[#4a1525] pl-4 italic text-neutral-700 font-serif text-sm md:text-base bg-neutral-50/50 py-2 pr-2">
                  By land and sea and in their Resorts, Beach Clubs and
                  Excursions, Waka’s appeal is in its knowledge and strong ties
                  to the island they call home and a genuine wish to share it,
                  so that visitors will come to know it, to love it and to
                  cherish the memories of their visit.
                </p>
              </div>
            </div>

            {/* Right Side: Interactive Dual Canvas Layout */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 relative h-[480px] lg:h-[520px] items-center">
              {/* Left Column Image Canvas - Moves Downward */}
              <div className="relative w-full h-[90%] overflow-hidden border border-neutral-200/30 shadow-xs bg-neutral-100 self-end group rounded-xs">
                <motion.img
                  style={{ y: imgParallaxLeft }}
                  src="img/wakaSailing/hero3.jpg"
                  alt="Waka Nature Preservation"
                  className="absolute inset-x-0 -top-[20%] h-[140%] w-full object-cover transition-filter duration-500 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Right Column Image Canvas - Moves Upward */}
              <div className="relative w-full h-[90%] overflow-hidden border border-neutral-200/30 shadow-xs bg-neutral-100 self-start group rounded-xs">
                <motion.img
                  style={{ y: imgParallaxRight }}
                  src="img/wakaGangga/hero2.jpg"
                  alt="Waka Island Culture"
                  className="absolute inset-x-0 -top-[20%] h-[140%] w-full object-cover transition-filter duration-500 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. MANAGEMENT SECTION */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center space-y-2 mb-20">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#4a1525] uppercase block">
              Management Team
            </span>
            <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-neutral-900 font-light uppercase">
              Leadership Profiles
            </h2>
            <div className="w-12 h-[1px] bg-[#4a1525]/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 text-left items-start">
            {/* Kamal K. Kaul */}
            <div className="space-y-4 border-l border-neutral-200 pl-6 md:pl-8 relative group">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-light text-neutral-900">
                  Kamal K. Kaul
                </h3>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#4a1525] font-bold block">
                  Managing Director & CEO — WAKA HOTELS & RESORTS
                </span>
              </div>
              <div className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed space-y-3">
                <p>
                  Having acquired a Bachelor of Science degree and a Diploma in
                  Business Administration, Kamal K. Kaul graduated from the
                  renowned Oberoi School of Hotel Management in 1972 with a
                  Diploma in Hotel Management. He attended the prestigious
                  Cornell University, Ithaca, USA Summer School of Hotel
                  Administration in 1976 and the Advanced Management Program in
                  1992.
                </p>
                <p>
                  His over 46 years experience in managing and developing
                  international branded 5 Star Hotels & Resorts covered
                  properties in Bali, Lombok, Kathmandu, Mauritius, Mumbai & New
                  Delhi, He has been based in Bali for over 34 years, 26 years
                  as General Manager of the legendary resort The Oberoi Bali.
                </p>
                <p>
                  In 2012 PT WHM Indonesia was incorporated by his hotel
                  management and consultancy company – PT K2 Consulting in a
                  joint venture with the Waka Group to manage and operate “Waka
                  and NusaBay” branded hotels, resorts, ocean cruisers and land
                  cruisers. As Managing Director & CEO Officer of Waka Hotels
                  and Results, Kamal Kaul oversees the group’s overall
                  operations and development.
                </p>
              </div>
            </div>

            {/* Sintya Karita */}
            <div className="space-y-4 border-l border-neutral-200 pl-6 md:pl-8 relative group">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-light text-neutral-900">
                  Sintya Karita
                </h3>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#4a1525] font-bold block">
                  Director of Finance — WAKA HOTELS & RESORTS
                </span>
              </div>
              <div className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed space-y-3">
                <p>
                  Sintya is holder of a Bachelor of Economics Degree and has
                  also completed a one year course in Accounting Profession from
                  Udayana University Bali. She has 9 years working experience in
                  Accounting and Financial Management.
                </p>
                <p>
                  Sintya joined the company in 2012 as Personal Assistant to
                  President & Chief Executive Officer.
                </p>
                <p>
                  Since 2014 as Assistant Financial Controller Waka Hotels &
                  Resorts, she oversees and supervises the Finance Division of
                  the company and coordinates financial resources at the
                  corporate office and all operating units of the group :
                  WakaGangga, WakaSailing, WakaLandCruise, WakaBeachClub,
                  NusaBay Menjangan by WHM, Bamboo Forest Restaurant by WHM and
                  Pasir Putih Campsite, Kotal Beach, West Bali National Park.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. COHESIVE CONTACT US SECTION */}
        <section className="bg-white border-t border-neutral-200/60 py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#4a1525] uppercase block">
                  Contact Us
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide">
                  Get In Touch <br />
                  With Our Office
                </h3>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-100 font-light text-xs text-neutral-600">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider block">
                    Address
                  </span>
                  <p className="leading-relaxed">
                    PT WHM Indonesia, Muka Corporate Desk, Bali, Indonesia
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider block">
                      Telephone
                    </span>
                    <p className="font-mono text-neutral-800 font-medium">
                      +62 361 730 840
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider block">
                      Email
                    </span>
                    <p className="font-mono text-neutral-800 font-medium">
                      info@wakahotels.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 w-full bg-[#fcfcfb] p-8 md:p-10 border border-neutral-200/50 rounded-xs">
              <form className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-neutral-200 bg-transparent py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#4a1525] font-light transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border-b border-neutral-200 bg-transparent py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#4a1525] font-light transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-neutral-200 bg-transparent py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#4a1525] font-light transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-neutral-200 bg-transparent py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#4a1525] font-light transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#4a1525] text-white text-[10px] font-mono uppercase tracking-[0.2em] px-8 py-4 rounded-2xs hover:bg-[#4a1525] transition-colors duration-300 cursor-pointer w-full md:w-auto text-center"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer
                  title="Waka Hotel & Resorts"
                  subtitle=""
                  backgroundColor="bg-[#4a1525]"
                  copyrightName="Waka Hotel & Resorts"
                />
      </div>
    </SmoothScroll>
  );
}
