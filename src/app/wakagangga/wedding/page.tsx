"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Header from "@/components/Header";

// ==========================================
// 1. DATA DICTIONARIES (100% MATCH WITH TEXT)
// ==========================================
const inclusionsList = [
  "Beachfront Amphitheater Venue (Curfew until 23:00 hour)",
  "Ceremony floral arch & Matching bride bouquet",
  "Matching groom buttonhole & Flower petal aisle (local flowers)",
  "Petals for flower shower & Welcome board with flower arrangement",
  "Altar table & Centerpiece for reception tables with matching flowers",
  "Standard tables and banquet chairs with cover for up to 50 persons",
  "Wedding reception buffet for up to 50 persons",
  "One (1) hour free flow of 2 options of chilled juice and soft drinks",
  "Two (2) nights stay in a Villa with Pool Garden View for Bride & Groom",
  "One (1) Romantic Candle Lit Dinner for Bride & Groom in the villa",
  "One (1) time 60 minutes spa treatment for Bride & Groom at Waka Spa",
  "Event permit from the local community & Waka Gift wedding",
  "Two tiers wedding cake & English-speaking wedding celebrant",
  "Standard sound system (2 standing speakers + 2 microphones)",
  "Electricity coverage for up to 3000watt",
];

const optionA = {
  title: "OPTION A – BEACH BARBEQUE INDONESIAN MENU",
  img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
  salads: [
    "Lawar Daun Ubi (native salad of cassava leaf with long bean, ground beef)",
    "Lalapan Sayur (dice of tomatoes and cucumber, tomato sambal ulek)",
    "Ayam Dabu – Dabu (shredded chicken with shallot, tomato and soy dressing)",
    "Urap Sayur (mixed vegetable and toasted coconut salad)",
    "Gepang Tongseng (green turnip in coconut oil dressing)",
    "Gado – Gado (Poached vegetables served with warm peanut sauce)",
    "Daun Selada (mixed fresh green lettuce)",
  ],
  soup: "Soup Bendega (traditional seafood soup) & Assorted Bread (French Baguette, 2 kinds of Rolls)",
  grill: [
    "Pepes Ikan (market fish fillet with aromatics wrapped in banana leaf)",
    "Udang Bakar (grilled king prawns with Balinese seafood paste)",
    "Ikan Bakar Sambal Matah (marinated tuna and mahi – mahi fish steak)",
    "Ayam Panggang Mebasa Bali (grilled marinated chicken breast)",
    "Sate Ayam (chicken skewer, peanut sauce)",
    "Lulur Panggang (4oz lean mini steaks of beef tenderloin marinated in regional spices)",
  ],
  condiments:
    "Sambal Matah, Teriyaki Sauce, Sambal Ulek, Sambal Dabu-Dabu, Chili Soy, Peanut Sauce",
  claypot: [
    "Nasi Putih & Nasi Merah (steamed white and red rice)",
    "Bakmi Goreng (wok fried egg noodle, vegetables)",
    "Tahu Asam – Manis (sweet and sour tofu)",
    "Kare Sayur (mixed vegetables curry, root paste, coconut milk)",
    "Ayam Lada Hitam (stir fried chicken breast with black pepper sauce)",
  ],
  desserts:
    "Assorted Tropical Fruits, Nagasari (rice cake banana), Dadar Gulung (traditional pandan flavored crepes, coconut, grated palm sugar), Kolek Pisang (stewed banana in palm sugar), Bubur Injin (black rice pudding coconut milk)",
  sauces: "Vanilla sauce, orange sauce, dragon fruit sauce, palm syrup",
};

