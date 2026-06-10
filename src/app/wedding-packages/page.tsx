"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ==========================================
// CUSTOM SCROLL REVEAL ENGINE
// ==========================================
function ScrollReveal({
  children,
  delay = "0ms",
}: {
  children: React.ReactNode;
  delay?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: delay }}
      className={`transform transition-all duration-[1200ms] ease-[cubic-bezier(0.215,0.610,0.355,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}

// ==========================================
// MAIN COMPONENT PAGE: WEDDING PACKAGES
// ==========================================
export default function WakaWeddingsUltraLuxuryPage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const lenisRef = useRef<any>(null);

  // 1. Preloader Mewah Bertema Deep Mulberry / Maroon
  useEffect(() => {
    const handleThreshold = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(handleThreshold);
  }, []);

  // 2. LENIS ULTRA SMOOTH SCROLL
  useEffect(() => {
    if (isLoading) return;

    let animationFrameId: number;

    const initLenis = async () => {
      const LenisModule = await import("lenis");
      const Lenis = LenisModule.default;

      const lenis = new Lenis({
        duration: 1.5,
        lerp: 0.06,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };

      animationFrameId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, [isLoading]);

  // 3. BACKGROUND HERO SLIDER AUTOMATIC PLAY
  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800",
      tagline: "Waka Boutique Celebrations",
      title: "An Ocean of Love",
    },
    {
      img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1800",
      tagline: "WakaGangga Beach Front",
      title: "Pristine Black Sands",
    },
    {
      img: "https://images.unsplash.com/photo-1544078751-58fed2b32c83?q=80&w=1800",
      tagline: "Sacred Balinese Blessings",
      title: "Timeless Traditions",
    },
  ];

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1,
      );
    }, 5500);
    return () => clearInterval(interval);
  }, [isLoading, heroSlides.length]);

  // DATA PAKET PERNIKAHAN (Berdasarkan dokumen Waka Wedding Package)
  const packages = [
    {
      id: "pkg-1",
      category: "standard",
      title: "WakaGangga Standard Wedding Package",
      subtitle: "Intimate Elegance By The Sea",
      price: "Inquire for Rates",
      inclusions: [
        "2 Nights accommodation in a One-Bedroom Pool Villa for the Bride & Groom",
        "Balinese traditional contemporary or Western elegant flower decoration styling",
        "Hand bouquet for the Bride and matching boutonniere for the Groom",
        "Civil registry or religious wedding celebrant services with certificate",
        "Live musical accompaniment during ceremony (Traditional Balinese Rindik or Solo Violin)",
        "Pre-wedding 60-minute relaxing body massage treatment at Waka Spa for the couple",
        "Romantic candlelight dinner setup inside the privacy of your Pool Villa",
      ],
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
    },
    {
      id: "pkg-2",
      category: "blessing",
      title: "Traditional Balinese Blessing Ceremony",
      subtitle: "Spiritual Harmony & Sacred Rituals",
      price: "Inquire for Rates",
      inclusions: [
        "Authentic purificatory ritual performed by a local Balinese Hindu priest (Pemangku)",
        "Elaborate traditional Balinese wedding costumes and ornate headpieces for the couple",
        "Traditional offering setups (Banten) and full floral arrangements around the venue",
        "Live traditional bamboo musical ensemble performance (Rindik)",
        "Commemorative blessing certificate provided by the resort management",
        "Tropical welcoming mocktail drinks for up to 20 invited guests",
      ],
      img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200",
    },
  ];

  const filteredPackages =
    activeTab === "all"
      ? packages
      : packages.filter((p) => p.category === activeTab);

  return (
    <>
      {/* A. ULTRA-LUXURY PRELOADER (Deep Mulberry / Burgundy Color) */}
      <div
        className={`fixed inset-0 z-50 bg-[#421d25] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          isLoading
            ? "opacity-100 visibility-visible"
            : "opacity-0 invisible scale-102"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-rose-200/60 block animate-pulse">
            Eternal Romance
          </span>
          <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
            WAKA{" "}
            <span className="italic font-normal text-rose-100/90">
              WEDDINGS
            </span>
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-rose-300 w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>

      {/* B. MAIN WEBSITE CONTENT LAYOUT */}
      <div
        className={`min-h-screen bg-[#fdfdfc] text-[#1f2421] font-sans antialiased selection:bg-[#421d25]/10 transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />

        {/* 1. IMMERSIVE BACKGROUND CAROUSEL / SLIDER */}
        <section className="relative h-[75vh] w-full bg-neutral-950 overflow-hidden flex items-center justify-center">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out transform ${
                currentHeroSlide === index
                  ? "opacity-45 scale-100 z-0"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}

          {/* Luxury Linear Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-[#fdfdfc] z-10" />

          {/* Hero Floating Content */}
          <div className="relative text-center space-y-4 px-4 max-w-4xl z-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-rose-100 font-medium block transition-all duration-500">
              {heroSlides[currentHeroSlide].tagline}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-[0.1em] text-white font-light leading-none uppercase">
              Wedding{" "}
              <span className="italic font-normal text-rose-200/90">
                Packages
              </span>
            </h1>
            <div className="w-16 h-[1px] bg-white/30 mx-auto my-3" />
            <p className="text-xs text-white/70 font-light tracking-wide max-w-md mx-auto leading-relaxed">
              Tailored, high-end celebrations framed beautifully by the
              theatrical landscape of Bali.
            </p>

            {/* Carousel Dots Controller */}
            <div className="flex justify-center space-x-2 pt-4">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroSlide(index)}
                  className={`h-[2px] transition-all duration-500 cursor-pointer border-none focus:outline-none ${
                    currentHeroSlide === index
                      ? "w-6 bg-rose-300"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 2. SUB-FILTER TAB ELEMENT (Deep Corporate Maroon Tone) */}
        <div className="bg-white border-b border-neutral-200 sticky top-[73px] z-30 shadow-sm">
          <div className="max-w-4xl mx-auto flex justify-center space-x-8 md:space-x-12 py-5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium">
            {[
              { id: "all", label: "All Celebrations" },
              { id: "standard", label: "Standard Packages" },
              { id: "blessing", label: "Sacred Blessings" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1 relative cursor-pointer bg-transparent border-none focus:outline-none tracking-[0.25em] transition-colors ${
                  activeTab === tab.id
                    ? "text-[#421d25] font-bold"
                    : "text-neutral-400 hover:text-neutral-800"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#421d25]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3. CORE PACKAGE GRID & EDITORIAL CONTENT */}
        <main className="max-w-7xl mx-auto px-6 lg:px-16 py-24 space-y-36">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#421d25] font-bold block">
                The Vow of Sophistication
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-800 tracking-wide">
                Where Natural Majesty Meets Curated Luxury
              </h2>
              <div className="w-12 h-[1px] bg-neutral-200 mx-auto pt-2" />
              <p className="text-xs md:text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
                Whether celebrating a grand Western marriage alignment or a
                spiritual local Balinese blessing covenant, our bespoke
                attention to detail transforms milestones into exquisite
                memories.
              </p>
            </div>
          </ScrollReveal>

          {/* WEDDING EDITORIAL LIST VIEW */}
          <div className="space-y-32">
            {filteredPackages.map((pkg, index) => (
              <ScrollReveal key={pkg.id} delay={`${index * 100}ms`}>
                <div
                  className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 border-b border-neutral-100 pb-28 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Photo Display Node */}
                  <div className="w-full lg:w-5/12 aspect-[4/5] overflow-hidden bg-neutral-100 shadow-xl relative group">
                    <div className="absolute inset-0 bg-[#421d25]/5 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                    <img
                      src={pkg.img}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-[2000ms] cubic-bezier(0.25, 1, 0.5, 1) transform scale-100 group-hover:scale-103"
                    />
                  </div>

                  {/* Complete Inclusions Node (Styled like the original letter asset) */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-6 text-left">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest font-mono text-rose-700 block">
                        {pkg.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 tracking-wide">
                        {pkg.title}
                      </h3>
                      <div className="text-xs font-serif italic text-neutral-400 font-medium pt-1">
                        Rates: {pkg.price}
                      </div>
                    </div>

                    <div className="w-16 h-[1px] bg-[#421d25]/20" />

                    {/* Detailed List Elements */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-700">
                        Package Inclusions Includes:
                      </h4>
                      <ul className="space-y-3 pl-0 list-none">
                        {pkg.inclusions.map((inclusion, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs md:text-sm text-neutral-500 font-light leading-relaxed"
                          >
                            <span className="text-[#421d25] font-serif text-[15px] leading-none select-none relative top-[-2px]">
                              &bull;
                            </span>
                            <span>{inclusion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <button className="bg-[#421d25] text-white text-[10px] uppercase tracking-[0.2em] font-bold px-7 py-3.5 hover:bg-[#5c2b35] transition-colors duration-300 shadow-md border-none cursor-pointer">
                        Request Private Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </main>

        {/* 4. NEWSLETTER FOOTER SYSTEM */}
        <section className="bg-white py-24 text-center border-t border-neutral-200/60">
          <ScrollReveal>
            <div className="max-w-md mx-auto px-6 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xs font-serif tracking-[0.3em] text-neutral-800 uppercase">
                  Subscribe for Romantic Updates
                </h3>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Join our exclusive registry to access bespoke event trends,
                  seasonal culinary reception menus, and property showcase
                  availability.
                </p>
              </div>
              <div className="flex items-center border-b border-neutral-300 bg-transparent py-2 transition-all duration-300 focus-within:border-[#421d25]">
                <input
                  type="email"
                  placeholder="Your professional email address"
                  className="w-full px-2 py-1 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent font-light"
                />
                <button className="text-[#421d25] hover:text-rose-700 text-[10px] font-bold uppercase tracking-widest pl-4 transition-colors shrink-0 cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </div>

      {/* GLOBAL SCROLL PERFORMANCE KEYFRAMES */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth !important;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </>
  );
}
