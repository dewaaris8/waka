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

interface DiningTabProps {
  setLightboxImage: (img: string) => void;
}

export default function DiningTab({ setLightboxImage }: DiningTabProps) {
  const diningExperience = {
    name: "Waka Bar & Restaurant",
    tagline: "Oceanfront Culinary Journey",
    description:
      "Waka Bar & Restaurant overlooks the black sand beach and the deep blue ocean. Western and traditional Indonesian dishes offer guests a range of delicious flavors to suit all kinds of palates. From formal dinners to casual lunches, room service and pool terrace dining, the atmosphere at WakaGangga allows guests the freedom to choose from a wide variety of options.",
    heroImage: "img/wakaGangga/resto1.jpg",
    menuLink: "https://drive.google.com/your-menu-link-here", // Ganti dengan link Google Drive menu Anda
    ambianceImages: [
      "img/wakaGangga/resto2.jpg",
      "img/wakaGangga/resto3.jpg",
      "img/wakaGangga/resto4.jpg",
    ],
    highlights: [
      {
        title: "Traditional Indonesian Specialties",
        description:
          "A refined celebration of local heritage herbs and premium coastal catches wrapped in classic Balinese presentation.",
      },
      {
        title: "International & Western Fare",
        description:
          "Finely crafted modern continental staples curated by our team to bring familiar artisanal tastes by the ocean.",
      },
    ],
    services: [
      {
        name: "Oceanfront Casual Lunches",
        details:
          "Al-fresco lunch setup accompanied by the crisp whispers of the Indian Ocean breeze.",
      },
      {
        name: "Curated Formal Dinners",
        details:
          "Elegant evening candlelit culinary courses perfect for marking timeless milestones.",
      },
      {
        name: "Pool Terrace Dining & Bar",
        details:
          "Handcrafted signature tropical mixology paired with exquisite sunset view side-bites.",
      },
      {
        name: "In-Villa Room Service",
        details:
          "Private, intimate, and personalized dining delivered directly into your sanctuary 24/7.",
      },
    ],
  };

  return (
    <div className="space-y-24 max-w-6xl mx-auto animate-[fadeIn_0.6s_ease-out_forwards]">
      {/* RESTAURANT INTRO EDITORIAL SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-neutral-200/50 pb-20">
        {/* Left Side: Editorial Visuals */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden group/img cursor-zoom-in">
            <img
              src={diningExperience.heroImage}
              alt={diningExperience.name}
              onClick={() => setLightboxImage(diningExperience.heroImage)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-103"
            />
          </div>

          {/* Ambiance Secondary Grid */}
          <div className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar snap-x snap-mandatory">
            {diningExperience.ambianceImages.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(imgSrc)}
                className="w-[30%] min-w-[130px] aspect-[4/3] bg-neutral-100 shrink-0 snap-start relative overflow-hidden cursor-zoom-in"
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

        {/* Right Side: Narrative Details */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-40">
          <div className="space-y-1">
            <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#556b2f] uppercase block">
              {diningExperience.tagline}
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl text-neutral-900 font-light tracking-wide">
              {diningExperience.name}
            </h3>
          </div>

          <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
            {diningExperience.description}
          </p>

          {/* EDITORIAL CTA BUTTON */}
          <div className="pt-2">
            <a
              href={diningExperience.menuLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[10px] uppercase tracking-widest font-mono font-bold bg-[#556b2f] text-white px-6 py-3 rounded-xs hover:bg-neutral-800 transition-colors duration-300 shadow-xs group"
            >
              <span>View Culinary Menu</span>
              <svg
                className="w-3 h-3 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-100">
            <Accordion title="Signature Flavors & Palates">
              <div className="space-y-4 bg-neutral-50 p-5 border border-neutral-200/60 rounded-2xs">
                {diningExperience.highlights.map((item, hIdx) => (
                  <div
                    key={hIdx}
                    className="space-y-1 last:border-0 last:pb-0 border-b border-neutral-200/40 pb-3"
                  >
                    <span className="text-[11px] font-serif font-medium text-neutral-800 block">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-neutral-500 font-light leading-relaxed block">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </Accordion>

            <Accordion
              title={`Dining Freedom Options (${diningExperience.services.length})`}
            >
              <ul className="space-y-3 text-[11px] font-light pl-1">
                {diningExperience.services.map((service, sIdx) => (
                  <li
                    key={sIdx}
                    className="space-y-0.5 py-0.5 border-b border-neutral-100 last:border-none"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#556b2f]/60 shrink-0" />
                      <span className="font-medium text-neutral-700">
                        {service.name}
                      </span>
                    </div>
                    <p className="text-neutral-500 pl-3 italic">
                      {service.details}
                    </p>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