const optionB = {
  title: "OPTION B – BEACH BARBEQUE CONTINENTAL MENU",
  img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800",
  salads: [
    "Assorted Mixed Lettuces (honey mustard vinaigrette)",
    "Carrot and Apple Salad (sesame oil and toast sesame seeds)",
    "Pasta Salad (penne or fusilli with roasted red and green capsicum)",
    "Beetroot salad (poached beetroot, basil leaves, olive oil)",
    "Potato & Tuna Salad (baby potato, grilled tuna flakes, vegetables, capers)",
    "Antipasto (grilled capsicum, zucchini, onion, smoked ham, basil pesto, feta cheese)",
  ],
  dressings:
    "Mustard vinaigrette, Cocktail sauce, Italian dressing, Balsamic vinegar",
  soup: "Fishermen Soup (mixed vegetable and seafood minestrone) & Assorted Bread (French Baguette, bread rolls, multigrain bread)",
  grill: [
    "Prawn Skewers (marinated with herb and red chili)",
    "Calamari (marinated with herb, lemon juice and red chili)",
    "Market Fishes (grilled seabass, Tuna and Mahi-mahi fish fillet)",
    "Beef Tenderloin (marinated in cumin, hot English mustard)",
    "Chicken Medallions (marinated in Japanese teriyaki sauce)",
    "Pork Ribs with BBQ sauce",
  ],
  hotBuffet: [
    "Baked Potato Wedges (Cajun spice)",
    "Corn on The Cob (chunks of sweet corn basted in melted butter)",
    "Vegetables Stroganoff (braised carrot, long bean, zucchini, broccoli with cheese sauce)",
    "Couscous (olive oil, green and red capsicum)",
    "Nasi Putih (white steamed rice)",
  ],
  condiments:
    "BBQ Sauce, Teriyaki Sauce, Sambal Ulek, Sambal Dabu-Dabu, Chili Soy, Peanut Sauce",
  desserts:
    "Assorted Tropical Fruits, Chocolate Brownies (jackfruit), Apple Tart with brown sugar, Fresh Fruit Tartelette (vanilla syrup), Pineapple Pie (cinnamon, raisin)",
  sauces: "Vanilla sauce, orange sauce, dragon fruit sauce, palm syrup",
};

const canapes = {
  price: "IDR 345,000/net/dozen",
  cold: [
    "Tartlet of Watermelon, feta with toasted walnuts",
    "Vietnamese Fresh Vegetable Rolls, nam prik sauce",
    "Tuna flakes on Toasted Brioche",
    "Mini Italian open face with buffalo mozzarella, basil pesto",
  ],
  warm: [
    "Sate Lilit (minced fish skewers)",
    "Mushroom Quiche with Bacon Beat",
    "Mini Pizza (mushroom and mozzarella cheese)",
    "Mini Vegetable Spring Rolls (sweet soya sauce)",
    "Samosa with mint chutney",
  ],
  sweet: [
    "Tropical Fruit Tartlets",
    "Apple Tarts with orange coulis",
    "Pumpkin Cakes with palm syrup",
    "Carrot Cake with dragon fruit sauce",
  ],
};

const beveragePackages = [
  {
    name: "Non – Alcoholic Beverage",
    price: "225.500",
    extra: "84.000",
    items: "Iced tea/Iced Lemon tea, Juices, Soft drinks",
  },
  {
    name: "Non – Alcoholic Beverage I",
    price: "250.800",
    extra: "105.000",
    items: "Iced tea/Iced Lemon tea, Juices, Soft drinks, Mocktails",
  },
  {
    name: "Basic Bar",
    price: "368.500",
    extra: "168.000",
    items:
      "Iced tea/Iced Lemon tea, Juices, Soft drinks, Mocktails, Bintang Beer",
  },
  {
    name: "Basic Bar I",
    price: "452.100",
    extra: "210.000",
    items:
      "Iced tea/Iced Lemon tea, Juices, Soft drinks, Mocktails, House wine",
  },
  {
    name: "Basic Bar II",
    price: "553.300",
    extra: "252.000",
    items:
      "Iced tea/Iced Lemon tea, Juices, Soft drinks, Mocktails, Bintang Beer, House wine",
  },
  {
    name: "Standard Bar",
    price: "586.300",
    extra: "289.300",
    items:
      "Iced tea/Iced Lemon tea, Juices, Soft drinks, Mocktails, Bintang Beer, House wine, 4 selections of cocktails",
  },
];

