"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

// ==========================================
// TYPES & DICTIONARY DATA
// ==========================================
type TabType =
  | "the-campsite"
  | "food-catering"
  | "activities"
  | "media-gallery";

interface SpecRowProps {
  label: string;
  value: string;
  isItalic?: boolean;
}

// Komponen Baris Tabel Spesifikasi Minimalis
const SpecRow: React.FC<SpecRowProps> = ({ label, value, isItalic }) => (
  <div className="flex justify-between items-baseline border-b border-neutral-100 py-3 text-[11px] md:text-xs">
    <span className="uppercase tracking-widest text-neutral-400 font-medium text-[10px]">
      {label}
    </span>
    <span
      className={`text-neutral-800 text-right font-light ${isItalic ? "italic font-normal" : ""}`}
    >
      {value}
    </span>
  </div>
);

export default function PasirPutihCampsiteUltraLuxuryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("the-campsite");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  const tabsConfig: { id: TabType; label: string }[] = [
    { id: "the-campsite", label: "THE CAMPSITE" },
    { id: "food-catering", label: "FOOD CATERING" },
    { id: "activities", label: "ACTIVITIES" },
    { id: "media-gallery", label: "MEDIA GALLERY" },
  ];

  useEffect(() => {
    const handleThreshold = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(handleThreshold);
  }, []);

  return (
    <SmoothScroll>
    <div className="min-h-screen bg-[#fcfcfb] text-neutral-900 font-sans antialiased selection:bg-[#5462a2]/10 overflow-x-hidden">
      <div
        className={`fixed inset-0 z-100 bg-[#5462a2] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible scale-105"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-white block animate-pulse">
            OUR CAMP
          </span>
          <h2 className="text-3xl font-serif font-light tracking-[0.2em] text-white">
            <span className="italic font-normal text-white">
              PASIR PUTIH CAMPSITE
            </span>
          </h2>
          <div className="w-24 h-[1px] bg-white/30 mx-auto relative overflow-hidden">
            <div
              className="absolute h-full bg-white w-1/2 animate-[shimmer_1.5s_infinite_linear]"
              style={{ transform: "translateX(-100%)" }}
            />
          </div>
        </div>
      </div>
      {/* 1. TOP CORPORATE NAVBAR */}
      <Header />

      <main>
        {/* 2. CINEMATIC HERO SECTION WITH SHIMMING GRADIENT */}

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
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#5462a2]" />
          <div className="relative text-center z-10 space-y-4 px-4 max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/90 font-mono block">
              THE ULTIMATE WILDERNESS ESCAPE
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide leading-tight">
              Pasir Putih Campsite
            </h1>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-16 mt-[-150px]  pb-16">
          <div className="bg-white border border-neutral-200/70 rounded-xs border-b-[#5462a2]  p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#5462a2] group-hover:h-full transition-all duration-700 ease-out" />

            <div className="space-y-4 max-w-xl text-left">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#5462a2]">
                THE ULTIMATE WILDERNESS ESCAPE
              </span>
              <h2 className="font-serif text-xl md:text-2xl text-neutral-900 font-light tracking-wide">
                Beachfront Camping in the Heart of West Bali
              </h2>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Experience an unforgettable beachfront camping adventure at
                Pasir Putih Campsite, nestled within West Bali National Park.
                Ideal for school outings and corporate team-building programs,
                the campsite offers comfortable weather-proof tents, stunning
                white-sand beaches, and immersive nature experiences in one of
                Bali’s most pristine natural environments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#book-daypass"
                className="bg-[#5462a2] text-white text-[11px] font-mono uppercase tracking-widest text-center px-8 py-4 rounded-2xs shadow-xs hover:bg-[#1a3140] transition-colors"
              >
                Book Now
              </motion.a>
            </div>
          </div>
        </section>

        {/* 4. EDITORIAL NAV TABS NAVIGATION (PERSIS SEPERTI GAMBAR) */}
        <nav className="w-full max-w-4xl mx-auto mt-20 border-b border-neutral-200/60">
          <div className="flex items-center justify-start md:justify-center gap-x-8 lg:gap-x-12 px-4 overflow-x-auto no-scrollbar pb-px text-[10px] font-bold tracking-[0.25em] text-neutral-400">
            {tabsConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 relative whitespace-nowrap transition-colors uppercase ${
                  activeTab === tab.id
                    ? "text-[#5462a2] font-bold"
                    : "hover:text-neutral-700"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="wakaTabLine"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5462a2]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* 5. INTERACTIVE TAB PANELS ENGINE */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              {/* PANEL 1: THE CAMPSITE */}
              {activeTab === "the-campsite" && (
                <div className="max-w-3xl mx-auto space-y-10 text-left py-4">
                  {/* 1. HERO IMAGE & TITLE SECTION */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#5462a2] block">
                        Wilderness Escape
                      </span>
                      <h3 className="font-serif text-3xl font-light text-neutral-900 tracking-wide uppercase">
                        Campsite
                      </h3>
                    </div>

                    <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden shadow-sm rounded-xs">
                      <img
                        src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200"
                        alt="Premium Campsite Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
                    </div>

                    <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-2xl">
                      Erected smoothly on weather-proof configurations, each
                      canvas platform structure is curated to maintain pristine
                      air preservation while respecting the West Bali National
                      Park zoning parameters.
                    </p>
                  </div>

                  {/* 2. CAPACITY SECTION */}
                  <div className="space-y-2 border-t border-neutral-100 pt-8">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
                      CAPACITY
                    </span>
                    <p className="text-sm font-serif font-light text-neutral-800 bg-gradient-to-r from-[#5462a2]/5 to-transparent p-4 border-l-2 border-[#5462a2]">
                      Minimum 10 persons, maximum 50 persons.
                    </p>
                  </div>

                  {/* 3. FACILITIES SECTION */}
                  <div className="space-y-4 border-t border-neutral-100 pt-8">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
                      FACILITIES
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
                      {[
                        "Separate showers and rest rooms for Males and Females under a detached hut",
                        "Wash basins",
                        "Shelter for gatherings",
                        "Camp fire",
                        "Drinking water station",
                        "Security hut",
                      ].map((facility, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-xs font-light text-neutral-600 py-0.5"
                        >
                          <span className="text-[#5462a2] text-[11px] translate-y-[2px] shrink-0">
                            ✦
                          </span>
                          <span className="leading-tight">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. PACKAGE SECTION */}
                  <div className="space-y-3 border-t border-neutral-100 pt-8">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
                      PACKAGE
                    </span>
                    <div className="bg-neutral-50/80 border border-neutral-100 p-6 space-y-4 rounded-xs">
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        Includes accommodation in a Tent, return boat transfers
                        from Labuan Lalang harbor, breakfast, lunch and dinner
                        freshly catered from NusaBay Menjangan resort.
                      </p>
                      <div className="w-full h-[1px] bg-neutral-200/60" />
                      <p className="text-[11px] text-[#5462a2] font-mono tracking-wider uppercase font-bold">
                        Price per person available on request.
                      </p>
                    </div>
                  </div>

                  {/* FOOTNOTE NOTIFICATION */}
                  <p className="text-[10px] text-neutral-400 italic font-light pt-4 leading-relaxed border-t border-neutral-100">
                    * Technical setups and structural layout guidelines are
                    structured inside premium conservation parameters. Wildlife
                    access protocols and harbor transfer schedules are strictly
                    managed.
                  </p>
                </div>
              )}

              {/* PANEL 2: FOOD CATERING */}
              {activeTab === "food-catering" && (
                <div className="max-w-3xl mx-auto space-y-10 text-left py-4">
                  {/* 1. HERO IMAGE & TITLE SECTION */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#5462a2] block">
                        Coastal Gourmet Dining
                      </span>
                      <h3 className="font-serif text-3xl font-light text-neutral-900 tracking-wide uppercase">
                        Food Catering
                      </h3>
                    </div>

                    <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden shadow-sm rounded-xs">
                      <img
                        src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200"
                        alt="Premium Beachside Catering Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                    </div>

                    <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-2xl">
                      The Campsite overnight stay includes the following fresh
                      meals catered from NusaBay Menjangan resort. Every single
                      ingredient is responsibly sourced to ensure an exceptional
                      beachfront dining experience.
                    </p>
                  </div>

                  {/* 2. LUNCH BUFFET SECTION */}
                  <div className="space-y-4 border-t border-neutral-100 pt-8">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] uppercase tracking-widest text-[#5462a2] font-bold">
                        01 &bull; LUNCH BUFFET
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                        Midday Session
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 bg-neutral-50/50 p-5 rounded-xs border border-neutral-100">
                      <div className="space-y-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-neutral-800 font-medium">
                          Salads & Breads
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          Assorted Mixed Lettuces with honey mustard
                          vinaigrette, Pasta Salad with roasted red & green
                          capsicum, and fresh Bread Rolls.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-neutral-800 font-medium">
                          From The Grill Station
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          Premium Chicken Medaillons and fresh Snapper fillets
                          grilled over open embers.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-neutral-800 font-medium">
                          From The Hot Buffet
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          Corn on the Cob (chunks of sweet corn basted with
                          melted butter & sea salt), stir-fried vegetables
                          (carrots, zucchini, capsicum, broccoli), and Nasi
                          Goreng (wok-fried rice).
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-neutral-800 font-medium">
                          Dips, Condiments & Desserts
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          BBQ sauce, cream butter sauce. Concluded with Assorted
                          Tropical Fruits and premium Carrot Cake.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. AFTERNOON REFRESHMENT SECTION */}
                  <div className="space-y-2 border-t border-neutral-100 pt-8">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
                      02 &bull; AFTERNOON REFRESHMENT
                    </span>
                    <p className="text-sm font-serif font-light text-neutral-800 bg-gradient-to-r from-[#5462a2]/5 to-transparent p-4 border-l-2 border-[#5462a2]">
                      Assorted Tropical Fruits &amp; Banana Cake.
                    </p>
                  </div>

                  {/* 4. DINNER BEACH BARBEQUE BUFFET SECTION */}
                  <div className="space-y-4 border-t border-neutral-100 pt-8">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] uppercase tracking-widest text-[#5462a2] font-bold">
                        03 &bull; DINNER BEACH BARBEQUE BUFFET
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                        Starlight Session
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 bg-neutral-50/50 p-5 rounded-xs border border-neutral-100">
                      <div className="space-y-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-neutral-800 font-medium">
                          Salads & Assorted Bread
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          Carrot and Apple Salad with sesame oil & toasted
                          sesame seeds, Potato salad with vegetables & capers,
                          Garlic bread, and dinner rolls.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-neutral-800 font-medium">
                          From The Grill Station
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          Chicken Medaillons perfectly marinated in Japanese
                          teriyaki sauce and tender Tuna steaks.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-neutral-800 font-medium">
                          From The Hot Buffet
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          Vegetable Skewers marinated with garlic & fresh mixed
                          herbs, Spaghetti pasta served with rich tomato sauce,
                          and Steamed rice.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-neutral-800 font-medium">
                          Dips, Condiments & Desserts
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          BBQ sauce, lemon butter sauce, authentic sambal
                          dabu-dabu, and chili soy. Concluded with signature
                          Chocolate Brownies.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FOOTNOTE NOTIFICATION */}
                  <p className="text-[10px] text-neutral-400 italic font-light pt-4 border-t border-neutral-100 leading-relaxed">
                    * All catering processes follow the strict health,
                    sanitation, and premium service standards of NusaBay
                    Menjangan Resort. Custom adjustments for dietary
                    requirements are available upon advanced notice.
                  </p>
                </div>
              )}

              {/* PANEL 3: ACTIVITIES */}
              {activeTab === "activities" && (
                <div className="max-w-3xl mx-auto space-y-10 text-left py-4">
                  {/* 1. HERO IMAGE & TITLE SECTION */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#5462a2] block">
                        Outdoor Experiences
                      </span>
                      <h3 className="font-serif text-3xl font-light text-neutral-900 tracking-wide uppercase">
                        Activities
                      </h3>
                    </div>

                    <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden shadow-sm rounded-xs">
                      <img
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200"
                        alt="Outdoor Activities Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                    </div>

                    <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-2xl">
                      The Pasir Putih Campsite at white sandy Kotal Beach, West
                      Bali National Park, offers a new experience in outdoor
                      activities in Bali. You can go cycling, trekking, and also
                      snorkeling and scuba diving with friends or family members
                      while enjoying the pristine natural surroundings of the
                      National Park.
                    </p>
                  </div>

                  {/* 2. CYCLING SECTION */}
                  <div className="space-y-3 border-t border-neutral-100 pt-8">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] uppercase tracking-widest text-[#5462a2] font-bold">
                        01 &bull; CYCLING
                      </span>
                      <span className="text-[9px] text-amber-600 font-mono uppercase bg-amber-50 px-2 py-0.5 rounded-xs">
                        On Request
                      </span>
                    </div>
                    <div className="bg-neutral-50/50 p-4 rounded-xs border border-neutral-100 space-y-2">
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        On request, Cycling with a guide can be arranged at
                        additional charge through the jungle to explore the
                        beauty of the unique Mangrove forest bordering Kotal
                        Beach.
                      </p>
                    </div>
                  </div>

                  {/* 3. TREKKING SECTION */}
                  <div className="space-y-3 border-t border-neutral-100 pt-8">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] uppercase tracking-widest text-[#5462a2] font-bold">
                        02 &bull; TREKKING
                      </span>
                      <span className="text-[9px] text-amber-600 font-mono uppercase bg-amber-50 px-2 py-0.5 rounded-xs">
                        On Request
                      </span>
                    </div>
                    <div className="bg-neutral-50/50 p-4 rounded-xs border border-neutral-100 space-y-2">
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        On request, Jungle Trekking with guide to Jalak Bali
                        Bird Centre can be arranged at extra charge.
                      </p>
                    </div>
                  </div>

                  {/* 4. SNORKELING SECTION */}
                  <div className="space-y-3 border-t border-neutral-100 pt-8">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] uppercase tracking-widest text-[#5462a2] font-bold">
                        03 &bull; SNORKELING
                      </span>
                      <span className="text-[9px] text-emerald-600 font-mono uppercase bg-emerald-50 px-2 py-0.5 rounded-xs">
                        Popular Activity
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-[#5462a2]/5 to-transparent p-4 border-l-2 border-[#5462a2] space-y-1">
                      <p className="text-xs text-neutral-700 font-light leading-relaxed">
                        Snorkeling is one of the most popular activities at the
                        campsite. The coral reef of Kotal Bay lies within the
                        protected West Bali National Park, and is teeming with
                        many colourful tropical fish including families of
                        “Nemos”.
                      </p>
                    </div>
                  </div>

                  {/* 5. SCUBA DIVING SECTION */}
                  <div className="space-y-3 border-t border-neutral-100 pt-8">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] uppercase tracking-widest text-[#5462a2] font-bold">
                        04 &bull; SCUBA DIVING
                      </span>
                      <span className="text-[9px] text-neutral-400 font-mono uppercase">
                        Highly Recommended
                      </span>
                    </div>
                    <div className="bg-neutral-50/50 p-4 rounded-xs border border-neutral-100 space-y-2">
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        A boat trip to Menjangan island just 15 minutes from the
                        campsite is highly recommended. Menjangan island is
                        renowned for excellent snorkeling and wall scuba diving.
                      </p>
                      <div className="w-full h-[1px] bg-neutral-200/50 my-1" />
                      <p className="text-[11px] text-neutral-500 font-light italic">
                        * The resort’s PADI certified Scuba Diving operator can
                        arrange the scuba diving and snorkeling trips to
                        Menjangan island at additional charge.
                      </p>
                    </div>
                  </div>

                  {/* FOOTNOTE NOTIFICATION */}
                  <p className="text-[10px] text-neutral-400 italic font-light pt-4 border-t border-neutral-100 leading-relaxed">
                    * All outdoor excursions are subject to weather conditions
                    and West Bali National Park preservation authority
                    regulations. Certified guides are mandatory for conservation
                    paths.
                  </p>
                </div>
              )}

              {/* PANEL 4: MEDIA GALLERY */}
              {activeTab === "media-gallery" && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-4">
                  {[
                    {
                      url: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=600",
                      title: "Forest Trekking Route",
                    },
                    {
                      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600",
                      title: "Menjangan Reef Diving",
                    },
                    {
                      url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=600",
                      title: "Coastal Bike Expedition",
                    },
                    {
                      url: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600",
                      title: "Overnight Weatherproof Tents",
                    },
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 shadow-3xs rounded-xs"
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" />
                      <p className="absolute bottom-4 left-4 right-4 text-left text-white font-serif text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
                        {img.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* 6. ULTRA LUXURY FOOTER BRANDING MAP ACCENT (WARNA BIRU LAUT ELEGAN DI REFERENSI GAMBAR) */}
      <Footer
          title="Pasir Putih Campsite"
          subtitle=""
          backgroundColor="bg-[#5462a2]"
          copyrightName="Waka Hotel & Resorts"
        />

      {/* GLOBAL CSS HIDDEN SCROLLBAR UTILITY */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
    </SmoothScroll>
  );
}
