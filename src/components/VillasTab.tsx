"use client";

import React, { useState } from "react";

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-neutral-200/70 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 focus:outline-none group cursor-pointer"
      >
        <span className="font-serif text-sm tracking-wide text-neutral-800 group-hover:text-[#556b2f] transition-colors duration-300">
          {title}
        </span>
        <span
          className={`text-xs transform transition-transform duration-500 text-neutral-400 ${isOpen ? "rotate-180 text-[#556b2f]" : ""}`}
        >
          {isOpen ? "✕" : "＋"}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pt-4 pb-2 opacity-90">{children}</div>
      </div>
    </div>
  );
}

interface VillasTabProps {
  setLightboxImage: (img: string) => void;
}

export default function VillasTab({ setLightboxImage }: VillasTabProps) {
  const [viewMode, setViewMode] = useState<"editorial" | "minimal">(
    "editorial",
  );

  const villasData = [
    {
      id: "waka-private-pool-villa",
      title: "Villa Garden View",
      tagline: "Ocean & Horizon Sanctuary",
      description:
        "Architecturally stunning villas with terraces open to the views of the sea or the mountains allows the lifestyle of the Balinese to continue within the confines of the resort. Each villa features a private swimming pool, perfect for serene relaxation.",
      heroImage:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800",
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800",
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800",
      ],
      specs: [
        { label: "Occupancy", value: "3 Adults or 2 Adults with 1 child" },
        { label: "BEDROOM", value: "One Double Bed & a Day Bed" },
        {
          label: "BATHROOM",
          value:
            "indoor and outdoor showers, bathtub, WC, double vanity counter and a walk-in wardrobe",
        },
        {
          label: "GAZEBO (BALE)",
          value:
            "A thatched Pavilion for dining and lounging in the Villa courtyard",
        },
        {
          label: "SIZE",
          value: "54 sqm interior space, 100 sqm footprint",
        },
      ],
      amenities: [
        "Refrigerated mini bar",
        "IDD Telephone",
        "Flat screen TV with satellite channels",
        "Docking station and sound system",
        "Individually controlled air-conditioning",
        "In-room electronic safety box",
        "Smoke detector and alarm system",
        "Bathrobes and slippers",
        "Custom-made toiletries",
        "Hair dryer",
        "Same day Laundry, dry-cleaning and pressing",
        "Complimentary in-room coffee & tea making facility",
        "Complimentary WiFi access",
        "Twice-daily Housekeeping service",
        "In room dining 11.30 am – 11.00 pm",
        "No smoking policy in the villas",
        "Baby sitting service is available on request. Advance reservation is required",
      ],
    },
    {
      id: "waka-private-pool-villa",
      title: "Villa with Pool Garden View",
      tagline: "Ocean & Horizon Sanctuary",
      description:
        "Architecturally stunning villas with terraces open to the views of the sea or the mountains allows the lifestyle of the Balinese to continue within the confines of the resort. Each villa features a private swimming pool, perfect for serene relaxation.",
      heroImage:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800",
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800",
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800",
      ],
      specs: [
        { label: "Occupancy", value: "3 Adults or 2 Adults with 1 child" },
        { label: "BEDROOM", value: "One Double Bed & a Day Bed" },
        {
          label: "BATHROOM",
          value:
            "indoor and outdoor showers, bathtub, WC, double vanity counter and a walk-in wardrobe",
        },
        {
          label: "GAZEBO (BALE)",
          value:
            "A thatched Pavilion for dining and lounging in the Villa courtyard",
        },
        {
          label: "SIZE",
          value: "96 sqm interior space, 200 sqm footprint",
        },
        {
          label: "SWIMMING POOL",
          value: "4 m x 7 m",
        },
      ],
      amenities: [
        "Refrigerated mini bar",
        "IDD Telephone",
        "Flat screen TV with satellite channels",
        "Docking station and sound system",
        "Individually controlled air-conditioning",
        "In-room electronic safety box",
        "Smoke detector and alarm system",
        "Bathrobes and slippers",
        "Custom-made toiletries",
        "Hair dryer",
        "Same day Laundry, dry-cleaning and pressing",
        "Complimentary in-room coffee & tea making facility",
        "Complimentary WiFi access",
        "Twice-daily Housekeeping service",
        "In room dining 11.30 am – 11.00 pm",
        "No smoking policy in the villas",
        "Baby sitting service is available on request. Advance reservation is required",
      ],
    },
    {
      id: "waka-private-pool-villa",
      title: "Villa with Pool Ocean View",
      tagline: "Ocean & Horizon Sanctuary",
      description:
        "Architecturally stunning villas with terraces open to the views of the sea or the mountains allows the lifestyle of the Balinese to continue within the confines of the resort. Each villa features a private swimming pool, perfect for serene relaxation.",
      heroImage:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800",
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800",
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800",
      ],
      specs: [
        { label: "Occupancy", value: "3 Adults or 2 Adults with 1 child" },
        { label: "BEDROOM", value: "One Double Bed & a Day Bed" },
        {
          label: "BATHROOM",
          value:
            "indoor and outdoor showers, bathtub, WC, double vanity counter and a walk-in wardrobe",
        },
        {
          label: "GAZEBO (BALE)",
          value:
            "A thatched Pavilion for dining and lounging in the Villa courtyard",
        },
        {
          label: "SIZE",
          value: "96 sqm interior space, 200 sqm footprint",
        },
        {
          label: "SWIMMING POOL",
          value: "4 m x 7 m",
        },
      ],
      amenities: [
        "Refrigerated mini bar",
        "IDD Telephone",
        "Flat screen TV with satellite channels",
        "Docking station and sound system",
        "Individually controlled air-conditioning",
        "In-room electronic safety box",
        "Smoke detector and alarm system",
        "Bathrobes and slippers",
        "Custom-made toiletries",
        "Hair dryer",
        "Same day Laundry, dry-cleaning and pressing",
        "Complimentary in-room coffee & tea making facility",
        "Complimentary WiFi access",
        "Twice-daily Housekeeping service",
        "In room dining 11.30 am – 11.00 pm",
        "No smoking policy in the villas",
        "Baby sitting service is available on request. Advance reservation is required",
      ],
    },
    {
      id: "waka-private-pool-villa",
      title: "Deluxe One Bedroom Villa Ocean View With Pool",
      tagline: "Ocean & Horizon Sanctuary",
      description:
        "Architecturally stunning villas with terraces open to the views of the sea or the mountains allows the lifestyle of the Balinese to continue within the confines of the resort. Each villa features a private swimming pool, perfect for serene relaxation.",
      heroImage:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800",
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800",
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800",
      ],
      specs: [
        { label: "Occupancy", value: "5 Adults or 3 Adults with 2 children" },
        {
          label: "BEDROOM",
          value:
            "One Double Bed and a Day Bed; Ensuite: Indoor and outdoor showers, bathtub, WC, double vanity counter and a walk-in wardrobe",
        },
        {
          label: "BATHROOM",
          value:
            "indoor and outdoor showers, bathtub, WC, double vanity counter and a walk-in wardrobe",
        },
        {
          label: "GAZEBO (BALE)",
          value:
            "A thatched Pavilion for dining and lounging in the Villa courtyard",
        },
        {
          label: "SIZE",
          value: "130 sqm interior space, 265 sqm footprint",
        },
        {
          label: "SWIMMING POOL",
          value: "4 m x 7 m",
        },
        {
          label: "LIVINGROOM",
          value: "Pull out sofa bed converts into one Double Bed",
        },
      ],
      amenities: [
        "Refrigerated mini bar",
        "IDD Telephone",
        "Flat screen TV with satellite channels",
        "Docking station and sound system",
        "Individually controlled air-conditioning",
        "In-room electronic safety box",
        "Smoke detector and alarm system",
        "Bathrobes and slippers",
        "Custom-made toiletries",
        "Hair dryer",
        "Same day Laundry, dry-cleaning and pressing",
        "Complimentary in-room coffee & tea making facility",
        "Complimentary WiFi access",
        "Twice-daily Housekeeping service",
        "In room dining 11.30 am – 11.00 pm",
        "No smoking policy in the villas",
        "Baby sitting service is available on request. Advance reservation is required",
      ],
    },
    {
      id: "waka-private-pool-villa",
      title: "Deluxe Two Bedroom Villa Ocean View with Pool",
      tagline: "Ocean & Horizon Sanctuary",
      description:
        "Architecturally stunning villas with terraces open to the views of the sea or the mountains allows the lifestyle of the Balinese to continue within the confines of the resort. Each villa features a private swimming pool, perfect for serene relaxation.",
      heroImage:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800",
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800",
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800",
      ],
      specs: [
        { label: "Occupancy", value: "5 Adults or 3 Adults with 2 children" },
        {
          label: "BEDROOM",
          value:
            "One Double Bed; Ensuite: Indoor and outdoor showers, bathtub, WC, double vanity counter and a walk-in wardrobe",
        },
        {
          label: "BATHROOM",
          value:
            "indoor and outdoor showers, bathtub, WC, double vanity counter and a walk-in wardrobe",
        },
        {
          label: "GAZEBO (BALE)",
          value:
            "A thatched Pavilion for dining and lounging in the Villa courtyard",
        },
        {
          label: "SIZE",
          value: "130 sqm interior space, 265 sqm footprint",
        },
        {
          label: "SECOND BEDROOM",
          value: "Two Single Beds; Ensuite: WC, shower and vanity",
        },
        {
          label: "SWIMMING POOL",
          value: "4 m x 7 m",
        },
      ],
      amenities: [
        "Refrigerated mini bar",
        "IDD Telephone",
        "Flat screen TV with satellite channels",
        "Docking station and sound system",
        "Individually controlled air-conditioning",
        "In-room electronic safety box",
        "Smoke detector and alarm system",
        "Bathrobes and slippers",
        "Custom-made toiletries",
        "Hair dryer",
        "Same day Laundry, dry-cleaning and pressing",
        "Complimentary in-room coffee & tea making facility",
        "Complimentary WiFi access",
        "Twice-daily Housekeeping service",
        "In room dining 11.30 am – 11.00 pm",
        "No smoking policy in the villas",
        "Baby sitting service is available on request. Advance reservation is required",
      ],
    },
    {
      id: "waka-private-pool-villa",
      title: "Villa Garden View",
      tagline: "Ocean & Horizon Sanctuary",
      description:
        "Architecturally stunning villas with terraces open to the views of the sea or the mountains allows the lifestyle of the Balinese to continue within the confines of the resort. Each villa features a private swimming pool, perfect for serene relaxation.",
      heroImage:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800",
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800",
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800",
      ],
      specs: [
        { label: "Occupancy", value: "3 Adults or 2 Adults with 1 child" },
        { label: "BEDROOM", value: "One Double Bed & a Day Bed" },
        {
          label: "BATHROOM",
          value:
            "indoor and outdoor showers, bathtub, WC, double vanity counter and a walk-in wardrobe",
        },
        {
          label: "GAZEBO (BALE)",
          value:
            "A thatched Pavilion for dining and lounging in the Villa courtyard",
        },
        {
          label: "SIZE",
          value: "54 sqm interior space, 100 sqm footprint",
        },
      ],
      amenities: [
        "Refrigerated mini bar",
        "IDD Telephone",
        "Flat screen TV with satellite channels",
        "Docking station and sound system",
        "Individually controlled air-conditioning",
        "In-room electronic safety box",
        "Smoke detector and alarm system",
        "Bathrobes and slippers",
        "Custom-made toiletries",
        "Hair dryer",
        "Same day Laundry, dry-cleaning and pressing",
        "Complimentary in-room coffee & tea making facility",
        "Complimentary WiFi access",
        "Twice-daily Housekeeping service",
        "In room dining 11.30 am – 11.00 pm",
        "No smoking policy in the villas",
        "Baby sitting service is available on request. Advance reservation is required",
      ],
    },
  ];

  return (
    <div className="space-y-24">
      {/* Layout Control */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-4 max-w-6xl mx-auto">
        <div className="space-y-0.5">
          <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono block">
            Layout Architecture
          </span>
          <p className="text-xs text-neutral-700 font-serif italic">
            Tailor your exploration experience
          </p>
        </div>
        <div className="flex gap-2 bg-neutral-100 p-1 rounded-sm">
          <button
            onClick={() => setViewMode("editorial")}
            className={`px-3 py-1 text-[10px] uppercase tracking-wider font-mono rounded-xs transition-all cursor-pointer ${viewMode === "editorial" ? "bg-white text-[#556b2f] shadow-xs font-bold" : "text-neutral-400 hover:text-neutral-700"}`}
          >
            Editorial Split
          </button>
          <button
            onClick={() => setViewMode("minimal")}
            className={`px-3 py-1 text-[10px] uppercase tracking-wider font-mono rounded-xs transition-all cursor-pointer ${viewMode === "minimal" ? "bg-white text-[#556b2f] shadow-xs font-bold" : "text-neutral-400 hover:text-neutral-700"}`}
          >
            Full Grid
          </button>
        </div>
      </div>

      {/* --- TAMBAHAN: Resort Overview & Statistical Summary --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Teks Penjelasan */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#556b2f] uppercase block">
            The Sanctuary Overview
          </span>
          <h2 className="font-serif text-2xl lg:text-3xl text-neutral-900 font-light tracking-wide leading-snug">
            Living Within the Confines of Nature
          </h2>
          <div className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed space-y-3">
            <p>
              Architecturally stunning villas with terraces open to the views of
              the sea or the mountains allows the lifestyle of the Balinese to
              continue within the confines of the resort. The villas feature
              garden terraces or private pools.
            </p>
            <p>
              Decorated in classic Waka style, a blend of traditional and rustic
              elements combine seamlessly with modern comfort. Stunning views of
              the emerald green paddy fields stretching endlessly towards
              majestic volcanic mountains.
            </p>
          </div>
        </div>

        {/* Grid Angka / Spesifikasi Resort */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-x-8 gap-y-10 border-t lg:border-t-0 lg:border-l border-neutral-200/70 pt-8 lg:pt-0 lg:pl-12">
          <div className="space-y-1">
            <span className="font-serif text-2xl lg:text-3xl font-light text-neutral-800 tracking-wide block">
              21{" "}
              <span className="text-sm tracking-normal text-neutral-500 font-sans font-light">
                Villas
              </span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block leading-tight">
              15 with private swimming pool
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-2xl lg:text-3xl font-light text-neutral-800 tracking-wide block">
              20,000{" "}
              <span className="text-sm tracking-normal text-neutral-500 font-sans font-light">
                Sqm
              </span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block leading-tight">
              Of Balinese tropical gardens
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-2xl lg:text-3xl font-light text-neutral-800 tracking-wide block">
              140{" "}
              <span className="text-sm tracking-normal text-neutral-500 font-sans font-light">
                Meters
              </span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block leading-tight">
              Beach frontage surrounded by rice fields
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-2xl lg:text-3xl font-light text-neutral-800 tracking-wide block">
              24{" "}
              <span className="text-sm tracking-normal text-neutral-500 font-sans font-light">
                Sqm
              </span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block leading-tight">
              Bathroom set in private garden (indoor & outdoor shower)
            </span>
          </div>
        </div>
      </div>
      {/* --- END OF TAMBAHAN --- */}

      {/* Grid / Editorial Content Container */}
      <div
        className={
          viewMode === "editorial"
            ? "space-y-32"
            : "grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        }
      >
        {villasData.map((villa) => (
          <div
            key={villa.id}
            className={`group/villa transition-all duration-700 ${
              viewMode === "editorial"
                ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-neutral-200/50 pb-24 last:border-0 last:pb-0"
                : "bg-white border border-neutral-200/50 p-6 rounded-xs shadow-xs space-y-6"
            }`}
          >
            {/* Left/Top: Images */}
            <div
              className={
                viewMode === "editorial"
                  ? "lg:col-span-7 space-y-4"
                  : "space-y-3"
              }
            >
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden group/img cursor-zoom-in">
                <img
                  src={villa.heroImage}
                  alt={villa.title}
                  onClick={() => setLightboxImage(villa.heroImage)}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-103"
                />
              </div>
              <div className="space-y-1">
                <div className="flex gap-3 overflow-x-auto pb-3 pt-1 no-scrollbar snap-x snap-mandatory">
                  {villa.gallery.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => setLightboxImage(imgSrc)}
                      className="w-[30%] min-w-[120px] aspect-[4/3] bg-neutral-100 shrink-0 snap-start relative overflow-hidden cursor-zoom-in"
                    >
                      <img
                        src={imgSrc}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right/Bottom: Details */}
            <div
              className={
                viewMode === "editorial"
                  ? "lg:col-span-5 space-y-6 lg:sticky lg:top-40"
                  : "space-y-4"
              }
            >
              <div className="space-y-1">
                <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#556b2f] uppercase block">
                  {villa.tagline}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-neutral-900 font-light tracking-wide">
                  {villa.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                {villa.description}
              </p>

              <div className="pt-2">
                <Accordion title="Architectural Specifications">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 bg-neutral-50 p-4 border border-neutral-200/60 rounded-2xs">
                    {villa.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <span className="text-[8px] font-mono uppercase tracking-wider text-neutral-400 block">
                          {spec.label}
                        </span>
                        <span className="text-[11px] font-medium text-neutral-700">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </Accordion>
                <Accordion
                  title={`In-Villa Services & Amenities (${villa.amenities.length})`}
                >
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] text-neutral-500 font-light pl-1">
                    {villa.amenities.map((amenity, aIdx) => (
                      <li
                        key={aIdx}
                        className="flex items-start gap-2 py-0.5 border-b border-neutral-100 last:border-none"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#556b2f]/60 mt-1.5 shrink-0" />
                        <span className="text-neutral-600">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
