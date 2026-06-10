// "use client";

// import React, { useState, useEffect, useRef } from "react";

// // ==========================================
// // SCROLL REVEAL ENGINE
// // ==========================================
// function ScrollReveal({
//   children,
//   delay = "0ms",
// }: {
//   children: React.ReactNode;
//   delay?: string;
// }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             if (domRef.current) observer.unobserve(domRef.current);
//           }
//         });
//       },
//       { threshold: 0.05 },
//     );
//     if (domRef.current) observer.observe(domRef.current);
//     return () => {
//       if (domRef.current) observer.unobserve(domRef.current);
//     };
//   }, []);

//   return (
//     <div
//       ref={domRef}
//       style={{ transitionDelay: delay }}
//       className={`transform transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       }`}
//     >
//       {children}
//     </div>
//   );
// }

// // ==========================================
// // COMPONENT EXPORT MAIN PAGE
// // ==========================================
// export default function WakaAboutUsLuxuryPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const lenisRef = useRef<any>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   // Smooth Scroll Inisialisasi
//   useEffect(() => {
//     if (isLoading) return;
//     let frameId: number;

//     const startLenis = async () => {
//       try {
//         const LenisObj = await import("lenis");
//         const lenisInstance = new LenisObj.default({
//           duration: 1.4,
//           lerp: 0.08,
//           smoothWheel: true,
//         });
//         lenisRef.current = lenisInstance;

//         const updateRaf = (time: number) => {
//           lenisInstance.raf(time);
//           frameId = requestAnimationFrame(updateRaf);
//         };
//         frameId = requestAnimationFrame(updateRaf);
//       } catch (err) {
//         console.warn("Smooth scroll fallback active");
//       }
//     };
//     startLenis();

//     return () => {
//       if (frameId) cancelAnimationFrame(frameId);
//       if (lenisRef.current) lenisRef.current.destroy();
//     };
//   }, [isLoading]);

//   // Data portofolio dari teks asli dikonversi menjadi galeri visual premium
//   const properties = [
//     {
//       title: "WakaGangga",
//       type: "Beachfront 4* Resort",
//       location: "Tabanan, Bali",
//       desc: "An enchanting ocean-facing sanctuary where rustic luxury meets the dramatic black sands of Tabanan.",
//       img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
//     },
//     {
//       title: "WakaSailing",
//       type: "Luxury Catamaran Cruise",
//       location: "Nusa Lembongan Island",
//       desc: "State-of-the-art day sailing trips across the deep blue waters to explore pristine island reefs.",
//       img: "https://images.unsplash.com/photo-1505080856163-267d49b30034?q=80&w=800",
//     },
//     {
//       title: "WakaLandCruise",
//       type: "Premium Off-Road Excursions",
//       location: "Jatiluwih, Kintamani, Ubud",
//       desc: "Day trips inside legendary classic Land Rover Defenders to uncover hidden volcanic valleys and villages.",
//       img: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=800",
//     },
//     {
//       title: "WakaBeachClub",
//       type: "Island Leisure Haven",
//       location: "Jungut Batu Beach",
//       desc: "All-day beachfront dining, ocean-gazing daybeds, and hand-crafted mixology beneath a grand Joglo pavilion.",
//       img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
//     },
//     {
//       title: "NusaBay Menjangan",
//       type: "Beachfront 3* Charming Eco Resort",
//       location: "West Bali National Park",
//       desc: "The only protected eco-retreat inside the national park reserve, framed by wild deer and white sands.",
//       img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
//     },
//     {
//       title: "Bamboo Forest Restaurant",
//       type: "Rainforest Dining Experience",
//       location: "Jatiluwih, Tabanan",
//       desc: "Open daily from 11 AM to 4 PM, serving volcanic organic harvests deep within an elevated jungle bamboo canopy.",
//       img: "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?q=80&w=800",
//     },
//     {
//       title: "Pasir Putih Campsite",
//       type: "Soft-Adventure Outpost",
//       location: "Kotal Beach, West Bali",
//       desc: "Weatherproof beachfront tents tailored for corporate team buildings and immersive nature exploration.",
//       img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800",
//     },
//   ];

//   return (
//     <>
//       {/* LOADER */}
//       <div
//         className={`fixed inset-0 z-50 bg-[#171412] flex items-center justify-center transition-all duration-700 ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//       >
//         <h2 className="text-white text-xs font-serif tracking-[0.4em] uppercase animate-pulse">
//           OUR PHILOSOPHY
//         </h2>
//       </div>

//       <div className="min-h-screen bg-[#fcfcfb] text-neutral-800 antialiased font-sans">
//         {/* LOGO BAR */}
//         <header className="bg-white border-b border-neutral-100 px-6 py-5 sticky top-0 z-50 backdrop-blur-md bg-white/95">
//           <div className="max-w-7xl mx-auto flex items-center justify-between">
//             <div className="flex flex-col text-left">
//               <span className="font-serif text-base tracking-[0.2em] font-light text-neutral-900">
//                 WAKĀ HOTELS & RESORTS
//               </span>
//               <span className="text-[8px] uppercase tracking-[0.4em] text-amber-800 font-bold -mt-0.5">
//                 Corporate Profile
//               </span>
//             </div>
//             <button className="bg-neutral-900 text-white text-[9px] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-neutral-800 transition-colors">
//               Discover More
//             </button>
//           </div>
//         </header>