export default function WakaGanggaPerfectWeddingPage() {
  const [activeMenuTab, setActiveMenuTab] = useState<"A" | "B">("A");

  // Smooth Scroll Integration using Lenis
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

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleReservation = () => {
    window.open("https://www.wakahotelsandresorts.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fcfcfb] text-[#1c1a19] font-sans antialiased selection:bg-[#2c4e65]/10 overflow-x-hidden">
      {/* HEADER SYSTEM */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-65">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600"
            alt="Waka Wedding"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfb] via-neutral-950/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-4">
          <span className="text-[10px] tracking-[0.5em] text-white/90 uppercase block font-mono">
            THE CELEBRATION OF LIFETIME LOVE
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-light tracking-[0.15em] uppercase leading-tight">
            Standard Wedding <br />
            <span className="italic font-normal">Package</span>
          </h1>
          <p className="text-xs text-white/85 tracking-widest uppercase">
            WakaGangga Oceanfront Amphitheater &bull; Bali
          </p>
        </div>
      </section>

      {/* FLOATING CONTROL CARD */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white border border-neutral-100 shadow-xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded">
          <div className="md:col-span-8 space-y-2 text-left">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#3e80a2]">
              Package Pricing
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 font-light tracking-wide">
              IDR 132.000.000{" "}
              <span className="text-xs font-sans text-neutral-400">nett</span>
            </h2>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Rate inclusive of 21% tax & service charge. Package valid
              exclusively for wedding periods in **December 2026**.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-2 w-full justify-end">
            <button
              onClick={handleReservation}
              className="bg-[#2c4e65] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-3.5 px-6 hover:bg-[#1b3445] transition-colors"
            >
              BOOK RESERVATION
            </button>
            <button className="bg-white border border-neutral-200 text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em] py-3.5 px-6 hover:bg-neutral-50 transition-colors">
              CUSTOMIZE EVENT
            </button>
          </div>
        </div>
      </section>

      {/* VISUAL IMAGE LOOKBOOK COLLAGE */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 text-left space-y-4">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#3e80a2] block">
              OCEANFRONT RECEPTION
            </span>
            <h3 className="font-serif text-3xl font-light text-neutral-900 uppercase tracking-wider">
              Dramatic Black Sand <br />
              <span className="italic font-normal">Luxury Environment</span>
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Other options i.e. **Tiffany chairs, Cross back chairs,
              entertainment, photo/videography, additional fairy lights, bulbs,
              lanterns**, and other extra services can be organized and
              customized elegantly with additional charges.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-12 gap-4 relative">
            <div className="col-span-7 aspect-[4/5] rounded overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1510076857177-7441008b4457?q=80&w=800"
                alt="Detail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-5 aspect-[3/4] rounded overflow-hidden shadow-md self-end translate-y-8">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600"
                alt="Detail 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE INCLUSIONS LIST */}
      <section className="bg-[#f5f4f0] py-24 mt-12 border-y border-neutral-200/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <span className="text-[#3e80a2] text-[10px] font-bold uppercase tracking-widest">
              FULL DETAILS
            </span>
            <h3 className="font-serif text-4xl font-light">
              What is <span className="italic">100% Included</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {inclusionsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 border border-neutral-200/60 rounded shadow-sm flex gap-4 items-start"
              >
                <span className="font-mono text-xs text-[#3e80a2] font-bold bg-neutral-100 px-2 py-0.5 rounded-sm">
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

      {/* GASTRONOMY SECTION (COMPLETE MENUS) */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-2 text-left">
              <span className="text-[#3e80a2] text-[10px] font-bold uppercase tracking-widest block">
                BEACH BARBEQUE BUFFET
              </span>
              <h3 className="font-serif text-3xl font-light">
                The Culinary <br />
                <span className="italic font-normal">Masterpieces</span>
              </h3>
              <p className="text-neutral-400 text-xs font-light">
                *Minimum order requirement of 20 persons.
              </p>
            </div>
            <div className="flex gap-6 border-b border-neutral-200 pb-px text-[10px] font-bold tracking-widest text-neutral-400">
              <button
                onClick={() => setActiveMenuTab("A")}
                className={`pb-3 relative ${activeMenuTab === "A" ? "text-neutral-900 font-bold" : ""}`}
              >
                INDONESIAN MENU
                {activeMenuTab === "A" && (
                  <motion.span
                    layoutId="menuLine"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2c4e65]"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveMenuTab("B")}
                className={`pb-3 relative ${activeMenuTab === "B" ? "text-neutral-900 font-bold" : ""}`}
              >
                CONTINENTAL MENU
                {activeMenuTab === "B" && (
                  <motion.span
                    layoutId="menuLine"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2c4e65]"
                  />
                )}
              </button>
            </div>
            <div className="aspect-[4/3] rounded overflow-hidden shadow-md">
              <img
                src={activeMenuTab === "A" ? optionA.img : optionB.img}
                className="w-full h-full object-cover"
                alt="Menu Display"
              />
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-neutral-100 p-6 md:p-10 shadow-sm rounded text-left text-xs space-y-6">
            <AnimatePresence mode="wait">
              {activeMenuTab === "A" ? (
                <motion.div
                  key="A"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h4 className="font-serif text-lg text-[#2c4e65] border-b pb-2 font-medium">
                    {optionA.title}
                  </h4>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-2">
                      Salads Selection
                    </h5>
                    <ul className="space-y-1.5 text-neutral-600 font-light">
                      {optionA.salads.map((s, i) => (
                        <li key={i}>&bull; {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Soup & Bread
                    </h5>
                    <p className="text-neutral-600 font-light">
                      {optionA.soup}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-2">
                      From the Grill
                    </h5>
                    <ul className="space-y-1.5 text-neutral-600 font-light">
                      {optionA.grill.map((g, i) => (
                        <li key={i}>&bull; {g}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Dips & Condiments
                    </h5>
                    <p className="text-neutral-600 font-light">
                      {optionA.condiments}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-2">
                      From the Clay Pot
                    </h5>
                    <ul className="space-y-1.5 text-neutral-600 font-light">
                      {optionA.claypot.map((c, i) => (
                        <li key={i}>&bull; {c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Desserts Sweet Collection
                    </h5>
                    <p className="text-neutral-600 font-light">
                      {optionA.desserts}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Available Dessert Sauces
                    </h5>
                    <p className="text-neutral-500 font-light italic">
                      {optionA.sauces}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="B"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h4 className="font-serif text-lg text-[#2c4e65] border-b pb-2 font-medium">
                    {optionB.title}
                  </h4>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-2">
                      Salads Selection
                    </h5>
                    <ul className="space-y-1.5 text-neutral-600 font-light">
                      {optionB.salads.map((s, i) => (
                        <li key={i}>&bull; {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Dressings Variety
                    </h5>
                    <p className="text-neutral-600 font-light">
                      {optionB.dressings}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Soup Station
                    </h5>
                    <p className="text-neutral-600 font-light">
                      {optionB.soup}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-2">
                      From the Grill Station
                    </h5>
                    <ul className="space-y-1.5 text-neutral-600 font-light">
                      {optionB.grill.map((g, i) => (
                        <li key={i}>&bull; {g}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-2">
                      From the Hot Buffet
                    </h5>
                    <ul className="space-y-1.5 text-neutral-600 font-light">
                      {optionB.hotBuffet.map((h, i) => (
                        <li key={i}>&bull; {h}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Dips & Condiments
                    </h5>
                    <p className="text-neutral-600 font-light">
                      {optionB.condiments}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Desserts
                    </h5>
                    <p className="text-neutral-600 font-light">
                      {optionB.desserts}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-[10px] text-[#3e80a2] mb-1">
                      Dessert Toppings
                    </h5>
                    <p className="text-neutral-500 font-light italic">
                      {optionB.sauces}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* COMPLETE CANAPE SELECTIONS SECTION */}
      <section className="bg-[#f0ede6] py-20 text-left border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#3e80a2] font-bold block">
                COCKTAIL HOUR ADDITIONS
              </span>
              <h3 className="font-serif text-3xl font-light">
                Canape Selections Portfolio
              </h3>
            </div>
            <span className="text-xl font-serif text-neutral-900 mt-2 md:mt-0 bg-white px-4 py-2 border rounded shadow-sm">
              {canapes.price}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-light">
            <div className="p-6 bg-white border border-neutral-200 rounded space-y-3">
              <h4 className="font-bold tracking-widest text-[#2c4e65] uppercase text-[10px] border-b pb-1.5">
                COLD BITES
              </h4>
              <ul className="space-y-2 text-neutral-600 leading-relaxed">
                {canapes.cold.map((item, idx) => (
                  <li key={idx}>&bull; {item}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white border border-neutral-200 rounded space-y-3">
              <h4 className="font-bold tracking-widest text-[#2c4e65] uppercase text-[10px] border-b pb-1.5">
                WARM BITES
              </h4>
              <ul className="space-y-2 text-neutral-600 leading-relaxed">
                {canapes.warm.map((item, idx) => (
                  <li key={idx}>&bull; {item}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white border border-neutral-200 rounded space-y-3">
              <h4 className="font-bold tracking-widest text-[#2c4e65] uppercase text-[10px] border-b pb-1.5">
                SWEET TEMPTATION
              </h4>
              <ul className="space-y-2 text-neutral-600 leading-relaxed">
                {canapes.sweet.map((item, idx) => (
                  <li key={idx}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TWO HOURS FREE FLOW BEVERAGES (COMPLETE CHART) */}
      <section className="bg-neutral-900 text-white py-24 text-left">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-[#3e80a2] text-[10px] font-bold uppercase tracking-widest block">
                LIQUID PACKAGES
              </span>
              <h3 className="font-serif text-3xl font-light">
                Two Hours Free Flow Bar Details
              </h3>
            </div>
            <div className="space-y-4">
              {beveragePackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="border-b border-white/10 pb-4 flex justify-between items-end text-xs"
                >
                  <div className="space-y-1 max-w-md">
                    <h4 className="font-serif text-base text-neutral-200 font-medium">
                      {pkg.name}
                    </h4>
                    <p className="text-[10px] text-neutral-400 font-light leading-relaxed">
                      {pkg.items}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-white font-mono font-medium block">
                      IDR {pkg.price}nett/pax
                    </span>
                    <span className="text-[9px] text-neutral-500 block">
                      Extra Hour: IDR {pkg.extra}nett/pax
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600"
                alt="Drink Gallery 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded overflow-hidden translate-y-6">
              <img
                src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600"
                alt="Drink Gallery 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORKAGE & VISUAL POLICY SAFETY NETS */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-left text-xs font-light">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="p-6 bg-white border rounded shadow-sm space-y-3">
            <h4 className="font-bold tracking-widest text-[#2c4e65] uppercase text-[10px] border-b pb-1">
              DRONE & VISUAL EFFECTS
            </h4>
            <p className="text-neutral-500 leading-relaxed">
              **Fireworks, other visual effects and drone usage** will need to
              be informed in advance to the resort in which the resort will
              initially review and assessed through legitimate vendor with
              prover handling before final approval.
            </p>
          </div>
          <div className="p-6 bg-white border rounded shadow-sm space-y-3">
            <h4 className="font-bold tracking-widest text-[#2c4e65] uppercase text-[10px] border-b pb-1">
              OUTSIDE CATERING FEES
            </h4>
            <p className="text-neutral-500 leading-relaxed">
              Outside catering vendors brought in for specialized dietary
              requirement operations will be strictly subject to a standard
              resort corkage fee.
            </p>
          </div>
          <div className="p-6 bg-white border rounded shadow-sm space-y-2">
            <h4 className="font-bold tracking-widest text-[#2c4e65] uppercase text-[10px] border-b pb-1">
              BEVERAGE CORKAGE FEES
            </h4>
            <div className="space-y-1 text-neutral-600 font-medium">
              <div className="flex justify-between">
                <span>&bull; Champagne</span>
                <span className="font-mono text-neutral-900">
                  USD 20 net/bottle
                </span>
              </div>
              <div className="flex justify-between">
                <span>&bull; Wine</span>
                <span className="font-mono text-neutral-900">
                  USD 15 net/bottle
                </span>
              </div>
              <div className="flex justify-between">
                <span>&bull; Spirit (750ml – 1000ml)</span>
                <span className="font-mono text-neutral-900">
                  USD 25 net/bottle
                </span>
              </div>
            </div>
            <p className="text-[10px] text-neutral-400 italic pt-1">
              *Spirit corkage includes mixers: soft drink, tonic water, soda
              water, and ice cubes.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSACTIONS & SECURE DEPOSITS GATEWAYS */}
      <section className="py-20 max-w-6xl mx-auto px-6 border-t bg-[#fcfcfb] text-left text-xs font-light">
        <div className="space-y-3 mb-10 text-center">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#3e80a2] block">
            GUARANTEE & POLICIES
          </span>
          <h3 className="font-serif text-2xl font-light uppercase text-neutral-900">
            Reservation Confirmation Deposits
          </h3>
          <p className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
            To secure your wedding date at WakaGangga Beachfront Amphitheater, a
            non-refundable deposit scheme along with a clear signed contract is
            required. The balance payment must be settled through our secure
            banking lines prior to the commencement of the event setup.
          </p>
        </div>
      </section>
    </div>
  );
}