//         {/* HERO SECTION CINEMATIC */}
//         <section className="relative h-[55vh] bg-neutral-950 flex items-center justify-center overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800"
//             alt="Waka Horizon"
//             className="absolute inset-0 w-full h-full object-cover opacity-40 scale-102"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fcfcfb]" />
//           <div className="relative text-center space-y-3 px-4 z-10">
//             <span className="text-[9px] uppercase tracking-[0.5em] text-white/80 block">
//               Uniquely Balinese
//             </span>
//             <h1 className="text-3xl md:text-5xl font-serif tracking-[0.15em] text-white font-light uppercase">
//               ABOUT <span className="italic text-neutral-300">WAKĀ</span>
//             </h1>
//             <div className="w-12 h-[1px] bg-white/40 mx-auto" />
//           </div>
//         </section>

//         {/* NARRATIVE PHILOSOPHY AREA */}
//         <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-12">
//           <ScrollReveal>
//             <div className="space-y-6">
//               <span className="text-[9px] uppercase tracking-[0.4em] text-amber-800 font-bold block">
//                 The Guardians of Heritage
//               </span>
//               <h2 className="text-xl md:text-2xl font-serif tracking-wide text-neutral-900 font-light max-w-2xl mx-auto leading-relaxed">
//                 &ldquo;Headed by former leaders of elite luxury hospitality,
//                 Waka Group is owned by three Balinese brothers, each bringing
//                 unique talent to the collective.&rdquo;
//               </h2>
//               <div className="w-8 h-[1px] bg-neutral-300 mx-auto" />
//             </div>
//           </ScrollReveal>

//           <ScrollReveal delay="150ms">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-xs text-neutral-500 font-light leading-relaxed">
//               <p>
//                 Uniquely Balinese, Waka Hotels & Resorts and WHM operate away
//                 from the touristy and crowded parts of the island. Each property
//                 blends in perfectly with its own unspoiled area of the
//                 destination, offering unique vacation spots for discerning
//                 visitors wishing to escape the busy city life.
//               </p>
//               <p>
//                 This aligns perfectly with the group&apos;s vision to grow
//                 organically within the home island of Bali and beyond, focusing
//                 entirely on off-the-beaten-track locations surrounded by
//                 pristine natural beauty, while offering genuine, authentic
//                 Balinese hospitality.
//               </p>
//             </div>
//           </ScrollReveal>
//         </section>

//         {/* PORTOFOLIO SECTIONS (Sub-brands) */}
//         <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-24 space-y-16">
//           <ScrollReveal>
//             <div className="text-center space-y-1">
//               <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block">
//                 The Collection
//               </span>
//               <h3 className="text-lg font-serif font-light uppercase tracking-widest text-neutral-900">
//                 Current Ecosystem Portfolio
//               </h3>
//             </div>
//           </ScrollReveal>

//           {/* Luxury Editorial Alternate Row Cards */}
//           <div className="space-y-12">
//             {properties.map((item, index) => (
//               <ScrollReveal key={index} delay={`${index * 50}ms`}>
//                 <div
//                   className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 border-b border-neutral-100 pb-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
//                 >
//                   {/* Photo Node */}
//                   <div className="w-full lg:w-1/2 aspect-[16/10] overflow-hidden bg-neutral-100 shadow-3xs group">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
//                     />
//                   </div>

//                   {/* Copywriting Node */}
//                   <div className="w-full lg:w-1/2 space-y-3 text-left">
//                     <div className="space-y-0.5">
//                       <span className="text-[8px] uppercase tracking-widest font-mono text-amber-800 block">
//                         {item.type}
//                       </span>
//                       <h4 className="font-serif text-lg text-neutral-900 font-light tracking-wide">
//                         {item.title}
//                       </h4>
//                       <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold">
//                         {item.location}
//                       </p>
//                     </div>
//                     <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-md">
//                       {item.desc}
//                     </p>
//                     <div className="pt-2">
//                       <span className="text-[9px] uppercase tracking-widest font-bold text-neutral-800 border-b border-neutral-800 pb-0.5 hover:text-amber-800 hover:border-amber-800 cursor-pointer transition-colors">
//                         Explore Reserve ›
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </section>

//         {/* COMPACT CLEAN FOOTER */}
//         <footer className="bg-[#473d35] text-white/70 py-12 px-6 text-center text-[10px] tracking-widest uppercase relative overflow-hidden">
//           <div className="max-w-4xl mx-auto space-y-6 relative z-10 font-light">
//             <div className="space-y-1">
//               <h2 className="text-base font-serif tracking-widest text-white">
//                 WAKĀ HOTELS & RESORTS
//               </h2>
//               <p className="text-[8px] text-white/40">
//                 Authentic Balinese Hospitality &bull; By WHM
//               </p>
//             </div>
//             <div className="w-12 h-[1px] bg-white/20 mx-auto" />
//             <p className="text-white/30 font-mono tracking-normal capitalize text-center">
//               &copy; 2026 Waka Hotels & Resorts. All Rights Reserved.
//             </p>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }
